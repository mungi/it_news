---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213830
title: 제미나이 앱, 월간 사용자 10억명 돌파..."구글 역사상 역대 최단 기록"
ingested: 2026-08-12
published: 2026-08-12 12:51 KST
sha256: ea38de3b4f1bded8e21d4bce06e1556c788ba2a275672354137fbc9baed5d951
tags: [ai, infra, product, global]
---

## 원문 확인

- AI타임스 원문 제목·입력 시각·본문·Open Graph image를 직접 확인함
- machine-readable `article:published_time` `2026-08-12T12:51:26+09:00`를 KST 카드 시각 `2026-08-12 12:51`로 사용

## 확인된 사실

- AI타임스는 Gemini 앱 월간 활성 사용자(MAU) 10억 명 돌파를 보도함
- 집계는 Search·Android·Workspace 등 다른 제품에 통합된 Gemini 사용자를 제외한 앱 자체 사용자라는 기사 설명
- Sundar Pichai의 8월 11일 X 게시물을 인용했고, 2분기 공개된 9억5,000만 MAU 이후 수주 만의 증가와 지난 1년 DAU 약 3배 증가를 전함

## 증거 경계

- 독립 감사·지역/유료 사용자 분포·모델별 요청량·token volume·GPU/TPU capacity·매출·수익성은 원문에 없음
- MAU는 product adoption 지표이며 AI 서비스의 peak concurrency·latency·safety 또는 unit economics를 증명하지 않음

## 운영 경계

- capacity planning에는 concurrent session·request/token mix·cache hit rate·accelerator utilization·p95 latency를 별도 계측 필요
- growth cohort와 safety review·fallback·incident rate·cost-to-serve를 동일 운영 대시보드에서 상관 분석 필요
