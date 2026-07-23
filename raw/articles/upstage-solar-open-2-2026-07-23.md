---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213090
title: “GPU 2장으로 고성능 에이전트 구동”…업스테이지 ‘솔라 오픈 2’ 공개
ingested: 2026-07-23
published: 2026-07-23 14:08 KST
sha256: 73c99f1c7c8f6cd6763e797fd9c3d73d352e5350a9cfa8ce10130532bade1bc5
tags: [ai, open-source, llm, moe, agent, inference, korea]
---

# 업스테이지 Solar Open 2 공개

## Source facts
- AI타임스는 업스테이지가 2026년 7월 23일 Solar Open 2를 공개했다고 보도했고, 기사 입력 시각은 14:08 KST임.
- 공식 Hugging Face model card는 `Solar-Open2-250B`를 250B-A15B open-weight LLM으로 설명하며, token당 15B active parameters를 명시함.
- 공식 구조 표에는 48 layer Hybrid-Attention MoE, 321 experts(320 routed + 1 shared), top-8 routed experts와 shared expert, 1M context, 영어·한국어·일본어 지원이 기재됨.
- 공식 hardware requirements는 minimum H200 4ea, recommended H200 8ea로 명시됨.
- model card에는 `INT4`, `NVFP4`, `INT4-GlobalPruned` quantization artifact와 vLLM·SGLang serving 예시가 제공됨.

## Source boundary
- AI타임스의 H200 2장 구동은 특정 양자화 변형에 관한 보도이며, 공식 base model의 일반 hardware requirement로 해석하지 않음.
- benchmark와 비용 효율 주장은 모델 카드·공급자 비교 조건에 한정되며 조직별 context length, concurrency, serving engine, GPU memory, tool retry에서 재현 검증 필요.
- 공개 가중치·상업적 활용 가능성은 license text, artifact provenance, 배포 정책을 조직이 별도 검토해야 하는 범위.

## Primary sources
- https://huggingface.co/upstage/Solar-Open2-250B
- https://huggingface.co/upstage/Solar-Open2-250B/blob/main/Solar_Open_2_Tech_Report.pdf
- https://www.upstage.ai/blog/en/solar-open-2
