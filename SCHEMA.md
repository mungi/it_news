# Wiki Schema

## Domain
AI, Cloud, Infra, and selected IT news intelligence for a weekly Korean static news website and Monday presentation.

Scope includes:
- AI: foundation models, agents, AI products, AI chips, regulation, benchmarks, enterprise AI adoption
- Cloud: AWS, Azure, Google Cloud, Oracle Cloud, cloud-native, Kubernetes, serverless, edge, FinOps, outages
- Infra: Kubernetes, networking, observability, platform engineering, DevOps, SRE, databases, cloud security
- IT: cybersecurity, developer tools, SaaS, enterprise software, semiconductors, open source, major platform changes

Primary output:
- `docs/`: GitHub Pages static weekly news website
- `weekly/`: weekly Korean briefing archive
- LLM Wiki pages under `entities/`, `concepts/`, `comparisons/`, `queries/`

## Operating Cadence
- Automated news update cadence: every 4 hours.
- Each run should prioritize sources published or updated within the weekly window.
- Weekly coverage window: previous Monday 17:00 KST through current Monday 13:00 KST.
- Presentation language: Korean.
- Times must be stated in KST unless quoting an original timestamp.

## Required Source Coverage
Recurring update jobs must include these sources and also search beyond them:
- https://news.hada.io/
- https://news.hada.io/plus
- https://www.aitimes.kr/
- https://www.aitimes.com/

User-provided links are one-off editorial examples/candidate stories unless explicitly promoted to recurring sources. Do not keep old individual article links in the recurring source list.

Other source classes:
- Global AI: OpenAI, Anthropic, Google DeepMind, Google AI, Meta AI, Microsoft AI, NVIDIA, Hugging Face, arXiv, Papers with Code
- Global Cloud/Infra: AWS, Azure, Google Cloud, Cloudflare, Kubernetes, CNCF, Docker, HashiCorp, Datadog
- Security/Dev/IT: GitHub, GitLab, JetBrains, Stack Overflow, The Hacker News, BleepingComputer, CISA, Google Security, Microsoft Security
- Korea: Naver Cloud, Kakao Enterprise, Samsung, SK Telecom, KT Cloud, 과기정통부, KISA, 전자신문, ZDNet Korea, ITWorld Korea, Bloter, Byline Network

## Directory Structure
- `docs/`: GitHub Pages static site
- `docs/data/weekly-news.json`: website data contract
- `docs/assets/images/`: fallback and cached images
- `raw/articles/`: immutable captured source metadata/content
- `raw/papers/`: papers, technical reports, PDFs
- `raw/transcripts/`: copied transcripts, talks, calls
- `raw/assets/`: non-site source assets
- `entities/`: organizations, products, models, people, standards bodies
- `concepts/`: topics and technical concepts
- `comparisons/`: side-by-side analyses
- `queries/`: substantial synthesized answers worth preserving
- `weekly/`: weekly Korean briefing archive
- `templates/`: reusable templates
- `scripts/`: helper scripts and prompts
- `_meta/`: source lists, topic maps, operational notes

## Conventions
- File names: lowercase, hyphenated, no spaces, ASCII where practical.
- Every wiki page starts with YAML frontmatter.
- Use `[[wikilinks]]` for cross-references.
- Every new or materially updated page must be listed in `index.md`.
- Every update run must append to `log.md`.
- Raw source files are immutable after capture. Corrections and synthesis belong in wiki pages.
- Avoid duplicate raw source capture by checking `source_url:` and `sha256:`.
- Prefer primary sources when available: company blogs, release notes, official docs, regulatory filings, standards bodies, GitHub repos, papers.
- For news interpretation, distinguish facts, vendor claims, analyst interpretation, and speculation.

## Frontmatter for Wiki Pages
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary | weekly
tags: [ai, cloud, infra]
sources: [raw/articles/source-name.md]
confidence: high | medium | low
---
```

## Frontmatter for Raw Sources
```yaml
---
source_url: https://example.com/article
title: Source Title
ingested: YYYY-MM-DD
published: YYYY-MM-DD  # if known
sha256: <hex digest of body after frontmatter>
tags: [ai, cloud, infra]
---
```

## Tag Taxonomy
Use only these tags unless this schema is updated first:
- Domain: ai, cloud, infra, it
- AI topics: foundation-model, agent, multimodal, benchmark, ai-chip, inference, training, safety, regulation, enterprise-ai
- Cloud topics: aws, azure, google-cloud, oracle-cloud, kubernetes, serverless, edge, finops, outage, cloud-security
- Infra topics: devops, sre, observability, networking, platform-engineering, database, storage, cicd
- IT topics: cybersecurity, devtools, database, saas, open-source, semiconductor, operating-system, privacy
- Regions: korea, global
- Analysis: market, product, release, research, policy, security, funding, mna, earnings, controversy, prediction
- Output: weekly-briefing, presentation, timeline, comparison, static-site

## Page Thresholds
- Create/update a page when an entity or topic is central to a source, appears in 2+ sources, or is important for the weekly presentation.
- Do not create pages for passing mentions.
- Split pages over ~200 lines.
- Mark uncertain or single-source claims as `confidence: medium` or `low`.

## Weekly Website Format
Each `docs/data/weekly-news.json` should include:
1. Executive summary: 3-5 Korean bullets
2. 중요 소식 stories: about 5-8
3. Total stories: up to 50, target 40-50 when enough high-value sourced items exist; final ordering is `published_kst` newest-first, and items beyond 50 are dropped from the oldest end
4. Deep dives: 1 by default, 2 maximum; when 2 entries exist, every selection refreshes once per KST calendar day with distinct credible candidates, replacing prior-day topics when available
5. KST timeline metadata
6. Source appendix via `source_url` and `related_links`
7. Modal detail content: use `detailed_content` when possible so card and Deep Dive click-through views are not thin.

`detailed_content` shape:

```json
[
  {
    "heading": "무슨 일이 있었나",
    "body": "한글 상세 설명",
    "items": ["핵심 bullet 1", "핵심 bullet 2"]
  }
]
```

Deep Dive refresh fields:

```json
{
  "refreshed_kst": "YYYY-MM-DD HH:mm",
  "refresh_note": "Optional; only when no credible replacement exists"
}
```

Rules:
- Use Korean.
- Use the user's GeekNews GN⁺ article-summary format as the default summarization standard: translated title, 4-6 chronological 핵심 요약 bullets, `---`, then `##` body sections sized to source length.
- Preserve original numbered/level/step structures as section headings when present. Otherwise divide by argument, concept, technical component, phase, or chronological event.
- Every summary/detail bullet must use noun-form endings such as `~함`, `~음`, `~임`, `~됨`, `확인`, `공개`, `요구`, `필요`, `리스크`, or `운영 과제`; do not use `~다`, `~습니다`, or `~해요` endings.
- Each core-summary bullet must include one main claim plus one supporting fact, number, example, or condition. Keep core summaries to 4-6 bullets regardless of article length.
- Use `- ` for section bullets and `  * ` nested bullets for examples, quotes, conditions, and implementation details. Preserve important fenced code blocks from source articles.
- Avoid first-person and meta phrasing such as `나는`, `저는`, `이 글은`, `요약하면`, and `저자에 따르면`. Do not add opinions or interpretation not present in the source.
- Regular item `detailed_content` must have at least 4 sections and 8 concrete bullets, covering `무슨 일이 있었나`, `본문 핵심 포인트`, `왜 중요한가`, and `시사점` or equivalent headings.
- Regular item `상세 내용` must include the source article's main body facts, numbers, affected systems, scope, constraints, and engineering implications when present. The modal should not omit core content that a presenter needs.
- End regular item detail bullets in 명사형 종결 / briefing fragments such as `확인`, `공개`, `추가`, `요구`, `필요`, `대상`, `가능성`, `리스크`, `운영 과제`; avoid repeated `합니다/했습니다/됩니다` endings.
- Writing principles: minimal rhetoric, top-loaded conclusion, factual/objective tone, accurate technical terminology, and **개조식(箇條式)** instead of long prose paragraphs.
- All visible story summaries and modal detail bodies should use structured bullet-style briefing text: labels such as `핵심/배경/변화/영향/시사점`, complete useful clauses, and no source-led sentence forms such as `OO는 ... 보도했습니다`. Do not reduce text to awkward keyword fragments that lose context.
- Include a `시사점` item for each story: the industry's likely impact or a short developer/engineer implication grounded in the source. Store it in `engineering_implication`.
- Prefer clear headings and bullets over long unstructured paragraphs.
- For Deep Dive entries, go beyond a summary. Write from an AI/Infra expert and consultant perspective with at least 7 structured sections and 1,800+ Korean characters. Required angles: original/source facts, AI/Infra expert interpretation, architecture/operations impact, cost/FinOps or security/governance perspective, adoption roadmap when relevant, developer/infra checklist, and `강조 메세지`.
- On the first update run of each KST date, select new Deep Dive story/events from the current coverage window for every existing entry when credible replacements exist. When two entries are present, use distinct topics and non-overlapping primary sources; rebuild every Deep Dive's full content instead of timestamp-only churn.
- Store the actual update time in every Deep Dive's `refreshed_kst`. Keep a topic only when no credible replacement exists and record the verifiable reason in `refresh_note`; do not fabricate a daily change.
- For GeekNews/GN⁺ source summaries, use GeekNews체: **not narrative prose**. Use compact Korean fragments/bullets, noun phrases, `변화/볼 것/피할 것/팀 액션` decision points, concrete facts first, no filler, and **bold** only decision-critical terms or metrics.
- The UI label is `상세 내용`, not `상세 요약`.
- Keep prose compact and professional. Use direct technical wording instead of generic LLM-style filler.
- Avoid AI-sounding phrases such as `핵심은`, `중요한 것은`, `주목할 만합니다`, `시사합니다`, `보여줍니다` when they add no information. Replace them with the actual technical fact or operational consequence.
- Avoid inflated trend language such as `패러다임 전환`, `게임 체인저`, `새로운 시대`, `혁신적인`, `복잡한 환경`, `빠르게 진화하는`, `중요한 이정표` unless the source uses it and the claim is justified.
- Prefer short Korean sentences. One sentence should usually carry one claim: source, fact, impact, or action.
- Do not end sections with generic upbeat conclusions. End with a concrete engineering implication, risk, metric, or next action.

## Weekly Markdown Archive Format
Each weekly file in `weekly/YYYY-Www.md` should include:
1. Executive summary: 5 bullets max
2. Top stories ranked by impact for Korean IT/AI/cloud/infra audience
3. Deep dive: 1 item by default, 2 max
4. Timeline: notable dates in KST
5. Market/product/engineering implications
6. Source appendix with raw files and original URLs

## Update Policy
When new information conflicts with existing content:
1. Compare publication dates and source reliability.
2. Preserve both claims if unresolved.
3. Add a contradiction note and lower confidence.
4. Flag the item in the weekly briefing if decision-relevant.
