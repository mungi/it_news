---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213379
title: "국내 최대 기록 경신"...LG, 7500억 매개변수 'K-엑사원 2.0' 공개
ingested: 2026-07-31
published: 2026-07-31 10:10 KST
sha256: c1e09b202a4f393b56dcf756510c5473499c1c4658eb6bb27c1d54a504ed2848
tags: [ai, foundation-model, open-source, benchmark, korea]
---

# LG AI연구원 K-EXAONE 2.0 750B 공개

- 발행 시각: AI타임스 페이지의 `article:published_time` `2026-07-31T10:10:30+09:00` 및 본문 입력 시각 `2026.07.31 10:10` 확인
- 출처: LG AI연구원이 독자 AI 파운데이션 모델 프로젝트 2차 평가 모델 `K-EXAONE 2.0`을 Hugging Face에 출시했다고 보도
- 라이선스: 기사에서 상업적 이용을 포함한 Apache 2.0 공개라고 설명

## 모델·평가 수치

- 규모: 750B(7,500억) parameters로 기사에서 국내 최대라고 설명, 1차 평가 모델 236B 대비 3배 이상 규모
- 평가: 9개 영역·24개 benchmark 평균 70.1점, 1차 모델 63.3점 대비 10% 이상 개선이라는 LG 공개 수치
- 장문 문맥: OpenAI-MRCR 94.4점, Ko-LongBench 89.6점이라는 기사 인용 수치
- 도구 사용: Tau3-Bench Banking 14.2점이라는 기사 인용 수치; GLM-5.1 11.5점·Qwen3.5 13.4점과의 비교는 동일 기사/LG 자료 범위
- 안전성: KGC-Safety·ROK-Fortress 평균 94.6점이라는 기사 인용 수치

## 증거 경계와 운영 메모

- 24개 benchmark 및 비교 수치는 LG가 공개한 결과를 AI타임스가 전한 범위이며, 독립 재현·inference cost·latency·throughput·context length·hardware profile은 기사에서 확인하지 못함
- Hugging Face 모델 페이지 URL은 기사 링크를 현재 자동 추출하지 못했고, 추정 URL을 source로 기록하지 않음
- self-hosting 판단에는 정확한 model card, weight format, memory footprint, serving stack, license text, safety terms와 benchmark recipe를 별도 확인 필요

## 출처

- https://www.aitimes.com/news/articleView.html?idxno=213379
