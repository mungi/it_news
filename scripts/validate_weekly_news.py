#!/usr/bin/env python3
"""Validate docs/data/weekly-news.json for the static weekly news site."""
from __future__ import annotations

import json
import re
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
ALLOWED_REGIONS = {"Global", "Korea"}
KST_TIMESTAMP_RE = re.compile(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$")


def is_probably_link(value: str) -> bool:
    if value.startswith("../") or value.startswith("./") or value.startswith("assets/"):
        return True
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def validate_detailed_content(value: object, prefix: str, errors: list[str], *, required: bool = False) -> None:
    if value is None:
        if required:
            errors.append(f"{prefix} detailed_content is required")
        return
    if not isinstance(value, list) or not value:
        errors.append(f"{prefix} detailed_content must be a non-empty list")
        return
    for section_idx, section in enumerate(value, start=1):
        section_prefix = f"{prefix} detailed_content[{section_idx}]"
        if not isinstance(section, dict):
            errors.append(f"{section_prefix} must be an object")
            continue
        if not section.get("heading"):
            errors.append(f"{section_prefix} missing heading")
        body = section.get("body")
        items = section.get("items")
        if not body and not items:
            errors.append(f"{section_prefix} needs body or items")
        if items is not None and not isinstance(items, list):
            errors.append(f"{section_prefix}.items must be a list")


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

    for key in ("coverage_start_kst", "coverage_end_kst", "last_updated_kst"):
        value = data.get(key)
        if value and not KST_TIMESTAMP_RE.match(str(value)):
            errors.append(f"{key} must use YYYY-MM-DD HH:mm KST format, got: {value}")

    items = data.get("items", [])
    deep_dives = data.get("deep_dives", [])
    summary = data.get("executive_summary", [])

    if not isinstance(items, list):
        errors.append("items must be a list")
        items = []
    if not isinstance(deep_dives, list):
        errors.append("deep_dives must be a list")
        deep_dives = []
    if not isinstance(summary, list):
        errors.append("executive_summary must be a list")
        summary = []
    if len(items) > 30:
        errors.append(f"items must be <= 30, got {len(items)}")
    if len(deep_dives) > 2:
        errors.append(f"deep_dives must be <= 2, got {len(deep_dives)}")
    if not (1 <= len(summary) <= 5):
        errors.append(f"executive_summary should have 1-5 bullets, got {len(summary)}")

    seen_ids: set[str] = set()
    seen_ranks: set[int] = set()
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
        rank = item.get("rank")
        if not isinstance(rank, int) or rank < 1:
            errors.append(f"{prefix} rank must be a positive integer")
        elif rank in seen_ranks:
            errors.append(f"duplicate rank: {rank}")
        else:
            seen_ranks.add(rank)
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
        region = item.get("region")
        if region and region not in ALLOWED_REGIONS:
            errors.append(f"{prefix} invalid region: {region}")
        published_kst = item.get("published_kst")
        if published_kst and not KST_TIMESTAMP_RE.match(str(published_kst)):
            errors.append(f"{prefix} published_kst must use YYYY-MM-DD HH:mm format")
        if not (item.get("image_url") or item.get("local_image")):
            errors.append(f"{prefix} needs image_url or local_image")
        if not isinstance(item.get("tags", []), list):
            errors.append(f"{prefix} tags must be a list")
        validate_detailed_content(item.get("detailed_content"), prefix, errors, required=True)
        related_links = item.get("related_links", [])
        if not isinstance(related_links, list):
            errors.append(f"{prefix} related_links must be a list")
        else:
            for link_idx, link in enumerate(related_links, start=1):
                if not isinstance(link, dict):
                    errors.append(f"{prefix} related_links[{link_idx}] must be an object")
                    continue
                link_url = link.get("url", "")
                if link_url and not is_probably_link(link_url):
                    errors.append(f"{prefix} related_links[{link_idx}].url is not a valid link/path: {link_url}")

    for idx, item in enumerate(deep_dives, start=1):
        prefix = f"deep_dives[{idx}]"
        for key in ("id", "title", "summary", "details", "why_it_matters"):
            if not item.get(key):
                errors.append(f"{prefix} missing required field: {key}")
        sources = item.get("sources", [])
        if not isinstance(sources, list) or not sources:
            errors.append(f"{prefix} sources must be a non-empty list")
        else:
            for source_idx, source in enumerate(sources, start=1):
                if not is_probably_link(str(source)):
                    errors.append(f"{prefix} sources[{source_idx}] is not a valid link/path: {source}")
        validate_detailed_content(item.get("detailed_content"), prefix, errors, required=True)

    if errors:
        print("weekly-news validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"weekly-news validation passed: {len(items)} items, {len(deep_dives)} deep dives")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
