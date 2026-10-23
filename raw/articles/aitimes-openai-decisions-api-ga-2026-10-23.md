---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216581
title: 오픈AI, 분류·선택 특화 ‘디시전스 API’ 정식 출시…최대 10배 빠르게
created: 2026-10-23
ingested: 2026-10-23
published: 2026-10-23 18:59 KST
sha256: fd60d6dd0baf039f2c74c2fb700c8bb1d62dae75174ac656c9fd28c4dc08185e
tags: [ai, agent, routing, classification, api, global, product]
---
# OpenAI Decisions API 정식 출시 보도

- AI타임스 canonical article `article:published_time` `2026-10-23T18:59:59+09:00`, OG image와 본문 직접 대조
- 공개: OpenAI가 `Decisions API`를 모든 고객에게 정식 제공했다는 AI타임스 보도 범위
- 모델: `GPT-6 Luna` 기반이며 Responses API에서 해당 모델을 사용할 때보다 특정 decision task를 최대 10배 빠르게 처리할 수 있다는 OpenAI 설명 인용 범위
- 지연: 기사에 인용된 API 제품 책임자 발언의 1~3초 작업을 100~180ms 수준으로 낮춘다는 설명 범위
- 입력·출력: text·image·structured JSON 입력과 개발자가 정의한 allowed answer를 받아 probability·choice·score 반환 범위
- 사용: classification·request routing·agent next action 선택처럼 반복되는 작은 판단의 latency·cost를 낮추는 용도
- 증거 경계: OpenAI official page는 수집 시 bot challenge로 본문 확인 불가. 모델 access, pricing, rate limit, region, retention, schema와 응답 형식 세부 계약은 이 보도에서 확정 불가

## 핵심 요약

- 변화: 제한 프리뷰로 기록된 Decisions API가 모든 고객 대상 GA라는 AI타임스 보도
- 설계: 생성 model의 자유 형식 응답 parsing 대신 제한된 answer set·score·probability를 사용하는 판단 layer 범위
- 성능: 최대 10배·100~180ms 수치는 OpenAI 설명을 인용한 보도 범위이며 workload별 보장 아님
- 운영: action selection 결과를 곧바로 write 권한으로 연결하지 않고 policy version·input provenance·decision output·tool call·approval trace를 함께 보존할 대상
