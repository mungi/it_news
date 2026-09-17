---
source_url: https://thehackernews.com/2026/09/attacker-hijacks-ai-coding-assistant.html
title: AI coding assistant session 탈취·Shai-Hulud 약 100개 내부 저장소 확산 대응 경계
created: 2026-09-17
ingested: 2026-09-17
published: 2026-09-16 23:37
sha256: ed391b1b6704cdba5a973dd264372885a06547f84fe0a06af1daeecc391871bd
tags: [security, ai, devtools, supply-chain, github, oauth, global]
---

# AI coding assistant session 탈취·Shai-Hulud 약 100개 내부 저장소 확산 대응 경계

- 원문: https://thehackernews.com/2026/09/attacker-hijacks-ai-coding-assistant.html
- 원문 게시: 2026-09-16 23:37 KST, THN RSS `Wed, 16 Sep 2026 19:07:07 +0530` 환산

## 핵심 요약

- Mandiant 2026년 9월 보고서가 익명 SaaS 제공사에서 active AI coding-assistant session을 탈취한 사례를 제시
- assistant가 추천한 poisoned PyPI package 설치 뒤 infostealer와 GitHub OAuth token 탈취로 연결된 흐름
- self-spreading Shai-Hulud worm이 내부 code repository 약 100개와 official namespace package까지 확산한 범위
- 다른 직원의 compromised package pull로 second infection이 발생한 사례
- raw API key·long-lived OAuth token의 extension 직접 접근 제한, dependency checksum·allowlist, internal repository egress control 권고

---

## 원문과 primary evidence

- THN canonical body·RSS timestamp·Open Graph image를 직접 확인
- THN이 연결한 Mandiant `AI Risk and Resilience 2026` 보고서를 primary report로 보존

## 증거 경계

- 공개 case study는 intrusion 시각과 active coding-assistant session 탈취 방법을 공개하지 않음
- 약 100개 repository 확산·secret/source-code theft는 Mandiant 사례를 인용한 THN 보도 범위로 기록
- 8월 Keyv npm worm 및 credential 469개 location scan은 별도 campaign이며 동일 intrusion과 연계되지 않음

## 운영 조치

- AI 추천 dependency를 checksum·approved allowlist·internal mirror 기준으로 gate 처리
- extension·assistant가 raw API key·long-lived OAuth token을 읽지 못하도록 credential broker·short-lived token 적용
- repository package publish·OAuth token use·dependency install·CI secret access를 하나의 timeline으로 correlation 조사
