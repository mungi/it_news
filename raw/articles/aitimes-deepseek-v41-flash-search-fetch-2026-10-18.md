---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216370
title: 딥시크 V4.1-Flash-1017·Search·Fetch API 공개 보도
ingested: 2026-10-18
published: 2026-10-18 09:03 KST
sha256: a1d03b96486db3ee7a9fd8b0e0537d67df55e68d05d34ff3f6163c89a5e19b2d
tags: [ai, agent, coding, search, finops, global]
---

# 딥시크 V4.1-Flash-1017·Search·Fetch API 공개 보도

- 딥시크가 `DeepSeek-V4.1-Flash-1017`을 웹·앱·API에 적용하고 코딩·agent 작업 성능·완료 시간·출력 길이 개선을 주장한 보도
- 자체 수치: DeepSWE v1.1 74.2→77.0, Terminal Bench 4.0 31.2→42.3, Automation Bench 54.8→60.5
- HLE 42.6과 Terminal Bench 비교는 일부 경쟁 모델보다 낮아 모든 workload 성능 우위로 해석 불가
- Search·Fetch API는 성공 요청 1,000건당 각각 0.75달러, 일부 서버 측 tool 호출 무료 범위는 11월 1일 오전 1시부터 과금 예정이라는 기사 범위

## 운영 경계

모델 가격과 별도로 search/fetch request·cache·retry·retrieval provenance·prompt injection·data retention을 agent release 및 FinOps gate에 포함 필요.
