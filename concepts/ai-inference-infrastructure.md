---
title: AI Inference Infrastructure
created: 2026-07-09
updated: 2026-07-12
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

## 2026-07-10 evening refresh
- Meta Iris 양산 계획과 2026년 14GW AI 컴퓨팅 목표는 hyperscaler 추론 인프라가 custom silicon, 전력 capacity, 메모리·SSD·광통신 장기 공급 계약으로 수직통합되는 사례임.
- HUMAIN-Cohere의 50MW 전용 AI 컴퓨팅 계약은 모델 개발사가 클라우드 on-demand보다 장기 capacity reservation과 sovereign AI 조건을 중시하는 흐름임.
- 인프라팀은 GPU 단가뿐 아니라 전력·냉각·네트워크·스토리지 throughput chain, compiler/runtime 성숙도, 데이터 residency를 한 번에 평가 필요.

## 2026-07-10 late refresh
- 딥엑스·에브넷 APAC 15개국 공급망 구축은 엣지 NPU 상용화가 TOPS/W뿐 아니라 PoC, 현지 FAE, 응용 SW, RMA, 장기 부품 공급망으로 결정됨을 보여줌.
- Google Cloud AlphaEvolve GA는 agent platform이 코드 보조를 넘어 algorithm search와 domain optimization workflow로 확장되는 사례임.
- SageMaker HyperPod deep health check는 GPU cluster 비용 절감이 모델 최적화뿐 아니라 Slurm scheduling 전 hardware·network validation으로도 발생함을 보여줌.

## 2026-07-11 early refresh
- NVIDIA hardware-friendly LLM design은 모델 폭·깊이·linear layer tile alignment·NVFP4·expert parallelism이 추론 비용과 latency를 좌우함을 정리.
- Cloudflare public cloud Smart Tiered Cache region hint는 AI/서비스 origin 경로 최적화가 CDN, cloud anycast, cache topology, IaC 관리 문제로 연결됨을 보여줌.
- AWS DMS Schema Conversion MCP 지원은 agent workflow가 database migration으로 확장되며 dry-run, generated SQL review, rollback gate가 필수 통제임을 보여줌.


## 2026-07-11 HBM·host offloading 운영 변수
- NVIDIA JAX host offloading 패턴은 GPU HBM 부족을 host memory와 data movement scheduling으로 완화하는 접근.
- ML 플랫폼 capacity planning은 GPU 수량뿐 아니라 HBM usage, host memory bandwidth, PCIe/NVLink overlap, step time variance를 함께 추적 필요.

## 2026-07-11 업데이트: AI workload placement와 시맨틱 데이터 파이프라인
- CNCF의 sovereign AI workload 논의는 external API, BYO model hosting, private cloud, on-prem cluster를 workload sensitivity와 compliance 기준으로 배치해야 함을 강조함.
- fenic은 RAG·agent context 구성을 ad-hoc prompt가 아니라 재실행 가능한 typed DataFrame pipeline으로 운영하는 패턴을 제시함.

## 2026-07-11 late refresh: 모델 압축·온디바이스 추론
- NVIDIA Puzzle-75B 보도는 MoE pruning, 지식 증류, 양자화, MTP가 장문맥 추론 처리량과 GPU 비용을 직접 바꾸는 운영 변수임을 보여줌.
- PrismML 27B 온디바이스 보도는 cloud-only 추론 전략이 edge/offline/privacy routing과 경쟁하게 됨을 보여줌. 검증 기준은 p95 latency, token/s, thermal budget, 배터리, 품질 회귀임.

## 2026-07-12 refresh: 멀티 모델 오케스트레이션 평가
- 공동 실패율 연구는 LLM gateway가 vendor 수와 모델 수만 늘려도 정확도가 오르지 않음을 보여줌. 평가 기준은 all-model failure, oracle routing gap, cost per correct answer임.
- 플랫폼팀은 기존 eval log에서 공동 실패를 집계하고 Clopper-Pearson boundary로 성능 상한을 산출한 뒤 router 개발·단일 최고 모델·비슷한 성능 모델 조합을 비교 필요.

## 2026-07-12 late-morning refresh: 온프레미스 추론 ASIC 수요
- SambaNova의 JP모건 SN40L/SN50 도입 사례는 금융권 추론 인프라가 public API 단가뿐 아니라 data residency, auditability, on-prem capacity를 함께 평가함을 보여줌.
- 추론 ASIC PoC는 벤더 주장 성능보다 실제 모델 tokens/sec, p95 latency, context length, compiler/runtime 성숙도, 장애 재기동, 공급망 리드타임을 기준으로 설계 필요.
