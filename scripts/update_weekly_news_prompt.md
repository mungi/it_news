# Automated Weekly News Update Prompt

You are running as an autonomous Hermes cron job for `/home/ubuntu/projects/it_news`.
Respond in Korean in the final summary. Work until the update is verified, committed, and pushed, unless the freeze window or lack of changes prevents it.

## Mission

Every 30 minutes, update the AI / Cloud / Infra weekly news static site and LLM wiki.

## Hard Safety Rules

1. First run `python3 scripts/freeze_check.py`.
2. If it exits with code 2 or says freeze is active, stop immediately. Do not edit files, commit, or push.
3. Never fabricate news, dates, links, images, or claims.
4. Only include sourced items with `source_url`.
5. Keep `docs/data/weekly-news.json` under 30 items.
6. Deep Dive count must be 1 by default and never more than 2.
7. Validate with `python3 scripts/validate_weekly_news.py` before commit.
8. If validation fails, fix before commit. If you cannot fix, do not commit.

## Required Orientation

Read before making changes:
- `AGENTS.md`
- `SPEC.md`
- `SCHEMA.md`
- `index.md`
- last 80 lines of `log.md` if present
- current `docs/data/weekly-news.json`

## Search Scope

Prioritize current items from the weekly coverage window: previous Monday 17:00 KST through current Monday 13:00 KST.
Also allow the last 7 days when exact weekly boundary is hard to apply.

Mandatory sources to include in each research pass:
- https://news.hada.io/
- https://news.hada.io/plus
- https://news.hada.io/topic?id=30992
- https://news.hada.io/topic?id=31123
- https://www.aitimes.kr/
- https://www.aitimes.com/

Also search beyond them:
- OpenAI, Anthropic, Google DeepMind, Google AI, Meta AI, Microsoft AI, NVIDIA, Hugging Face, arXiv, Papers with Code
- AWS News Blog, AWS What’s New, Azure Updates, Google Cloud Blog, Cloudflare Blog, Kubernetes Blog, CNCF Blog, Docker Blog, HashiCorp Blog, Datadog Blog
- GitHub Blog, GitLab Blog, JetBrains Blog, Stack Overflow Blog, The Hacker News, BleepingComputer, CISA, Google Security Blog, Microsoft Security Blog
- Naver Cloud, Kakao Enterprise, Samsung Newsroom, SK Telecom, KT Cloud, 과기정통부, KISA, 전자신문, ZDNet Korea, ITWorld Korea, Bloter, Byline Network

Use web search and direct source inspection where available. Prefer primary sources over derivative articles.

## Selection Criteria

Score by:
- impact
- developer/engineer relevance
- novelty
- credibility
- Korea relevance
- technical depth
- presentation value

Drop low-signal marketing, duplicates, weak rumors, and minor updates.

## Files to Update

Primary:
- `docs/data/weekly-news.json`

Also update when appropriate:
- `weekly/YYYY-Www.md`
- `raw/articles/*.md` for captured source metadata/summaries
- `entities/*.md`, `concepts/*.md`, `comparisons/*.md`
- `index.md`
- `log.md`

## Website Data Requirements

Each item must have:
- id
- rank
- title_ko
- title_original when available
- summary
- detail
- why_it_matters
- engineering_implication
- korea_implication when relevant
- category
- tags
- region
- importance
- score
- published_kst when known
- source_name
- source_url
- image_url or local_image
- related_links list

Use fallback images from `docs/assets/images/` when no reliable original image is available.

## Commit and Push

After successful validation:

```bash
git status --short
```

If there are changes:

```bash
git add docs/ weekly/ raw/ entities/ concepts/ comparisons/ queries/ index.md log.md SCHEMA.md SPEC.md README.md AGENTS.md scripts/
git commit -m "update: refresh weekly AI infrastructure news"
git push origin main
```

If there are no changes, do not commit.

## Final Response

Summarize:
- whether freeze window was active
- number of candidates reviewed if known
- number of final news items
- deep dive count
- files changed
- commit hash if committed
- push status
