---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=42323
title: 메타, 8,160억 파라미터·42B active MoE 오픈 웨이트 `Muse Spark Open` 공개
ingested: 2026-10-16
published: 2026-10-16 11:10 KST
sha256: ffd028a5ab1e6b1a386ec49df75a7d4f467732e3bf68517a7797c3e681fefbc6
tags: [ai, model-evaluation, governance, global]
---

# 메타 `Muse Spark Open` 오픈 웨이트 모델 공개

- 모델: 총 **8,160억 parameter**, token당 약 420억 active parameter MoE, 62 transformer layer·256 expert·token당 8개 expert라는 기사 수록 범위
- 입력·context: text·image·audio·video와 최대 100만 token context를 지원한다고 설명
- 배포: Hugging Face, AWS SageMaker AI, Google Cloud Model Garden, Microsoft Foundry Models 및 SGLang·vLLM·TensorRT-LLM·Transformers·MLX·llama.cpp 경로 제시
- 실행 사례: M5 Ultra·512GB unified memory Mac Studio 2대를 연결한 Meta 사례이며, 일반 PC 실행성 또는 production SLO 보장 아님
- 라이선스: open weight는 학습 데이터·훈련 과정 전체 공개나 무제한 상업 사용을 뜻하지 않음. `Muse Model License` 조건 별도 검토 필요

## 운영 경계

- total/active parameter, context limit, quantization format만으로 memory·throughput·cost를 환산하지 않음
- self-hosting과 managed endpoint 모두 tool permission·egress·secret·data retention·rollback control을 별도 설계 필요
- vendor demo와 benchmark는 target hardware·context·concurrency·tool trace의 canary로 재검증 필요
