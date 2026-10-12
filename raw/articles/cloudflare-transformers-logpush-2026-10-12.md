---
source_url: https://blog.cloudflare.com/transformers-on-logpush/
title: Filter, reshape, and redact logs before export with Transformers
created: 2026-10-13
ingested: 2026-10-13
published: 2026-10-12 23:44 KST
sha256: b2d61232d29e5c4321a2d8a61911bc608e0f61585c3a4890e84b9078c464f0e5
tags: [cloud, infra, observability, cybersecurity, data, global]
---
# Cloudflare Logpush Transformers

- Cloudflare 공식 원문 `article:published_time`: `2026-10-12T14:44:59.492Z`, KST `2026-10-12 23:44`
- 제공: Logpush export pipeline에서 SQL로 log stream filter·redaction·reshape 수행
- 대상: SIEM·analytics platform·object storage로 전달하는 Cloudflare log stream
- 원문 예시: health check 제거, sensitive field omission, dashboard·investigation용 record 구조 변경
- 원문 범위: Logpush는 batch를 가능한 한 빨리 전달해 near-real-time 정보를 제공한다는 설명, self-service plan 제공과 Transformers GA 언급
- 경계: destination별 parser 호환성·retention·access control·delivery SLA·query failure fallback은 원문에서 일반 보장하지 않음
- 팀 액션: source field inventory·destination allowlist·query digest·test fixture·approval owner·rollback query를 같은 change record로 관리하고 drop rate·parse failure·delivery lag·alert coverage를 canary로 확인 필요
