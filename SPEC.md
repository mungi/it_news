# AI / Cloud / Infra Weekly News Website Spec

Created: 2026-07-06 KST
Status: confirmed implementation spec

## 1. Product Goal

Build a Korean static weekly news website for developers, engineers, and technical leaders.
The site helps a presenter explain the most important AI, Cloud, Infra, and selected IT news within 30 minutes.

The repository serves two roles:

1. `docs/`: GitHub Pages static website.
2. LLM Wiki: source capture and accumulated knowledge under `raw/`, `entities/`, `concepts/`, `comparisons/`, `weekly/`.

## 2. Confirmed Requirements

- Site root: `docs/`.
- Deployment: GitHub Pages / static website.
- Updates: automatic.
- News update cadence: every 6 hours.
- Presentation freeze: every Monday 13:00-17:00 KST. No file changes, commits, or pushes during this window.
- Weekly coverage window: previous Monday 17:00 KST through current Monday 13:00 KST.
- Audience: developers, engineers, technical leaders.
- Language: Korean UI and Korean summaries.
- Title policy: Korean title plus original title when available.
- Topics: AI, Cloud, Infra first; Security, Developer Tools, Data/DB, Open Source, Korea, General IT second.
- Total visible news items: up to 30; target 24-30 when enough high-value sourced items exist.
- Deep Dive: 1 by default, 2 only when unusually important. Each Deep Dive must be detailed enough for AI/Infra experts and consultants to use in a 30-minute briefing: source facts, expert interpretation, architecture/operations impact, cost/security view, adoption roadmap, checklist, and presenter message.
- Each news item needs title, short summary, detailed summary, source link, image, category/tags, and publication time when available.
- Updates should automatically commit and push when GitHub auth/remotes are available.

## 3. UX / Information Architecture

Single-page static application:

1. Header
   - Product title
   - Current ISO week
   - Coverage window in KST
   - Last updated KST
   - Frozen/presentation status
2. Executive Summary
   - 3-5 bullets summarizing the week.
3. Deep Dive
   - 1 highlighted story, max 2.
4. Controls
   - Search text input
   - Category filters: All, AI, Cloud, Infra, Security, DevTools, Data, Open Source, Korea, IT
   - Importance filters: All, 중요 소식, 높음, 보통
   - Region filters: All, Global, Korea
   - View mode toggle: `목록 보기` and `카드 보기`.
5. News List / Cards
   - Default `목록 보기`: single vertical list; no pagination.
   - `카드 보기`: responsive card grid; on desktop it uses a 3-column layout.
   - Each item contains thumbnail, Korean title, short summary, source, and published time.
   - The default list layout should stay compact enough that multiple items are visible on one screen.
6. Detail Modal
   - Opens when a card is clicked.
   - Contains image, detailed summary, engineering implication, Korea implication, tags, source links, related links.
   - Deep Dive entries also open the same detail modal with a richer expert/consultant-level explanation, source facts, architecture/operations implications, cost/security trade-offs, adoption checklist, and source links.

## 4. Visual Design

Design language: developer-oriented dark briefing dashboard, inspired by Linear/Vercel/Supabase style.

Tokens:

```text
Background: #080b12
Background elevated: #0d111b
Surface: #111827
Surface strong: #182033
Border: #263244
Text primary: #f8fafc
Text secondary: #a3b1c6
Muted: #64748b
AI accent: #a78bfa
Cloud accent: #38bdf8
Infra accent: #34d399
Security accent: #fb7185
Korea accent: #f59e0b
```

Typography:
- System font stack for Korean readability.
- Monospace for metadata, timestamps, and source labels.
- Large enough for projector presentation.

UX priorities:
- Fast skimming.
- Clear hierarchy.
- Stable presentation view.
- Compact list reading similar to mungi.kr: title, summary, thumbnail, and source first.
- Optional card view for broader visual browsing; desktop card view should be 3 columns.
- No oversized presentation cards and no JSON-view button in the primary UI.
- No heavy framework or build step.

## 5. Data Contract

Main website data file:

```text
docs/data/weekly-news.json
```

Top-level shape:

```json
{
  "week": "YYYY-Www",
  "coverage_start_kst": "YYYY-MM-DD HH:mm",
  "coverage_end_kst": "YYYY-MM-DD HH:mm",
  "last_updated_kst": "YYYY-MM-DD HH:mm",
  "frozen": false,
  "presentation_window_kst": "Monday 13:00-17:00 KST",
  "audience": "developers and engineers",
  "executive_summary": [],
  "deep_dives": [],
  "items": []
}
```

Item shape:

```json
{
  "id": "news-001",
  "rank": 1,
  "title_ko": "한국어 제목",
  "title_original": "Original title",
  "summary": "2-3문장 요약",
  "detail": "상세 내용",
  "why_it_matters": "왜 중요한가",
  "engineering_implication": "개발자/엔지니어 관점 시사점",
  "korea_implication": "한국 시장/조직 관점 시사점",
  "category": "AI",
  "tags": ["AI", "Agent"],
  "region": "Global",
  "importance": "must-know",
  "score": 90,
  "published_kst": "YYYY-MM-DD HH:mm",
  "source_name": "Source",
  "source_url": "https://example.com",
  "image_url": "https://example.com/image.jpg",
  "local_image": "assets/images/news-001.jpg",
  "related_links": []
}
```

Deep Dive shape and content standard:

```json
{
  "id": "deep-dive-001",
  "title": "Deep Dive 제목",
  "summary": "짧은 요약",
  "details": "전문가 관점의 상세 설명",
  "why_it_matters": "왜 중요한가",
  "sources": ["https://example.com/source"],
  "detailed_content": []
}
```

Deep Dive `detailed_content` requirements:

- At least 7 sections and 1,800+ Korean characters.
- Include `원문과 관련 뉴스의 핵심 내용`, `AI/Infra 전문가 해석`, one or more `관점` sections, `개발팀/인프라팀 체크리스트`, and `강조 메세지`.
- Use GeekNews체 for GeekNews/GN⁺ source summaries: **not narrative prose**. Use concise Korean bullets/fragments, noun phrases, `변화/볼 것/피할 것/팀 액션` decision points, concrete source facts first, no generic conclusions, and **bold** only decision-critical terms or metrics.
- Treat the topic like an advisory briefing: connect source facts to architecture, operations, security, FinOps, governance, rollout order, and measurable next actions.
- Avoid generic trend commentary. End each section with a concrete engineering implication, risk, metric, or decision point.

## 6. News Search Strategy

Use a curated-source-first strategy, then web search fallback.

### Mandatory Korean/community sources

These must be included in the recurring search set:

- https://news.hada.io/ — GeekNews / Korean developer and startup community signal.
- https://news.hada.io/plus — GeekNews Plus; include as a recurring reference/source surface.
- https://www.aitimes.kr/ — Korean AI industry news.
- https://www.aitimes.com/ — AI Times global/Korean AI news.


### User-provided editorial examples

When the user provides specific older or current news URLs, treat them as editorial examples/candidate stories, not as permanent recurring sources. Analyze the content once, include it in the current weekly news if it falls in the coverage window or is contextually important, and derive future selection criteria from it. Example GeekNews topics that illustrate desired coverage quality:

- https://news.hada.io/topic?id=30992 — model release / agent capability and cost-performance story.
- https://news.hada.io/topic?id=31123 — AI inference economics / GPU performance-per-dollar story.

### Global AI sources

- OpenAI Blog
- Anthropic News
- Google DeepMind Blog
- Google AI Blog
- Meta AI Blog
- Microsoft AI Blog
- NVIDIA Blog
- Hugging Face Blog
- arXiv cs.AI / cs.CL / cs.LG
- Papers with Code

### Global Cloud / Infra sources

- AWS News Blog
- AWS What’s New
- Azure Updates
- Google Cloud Blog
- Google Cloud Release Notes
- Cloudflare Blog
- Kubernetes Blog
- CNCF Blog
- Docker Blog
- HashiCorp Blog
- Datadog Blog

### Security / Developer / IT sources

- GitHub Blog
- GitLab Blog
- JetBrains Blog
- Stack Overflow Blog
- The Hacker News
- BleepingComputer
- CISA Alerts
- Google Security Blog
- Microsoft Security Blog

### Korea sources

- Naver Cloud Blog
- Kakao Enterprise Blog
- Samsung Newsroom
- SK Telecom Newsroom
- KT Cloud
- 과기정통부 보도자료
- KISA 보안공지
- 전자신문
- ZDNet Korea
- ITWorld Korea
- Bloter
- Byline Network

### Web search fallback examples

- `AI infrastructure news past week`
- `cloud infrastructure Kubernetes news past week`
- `AWS Azure Google Cloud announcement past week`
- `AI agent enterprise news past week`
- `site:news.hada.io AI 클라우드 인프라`
- `site:news.hada.io/plus AI 클라우드 인프라`
- `site:aitimes.kr AI 클라우드 반도체`
- `site:aitimes.com AI cloud infrastructure`
- `site:zdnet.co.kr AI 클라우드 인프라`
- `site:etnews.com AI 클라우드 인프라`
- `site:itworld.co.kr 클라우드 보안 AI`

## 7. Ranking and Filtering

Score each candidate:

- impact
- developer/engineer relevance
- novelty
- credibility
- Korea relevance
- technical depth
- presentation value

Drop:

- unverified rumors
- weak vendor marketing
- duplicated coverage of the same story
- minor product releases with low engineering value
- stories older than the weekly window unless necessary context
- items without source URL

Final output:

- 24-30 preferred items when enough high-value sourced stories exist.
- Hard cap: 30 items.
- 중요 소식: about 5-8 items.
- Deep Dive: 1 preferred, 2 max.

Writing style:

- No greetings, emotional openers, or rhetorical warm-ups. Start with the conclusion and core fact.
- Use a factual, objective tone: information essence, trade-offs, core technology, and operational impact.
- Keep accurate domain terminology instead of over-simplifying technical terms.
- Use **개조식(箇條式)** and short sections over long narrative paragraphs.
- Visible card summaries and modal details should be structured bullet-style briefing text, not source-led prose and not awkward keyword fragments. Preferred labels: `핵심`, `배경`, `변화`, `영향`, `시사점`.
- Include a `시사점` item for each story: industry impact or a short developer/engineer-facing implication grounded in the source. Store it in `engineering_implication` and render it as `시사점`.
- Korean prose should be concise, technical, and source-grounded.
- Avoid LLM-style filler and inflated phrasing: `주목할 만합니다`, `시사합니다`, `보여줍니다`, `중요한 것은`, `핵심은`, `패러다임 전환`, `게임 체인저`, `새로운 시대`, `빠르게 진화하는 환경`, `중요한 이정표`.
- Do not use generic conclusions such as `향후 귀추가 주목됩니다`, `앞으로가 기대됩니다`, `중요성이 커질 전망입니다` unless they are replaced by a specific next action or measurable implication.
- Prefer concrete nouns and verbs: who released what, what changed, which system is affected, what engineers should do.
- Keep each summary direct. Avoid rhetorical warm-ups and tutorial phrases.

## 8. Image Policy

Image priority:

1. Original article `og:image`.
2. Official blog thumbnail.
3. Credible article image.
4. Category fallback SVG under `docs/assets/images/`.

Rules:
- Do not fabricate image URLs.
- Prefer source-page `og:image` or `twitter:image` when available.
- When practical, store a local copy under `docs/assets/images/news-XXX.ext` and set `local_image` to that file for stable static-site rendering.
- If hotlink reliability is unknown, keep a fallback in `local_image`, but do not let it hide a valid source image in the UI.
- Preserve source attribution by keeping `source_url` and `image_url`.

## 9. Automation Schedule

### News update job

- Schedule: every 6 hours.
- Workdir: `/home/ubuntu/projects/it_news`.
- Toolsets: web/browser, terminal, file, skills.
- Must read `AGENTS.md`, `SPEC.md`, `SCHEMA.md`, `index.md`, recent `log.md` before updating.
- Must not change files Monday 13:00-17:00 KST.
- Must validate JSON before commit.
- Must commit and push only when files changed.

### Optional pre-presentation finalizer

The 6-hour job should still create a final update before Monday 13:00 KST when the schedule aligns.
A separate 12:50 KST finalizer can be added later if stricter freshness is needed.

## 10. Continuous Code Improvement Schedule

A separate Hermes cron job runs every 2 hours.

Purpose:
- Review and improve current project code, UI, UX, security, accessibility, data validation, performance, and automation efficiency.

Rules:
- Think and plan first; do not churn code blindly.
- Inspect current code and site before editing.
- Prefer small, verifiable improvements.
- Do not run during Monday 13:00-17:00 KST freeze window if it would alter presentation files or deployed site.
- Run validation after changes.
- Commit and push only when an actual improvement is made.
- Never fabricate news data.
- Do not modify cron schedules unless explicitly necessary to fix broken automation.

## 11. Acceptance Criteria

MVP is complete when:

- `docs/index.html` renders `docs/data/weekly-news.json`.
- Card list, filters, search, and detail modal work without a build step.
- JSON validation passes.
- Sample data contains images/fallbacks, source links, and Korean summaries.
- `SPEC.md`, `README.md`, `AGENTS.md`, and `SCHEMA.md` agree on the schedule and source strategy.
- Changes are committed and pushed.
- News update cron is registered for every 6 hours.
- Code improvement cron is registered for every 2 hours.
