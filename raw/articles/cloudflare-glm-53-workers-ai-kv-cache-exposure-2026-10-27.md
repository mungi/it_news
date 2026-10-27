---
source_url: https://blog.cloudflare.com/kv-cache-exposure-remediation/
title: Cross-request KV cache exposure in the GLM-5.3 Workers AI model, and our remediation with SGLang
ingested: 2026-10-27
published: 2026-10-27 07:01 KST
sha256: 398743fc21a1d31c0167205e7a55355947f9344a11c3b7d9d7730ae5ead2fdbc
tags: [cloudflare, workers-ai, glm-5-3, sglang, kv-cache, inference, tenant-isolation, security, global]
---
# Cloudflare Workers AI GLM-5.3 교차 요청 KV cache 노출 및 SGLang 수정

Cloudflare 공식 incident report를 기준으로 GLM-5.3 Workers AI의 tenant isolation 노출 범위, root cause, 수정·upstream patch와 disaggregated inference 운영 검증 항목을 기록.

- 공개: 2026-10-26 22:01:23 UTC, KST 2026-10-27 07:01
- 영향 기간: 2026-08-27~2026-09-09, Workers AI `@cf/zai-org/glm-5.3` 단일 모델 범위
- 노출: 681,280 token 초과 prompt의 응답 155건에서 다른 고객의 직전 GLM-5.3 요청 데이터가 포함된 사례 확인
- 조사: HackerOne 제보 뒤 incident 선언 40분 이내 모델 비공개 처리, 고의 악용 증거는 찾지 못한 범위
- 원인 1: 1,048,576-token context window와 681,280-token prefill KV pool의 불일치
- 원인 2: disaggregated prefill/decode에서 pool 초과 요청이 one-token placeholder로 처리된 뒤 decode에 handoff되어 stale KV page를 읽은 SGLang rejection-path 결함
- 수정: prefill KV pool을 약 2.04M token으로 확장하고, rejection request를 handoff 전 admission queue에서 폐기하도록 engine patch 적용
- upstream: SGLang `v0.5.22` 이상 또는 관련 patch 적용을 권고. deferred KV release·Mooncake transfer batch bound·KV checksum/canary 지원 범위도 제시
- 경계: Cloudflare는 다른 Workers AI 모델 영향 없음과 모든 SGLang deployment hardening을 확인했으나, self-hosted/다른 topology가 자동으로 안전해졌다는 뜻은 아님
- 팀 액션: context length와 실제 KV pool을 prefill·decode node별 startup metric으로 검증하고, quantization·tensor parallelism·CUDA graph·memory fraction 변경마다 재검증
