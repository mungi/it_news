#!/usr/bin/env python3
"""Render the weekly Markdown archive from canonical weekly-news.json."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "docs" / "data" / "weekly-news.json"


def render_sections(sections: list[dict], level: int = 4) -> list[str]:
    lines: list[str] = []
    for section in sections:
        lines.extend([f"{'#' * level} {section['heading']}", ""])
        if section.get("body"):
            lines.extend([section['body'], ""])
        for item in section.get("items", []):
            lines.append(f"- {item}")
        lines.append("")
    return lines


def render() -> str:
    data = json.loads(DATA_PATH.read_text())
    lines = [
        "---",
        f"title: {data['week']} AI·Cloud·Infra 주간 브리핑",
        "type: weekly",
        "tags: [ai, cloud, infra, weekly-briefing, presentation]",
        "confidence: high",
        "---",
        "",
        f"# {data['week']} AI·Cloud·Infra 주간 브리핑",
        "",
        f"- 커버리지: {data['coverage_start_kst']} KST ~ {data['coverage_end_kst']} KST",
        f"- 최종 업데이트: {data['last_updated_kst']} KST",
        "",
        "## Executive Summary",
        "",
    ]
    lines.extend(f"- {entry}" for entry in data['executive_summary'])
    lines.extend(["", "## Deep Dive", ""])
    for dive in data['deep_dives']:
        lines.extend([f"### {dive['title']}", "", dive['summary'], "", f"- 일일 재검토: {dive['refreshed_kst']} KST"])
        if dive.get('refresh_note'):
            lines.append(f"- 유지 사유: {dive['refresh_note']}")
        lines.append("")
        lines.extend(render_sections(dive['detailed_content']))
        lines.extend(["**출처**", *[f"- {url}" for url in dive['sources']], ""])
    lines.extend(["## 주요 뉴스 (발행 시각 최신순)", ""])
    for item in data['items']:
        lines.extend([
            f"### {item['rank']}. {item['title_ko']}",
            "",
            f"- 발행: {item.get('published_kst', '시각 미확인')} KST",
            f"- 분류: {item['category']} | 태그: {', '.join(item['tags'])}",
            f"- 출처: [{item['source_name']}]({item['source_url']})",
            "",
            item['summary'],
            "",
            item['detail'],
            "",
        ])
        lines.extend(render_sections(item['detailed_content']))
        lines.extend([f"- 시사점: {item['engineering_implication']}", ""])
        if item.get('related_links'):
            lines.append("- 관련 링크:")
            for link in item['related_links']:
                if isinstance(link, dict):
                    lines.append(f"  - [{link['title']}]({link['url']})")
                else:
                    lines.append(f"  - {link}")
            lines.append("")
    lines.extend(["## Source Appendix", ""])
    for item in data['items']:
        lines.append(f"- [{item['id']}] {item['source_url']}")
    return "\n".join(lines).rstrip() + "\n"


if __name__ == '__main__':
    data = json.loads(DATA_PATH.read_text())
    output = ROOT / "weekly" / f"{data['week']}.md"
    output.write_text(render())
    print(output)
