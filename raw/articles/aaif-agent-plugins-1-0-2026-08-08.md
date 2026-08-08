---
source_url: https://aaif.io/blog/from-skills-and-tools-to-portable-agent-plugins
title: From Skills and Tools to Portable Agent Plugins
ingested: 2026-08-09
published: 2026-08-08 19:15
sha256: 57b6057b5fbaf293483e0d1d4b3b4994c9d93df457798ae61714a3ec8d2e9d6a
tags: [ai, agent, devtools, open-source]
---

- AAIF guest post: `Agent Plugins 1.0`은 Agent Skills와 MCP server 구성을 여러 호환 agent client에서 배포·발견할 수 있게 하는 open, vendor-neutral package format임
- 1.0 package contract: root `plugin.json` manifest, `skills/` 아래 Agent Skills, root `mcp.json`의 MCP server configuration, client namespace directory로 구성됨
- 표준 범위: Skills·MCP의 native format이나 agent behavior를 대체하지 않으며, install, permission, UX, client-specific capability는 각 client 책임으로 남음
- 운영 경계: fixed directory format이 skill/script와 MCP server configuration의 신뢰성·권한·secret·network egress를 검증하거나 서명하지 않으므로 ingestion 전 provenance·manifest diff·permission review·sandbox 검증 필요
- 발행 시각: AAIF primary page는 `August 6, 2026` 날짜만 표시함. AI타임스 secondary page의 `article:published_time` `2026-08-08T17:59:43+09:00`은 current news ordering reference이며 AAIF 원문의 정확한 발행 시각 주장이 아님
