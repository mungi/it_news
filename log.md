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
## [2026-07-08] update | Add Linux GhostLock and CISA KEV security stories
- Checked current time at 2026-07-08 16:27 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews RSS returned 403 and GeekNews Plus RSS returned 404 in this probe. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, Hugging Face, Kubernetes, CNCF, GitLab, JetBrains, Stack Overflow, Microsoft Security, Google Security, OpenAI, Anthropic, and Azure feeds.
- Reviewed 2,429 feed entries and 285 keyword-relevant candidates across reachable feeds; 4 feed endpoints failed or returned unavailable.
- Added 2 sourced security stories covering Linux GhostLock root/container escape and CISA KEV additions for Adobe ColdFusion, Joomla, and Langflow. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.
## [2026-07-08] site | Make Top 6 filter priority-based
- Checked current time at 2026-07-08 19:40 KST; no freeze guard was run per current project policy.
- Changed the Top 6 presentation filter to select by importance, score, then rank instead of simply taking the six newest matching items.
- Updated the result-count copy and JS cache-busting query string; verified syntax, weekly-news validation, Python compile, and browser smoke checks.

## [2026-07-08] update | Add AI agent network boundary and UniFi OS security stories
- Checked current time at 2026-07-08 20:36 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404, Kubernetes feed parsing failed, and Anthropic RSS returned 404 in this probe. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, Hugging Face, CNCF, GitLab, JetBrains, Stack Overflow, Microsoft Security, Google Security, and OpenAI feeds.
- Reviewed 2,429 feed entries and 201 keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 2 sourced stories covering CNCF's NGINX/OpenTelemetry AI-agent network boundary pattern and Ubiquiti UniFi OS critical vulnerability patches. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, and wiki index.

## [2026-07-08] site | Align improvement prompt with no-freeze policy
- Checked current time at 2026-07-08 21:47 KST; no freeze guard was run per current project policy.
- Clarified `scripts/improve_project_prompt.md` so the improvement cron must not run legacy presentation/freeze-window guards.
- Added commit-hygiene guidance to remove Python caches and inspect status/diff before staging changes.

## [2026-07-08] site | Harden URL whitespace validation
- Checked current time at 2026-07-08 23:52 KST; no freeze guard was run per current project policy.
- Rejected raw whitespace/control characters in browser `safeImageSrc()` and `safeExternalUrl()` before URL parsing can normalize data-driven links or images.
- Aligned `scripts/validate_weekly_news.py` `http(s)` URL checks with the browser hardening and bumped the app.js cache key.

## [2026-07-09] update | Add Nemotron, DeepSeek chip, Copilot workflow, and PM1763 stories
- Checked current time at 2026-07-09 00:43 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, Hugging Face, Kubernetes, CNCF, GitLab, JetBrains, Stack Overflow, Microsoft Security, Google Security, OpenAI, Anthropic, and Azure feeds.
- Reviewed 385 feed entries and 325 keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering NVIDIA Nemotron + LangChain Deep Agents harness, DeepSeek AI chip development, GitHub Copilot workflow-level jailbreak research, and Samsung PM1763 AI data-center SSD. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.

## [2026-07-09] site | Harden category and tag validation
- Checked current time at 2026-07-09 08:07 KST; no freeze guard was run per current project policy.
- Added validator checks for allowed weekly-news categories and non-empty string tags so malformed data cannot silently break filters or search.
## 2026-07-09 08:54 KST

- 자동 업데이트 실행: RSS/웹 피드 27개 중 23개 접근 성공, 2,545개 엔트리에서 최근·키워드 후보 269건 검토.
- docs/data/weekly-news.json: 50건 유지, 신규 6건 추가, 하위/중복 6건 교체. Deep Dive 2건 유지.
- 추가: AWS Security Hub Network Scanning, AI coding agents EDR 경보, CNCF Cloud Native AI Storage 백서, HalluSquatting, OpenAI 코딩 평가 분석, Docker 로컬 런타임 거버넌스.
- LLM wiki 업데이트: weekly/2026-W28.md 재생성, raw/articles 후보 검토 노트 추가, ai-agent-security 및 ai-inference-infrastructure 개념 노트 보강.

## [2026-07-09] site | Align Top 6 with visible list order
- Checked current time at 2026-07-09 10:12 KST; no freeze guard was run per current project policy.
- Changed the Top 6 control from a separate importance/score priority resort to a simple first-six slice after the current search/filter and newest-first list order.
- Updated the Top 6 accessible label/result text and bumped the app.js cache key.

## [2026-07-09] site | Improve filter keyboard navigation
- Checked current time at 2026-07-09 12:15 KST; no freeze guard was run per current project policy.
- Added Arrow/Home/End keyboard navigation to category, importance, and region filter segmented controls while preserving `aria-pressed` state.
- Bumped the app.js cache key so the deployed static page picks up the interaction change.

## [2026-07-09] update | Add GitLost, agent data, workflow docs, and Aurora DSQL CDC
- Checked current time at 2026-07-09 13:00 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, GitHub, Hugging Face, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, Kubernetes, CNCF, GitLab, JetBrains, Stack Overflow, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, and Google Cloud feeds.
- Reviewed 2,465 feed entries and 101 current keyword-relevant candidates across reachable feeds; 4 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering GitLost GitHub AI-agent repository leakage, NVIDIA/Hugging Face Data for Agents, GitHub Agentic Workflows documentation automation, and Aurora DSQL CDC GA. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source review, concept wiki, and wiki index.

## [2026-07-09] site | Reject userinfo in data-driven URLs
- Checked current time at 2026-07-09 14:19 KST; no freeze guard was run per current project policy.
- Hardened browser and Python URL validation to reject `http(s)` links/images containing username or password components before rendering or accepting weekly data.
- Bumped the app.js cache key so GitHub Pages serves the URL-safety change.

## [2026-07-09] update | Add Friendly Fire, GhostApproval, and C4N I/O infrastructure stories
- Checked current time at 2026-07-09 17:08 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, Hugging Face, Kubernetes, CNCF, GitLab, JetBrains, Stack Overflow, Microsoft Security, Google Security, OpenAI, Anthropic, and Azure feeds.
- Reviewed 283 current feed entries and 232 keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 3 sourced stories covering Friendly Fire AI-agent code execution, GhostApproval symlink file-write bypass, and Google Cloud C4N network/storage optimized VM GA. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, AI agent security concept wiki, and wiki index.

## [2026-07-09] site | Harden image fallback handler ordering
- Checked current time at 2026-07-09 20:34 KST; no freeze guard was run per current project policy.
- Registered image fallback error handlers before assigning card, Deep Dive, and modal image sources so cached or immediately failing images still fall back consistently.
- Bumped the app.js cache key so GitHub Pages serves the fallback-handler hardening.

## [2026-07-09] update | Add GPT-Live, Grok 4.5, RoguePlanet, and GodDamn stories
- Checked current time at 2026-07-09 21:18 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google AI, Google Cloud, Google Security, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,567 feed entries and 286 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering GodDamn ransomware PoisonX driver defense evasion, GPT-Live ChatGPT Voice, Microsoft RoguePlanet Defender patch, and Grok 4.5 coding-agent model economics. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.

## [2026-07-09] docs | Align README with active project state
- Checked current time at 2026-07-09 22:38 KST; no freeze guard was run per current project policy.
- Replaced stale README next-step checklist with the current implemented site/data/automation status.
- Added local validation commands and commit-hygiene notes so future small changes use the same verified path.

## [2026-07-10] validation | Harden validator numeric and URL type checks
- Checked current time at 2026-07-10 00:42 KST; no freeze guard was run per current project policy.
- Hardened `scripts/validate_weekly_news.py` so boolean ranks/scores are rejected and non-string `source_url` values report validation errors without crashing duplicate-URL checks.
- Verified the malformed-fixture path, weekly data validation, JS syntax, Python bytecode compile, and local browser smoke checks.

## [2026-07-10] update | Add Robostral, Cloudflare Drop, in-memory computing, and manufacturing RX stories
- Checked current time at 2026-07-10 01:27 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google AI, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,440 feed entries and 251 current keyword-relevant candidates across reachable feeds; 4 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering Mistral Robostral Navigate, Cloudflare Drop, TetraMem-SK hynix in-memory computing, and SK AX manufacturing RX. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, physical AI/inference concept wiki, and wiki index.

## [2026-07-10] update | Add sandbox, supply-chain, GitHub governance, PQC, and ICS stories
- Checked current time at 2026-07-10 05:36 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google AI, Google Cloud, NVIDIA, The Hacker News, BleepingComputer, CISA, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,491 feed entries and 1,877 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 6 sourced stories covering GitHub dormant-account reconnaissance, npm 12 install-script hardening, Cloud Run Sandboxes, repository durable ownership, Cloudflare ML-DSA migration guidance, and OpenPLC v3 ICS risk. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images where available, concept wiki, and wiki index.

## [2026-07-10] update | Add ChatGPT Work and Tenda backdoor stories
- Checked current time at 2026-07-10 09:45 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Stack Overflow, and JetBrains feeds.
- Reviewed 2,471 feed entries and 334 current keyword-relevant candidates across reachable feeds; 5 feed endpoints failed or returned unavailable.
- Added 2 sourced stories covering ChatGPT Work enterprise workflow agents and Tenda firmware backdoor authentication. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, and wiki index.

## [2026-07-10] site | Localize UI metadata labels
- Checked current time at 2026-07-10 10:57 KST; no freeze guard was run per current project policy.
- Localized visible hero status labels and accessibility labels for site metadata, Top 6 display limit, view mode, update status, and filter groups.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-10] site | Localize section labels and search hint
- Checked current time at 2026-07-10 13:00 KST; no freeze guard was run per current project policy.
- Localized visible section labels and aria labels for weekly summary, Deep Dive, and news list.
- Updated the search placeholder to reflect current searchable fields: title, summary, tags, source, and implications.
- No real news content, source URLs, timestamps, or images were altered.
## [2026-07-10] update | Add Hy3, Flint, AWS MCP OAuth, and ingress-NGINX lifecycle stories
- Checked current time at 2026-07-10 13:53 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google AI, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 812 feed entries and 300 current keyword-relevant candidates across reachable feeds; 4 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering Tencent Hy3, Microsoft Flint, AWS MCP Server OAuth, and CNCF ingress-NGINX lifecycle guidance. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, concept wiki, and wiki index.

## [2026-07-10] update | Add sovereign AI, Meta infrastructure, and physical AI stories
- Checked current time at 2026-07-10 18:01 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,553 feed entries and 261 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 5 sourced stories covering HUMAIN-Cohere 50MW sovereign AI infrastructure, OpenAI/Google blacklist-customer access governance, Meta Iris AI chip/14GW capacity, Meta AI compute rental/model hosting options, and Anthropic-UST physical AI semiconductor verification.
- Oldest items were dropped after newest-first sorting to keep 50 items; Deep Dive count stayed at 2.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.

## [2026-07-10] validation | Require complete related links
- Checked current time at 2026-07-10 19:14 KST; no freeze guard was run per current project policy.
- Hardened `scripts/validate_weekly_news.py` so every `related_links[]` object must include non-empty string `title` and absolute `http(s)` `url` values.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-10] update | Add passkey phishing, power grid, Lightwell, AlphaEvolve, and GPU health stories
- Checked current time at 2026-07-10 22:09 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,493 feed entries and 317 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 6 sourced stories covering Microsoft Entra passkey registration phishing, DeepX-Avnet APAC AI-chip supply chain, Red Hat/IBM Lightwell open-source security, Homan AI/semiconductor cluster power-grid gap, Google Cloud AlphaEvolve GA, and SageMaker HyperPod Slurm deep health checks. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.

## [2026-07-11] update | Add agent evaluation, code-review workflow, LLM co-design, cache, and DMS agent stories
- Checked current time at 2026-07-11 02:18 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 762 feed entries and 284 current keyword-relevant candidates across reachable feeds; 4 feed endpoints failed or returned unavailable.
- Added 5 sourced stories covering Google Cloud Discovery Bench agent evaluation, GitHub Copilot code-review workflow tuning, NVIDIA hardware-friendly LLM design, Cloudflare Smart Tiered Cache public cloud region hints, and AWS DMS Schema Conversion MCP agent automation. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, concept wiki, and wiki index.

## [2026-07-11] site | Localize UI filter and badge labels
- Checked current time at 2026-07-11 03:27 KST; no freeze guard was run per current project policy.
- Localized visible static-site category/region/importance labels such as Cloud, Infra, Security, DevTools, Open Source, Korea, and Global while preserving JSON filter values.
- Updated the `app.js` cache-busting query string in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-11] update | Add local agent, Spark troubleshooting, HBM offload, and npm supply-chain stories
- Checked current time at 2026-07-11 06:31 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,673 feed entries and 381 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering Apple Silicon local AI-agent runtime demand, EMR on EKS Spark troubleshooting agent, NVIDIA JAX HBM host offloading, and Injective Labs GitHub/npm supply-chain compromise. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.

## [2026-07-11] site | Reset detail modal scroll on open
- Checked current time at 2026-07-11 07:33 KST; no freeze guard was run per current project policy.
- Reset the detail modal scroll position each time a news card or Deep Dive opens, preventing a previously scrolled modal from reopening midway through content.
- Updated the `app.js` cache-busting query string in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-11] site | Improve view-toggle keyboard focus
- Checked current time at 2026-07-11 09:36 KST; no freeze guard was run per current project policy.
- Added roving `tabindex` state to the 목록 보기/카드 보기 radiogroup so only the active view toggle is in the normal tab order while Arrow/Home/End navigation remains supported.
- Updated the `app.js` cache-busting query string in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-11] update | Add IP governance, semantic dataframes, sovereign AI, and firmware security stories
- Checked current time at 2026-07-11 10:34 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, and JetBrains feeds.
- Reviewed 2,593 feed entries and 225 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 5 sourced stories covering Apple-OpenAI trade-secret litigation, fenic Semantic DataFrames, CNCF sovereign AI workload placement, U-Boot firmware flaws, and ShareFile Storage Zone Controller emergency shutdown guidance. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images where available, concept wiki, and wiki index.

## [2026-07-11] site | Localize Deep Dive modal labels
- Checked current time at 2026-07-11 11:41 KST; no freeze guard was run per current project policy.
- Localized remaining Deep Dive modal metadata and badge labels (`Deep Dive`, `Summary`) to Korean UI labels while preserving data values.
- Updated the `app.js` cache-busting query string in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-11] update | Add AI combat training, Qwen hardware, Cursor Sand, and Apple-Broadcom stories
- Checked current time at 2026-07-11 14:44 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, JetBrains, and Google AI feeds.
- Reviewed 1,112 feed entries and 318 current keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 4 sourced stories covering UK MOD ACTS AI combat training, Alibaba Qwen smart-hardware adoption, Cursor Sand enterprise agent, and Apple-Broadcom semiconductor supply-chain expansion. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, physical AI and AI-agent concept wiki, and wiki index.

## [2026-07-11] site | Localize original-title UI label
- Checked current time at 2026-07-11 17:51 KST; no freeze guard was run per current project policy.
- Localized the visible original-title prefix from `Original:` to `원문 제목:` in news cards and regular news modals while preserving original titles from the data file.
- Updated the `app.js` cache-busting query string in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## 2026-07-11 18:59 KST - 자동 주간 뉴스 업데이트

- 피드 후보 검토: /tmp/probe_feeds.py 기준 2,358개 엔트리, 최근 7일 286개, 관련 후보 266개.
- 신규 반영: Ghostcommit 이미지 프롬프트 주입, Zimbra Classic Web Client 저장 XSS.
- 유지 정책: 기존 데이터에 신규 후보를 더한 뒤 최신 발행순으로 정렬하고 50건 상한을 유지.
- 결과: docs/data/weekly-news.json 50건, Deep Dive 2건으로 갱신.
- 검증: `python3 scripts/validate_weekly_news.py` 통과 (`weekly-news validation passed: 50 items, 2 deep dives`).

## [2026-07-11] site | Improve view-toggle keyboard navigation
- Checked current time at 2026-07-11 19:55 KST; no freeze guard was run per current project policy.
- Improved the list/card view radiogroup so ArrowLeft/ArrowRight wrap between choices and Home/End move to the first/last choice while preserving roving `tabindex` state.
- Updated the `app.js` cache-busting query string in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-11] site | Reserve news thumbnail dimensions
- Checked current time at 2026-07-11 21:59 KST; no freeze guard was run per current project policy.
- Added explicit thumbnail dimensions and CSS aspect ratios for news and Deep Dive images to reduce layout shifts while images load.
- Updated static CSS/JS cache-busting query strings in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-11] update | Add AI scraper, on-device inference, and Puzzle model stories
- Checked current time at 2026-07-11 23:04 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404 in this probe. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, JetBrains, and Google AI feeds.
- Reviewed 830 feed entries, 428 recent entries, and 379 keyword-relevant candidates across reachable feeds; 4 feed endpoints failed or returned unavailable.
- Added 3 sourced stories covering LWN/GeekNews AI scraper pressure on open web, PrismML 27B on-device inference, and NVIDIA Nemotron Puzzle inference optimization. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, source images, concept wiki, and wiki index.

## [2026-07-12] site | Harden JSON number validation
- Checked current time at 2026-07-12 00:02 KST; no freeze guard was run per current project policy.
- Hardened `scripts/validate_weekly_news.py` so non-standard JSON constants (`NaN`, `Infinity`, `-Infinity`) are rejected during parsing.
- Tightened score validation to require finite numeric values while continuing to reject bool-as-int edge cases.
- No real news content, source URLs, timestamps, or images were altered.

## [2026-07-12] update | Add NEvo and AI 2040 governance stories
- Checked current time at 2026-07-12 03:07 KST; no freeze guard was run per current project policy.
- Rechecked mandatory recurring surfaces: news.hada.io, news.hada.io/plus, aitimes.kr, and aitimes.com; GeekNews Plus RSS returned 404. Also sampled AWS, Google Cloud, Cloudflare, Docker, GitHub, GitLab, Hugging Face, Kubernetes, CNCF, NVIDIA, The Hacker News, BleepingComputer, CISA, Microsoft Security, Google Security, OpenAI, Anthropic, Azure, Stack Overflow, JetBrains, and Google AI feeds.
- Reviewed 2,473 feed entries, 358 recent entries, and 306 keyword-relevant candidates across reachable feeds; 3 feed endpoints failed or returned unavailable.
- Added 2 sourced stories covering NEvo brain-response-optimized AI video generation and AI 2040 Plan A compute-governance scenario. Oldest items were dropped after newest-first sorting to keep 50 items.
- Updated `docs/data/weekly-news.json`, `weekly/2026-W28.md`, raw source metadata, AI governance concept wiki, and wiki index.
- Validation passed: `python3 scripts/validate_weekly_news.py` reported `weekly-news validation passed: 50 items, 2 deep dives`.

## [2026-07-12] site | Harden backslash URL handling
- Checked current time at 2026-07-12 06:14 KST; no freeze guard was run per current project policy.
- Hardened browser and Python validation for data-driven external source/image URLs by rejecting raw or percent-decoded backslashes before URL rendering or JSON acceptance.
- Updated static CSS/JS cache-busting query strings in `docs/index.html`.
- No real news content, source URLs, timestamps, or images were altered.
