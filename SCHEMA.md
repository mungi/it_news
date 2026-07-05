# Wiki Schema

## Domain
AI, Cloud, and IT news intelligence for a weekly Korean presentation delivered every week at KST 11:00.

Scope includes:
- AI: foundation models, agents, AI products, AI chips, regulation, benchmarks, enterprise AI adoption
- Cloud: AWS, Azure, Google Cloud, Oracle Cloud, cloud-native, Kubernetes, serverless, edge, FinOps, outages
- IT: cybersecurity, developer tools, databases, SaaS, enterprise software, semiconductors, open source, major platform changes

Primary output: a continuously updated LLM-wiki-style knowledge base plus weekly presentation material in `weekly/`.

## Operating Cadence
- Automated update cadence: every 30 minutes.
- Each run should prioritize sources published or updated within the last 7 days, measured in KST.
- Weekly presentation target: KST 11:00 every week.
- Presentation language: Korean.
- Times must be stated in KST unless quoting an original timestamp.

## Directory Structure
- `raw/articles/`: immutable captured web/news/article sources with provenance frontmatter
- `raw/papers/`: papers, technical reports, PDFs
- `raw/transcripts/`: copied transcripts, announcement text, talks, calls
- `entities/`: organizations, products, models, people, standards bodies
- `concepts/`: topics and technical concepts
- `comparisons/`: side-by-side analyses and market/technical comparisons
- `queries/`: substantial synthesized answers worth preserving
- `weekly/`: weekly Korean briefing and presentation material
- `templates/`: reusable markdown templates
- `scripts/`: helper scripts
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
tags: [ai, cloud, it]
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
tags: [ai, cloud, it]
---
```

## Tag Taxonomy
Use only these tags unless this schema is updated first:
- Domain: ai, cloud, it
- AI topics: foundation-model, agent, multimodal, benchmark, ai-chip, inference, training, safety, regulation, enterprise-ai
- Cloud topics: aws, azure, google-cloud, oracle-cloud, kubernetes, serverless, edge, finops, outage, cloud-security
- IT topics: cybersecurity, devtools, database, saas, open-source, semiconductor, operating-system, networking, privacy
- Analysis: market, product, release, research, policy, security, funding, mna, earnings, controversy, prediction
- Output: weekly-briefing, presentation, timeline, comparison

## Page Thresholds
- Create/update a page when an entity or topic is central to a source, appears in 2+ sources, or is important for the weekly presentation.
- Do not create pages for passing mentions.
- Split pages over ~200 lines.
- Mark uncertain or single-source claims as `confidence: medium` or `low`.

## Weekly Presentation Format
Each weekly file in `weekly/YYYY-Www.md` should include:
1. Executive summary: 5 bullets max
2. Top 10 stories: ranked by impact for Korean IT/AI/cloud audience
3. Deep dives: 3–5 items with context, why it matters, risks, what to watch next
4. Timeline: notable dates in KST
5. Market/product implications
6. Slide outline: 10–15 slides, Korean titles and speaker notes
7. Source appendix with links to raw files and original URLs

## Update Policy
When new information conflicts with existing content:
1. Compare publication dates and source reliability.
2. Preserve both claims if unresolved.
3. Add a contradiction note and lower confidence.
4. Flag the item in the weekly briefing if decision-relevant.
