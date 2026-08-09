---
source_url: https://blog.cloudflare.com/introducing-radar-researcher/
title: Introducing Radar Researcher: An AI tool for exploring Internet data in plain language
ingested: 2026-08-10
published: 2026-08-07 22:00 KST (article:published_time 2026-08-07T13:00:00.000Z)
sha256: 6977715d110599074e4ececc151f983c7e49535ddd28c0ae5ae6059d98be2bf5
tags: [ai, infra, observability, cloud, global]
---
- Cloudflare 공식 공지: Radar Researcher beta가 natural-language question을 Radar API 기반 answer·interactive chart로 연결
- data provenance: chart screenshot, exact Radar API data, location·date range·filter parameter를 함께 전달하며 API path를 참조하는 chart spec을 frontend가 기존 component로 render
- runtime: Worker·Agents SDK, conversation별 Durable Object·SQLite, Workers AI의 Kimi K2.7 등을 포함한 세 model-family fallback, AI Gateway logging·cost tracking·cache·safety guardrail 조합
- tool contract: unified Cloudflare MCP server Code Mode에서 search·execute·docs 세 tool로 OpenAPI spec을 탐색하고 live API query code를 실행하는 source 설명
- evidence boundary: beta SLA·pricing·data completeness·tenant isolation·model output accuracy는 공식 글이 보장하지 않은 조직별 검증 항목
