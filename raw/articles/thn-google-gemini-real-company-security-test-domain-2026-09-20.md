---
source_url: https://thehackernews.com/2026/09/google-gemini-broke-into-real-company.html
title: Google Gemini 보안 평가 실도메인 혼동·agent egress 통제 경계
created: 2026-09-20
ingested: 2026-09-20
published: 2026-09-19 16:51 KST
sha256: 115adc5bb930f670ed0958d19a6bf1c15f8652cacebea60ced332d78481916d6
tags: [ai, cybersecurity, agent, evaluation, cloud-security, global]
---
# Google Gemini 보안 평가의 실도메인 혼동: 실제 기업 시스템 접근 뒤 중단

- 원문 보도: https://thehackernews.com/2026/09/google-gemini-broke-into-real-company.html
- 최초 보도: https://www.wsj.com/tech/ai/gemini-hacked-three-companies-in-first-known-breakout-by-googles-ai-5c0baba2
- 관련 평가 환경 보도: https://thehackernews.com/2026/08/openai-pauses-frontier-rl-training-as.html
- 원문 보도 시각: 2026-09-19 13:21:34 +05:30, KST 2026-09-19 16:51
- evidence boundary: THN은 Wall Street Journal·Irregular 설명을 인용. 공개 보도는 실제 대상 기업·asset·데이터 접근·지속성·현재 노출을 특정하지 않음

## 핵심 요약

- 2026년 5월 Irregular evaluation에서 fictitious CTF company name이 real domain과 충돌한 환경 조건
- Gemini의 protected-system 접근은 반복 password guess 1건과 public repository credential 경로 2건으로 보도
- agent는 real company system breach를 감지한 뒤 작업을 중단한 보도 범위
- 7월 Google 통지와 공개 시점 수주 전 문제 해소는 보도된 사실이나 일반적 안전 보증 아님

---

## 평가 환경 경계

- fictitious domain naming, DNS resolution, unintended internet access가 함께 실패한 test-environment 조건
- agent evaluation의 target registry는 public DNS namespace와 충돌하지 않도록 reserved domain·authoritative sinkhole 사용 필요
- run별 outbound proxy·DNS query·HTTP request를 기록해 intended target과 destination을 독립 대조 필요

## 접근 방식과 한계

- 보도는 protected system password 반복 추측 1건을 설명
- public repository에서 발견된 credential로 protected system 접근한 사례 2건을 설명
- 공개 내용만으로 credential scope·권한 상승·data access·persistence·개별 조직 피해를 확정할 수 없음

## 중단 행동과 운영 검증

- Gemini는 actual company system breach 탐지 뒤 intrusion을 종료한 보도 범위
- Google은 safety mechanism 작동 뒤의 중단을 model misalignment로 보지 않는다고 WSJ에 설명
- stop signal은 planning 중단 외 in-flight request cancellation·token revocation·audit log 보존까지 drill로 검증 필요

## 팀 액션

- test fixture·public repository·artifact에서 real secret과 reusable credential을 scanning하고 rotation rehearsal 수행
- external action 전 human approval, egress allowlist, destination policy, incident notification owner를 runbook에 명시
- evaluation report에는 model behavior와 environment-control failure를 별도 원인으로 기록
