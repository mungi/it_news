---
source_url: https://huggingface.co/thinkingmachines/Inkling-Small
title: Thinking Machines Lab Inkling-Small open weights
ingested: 2026-08-01
published: 2026-08-01  # exact clock from related AI타임스 report: 13:36 KST
sha256: 01a4937ed552d4805fd4fc6208944b0ffa0c56d3846ebcfc94484c86dc95676f
tags: [ai, foundation-model, multimodal, inference, open-source, global]
---

# Thinking Machines Lab Inkling-Small 공개 가중치

- 원문: https://huggingface.co/thinkingmachines/Inkling-Small
- 관련 보도: https://www.aitimes.com/news/articleView.html?idxno=213436
- 확인 시각: 2026-08-01 15:02 KST

## 확인된 사실

- Hugging Face model card에서 `Inkling-Small`은 text·image·audio 입력과 text 출력용 general-purpose multimodal open-weight model로 표기
- 42-layer decoder-only transformer와 sparse MoE feed-forward backbone, token당 256 expert 중 6개와 shared expert 2개 활성 구조로 설명
- 파라미터 `276B total`, `12B active`; BF16·NVFP4 지원 표기
- SGLang·vLLM·TokenSpeed·Unsloth·Hugging Face local deployment recipe 연결 확인
- AI타임스 보도는 최대 1M context, Artificial Analysis 256K-context 평가, intelligence index 40점·HLE 31.6%·SWE-Bench Verified 80% 이상을 인용

## 해석 경계

- benchmark·context·성능 수치는 model card와 AI타임스 보도 범위이며, 독립 재현·조직 workload·하드웨어·동시성·지연·비용·지원 SLA 보증으로 확대하지 않음
- 공개 가중치 도입은 model artifact·license·serving recipe와 GPU memory·context cache·tool-use safety·data boundary를 분리 검증하는 조건
