# AGENTS.md

This repository is an AI/Cloud/Infra weekly news website and LLM-wiki knowledge base.

Primary user preference:
- Respond in Korean unless the user explicitly asks otherwise.
- State times in KST.

## Project Goal

Build and maintain a static weekly news website for developers and engineers.

The site summarizes important AI, Cloud, Infra, and selected general IT news from the last week, including Korean and global sources. It is intended to support a 30-minute weekly presentation.

## Confirmed Product Spec

- Site root: `docs/`
- Deployment target: GitHub Pages / static website
- Update mode: automatic
- Update cadence: every 4 hours
- Weekly coverage window: previous Monday 17:00 KST through current Monday 13:00 KST
- Audience: developers, engineers, and technical leaders
- Language: Korean UI and Korean summaries
- News title policy: Korean title plus original title preserved when available
- Main topics: AI, Cloud, Infra
- Secondary topics: Security, Developer Tools, Data/Database, Open Source, Korea, General IT
- Total weekly items: up to 50; target 40-50 high-value stories when enough sourced items exist
- Deep Dive: normally 1 item, maximum 2 only when necessary
- Required per news item: title, short summary, detailed summary, source link, image, tags/category, publication time if available

## Repository Layout

Expected structure:

```text
.
├── AGENTS.md
├── README.md
├── SPEC.md
├── SCHEMA.md
├── index.md
├── log.md
├── raw/
│   ├── articles/
│   ├── papers/
│   ├── transcripts/
│   └── assets/
├── entities/
├── concepts/
├── comparisons/
├── queries/
├── weekly/
├── templates/
├── scripts/
└── docs/
    ├── index.html
    ├── styles.css
    ├── app.js
    ├── data/
    │   └── weekly-news.json
    └── assets/
        └── images/
```

## Site Requirements

The static website must be usable directly from `docs/index.html` and deployable through GitHub Pages.

Minimum UI features:
- Weekly card list
- Card click opens detailed summary
- Category/tag filters
- Search
- 중요 소식 highlighting
- Deep Dive section
- Source links
- Main image per story
- Last updated timestamp in KST

Presentation UX:
- A presenter should be able to introduce the week’s news within 30 minutes.
- Prioritize clarity over density.
- Keep summaries concise but technically useful.
- Avoid more than 50 news items.

## Data Contract

The website should read from:

```text
docs/data/weekly-news.json
```

Recommended top-level JSON fields:

```json
{
  "week": "YYYY-Www",
  "coverage_start_kst": "YYYY-MM-DD HH:mm",
  "coverage_end_kst": "YYYY-MM-DD HH:mm",
  "last_updated_kst": "YYYY-MM-DD HH:mm",
  "audience": "developers and engineers",
  "executive_summary": [],
  "deep_dives": [],
  "items": []
}
```

Each `items[]` entry should include:

```json
{
  "id": "news-001",
  "title_ko": "한국어 제목",
  "title_original": "Original title",
  "summary": "2-3 sentence Korean summary",
  "detail": "Detailed Korean summary",
  "why_it_matters": "Why developers/engineers should care",
  "engineering_implication": "Technical or operational implication",
  "category": "AI",
  "tags": ["AI", "Cloud"],
  "region": "Global",
  "importance": "high",
  "published_kst": "YYYY-MM-DD HH:mm",
  "source_name": "Source",
  "source_url": "https://example.com",
  "image_url": "https://example.com/image.jpg",
  "local_image": "assets/images/news-001.jpg",
  "related_links": []
}
```

## Automation Rules

Every automated update run must:
1. Check current time in KST for logging and timestamp accuracy.
2. Search for AI/Cloud/Infra/IT sources from the last 7 days, with Korean and global coverage.
3. Prefer primary sources and official blogs, then credible technical media.
4. Deduplicate by URL, title, and story/event similarity.
5. Score stories by impact, relevance, novelty, credibility, Korea relevance, technical depth, and presentation value.
6. Keep up to 50 final items.
7. Select 1 Deep Dive by default, maximum 2.
8. Update the LLM wiki files and `docs/data/weekly-news.json`.
9. Preserve source links and image attribution/source metadata.
10. Append a concise entry to `log.md`.
11. Automatically commit and push changes to GitHub when repository credentials/remotes are available.

## Source Priorities

Global AI:
- OpenAI, Anthropic, Google DeepMind, Google AI, Meta AI, Microsoft AI, NVIDIA, Hugging Face, arXiv, Papers with Code

Global Cloud/Infra:
- AWS News Blog, AWS What’s New, Azure Updates, Google Cloud Blog, Cloudflare Blog, Kubernetes Blog, CNCF, Docker, HashiCorp, Datadog

Security/Developer/IT:
- GitHub Blog, GitLab Blog, JetBrains Blog, Stack Overflow Blog, The Hacker News, BleepingComputer, CISA, Google Security Blog, Microsoft Security Blog

Korea:
- Naver Cloud, Kakao Enterprise, Samsung Newsroom, SK Telecom, KT Cloud, MSIT, KISA, 전자신문, ZDNet Korea, ITWorld Korea, Bloter, Byline Network

## Quality Bar

- Do not fabricate news, dates, source links, or images.
- If a claim cannot be verified from a source, mark it as uncertain or omit it.
- Keep Korean summaries natural and concise.
- Keep generated Korean prose concise, technical, and source-grounded.
- Avoid LLM-style filler and inflated wording: `주목할 만합니다`, `시사합니다`, `보여줍니다`, `중요한 것은`, `핵심은`, `패러다임 전환`, `게임 체인저`, `새로운 시대`, `빠르게 진화하는 환경`, `중요한 이정표`, `향후 귀추가 주목됩니다`.
- Prefer concrete facts, affected systems, operational risks, metrics, and engineering actions.
- Do not add generic conclusions. End with a specific implication or action.
- Preserve original URLs.
- Use KST for displayed times.
- Avoid low-signal vendor marketing unless there is real technical or market impact.
- For the website, prefer stable static assets and graceful fallbacks when images are missing.

## Current Status

Created: 2026-07-05 KST
Spec status: active automated operation. The static site is implemented under `docs/`, reads `docs/data/weekly-news.json`, and is maintained by separate news-update and code-improvement cron jobs.
