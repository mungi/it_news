---
source_url: https://blog.cloudflare.com/agentic-security-operations/
title: Building an evidence-grounded agentic security operations harness on Cloudflare
created: 2026-10-08
ingested: 2026-10-08
published: 2026-10-08 01:30 KST
sha256: 6bc24cfb8dd9195b8848d2281b2f42cc3609102d73f9bd74537dd0455ad435a4
tags: [ai, cybersecurity, agent, cloud, observability, global]
---
# Building an evidence-grounded agentic security operations harness on Cloudflare

- Cloudflare Managed Defense가 Workers·global network telemetry 기반의 다중 agent 보안 분석 harness 구조를 공개
- 고정된 versioned API reconnaissance으로 identity·detection history·traffic baseline·enforcement outcome·network observation을 source·version·timestamp와 함께 수집
- triage에는 Workers AI의 Clef를 사용하고, 심층 분석에는 coordinator와 traffic·customer context·threat intelligence·synthesis specialist 4개 agent를 병렬 사용
- specialist는 사전 승인된 evidence package만 인용하며 application code가 citation의 investigation scope와 claim 지지 여부를 검증
- Workers가 evidence admission·result validation, Workflows가 단계별 durable orchestration, D1·R2·Durable Objects가 investigation state·bounded artifact·case chat을 담당
- Cloudflare Managed Defense의 구현 사례이며 모든 Cloudflare 제품 또는 고객 환경의 자동 분류 정확도·모델 availability·SLA를 보장하는 발표는 아님
