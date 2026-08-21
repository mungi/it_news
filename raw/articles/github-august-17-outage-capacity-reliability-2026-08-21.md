---
source_url: https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/
title: GitHub 8월 17일 장애 사후 분석 — Central US capacity·retry control
ingested: 2026-08-21
published: 2026-08-21 03:36 KST
sha256: 909bb66dae383fc1026fa2ae45b5be6616c460d12d741958ac934e10a9de48b1
tags: [it, devtools, cicd, github, outage, sre, reliability, global, weekly-briefing]
---
# GitHub 8월 17일 장애 공식 사후 분석

- 공식 제목: `The August 17 outage, and the work ahead`
- 발행: `article:published_time` `2026-08-20T18:36:11+00:00`, KST `2026-08-21 03:36`
- Open Graph image: https://github.blog/wp-content/uploads/2026/01/generic-github-logo-left.png
- 직접 확인: 2026-08-21 KST

## 직접 확인한 본문 사실

- 8월 17일 장애가 7시간 47분 지속됐고 github.com·authentication·GitHub Actions·APIs·pull requests·issues·Copilot에 영향을 줬다는 GitHub 발표
- Central US data center critical infrastructure component가 새 traffic peak에 scale하지 못해 capacity pressure와 authentication failure가 확산했다는 official RCA 범위
- traffic reroute·affected infrastructure isolation·staged restoration 뒤 Copilot error의 client-side retry loop를 완화해 traffic을 복원했다는 설명
- 두 8월 incident는 code/configuration change가 아닌 capacity failure였다는 GitHub 설명
- monthly commit이 4월 14억에서 29억으로 증가했고, 300만 CPU core·120 PB high-speed storage·network capacity 추가 및 Azure platform load 약 58%·Git operation 약 절반 처리라는 vendor 수치

## 증거 경계와 운영 메모

- GitHub platform aggregate 수치는 개별 조직의 workflow·webhook·artifact·deployment·Copilot 영향, queue drain, API quota, RTO/RPO 또는 SLA를 보증하지 않음
- status 복구 뒤 missed event·queued/cancelled run·partial artifact·duplicate deploy·external side effect를 own event/run/deploy telemetry로 reconciliation 필요
- retry limit·retry budget·timeout·idempotency key·manual replay·rollback authority를 CI/CD incident runbook과 game day로 검증 필요
