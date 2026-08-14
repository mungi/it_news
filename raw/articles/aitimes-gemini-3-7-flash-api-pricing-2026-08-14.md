---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213924
title: 구글, 가성비 모델 '제미나이 3.7 플래시' 공개… API 50% 파격 할인
ingested: 2026-08-14
published: 2026-08-14 07:18 KST
sha256: 8c1bf5e5aa747867b9106c7c8f8b4a1a6e5e16f934b9043d623a8733af930534
tags: [ai, inference, finops, devtools, global]
---

## 원문 확인

- AI타임스 기사 제목·본문·작성자·업데이트 시각 `2026.08.14 07:18`·Open Graph image를 직접 확인함
- 기사 URL과 canonical URL은 `https://www.aitimes.com/news/articleView.html?idxno=213924`로 확인함

## 확인된 사실

- Google이 Gemini 3.7 Flash를 코딩·에이전트 강화 모델로 공개했다는 AI타임스 보도
- 기사 기준 2026년 12월 31일까지 input/output/context cache 100만 token당 0.75/3.75/0.075달러 조건
- 기사 기준 2027년 1월 1일부터 input/output/context cache 100만 token당 1.50/7.50/0.15달러 조건
- 기사에 FrontierCode 1.1 Main 43.6%, DeepSWE v1.1 65.3%, Code Arena Elo 1588, AutomationBench 30.4%, GDP.PDF 34.0%가 인용됨

## 증거 경계

- 가격·성능 수치는 AI타임스가 전달한 Google 발표/benchmark 내용이며, 이 capture는 Google 공식 API 문서·model card·계약·SLA를 직접 검증하지 않음
- region, rate limit, cache TTL, data handling, Korean workload 성능, 조직별 SLO·비용은 기사로 확정할 수 없는 항목
- benchmark 수치는 harness·sample·tool 환경·재현 artifact가 없는 상태에서 production outcome 또는 경쟁 모델의 보편적 우위로 해석하지 않음

## 운영 경계

- canary에서 token·cache hit·retry·tool error·p95 latency·task success와 2027년 표준 가격 기준 run-rate를 함께 기록 필요
- official documentation, billing export, data residency, quota와 fallback policy를 production approval 전 별도 대조 필요
