---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214137
title: OpenAI offers Zero Data Retention for frontier models
ingested: 2026-08-20
published: 2026-08-20 12:29 KST
tags: [ai, safety, privacy, enterprise-ai, korea, weekly-briefing]
sha256: 7405d3727c8ec63e579f465000e0337da6e06b4c045279deee68623ae4e76c78
---

## 번역 제목

OpenAI frontier 모델 ZDR 확대 보도: 프롬프트·응답 비보존과 다회차 안전 신호를 분리

- AI타임스가 OpenAI의 enterprise 대상 **Zero Data Retention(ZDR)** 및 Private Safety Processing 공개를 보도
- ZDR API 요청의 프롬프트·모델 응답은 처리 뒤 저장하지 않고, 고객 동의 없이는 학습에 사용하지 않는다는 기사 범위
- Private Safety Processing은 원문 대화 대신 위험 종류·심각도를 나타내는 제한된 안전 신호로 다회차 악용 패턴을 탐지한다는 설명
- 위험 신호가 고객 대화를 OpenAI 직원에게 자동 공개하지 않으며, 고객이 필요 시 자발적으로 관련 정보를 제공하는 흐름을 기사에서 설명
- OpenAI 원문은 Cloudflare challenge로 직접 본문 검증 불가 상태이며, 정확한 지원 모델·API tier·리전·signal schema·보존·SLA·audit artifact는 기사만으로 미확인 범위

---

## 확인한 원문 사실

- AI타임스 canonical URL·headline·본문·`article:published_time` `2026-08-20T12:29:58+09:00`·Open Graph image 직접 확인
- 기사에 연결된 OpenAI 공식 URL `https://openai.com/index/offering-zero-data-retention-for-frontier-models`의 RSS 발행 시각은 `2026-08-19 19:00 UTC`, KST `2026-08-20 04:00`으로 확인
- 공식 본문은 Cloudflare challenge로 접근 불가여 카드의 직접 근거는 AI타임스 보도로 한정

## 데이터 경계와 안전 처리

- ZDR 적용 API 고객의 프롬프트와 응답은 요청 처리 뒤 OpenAI에 저장되지 않는다는 기사 설명
- 고객 콘텐츠는 OpenAI 직원이 검토할 수 없고 별도 동의 없이는 모델 학습에 사용하지 않는다는 기사 설명
- 다회차의 cyber abuse 또는 agent 이상 행동을 감지하기 위해 개별 대화 대신 상호작용 패턴을 분석한다는 기사 설명
- 위험 탐지 뒤 OpenAI에는 구체 prompt/response가 아닌 위험 유형과 심각도를 나타내는 제한된 safety signal을 보낸다는 기사 설명

## 증거 경계와 운영 과제

- 특정 frontier model·endpoint·계정 tier·리전·ZDR eligibility·signal field·암호화·key custody·retention·human review·false positive·SLA 미확인
- ZDR 명칭을 고객 환경의 zero logging, 국외 이전 부재, regulatory compliance, agent safety 보증으로 확대하지 않음
- request lifecycle, vendor telemetry, customer-side warning, escalation, appeal, audit export를 계약·packet/log·API evidence로 검증 필요
