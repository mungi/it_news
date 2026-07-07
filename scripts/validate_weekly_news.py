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
    "audience", "executive_summary", "deep_dives", "items",
]
REQUIRED_ITEM = [
    "id", "rank", "title_ko", "summary", "detail", "why_it_matters",
    "engineering_implication", "category", "tags", "region", "importance",
    "source_name", "source_url",
]
ALLOWED_IMPORTANCE = {"must-know", "high", "medium", "low"}
ALLOWED_REGIONS = {"Global", "Korea"}
KST_TIMESTAMP_RE = re.compile(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$")
WEEK_RE = re.compile(r"^\d{4}-W\d{2}$")
ITEM_ID_RE = re.compile(r"^news-\d{3}$")
DEEP_DIVE_ID_RE = re.compile(r"^deep-dive-\d{3}$")


def is_http_url(value: str) -> bool:
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def is_safe_assets_path(value: str) -> bool:
    """Return True for docs-local assets/... paths that cannot escape docs/.

    Keep this aligned with docs/app.js safeImageSrc(): accept only plain
    relative assets/... paths, and reject protocol-relative, absolute,
    traversal, backslash, empty, or current-directory segments before any
    filesystem normalization can hide them.
    """
    if not isinstance(value, str):
        return False
    if not value.startswith("assets/"):
        return False
    if value.startswith("//") or value.startswith("/") or "\\" in value:
        return False
    parts = value.split("/")
    if any(part in {"", ".", ".."} for part in parts):
        return False
    return True


def validate_image_url(value: object, prefix: str, errors: list[str]) -> None:
    """Validate an image_url as either an external URL or a safe legacy fallback path."""
    if not value:
        return
    image_url = str(value)
    if is_http_url(image_url):
        return
    if is_safe_assets_path(image_url):
        if not (ROOT / "docs" / image_url).exists():
            errors.append(f"{prefix} image_url fallback file does not exist: {image_url}")
        return
    errors.append(f"{prefix} image_url must be an absolute http(s) URL or safe assets/... fallback: {image_url}")


def validate_local_image(value: object, prefix: str, field: str, errors: list[str]) -> None:
    """Validate site-local image paths without allowing traversal outside docs/."""
    if not value:
        return
    path = str(value)
    if not is_safe_assets_path(path):
        errors.append(f"{prefix} {field} must be a safe docs-local assets/... path: {path}")
        return
    if not (ROOT / "docs" / path).exists():
        errors.append(f"{prefix} {field} file does not exist: {path}")


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


def validate_deep_dive_content(value: object, prefix: str, errors: list[str]) -> None:
    """Require Deep Dive modals to be substantive enough for a presenter."""
    validate_detailed_content(value, prefix, errors, required=True)
    if not isinstance(value, list):
        return

    headings = [str(section.get("heading", "")) for section in value if isinstance(section, dict)]
    joined_headings = " ".join(headings)
    total_chars = 0
    bullet_count = 0
    for section in value:
        if not isinstance(section, dict):
            continue
        total_chars += len(str(section.get("body", "")))
        items = section.get("items")
        if isinstance(items, list):
            bullet_count += len(items)
            total_chars += sum(len(str(item)) for item in items)

    if len(value) < 7:
        errors.append(f"{prefix} detailed_content should have at least 7 expert-level sections")
    if total_chars < 1800:
        errors.append(f"{prefix} detailed_content should be at least 1800 Korean chars, got {total_chars}")
    if bullet_count < 12:
        errors.append(f"{prefix} detailed_content should include at least 12 concrete bullets, got {bullet_count}")

    required_heading_keywords = {
        "원문": "source/original-news section",
        "전문가": "AI/Infra expert interpretation section",
        "관점": "consulting or operational perspective section",
        "체크리스트": "developer/infra checklist section",
        "강조": "presenter emphasis section",
    }
    for keyword, description in required_heading_keywords.items():
        if keyword not in joined_headings:
            errors.append(f"{prefix} detailed_content missing {description} (heading containing '{keyword}')")


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

    if not isinstance(data, dict):
        print("ERROR: top-level JSON value must be an object")
        return 1

    for key in REQUIRED_TOP:
        if key not in data:
            errors.append(f"missing top-level field: {key}")

    week = data.get("week")
    if week and not WEEK_RE.match(str(week)):
        errors.append(f"week must use YYYY-Www format, got: {week}")
    for key in ("audience",):
        value = data.get(key)
        if value is not None and (not isinstance(value, str) or not value.strip()):
            errors.append(f"{key} must be a non-empty string")

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
    if len(items) > 50:
        errors.append(f"items must be <= 50, got {len(items)}")
    if len(deep_dives) > 2:
        errors.append(f"deep_dives must be <= 2, got {len(deep_dives)}")
    if not (1 <= len(summary) <= 5):
        errors.append(f"executive_summary should have 1-5 bullets, got {len(summary)}")
    for summary_idx, summary_item in enumerate(summary, start=1):
        if not isinstance(summary_item, str) or not summary_item.strip():
            errors.append(f"executive_summary[{summary_idx}] must be a non-empty string")

    seen_ids: set[str] = set()
    seen_ranks: set[int] = set()
    seen_urls: set[str] = set()
    for idx, item in enumerate(items, start=1):
        prefix = f"items[{idx}]"
        if not isinstance(item, dict):
            errors.append(f"{prefix} must be an object")
            continue
        for key in REQUIRED_ITEM:
            if not item.get(key):
                errors.append(f"{prefix} missing required field: {key}")
        item_id = item.get("id")
        if item_id:
            if not ITEM_ID_RE.match(str(item_id)):
                errors.append(f"{prefix} id must match news-XXX, got: {item_id}")
            if str(item_id) in seen_ids:
                errors.append(f"duplicate id: {item_id}")
            seen_ids.add(str(item_id))
        rank = item.get("rank")
        if not isinstance(rank, int) or rank < 1:
            errors.append(f"{prefix} rank must be a positive integer")
        elif rank in seen_ranks:
            errors.append(f"duplicate rank: {rank}")
        else:
            seen_ranks.add(rank)
        source_url = item.get("source_url", "")
        if source_url:
            if not is_http_url(str(source_url)):
                errors.append(f"{prefix} source_url must be an absolute http(s) URL: {source_url}")
            if source_url in seen_urls:
                errors.append(f"duplicate source_url: {source_url}")
            seen_urls.add(source_url)
        score = item.get("score")
        if score is not None and (not isinstance(score, (int, float)) or not 0 <= score <= 100):
            errors.append(f"{prefix} score must be a number between 0 and 100")
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
        image_url = item.get("image_url", "")
        validate_image_url(image_url, prefix, errors)
        local_image = item.get("local_image", "")
        if local_image:
            validate_local_image(local_image, prefix, "local_image", errors)
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
                if link_url and not is_http_url(str(link_url)):
                    errors.append(f"{prefix} related_links[{link_idx}].url must be an absolute http(s) URL: {link_url}")
                if link_url and not link.get("title"):
                    errors.append(f"{prefix} related_links[{link_idx}] missing title")

    if seen_ranks and seen_ranks != set(range(1, len(items) + 1)):
        missing = sorted(set(range(1, len(items) + 1)) - seen_ranks)
        extra = sorted(rank for rank in seen_ranks if rank > len(items))
        errors.append(f"item ranks must be contiguous from 1 to {len(items)}; missing={missing}, extra={extra}")

    seen_deep_dive_ids: set[str] = set()
    for idx, item in enumerate(deep_dives, start=1):
        prefix = f"deep_dives[{idx}]"
        if not isinstance(item, dict):
            errors.append(f"{prefix} must be an object")
            continue
        for key in ("id", "title", "summary", "details", "why_it_matters"):
            if not item.get(key):
                errors.append(f"{prefix} missing required field: {key}")
        deep_dive_id = item.get("id")
        if deep_dive_id:
            if not DEEP_DIVE_ID_RE.match(str(deep_dive_id)):
                errors.append(f"{prefix} id must match deep-dive-XXX, got: {deep_dive_id}")
            if str(deep_dive_id) in seen_deep_dive_ids:
                errors.append(f"duplicate deep dive id: {deep_dive_id}")
            seen_deep_dive_ids.add(str(deep_dive_id))
        sources = item.get("sources", [])
        if not isinstance(sources, list) or not sources:
            errors.append(f"{prefix} sources must be a non-empty list")
        else:
            for source_idx, source in enumerate(sources, start=1):
                if not is_http_url(str(source)):
                    errors.append(f"{prefix} sources[{source_idx}] must be an absolute http(s) URL: {source}")
        image_url = item.get("image_url", "")
        local_image = item.get("local_image", "")
        if not (image_url or local_image):
            errors.append(f"{prefix} needs image_url or local_image")
        if image_url and not is_http_url(str(image_url)):
            errors.append(f"{prefix} image_url must be an absolute http(s) URL: {image_url}")
        if local_image:
            validate_local_image(local_image, prefix, "local_image", errors)
        validate_deep_dive_content(item.get("detailed_content"), prefix, errors)

    if errors:
        print("weekly-news validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"weekly-news validation passed: {len(items)} items, {len(deep_dives)} deep dives")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
