# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete, briefing, site, cron

## [2026-07-06] create | AI/Cloud/Infra weekly news website initialized
- Domain: AI, Cloud, Infra, and selected IT news.
- Site root: `docs/` for GitHub Pages.
- Presentation freeze: Monday 13:00-17:00 KST.
- Coverage window: previous Monday 17:00 KST through current Monday 13:00 KST.
- Required recurring sources include news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com.


## [2026-07-06] briefing | 2026-W28 weekly news refreshed
- Freeze check passed at 2026-07-06 10:00 KST; updates allowed.
- Reviewed 299 RSS/feed candidates across mandatory Korean sources and global AI/Cloud/Infra/Security/DevTools sources.
- Updated `docs/data/weekly-news.json` with 22 sourced items and 1 Deep Dive.
- Added weekly archive, raw article metadata summaries, and concept notes for AI agent security and AI infrastructure energy.
## [2026-07-06] update | Add GeekNews examples as current major news
- Corrected interpretation: topic?id=30992 and topic?id=31123 are example/candidate news links, not recurring sources.
- Removed individual topic URLs from recurring mandatory source lists.
- Added both GeekNews stories to the current weekly news set and weekly briefing.
- Kept https://news.hada.io/plus as a recurring reference surface.
## [2026-07-06] update | Expand Deep Dive and card detail content
- Renamed modal detail section from 상세 요약 to 상세 내용.
- Added structured Korean detailed_content sections for both Deep Dive items.
- Added structured 상세 내용 sections for news card modals.
- Regenerated weekly/2026-W28.md from enriched data.

## [2026-07-06] update | Expand weekly list to 30 and localize importance labels
- Expanded weekly news from 24 to 30 sourced items using current GeekNews/GN⁺ developer and infra stories.
- Changed UI copy to `중요 소식` while keeping JSON `importance: must-know` for compatibility.
- Updated validation/spec/prompt rules to allow up to 30 final items and require richer `상세 내용` sections.
- Updated the 30-minute autonomous news updater cron prompt with the new 30-item, detailed_content, and 중요 소식 rules.
## [2026-07-06] update | Add SKT Blackwell AI cluster CSAP certification
- Freeze check passed at 2026-07-06 17:17 KST; updates allowed after presentation freeze.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com.
- Added SKT ‘해인’ Blackwell AI cluster CSAP certification, published 2026-07-06 11:38 KST, and removed lower-priority Zig toolchain item to keep the site at 30 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, and wiki index.
## [2026-07-06] update | Add Samsung physical AI cluster investment
- Freeze check passed at 2026-07-06 17:52 KST; updates allowed.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; also sampled global AI/Cloud/Infra/Security feeds.
- Added Samsung’s reported 60 trillion KRW Yeongnam physical AI cluster investment, published 2026-07-04 17:06 KST, and removed a lower-priority code review culture item to keep the site at 30 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, concept wiki, and wiki index.
## [2026-07-06] update | Prefer article source images over fallbacks
- Extracted article-specific Open Graph/Twitter images from source pages for 29 of 30 weekly news items.
- Updated `docs/data/weekly-news.json` image_url values where reliable source images were available; kept fallback for AWS What’s New item without image metadata.
- Downloaded 29 source images into `docs/assets/images/` and changed the UI image selection order so local article images are shown before fallback or remote image URLs.

## [2026-07-07] update | Add AWS AI Security Best Practices CSPM controls
- Freeze check passed at 2026-07-07 00:46 KST; updates allowed.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; also sampled AWS, Docker, GitHub, Hugging Face, Google Research, NVIDIA, The Hacker News, CNCF, and Microsoft Security feeds.
- Added AWS Security Hub CSPM AI Security Best Practices standard with 31 automated controls and removed the lower-priority MemNixFS tool item to keep the site at 30 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, and wiki index.

## [2026-07-07] update | Strengthen Deep Dive expert detail standard
- Expanded current Deep Dive content with AI/Infra expert and consultant perspectives: architecture, operations, FinOps, security, governance, rollout, and presenter guidance.
- Updated automation prompt, spec, schema, and README so future news refreshes generate richer Deep Dive sections instead of short summaries.
- Hardened `scripts/validate_weekly_news.py` to require substantial Deep Dive sections, concrete bullets, and expert/checklist/presenter headings.

## [2026-07-07] site | Link modal titles to source articles
- Reduced modal title font size to about 70% of the previous scale.
- Changed news and Deep Dive modal titles into external source links.
- Bumped static CSS/JS cache keys in `docs/index.html`.

## [2026-07-07] site | Tune modal title size by viewport
- Reduced modal title size by another ~30% only on PC-width screens.
- Kept mobile modal titles larger for readability.
- Bumped static CSS/JS cache keys in `docs/index.html`.
