---
source_url: https://www.aitimes.com/news/articleView.html?idxno=212625
title: When Does Combining Language Models Help?
ingested: 2026-07-12
published: 2026-07-11 17:04
sha256: 38bfb02ffe18c7ab0d02381d49c43cb434455381b36710e0fb9e1298dc8e4f80
tags: [ai, cloud, infra, security, weekly-briefing]
---

## 핵심 요약
- KAIKAKU 등 연구진이 LLM 67개를 대상으로 멀티 모델 조합의 공동 실패 한계를 분석함.
- 공동 실패율 β가 존재하면 routing, voting, cascade 구조의 정확도 상한이 `1-β`로 제한됨.
- MATH-500에서 동시 실패율은 예측 2.3% 대비 실제 5.2%로 측정됨.
- 코드 생성 공동 실패율은 7.9%, 자유서술형 GPQA Diamond는 12.7%까지 상승함.
- 성능이 다른 모델의 단순 다수결은 평균 정확도를 약 10%p 낮춘 사례가 확인됨.

## 운영 메모
- LLM gateway PoC는 모델 수가 아니라 all-model failure, routing signal, cost per correct answer를 먼저 측정 필요.
- 기존 평가 로그에서 공동 실패를 집계하고 Clopper-Pearson boundary로 성능 상한 추정 가능.
