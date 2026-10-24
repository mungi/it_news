---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-web-search-domain-user-location/
title: Web Search on AWS Bedrock now supports domain filtering and user location controls
ingested: 2026-10-24
published: 2026-10-24 06:04 KST
sha256: 7d789afab0456da9186b81755af2a53b0881d7262308703b1cf7a4a4801c9b5e
tags: [aws, bedrock, web-search, grounding, agent, governance, ai, cloud, global]
---

# AWS Bedrock Web Search domain filtering·user location controls

AWS What’s New RSS `Fri, 23 Oct 2026 21:04:00 GMT`와 canonical announcement embedded `postDateTime` `2026-10-23T21:04:00Z`를 대조해 KST `2026-10-24 06:04` 기준으로 기록.

- 공개: 기존 OpenAI Responses API 요청의 `web_search` tool에 domain filtering·user location controls 추가
- domain filter: `filters`에서 최대 100개 `allowed_domains`로 trusted source만 허용하거나 최대 100개 `blocked_domains`로 제외 가능
- location: regional availability·local services처럼 geography에 의존하는 질의에 optional location parameter 전달 범위
- 제공: US East (N. Virginia)·US East (Ohio)·US West (Oregon)·AWS GovCloud (US-West)의 Web Search 지원 범위
- 경계: domain allow/block이 인용 정확도·문서 freshness·prompt injection 차단·답변 품질을 보장하는 범위 아님
- 경계: user location control이 위치 데이터 granularity·retention·cross-border data path·privacy compliance를 자동으로 충족하는 근거 아님
- 팀 액션: 업무별 trusted-domain manifest·owner·review cadence와 blocked-domain emergency update를 versioned config로 관리
- 팀 액션: read-only canary에서 citation domain·filter hit·fallback·location on/off quality·latency·data path를 trace로 검증
