---
source_url: https://blog.cloudflare.com/obsessive-inference-optimization/
title: Cutting our inference bill by 68% by being obsessive about optimization
ingested: 2026-10-20
published: 2026-10-20 04:12 KST
sha256: 4a76483507842f1db723d899a0919f3a958f8e8633f8a4a4cdb71dfb671e2934
tags: [cloudflare, ai-code-review, prompt-caching, model-routing, finops, devtools, global]
---
# Cloudflare AI 코드 리뷰어 inference 비용 최적화

Cloudflare 공식 원문을 기준으로 내부 AI 코드 리뷰어의 cache·routing 최적화 사례를 기록.

- 내부 고비용 2주 평균 review 비용: $2.43에서 $0.77로 68% 감소
- median review 시간: 4분 9초에서 1분 32초로 감소
- 절감 구성: reviewer code 최적화 약 40%, model·effort 실험 나머지 범위
- 관측: session당 평균 16.6 LLM call, cache hit 85.7%→97%, review당 token 0.91M→2.99M
- 구현: shared prompt prefix의 cache breakpoint 분리, repository-specific context 분리
- 검증: OpenCode v2를 canary repository에서 v1과 shadow 비교, approval decision 98% 일치 조건
- 경계: Cloudflare 내부 workload·provider·policy 관측치이며 일반 비용·품질 성과 보장 아님
