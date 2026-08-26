---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41603
title: 오픈AI, 자체 AI 추론칩 ‘할라페뇨’ 성능 전격 공개… “와트당 AI 처리량·응답속도 모두 잡았다”
ingested: 2026-08-27
published: 2026-08-26 09:49 KST
sha256: f7563623e43b02a6ed8818746eb83f7efae9eb5dda33349b343ed6e2d4947125
tags: [openai, ai-chip, inference, ai-infrastructure, hbm4, finops]
---
인공지능신문은 OpenAI가 자체 AI 추론 전용 ASIC `Jalapeño`의 첫 성능 결과를 공개했다고 보도함. 기사에 직접 연결된 OpenAI 원문 URL은 확인하지 못했으므로 아래의 성능·architecture·roadmap 정보는 timestamped 한국어 보도가 OpenAI 공개 내용으로 인용한 범위임.

기사에 따르면 OpenAI는 InferenceX 기반 자체 평가에서 GPT-OSS 120B, DeepSeek R1 670B, Kimi K2.5 1T를 대상으로 와트당 AI 작업량 1.5~1.9배, end-to-end latency 1.7~3.6배 개선을 제시함. 대화형·agentic workload 차이는 2.1~4.1배라고 보도했으며, Kimi K2.5 1T의 최대 처리량 기준 수치는 와트당 약 1.5배와 end-to-end latency 약 3.4배임.

기사에는 700W급 칩, 실제 시험 workload에서 지속 소비전력 550W 이하, 128 ASIC/rack, 최대 16 rack·2,048 ASIC scale-up domain, 4-bit 기준 rack당 약 1.7 exaflops·HBM4 27.5TB, package당 15.4TB/s memory bandwidth라는 수치가 소개됨. prefill의 연산 성격과 decode의 memory bandwidth·data movement 병목, KV cache locality와 chip 간 통신을 함께 최적화하는 설계라는 설명도 포함됨.

기사의 2026년 말 자체 infrastructure 배치와 2·3세대 개발 언급은 공개 roadmap 보도 범위임. 비교 대상, workload mix, context length, batch, quantization, model serving stack, rack power/cooling, network congestion, actual utilization, availability, region, 가격, 고객 접근성과 SLA는 직접 확인하지 못했음. production 판단은 TTFT·TPOT·p95/p99·J/token·token당 비용·utilization·retry·capacity loss와 GPU fleet 대비 TCO의 workload별 측정으로 분리 필요.
