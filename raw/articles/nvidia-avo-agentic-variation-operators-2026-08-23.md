---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214256
title: NVIDIA AVO 장기 에이전트 하네스·GPU 커널 자율 탐색 보도
ingested: 2026-08-23
published: 2026-08-23 10:55
tags: [ai, agent, gpu, kernel, benchmark, mlops, global]
sha256: ffbec312ad3df50cc75d94892dc418ec24e9284883b2586cfddc5adc7b86c0ad
---

## 출처 확인

- 보도 원문: https://www.aitimes.com/news/articleView.html?idxno=214256
- 논문 원문: https://arxiv.org/abs/2603.24517
- 보도 제목: "LLM보다 하네스가 핵심"…엔비디아 AVO, 장기 에이전트 가능성 입증
- 직접 확인 시각: 2026-08-23 22:58 KST
- 보도 `article:published_time`: 2026-08-23T10:55:48+09:00
- 보도 Open Graph image: https://cdn.aitimes.com/news/photo/202608/214256_217936_5946.gif
- 논문 제출 이력: arXiv v1 2026-03-25 16:55:04 UTC

## GN⁺ 브리핑

- 보도: AVO의 ARC-AGI-3 25개 환경·183개 레벨 완주와 장기 agent harness 결과
- 논문: lineage·domain knowledge base·execution feedback을 참조하는 autonomous coding agent variation loop
- 성능: Blackwell B200 multi-head attention 7일 탐색에서 cuDNN 대비 최대 3.5%, FlashAttention-4 대비 최대 10.5% 개선이라는 논문 평가
- 전이: grouped-query attention 30분 추가 적응 후 cuDNN 대비 최대 7.0%, FlashAttention-4 대비 최대 9.3% 개선이라는 논문 평가
- 경계: ARC-AGI-3의 action/RHAE·모델 비교는 AI타임스 보도 범위이며 일반 production task 성공률·SLO·안전성 보증 아님

---

## 검증 경계

- AI타임스의 ARC-AGI-3 결과와 논문의 attention/GQA evaluation을 동일한 독립 benchmark result로 합산하지 않음
- 논문 abstract가 직접 밝힌 범위는 Blackwell B200에서의 evaluated configurations이며 모델·prompt·tool policy·GPU driver·framework·precision·input shape별 재현은 별도 검증 필요
- autonomous code edit는 source checkout·dependency install·build sandbox·secret scope·network egress·artifact provenance를 포함하는 change-control 문제
- source는 일반 상용 agent의 API contract, data retention, encryption, IAM, regional availability, rate limit, price, SLA를 제공하지 않음
