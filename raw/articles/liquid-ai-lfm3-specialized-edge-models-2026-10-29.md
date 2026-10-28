---
source_url: https://www.liquid.ai/blog/lfm3
title: Introducing LFM3: Every Modality for Specialized Intelligence
ingested: 2026-10-29
published: 2026-10-27
sha256: 82613f8cf8b46c7736ceca3c0d252615b998b8807f98c6c0ea6377bec993880f
tags: [ai, foundation-model, multimodal, inference, edge, open-source, global, release]
---

# Liquid AI LFM3: specialized edge intelligence용 2B급 open-weight 모델 family

- Liquid AI가 `LFM3-1.7B-Base` 기반 text·vision·audio·omni·decision 6개 2B-class 모델 공개
- base 모델은 22T token 사전학습, 24 layers의 gated short convolution 13개·sliding-window attention 5개·global attention 6개로 구성한 tri-hybrid architecture 설명
- text 모델은 256K context window, 4-bit 약 1GB footprint, single-GPU fine-tuning 경로를 제시
- base·post-trained weights를 Hugging Face, Playground, Liquid AI API로 제공
- device·private server·cloud deployment와 modality별 workload 선택을 제시하지만, benchmark·throughput·memory는 vendor 측정 범위

## 운영 해석

- open-weight·local deployment는 tool permission, telemetry egress, model update provenance, external fallback 통제를 자동 해결하지 않음
- model·adapter·quantization·runtime·prompt·tool schema를 단일 deployable unit으로 버전·hash·evaluation record에 연결 필요
- target device에서 cold start, memory, thermal, task success, abstention, p95 latency, fallback, recovery를 함께 측정 필요
- risky external write는 allowlist, user approval, rate limit, audit, rollback을 결합한 release gate 필요
