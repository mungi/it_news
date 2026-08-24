---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214279
title: 딥시크 주말 API 비성수기 단일 요금 보도
ingested: 2026-08-25
published: 2026-08-24 15:23
tags: [ai, inference, finops, api-pricing, agent, global, market]
sha256: 99b93d65b89e17c57b1e17385930541273803516061a1ca2c231f028438ab366
---

## 원문 메타데이터

- 제목: 딥시크, 주말 API 할증 없앤다…토·일요일 '오프피크' 단가 단일화
- 출처: AI타임스
- URL: https://www.aitimes.com/news/articleView.html?idxno=214279
- 기사 발행 시각: 2026-08-24 15:23 KST (`article:published_time` 2026-08-24T15:23:53+09:00)
- Open Graph image: https://cdn.aitimes.com/news/photo/202608/214279_217967_528.jpg

## 직접 확인한 본문 사실

- DeepSeek가 베이징 시간 2026-08-23 00:00부터 토·일 API 사용량에 피크 구분 없이 비성수기 요금을 적용한다는 보도
- 기존 가변 요금제는 베이징 시간 09:00~12:00와 14:00~18:00를 피크로 정하고 비성수기 대비 2배를 부과했다는 기사 설명
- DeepSeek-V4-Pro 피크 output 가격은 100만 token당 최대 27위안·약 4달러라는 기사 수치
- 대규모 데이터 처리·batch·model evaluation·test의 주말 분산 가능성을 기사에서 언급

## 직접 확인한 공식 가격표

- DeepSeek API Docs의 현재 `deepseek-v4-flash`·`deepseek-v4-pro`·`deepseek-v4-flash-vision-exp` 모델 표
- V4 Pro cache-miss input 0.66/1.32달러, output 1.98/3.96달러 per 1M token의 off-peak/peak 표기
- V4 Flash cache-miss input 0.22/0.44달러, output 0.66/1.32달러 per 1M token의 off-peak/peak 표기

## 증거 경계와 운영 메모

- 주말 단일화의 시행 시각·조건은 timestamped AI타임스 기사 범위이며, 직접 읽은 공식 가격표는 현재 피크/비피크 가격만 확인
- 계정·리전 eligibility, quota, rate limit, SLA, billing export 형식, 실제 invoice 반영은 원문과 공식 가격표에서 직접 확인하지 못함
- 운영 action: KST/베이징 시간 bucket·model·input/output/cache token·retry·queue·task success·invoice를 request trace와 함께 비교 필요
