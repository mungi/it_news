---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215802
title: 구글, AI 모델 재학습 없이 ‘하네스’ 스스로 개선하는 ‘RRSI’ 공개
created: 2026-10-01
ingested: 2026-10-01
published: 2026-09-30 18:09 KST
sha256: 1f9fd7c9d7264c1f91febe11ad00c9c92a1941aa7f45dcfc8649fad391ddbded
tags: [ai, agent, benchmark, devtools, research, finops, global]
---
# Google RRSI agent harness recursive self-improvement 연구

- AI타임스 canonical article `article:published_time` `2026-09-30T18:09:48+09:00`, OG image와 본문 직접 대조
- 연구: Google Cloud AI Research·Stanford·University of Washington 연구진이 arXiv와 GitHub에서 `RRSI(Regularized Recursive Self-Improvement of Agent Harnesses)` 공개
- 범위: 모델 가중치 재학습 대신 prompt·tool use·control flow·memory/context·technical module·sub-agent를 포함한 agent harness 반복 변경·평가
- 구조: Proposal 단계가 history로 실패 아이디어 반복과 탐색 자원을 제어하고, Selection 단계가 평가 잡음·추가 추론 비용 대비 성능 향상을 걸러내는 이중 regularization 적용
- 결과: 8개 benchmark에서 Terminal-Bench 2.1 `74.2%→80.2%`, SWE-bench Verified `82.0%→83.8%`, JobBench `36.0%→40.7%`, GDPval `48.8%→52.3%`, Frontier-Eng `17.7%→22.0%` 보도
- 일반화: 직접 최적화하지 않은 5개 외부 평가에서 최대 4.7%p, OOD에서 기존 harness evolution 대비 최대 22.9% 개선 보도
- 비용: Gemini 3.5 Flash 실험에서 Terminal-Bench 2.1 `64.6%→78.7%`, SWE-bench Verified `76.8%→79.0%`; 한 실험의 policy token은 242만개로 비정규화 방법의 380만개보다 30% 이상 적었다는 설명
- 증거 경계: 연구 benchmark·토큰 수치는 production completion rate, latency, cost, safety 또는 다른 model/harness의 개선 보장이 아님

## 핵심 요약

- 변화: 모델 교체보다 agent harness 자체를 controlled experiment 대상으로 다루는 연구 framework 공개
- 검증: holdout·OOD 평가, noise control, change provenance·rollback 없이는 benchmark overfit과 비용 증가 위험
- 운영: prompt/tool/flow/memory 변경을 release artifact로 versioning하고 quality·cost·p95/p99·side effect를 함께 gate 처리 필요
- 공개: research framework와 Apache 2.0 code 공개 범위이며 managed product availability 아님
