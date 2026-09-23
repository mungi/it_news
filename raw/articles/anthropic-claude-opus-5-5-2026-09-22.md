---
source_url: https://www.anthropic.com/claude-opus-5-5
title: Introducing Claude Opus 5.5
created: 2026-09-23
ingested: 2026-09-23
published: 2026-09-22  # official source gives date only; KST time unavailable
sha256: f492642642060e864522014d54e0ef7d30ab35dad2f3d338062f236e2644978e
tags: [ai, foundation-model, agent, inference, finops, safety, global]
---
# Anthropic Claude Opus 5.5 공개

- Anthropic 공식 발표: 2026-09-22 publication date 확인, 원문에 정확한 시각·timezone 미기재
- image: 공식 Open Graph image `https://www-cdn.anthropic.com/images/4zrzovbb/website/f4d37a1d1f582f53f4e89440062b649b6273a093-1200x630.jpg`
- evidence boundary: 가격·속도·benchmark·안전성은 Anthropic 발표와 평가 범위임. tenant별 access, region, 실제 latency·quality·data path는 account canary로 별도 검증 필요

## 핵심 요약

- 공개: `Claude Opus 5.5`, Claude 5.5 family 첫 모델
- 비용: default setting typical workload 기준 Opus 5 대비 40% 낮다는 Anthropic test 결과
- 가격: input/output $4/$20 per 1M token, cache read $0.20 per 1M token
- 속도: Opus 5 대비 output generation 30% 이상 빠르다는 Anthropic test 결과
- 안전: automated behavioral audit·external evaluator 결과와 prompt injection·irreversible action 관련 개선 claim
- 운영: task success·cache hit·p95 latency·retry·tool permission·human correction을 shadow route로 대조 필요
