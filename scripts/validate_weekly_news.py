#!/usr/bin/env python3
"""Validate docs/data/weekly-news.json for the static weekly news site."""
from __future__ import annotations

import json
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "docs" / "data" / "weekly-news.json"
REQUIRED_TOP = [
    "week", "coverage_start_kst", "coverage_end_kst", "last_updated_kst",
    "presentation_window_kst", "executive_summary", "deep_dives", "items",
]
REQUIRED_ITEM = [
    "id", "rank", "title_ko", "summary", "detail", "why_it_matters",
    "engineering_implication", "category", "tags", "region", "importance",
    "source_name", "source_url",
]
ALLOWED_IMPORTANCE = {"must-know", "high", "medium", "low"}


def is_probably_link(value: str) -> bool:
    if value.startswith("../") or value.startswith("./") or value.startswith("assets/"):
        return True
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def main() -> int:
    errors: list[str] = []
    if not DATA.exists():
        print(f"ERROR: missing {DATA}")
        return 1

    try:
        data = json.loads(DATA.read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"ERROR: invalid JSON: {exc}")
        return 1

    for key in REQUIRED_TOP:
        if key not in data:
            errors.append(f"missing top-level field: {key}")

    items = data.get("items", [])
    deep_dives = data.get("deep_dives", [])
    summary = data.get("executive_summary", [])

    if not isinstance(items, list):
        errors.append("items must be a list")
        items = []
    if len(items) >= 30:
        errors.append(f"items must be fewer than 30, got {len(items)}")
    if len(deep_dives) > 2:
        errors.append(f"deep_dives must be <= 2, got {len(deep_dives)}")
    if not (1 <= len(summary) <= 5):
        errors.append(f"executive_summary should have 1-5 bullets, got {len(summary)}")

    seen_ids: set[str] = set()
    seen_urls: set[str] = set()
    for idx, item in enumerate(items, start=1):
        prefix = f"items[{idx}]"
        for key in REQUIRED_ITEM:
            if not item.get(key):
                errors.append(f"{prefix} missing required field: {key}")
        item_id = item.get("id")
        if item_id in seen_ids:
            errors.append(f"duplicate id: {item_id}")
        seen_ids.add(item_id)
        source_url = item.get("source_url", "")
        if source_url:
            if not is_probably_link(source_url):
                errors.append(f"{prefix} source_url is not a valid link/path: {source_url}")
            if source_url in seen_urls:
                errors.append(f"duplicate source_url: {source_url}")
            seen_urls.add(source_url)
        importance = item.get("importance")
        if importance and importance not in ALLOWED_IMPORTANCE:
            errors.append(f"{prefix} invalid importance: {importance}")
        if not (item.get("image_url") or item.get("local_image")):
            errors.append(f"{prefix} needs image_url or local_image")
        if not isinstance(item.get("tags", []), list):
            errors.append(f"{prefix} tags must be a list")

    if errors:
        print("weekly-news validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"weekly-news validation passed: {len(items)} items, {len(deep_dives)} deep dives")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
