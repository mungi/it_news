---
source_url: https://blog.cloudflare.com/workers-on-demand-profiling/
title: Introducing on-demand CPU and memory profiling with flamegraphs for Workers and Durable Objects
created: 2026-10-10
ingested: 2026-10-10
published: 2026-10-09 22:00 KST
sha256: 92780415fa89e33cba0c71321110d32f2de92097187aee5c35cba7c7f017d86b
tags: [cloud, infra, observability, serverless, devtools, global]
---
# Cloudflare Workers·Durable Objects on-demand profiling

- Cloudflare 공식 원문 `article:published_time`: `2026-10-09T13:00:00Z`, KST `2026-10-09 22:00`
- 제공: Cloudflare Workers와 Durable Objects production에서 CPU·memory profile을 생성하고 interactive flamegraph로 확인하는 기능
- 진입: Worker 상세의 `Observability` 탭에서 `Flamegraph`를 선택하는 dashboard 경로를 원문이 제시함
- 사례: Cloudflare 내부 R2 binding Worker에서 50초 CPU trace로 낭비되는 CPU 경로를 분석한 사례, heap profile에서 Prometheus 관련 code path가 allocation의 약 66.7%를 차지한 사례를 제시함
- 경계: 원문은 모든 account의 plan·가격·sampling overhead·retention·export/접근 통제를 보장하지 않음
- 팀 액션: source map, profile 실행 권한, production traffic 영향, profile artifact의 데이터 노출 가능성을 사전 점검하고 baseline·rollback 기준과 함께 canary 실행 필요
