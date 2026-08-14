---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213940
title: 딥시크 V4 API 피크·비피크 가격 보도
ingested: 2026-08-15
published: 2026-08-14 12:49
tags: [ai, inference, finops, agent, global, market]
sha256: 94966a34201cc1b5879f2cbfef89f9b39aa6f4c4f8562cd75be5bf2cf4e87b00
---

## 원문 메타데이터

- 제목: 딥시크, V4 모델 API 가격 최대 1100% 인상...혼잡 시간대 2배 부과
- 출처: AI타임스
- URL: https://www.aitimes.com/news/articleView.html?idxno=213940
- 기사 발행 시각: 2026-08-14 12:49 KST (`article:published_time` 2026-08-14T12:49:43+09:00)
- Open Graph image: https://cdn.aitimes.com/news/photo/202608/213940_217532_3346.jpg

## 직접 확인한 본문 사실

- DeepSeek-V4 Pro와 V4 Flash API에 피크·비피크 시간대별 가격을 도입한다는 보도
- 기사 기준 새 요금은 2026-08-17 01:00 KST부터 시행
- V4 Pro cache-miss input: 기존 100만 token당 0.435달러, 비피크 0.66달러, 피크 1.32달러라는 기사 수치
- V4 Pro output: 기존 0.87달러, 비피크 1.98달러, 피크 3.96달러라는 기사 수치
- V4 Flash cache-miss input: 기존 0.14달러, 비피크 0.22달러, 피크 0.44달러라는 기사 수치
- V4 Flash output: 기존 0.28달러, 비피크 0.66달러, 피크 1.32달러라는 기사 수치
- V4 Pro cache-hit: 기존 0.003625달러, 비피크 0.022달러, 피크 0.044달러라는 기사 수치

## 증거 경계와 운영 메모

- 직접 확인한 출처는 AI타임스 기사이며 공식 DeepSeek 가격표·계정 콘솔·지역별 적용 조건은 이번 capture에서 확인하지 않음
- 기사 가격 수치는 조직별 invoice, quota, rate limit, SLA, data handling, 한국어 workload 품질을 보증하지 않음
- 운영 action: pricing version·KST time bucket·token type·cache hit·retry·latency·task success를 billing export와 trace에서 결합 필요
