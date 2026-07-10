---
title: AI Inference Infrastructure
created: 2026-07-09
updated: 2026-07-10
type: concept
tags: [ai, infra, inference, semiconductor]
sources: [raw/articles/nvidia-nemotron-langchain-deep-agents-2026-07-09.md, raw/articles/aitimeskr-deepseek-ai-chip-2026-07-08.md, raw/articles/aitimeskr-samsung-pm1763-ssd-2026-07-08.md, raw/articles/aitimeskr-tetramem-sk-hynix-in-memory-computing-2026-07-09.md]
confidence: high
---

# AI Inference Infrastructure

AI 추론 인프라는 모델 API, agent harness, serving runtime, GPU/ASIC, SSD, 네트워크, 냉각, 보안 런타임을 함께 다루는 운영 영역이다. 이번 주에는 Nemotron 3 Ultra + LangChain Deep Agents harness, 딥시크 자체 칩 개발 추진, 삼성 PM1763 PCIe 6.0 eSSD가 같은 흐름으로 등장했다.

## Related weekly items
- NVIDIA Nemotron 3 Ultra, LangChain Deep Agents 벤치마크서 오픈 모델 선두 — [NVIDIA Blog](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
- 딥시크, 자체 AI 칩 개발 추진…추론 비용·공급망 통제 경쟁 확대 — [AI Times KR](https://www.aitimes.kr/news/articleView.html?idxno=40891)
- 삼성전자, PCIe 6.0 eSSD PM1763 양산…40GB LLM 1.4초 전송 제시 — [AI Times KR](https://www.aitimes.kr/news/articleView.html?idxno=40885)

## Engineering implications
- 모델 교체 실험은 harness, prompt/tool schema, middleware, secure runtime, evaluation trace와 함께 실행 필요.
- 반도체 선택은 GPU/ASIC 단가뿐 아니라 SDK, kernel, observability, 장애 대응, 공급망 리스크까지 포함 필요.
- 대규모 추론 플랫폼은 GPU, HBM, NVMe, 네트워크, 냉각을 하나의 throughput chain으로 관측 필요.

## 2026-07-09 업데이트: Cloud Native AI 데이터 경로
- CNCF Cloud Native AI 스토리지 백서는 AI/ML 워크로드의 병목이 GPU뿐 아니라 data-heavy, stateful storage path에 있음을 정리했다.
- 플랫폼팀은 checkpoint, model artifact, vector/feature data, cache, object/file/block storage 선택을 workload I/O profile과 비용 모델로 관리해야 한다.
## 2026-07-09 업데이트: 에이전트 데이터와 CDC 경로
- NVIDIA/Hugging Face의 Data for Agents는 agent trace, tool-use failure, retrieval, safety, user simulation 데이터가 에이전트 재현성과 복구 능력의 기반임을 강조했다.
- Aurora DSQL CDC GA는 AI/데이터 애플리케이션의 transaction store와 event stream 연결을 관리형 경로로 제공한다. 설계 기준은 ordering, idempotency, replay, consumer lag다.

## 2026-07-10 업데이트: 메모리 근접 연산
- 테트라멤·SK하이닉스의 멤리스터 기반 인메모리 컴퓨팅 SoC 연구는 depthwise convolution을 대상으로 데이터 이동 에너지와 발열 병목을 줄이는 접근을 제시했다.
- 추론 인프라 평가는 GPU/ASIC peak 성능뿐 아니라 메모리 대역폭, 데이터 이동 에너지, compiler/runtime 성숙도, workload별 연산 매핑까지 포함해야 한다.

## 2026-07-10 refresh
- Tencent Hy3 공개는 오픈 모델 경쟁이 토큰 단가, 에이전트 작업 성공률, tool-call 안정성, Apache 2.0 라이선스 비교로 확장되는 사례임.
- 모델 게이트웨이는 closed/open 모델을 동일한 업무 시나리오에서 성공률, latency, MTok 단가, 데이터 거버넌스로 비교 필요.
