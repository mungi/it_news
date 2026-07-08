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

## [2026-07-07] site | Slightly increase PC modal title size
- Increased PC-only modal title size by about 10% from the previous setting.
- Kept mobile and tablet modal title sizing unchanged.
- Bumped static CSS/JS cache keys in `docs/index.html`.

## [2026-07-07] update | Add GeekNews체 and modal body cleanup
- Analyzed GeekNews topic 31170, `덜한 것이 더 낫다, 대체로`, and captured its less-is-more style as GeekNews체 in the reusable skill.
- Updated project prompt/spec/schema to use GeekNews체 for GeekNews/GN⁺ summaries and `강조 메세지` for Deep Dive emphasis headings.
- Removed the separate `한국 관점` block from article modals and added `**bold**` rendering support for important modal body text.

## [2026-07-07] update | Make GeekNews체 non-narrative
- Corrected GeekNews체 definition: not prose, but compact fragments and decision bullets.
- Rewrote current GeekNews/GN⁺ items to use `변화`, `볼 것`, `피할 것`, and team-action style.
- Updated project prompt/spec/schema and skill guidance to prevent 서술형 GeekNews summaries.

## [2026-07-07] update | Add briefing writing principles and 시사점
- Added writing rules: top-loaded summary, factual/objective tone, minimal rhetoric, precise terminology, and bullet/fragment structure.
- Standardized `engineering_implication` as the rendered `시사점` item for industry/developer impact.
- Updated modal heading from `엔지니어링 시사점` to `시사점`.

## [2026-07-07] update | Convert visible summaries to non-narrative fragments
- Rewrote all visible story summaries and modal detail sections into labeled fragments/bullets.
- Replaced source-led prose with `핵심`, `변화`, `볼 것`, `영향`, and `시사점` structure.
- Regenerated `weekly/2026-W28.md` from the updated data style.

## [2026-07-07] update | Clarify body style as 개조식
- Corrected the writing rule from over-compressed fragments to 개조식 bullet-style briefing prose.
- Updated skill, prompt, schema, and spec to require complete useful clauses under `핵심`, `배경`, `변화`, `영향`, and `시사점` labels.
- Explicitly warned against awkward keyword fragments that lose context.

## [2026-07-07] update | Add Argo CD repo-server security story
- Freeze check passed at 2026-07-07 06:55 KST; updates allowed.
- Reviewed 745 feed entries and 161 relevant new candidates across mandatory sources plus global AI/Cloud/Infra/Security/DevTools feeds.
- Added The Hacker News Argo CD repo-server 미패치 결함 story and removed lower-priority OpenTag item to keep the site at 30 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source image, and wiki index.

## [2026-07-07] update | Add Linux KVM Januscape virtualization escape story
- Freeze check passed at 2026-07-07 13:04 KST; updates allowed.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; also sampled AWS, Cloudflare, Kubernetes, CNCF, Docker, GitHub, Hugging Face, NVIDIA, OpenAI, The Hacker News, BleepingComputer, CISA, Google Security, and Microsoft Security feeds.
- Reviewed 550 recent feed entries across reachable feeds (4 feed endpoints failed or returned unavailable); added Linux KVM Januscape CVE-2026-53359 guest-to-host risk and removed lower-priority ICML Seoul event item to keep the site at 30 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source image, and wiki index.
## [2026-07-07] update | Add SageMaker HyperPod DPD inference optimization
- Freeze check passed at 2026-07-07 19:07 KST; updates allowed.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; also sampled AWS, Cloudflare, Docker, GitHub, Hugging Face, Google Research, NVIDIA, The Hacker News, CISA, Kubernetes, CNCF, OpenAI, and other global feeds.
- Reviewed 340 relevant feed candidates across reachable feeds (4 feed endpoints failed or returned unavailable); added Amazon SageMaker HyperPod Disaggregated Prefill and Decode and removed lower-priority Google TabFM item to keep the site at 30 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, Deep Dive inference-economics detail, and wiki index.

## [2026-07-07] site | Remove presentation protection status and adjust automation limits
- Removed the website presentation status row and live presentation-protection JavaScript.
- Removed the repository freeze guard script and freeze-guard references from automation prompts/specs.
- Changed the news updater cadence from 6 hours to 4 hours and raised the weekly item cap from 30 to 50.

## [2026-07-07] site | Improve keyboard navigation and reduced motion support
- Added a visible-on-focus skip link to jump from the header to the main briefing content.
- Added `prefers-reduced-motion` CSS handling to minimize transitions for users who request reduced motion.
- Bumped static CSS/JS cache keys in `docs/index.html`.

## [2026-07-08] update | Expand weekly refresh to 40 sourced items
- Checked current time at 2026-07-08 00:00 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; also sampled AWS, Cloudflare, Docker, GitHub, Hugging Face, NVIDIA, The Hacker News, BleepingComputer, CISA, Google Security, Microsoft Security, Kubernetes, CNCF, OpenAI, Google AI, Google Cloud, GitLab, JetBrains, and Stack Overflow feeds.
- Reviewed 2,607 feed entries and 368 relevant candidates across reachable feeds; 2 feed endpoints failed or returned unavailable.
- Added 10 sourced stories covering Writer AI session-token leakage, SkillCloak AI-agent skill evasion, Gitea Docker CVE probing, GitHub Actions CI attack chains, Alberta Claude code audit, ADD closed-network AI, Naver-KAI defense sovereign AI, ETRI open-source governance, EC2 Dedicated Hosts AMD SEV-SNP, and Hugging Face Kernels.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, and wiki index.

## [2026-07-08] site | Harden browser image path validation
- Checked current time at 2026-07-08 03:10 KST; no freeze guard was run per current project policy.
- Hardened the static UI image resolver to reject malformed docs-local paths with empty, `.`, absolute, traversal, or backslash segments before assigning image sources.
- Bumped static CSS/JS cache keys in `docs/index.html`.
## [2026-07-08] update | Add GLM 5.2 inference cost and cloud security/platform stories
- Checked current time at 2026-07-08 04:07 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io/plus, aitimes.kr, and aitimes.com; news.hada.io RSS returned 403 in this probe. Also sampled AWS, Cloudflare, Docker, GitHub, Hugging Face, NVIDIA, The Hacker News, BleepingComputer, CISA, Google Security, Microsoft Security, Kubernetes, CNCF, OpenAI, Google AI, Google Cloud, GitLab, JetBrains, and Stack Overflow feeds.
- Reviewed 2,560 feed entries and 1,886 keyword-relevant candidates across reachable feeds; 1 feed endpoint failed or returned unavailable.
- Added 4 sourced stories covering GLM 5.2 inference margin pressure, AWS Security Hub exposure impact analysis, SageMaker Studio Hugging Face one-click integration, and Korea's 1.4 trillion KRW physical AI megaproject.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images where available, and wiki index.

## [2026-07-08] site | Reduce DOM injection surface and improve view-toggle keyboard UX
- Checked current time at 2026-07-08 05:15 KST; no freeze guard was run per current project policy.
- Replaced static-app clearing operations from `innerHTML = ""` to `replaceChildren()` where nodes are rebuilt via DOM APIs.
- Added Arrow/Home/End keyboard handling for the list/card view radiogroup and bumped static asset cache keys.

## [2026-07-08] update | Expand weekly refresh to 50 sourced items
- Checked current time at 2026-07-08 08:14 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS probe returned 404. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, Hugging Face, Kubernetes, CNCF, GitLab, JetBrains, and Stack Overflow feeds.
- Reviewed 832 feed entries and 344 keyword-relevant candidates across reachable feeds; 1 feed endpoint failed or returned unavailable.
- Added 6 sourced stories covering Dialogflow CX agent isolation, Gemini API Managed Agents, agentic AI infrastructure readiness, ECS GPU management fee reduction, Security Hub Azure monitoring, and NVIDIA Vera CPU AI factory throughput.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images where available, and wiki index.

## [2026-07-08] site | Render markdown emphasis in visible summaries
- Checked current time at 2026-07-08 09:21 KST; no freeze guard was run per current project policy.
- Rendered `**강조**` markup as safe DOM `<strong>` nodes in card summaries, Deep Dive summaries, and modal summary/implication text instead of exposing literal asterisks.
- Added focused strong-text styling and bumped static CSS/JS cache keys in `docs/index.html`.
## 2026-07-08 10:24 KST
- 상세 내용 규칙 보강: 일반 뉴스 모달을 4개 섹션/8개 이상 핵심 bullet 구조로 확장하고 명사형 종결 중심으로 정리.
- 목록 정렬 정책 변경: published_kst 최신순으로 rank 재부여, 50개 초과 시 오래된 항목부터 제외.
- `docs/data/weekly-news.json`과 `weekly/2026-W28.md` 동기화.

## [2026-07-08] update | Add AI sovereignty, safety, and inference infrastructure stories
- Checked current time at 2026-07-08 12:19 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS probe returned 404. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, Hugging Face, Kubernetes, CNCF, GitLab, JetBrains, Stack Overflow, Microsoft Security, Google Security, and OpenAI feeds.
- Reviewed 2,521 feed entries and 627 keyword-relevant candidates across reachable feeds; 2 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering China frontier-model access controls, FuriosaAI-Equinix RNGD inference infrastructure, Naver ASF 2.0 AI safety governance, and AI economy infrastructure revenue concentration. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, and wiki index.

## [2026-07-08] site | Align improvement automation verification docs
- Checked current time at 2026-07-08 13:28 KST; no freeze guard was run per current project policy.
- Aligned `SPEC.md` optional finalizer wording with the current 4-hour news cadence and documented that the Monday 13:00-17:00 KST freeze guard is no longer used.
- Added JS syntax and Python compile checks to `scripts/improve_project_prompt.md` so future improvement runs validate static code before serving the site.
