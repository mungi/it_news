---
source_url: https://github.com/llm-d/llm-d/releases/tag/v1.0.0
title: Release v1.0.0
ingested: 2026-10-21
published: 2026-10-20 11:30 KST
sha256: 76988432b4b21dbc382e0cb0d9772f5daa8df8b67c5a7b0dc432abc68e48d09a
tags: [ai, infra, inference, kubernetes, devops, open-source, global, release]
---
# llm-d v1.0.0 분산 추론 운영 릴리스

llm-d GitHub v1.0.0 release를 기준으로 agent workload용 distributed inference control plane 변경을 기록.

- release: GitHub `v1.0.0`, 2026-10-20 02:30:10 UTC 공개
- multi-tenant QoS: priority·fairness-aware flow control, controlled load shedding, `flowControl` 설정 통합
- availability: router hot standby·safe rolling update, prefill/decode replica의 coordinated rollout·lockstep upgrade를 위한 `DisaggregatedSet`
- agent serving: `previous_response_id`, session-state-producer, evolving session affinity를 통한 cached context 근접 배치 범위
- topology: DRA/DRANET accelerator guide와 GPU topology·network diagnostics `llm-d-pd-utils` 추가
- image lifecycle: `llm-d-rocm` 자체 image stream deprecation 및 upstream vLLM image 이동 예고
- 경계: release note는 개별 조직의 latency·GPU utilization·비용·무중단 성공률을 보장하지 않음
- 팀 액션: image·chart·CRD·router·model server version matrix, admission·queue·cache·p95·rollback canary를 동시 검증
