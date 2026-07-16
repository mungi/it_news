---
source_url: https://thinkingmachines.ai/news/introducing-inkling/
title: Inkling: Our open-weights model
ingested: 2026-07-16
published: 2026-07-15
sha256: 01da6d5d738d3b3b43dd607f5feba642e39b87a13e244162a1fe37d09302b902
tags: [ai, foundation-model, multimodal, inference, open-source]
---

# Thinking Machines Lab Inkling: 오픈 웨이트 멀티모달 MoE의 운영 검증 범위

- Thinking Machines Lab이 2026년 7월 15일 처음부터 학습한 첫 오픈 웨이트 모델 `Inkling` 공개
- 총 975B·활성 41B 파라미터 MoE Transformer, 최대 1M token 문맥을 원문이 명시
- 텍스트·이미지·오디오를 native하게 처리하며 45T token의 text·image·audio·video로 사전학습했다는 회사 설명
- Tinker에서 fine-tuning 지원, 활성 12B 파라미터 Inkling-Small preview를 함께 공개
- 성능·비용·안전성은 회사가 공개한 benchmark와 제품 설명의 범위이며 조직별 prompt·context·serving stack replay 필요
- 1M context·multimodal·fine-tuning 도입은 KV cache, GPU memory, data lineage, egress·retention을 같은 release gate로 검증 필요

## Source

- https://thinkingmachines.ai/news/introducing-inkling/
- 원문 게시일: 2026-07-15, 정확한 시각 미공개
- 원문에서 확인: full weights, 975B total/41B active, 1M context, 45T pretraining tokens, Tinker fine-tuning, Inkling-Small preview
