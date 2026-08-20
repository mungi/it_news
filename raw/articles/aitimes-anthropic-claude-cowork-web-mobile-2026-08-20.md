---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214171
title: Claude Cowork 웹·모바일 확장과 Google Workspace connector 운영 경계
ingested: 2026-08-20
published: 2026-08-20 18:04 KST
tags: [ai, agent, enterprise-ai, devtools, cloud-security, global, weekly-briefing]
sha256: 4c76a53da457593a782623a66a8916bf69b563d57bb323aa52015abab8142240
---

## 번역 제목

Claude Cowork 웹·모바일 베타: 계정 저장 세션과 Google Workspace connector를 별도 통제

- AI타임스가 Anthropic의 유료 플랜용 Claude Cowork 웹·모바일 베타 및 Google Workspace 연동 강화를 보도
- Cowork 세션과 파일을 사용자 Claude 계정에 저장해 데스크톱·웹·모바일 간 작업 지속을 지원한다는 기사 범위
- cloud 기반 Cowork는 사용자 PC가 아닌 Anthropic 서버에서 실행돼 기기 종료 뒤에도 작업과 예약 작업을 지속할 수 있다는 설명
- Gmail·Google Drive·Google Calendar를 업무 서비스 연동 대상으로 제시
- Google OAuth scope·connector 권한·원격 실행 리전·보존·감사·SLA는 직접 확인하지 못한 범위

---

## 확인한 원문 사실

- AI타임스 canonical URL·headline·본문·`article:published_time` `2026-08-20T18:04:49+09:00`·Open Graph image 직접 확인
- Anthropic이 18일 현지시간에 Cowork 웹·모바일 베타를 출시했다는 기사 설명
- 데스크톱, 웹, 모바일 앱, Chrome 사이드 패널에서 같은 Cowork 기능을 사용할 수 있다는 기사 설명

## 실행과 데이터 흐름

- Cowork 세션과 파일이 사용자의 Claude 계정에 저장돼 기기 변경 뒤 작업을 이어갈 수 있다는 기사 설명
- cloud 기반 Cowork 작업은 사용자 PC가 아닌 Anthropic 서버에서 실행된다는 기사 설명
- 노트북을 닫거나 사용하지 않는 상태에서도 작업이 계속되고, 예약 작업도 기기 전원 없이 실행될 수 있다는 기사 설명
- 완료 또는 사용자 입력 필요 시 스마트폰 알림을 보낼 수 있다는 기사 설명

## Connector와 운영 증거 경계

- Gmail·Google Drive·Google Calendar 연동을 업무 서비스 활용 대상으로 제시
- Google OAuth scope·connector별 read/write/export 권한·token lifecycle·파일/세션/job log 보존·실행 리전·암호화·human review·audit export·SLA 미확인
- connector마다 initiating identity·scope·source object·tool action·결과 목적지·scheduled job·notification을 correlation ID로 연결 필요
- 웹·모바일 제공이나 계정 저장을 zero egress·국내 규제 적합성·감사 보증으로 확대하지 않음
