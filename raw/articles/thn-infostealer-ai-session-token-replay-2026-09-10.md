---
source_url: https://thehackernews.com/2026/09/infostealer-logs-expose-replayable-ai.html
title: Infostealer 로그의 AI session token·API key 재생과 MFA 이후 credential lifecycle 대응
ingested: 2026-09-10
published: 2026-09-10 00:23 KST
sha256: 44280eb7b95b492de94fde6b34c749cfb06e55b36bffc45133478917b9bb63b1
tags: [ai, cybersecurity, identity, cloud, devtools, global]
---
## 원문 확인

- The Hacker News 기사 제목: Infostealer Logs Expose Replayable AI Tokens That Can Bypass MFA
- RSS 발행 시각: Wed, 09 Sep 2026 19:53:55 +0530, KST 2026-09-10 00:23
- 원문 URL: https://thehackernews.com/2026/09/infostealer-logs-expose-replayable-ai.html
- 직접 확인한 Open Graph 이미지: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYP_zrhRTZRWnPPcDkUrE7dBh2Bf5eaQmlBxyl7euTRGjS0C8boQppnrmjY0CIVjGrS_PF13V1W3BPVI3RDPZY59s_7xIkI8LnFkg3Tn_Q0x7_tbCs_sMkvhZMREtFLW3IOJSNNmQrKCDI88FCWhfymdWkEWtdMMRzivv3lZXImjreAz0d74VXt2K80ipH/s1600/tokens.jpg

## GN⁺ 핵심 요약

- 분석: Okta가 Telegram 공개 7GB infostealer dump에서 5,871대 감염 장비·162개국 데이터를 분석
- 토큰: 44,791개 JWT 중 AI 서비스 인증 관련 가능성 JWT 555개, 인증 관련 JWE 2,937개 확인
- 유효성: 공개 당일 만료되지 않은 JWT·JWE 1,843개가 남아 있어 session replay 가능성 존재
- 경계: token 존재가 개별 AI 서비스 계정 침해·실제 악용·전체 사용자 영향을 확정하지 않음
- 팀 액션: endpoint containment·session revoke·API/OAuth rotation·connector/cloud audit를 하나의 credential incident로 운영 필요

---

## 원문에서 확인한 수치와 범위

- The Hacker News는 Okta 분석을 인용해 2026-08-02 Telegram 공개 dump의 크기를 7GB로 기록
- dump 범위는 5,871대 감염 장비와 162개국 데이터
- AI 서비스 인증 관련 가능성 JWT 555개와 인증 관련 JWE 2,937개를 수록
- 공개 당일 unexpired JWT·JWE 1,843개라는 기사 인용 수치

## 공격 경로와 방어 경계

- Lumma Stealer·Vidar 같은 infostealer가 credential·session token·API key를 수집 가능한 기사 범위
- 유효 session token/JWT는 interactive password·MFA 재입력 없이 재생될 수 있는 bearer credential 성격
- anti-detect browser·proxy가 session data load와 behavioral signal 회피에 사용될 수 있다는 Okta 설명
- 모든 token의 유효성·실제 unauthorized access·개별 service impact는 원문만으로 확정하지 않음

## 운영 조치

- AI SaaS·coding IDE·cloud console의 session·API key·OAuth connector inventory와 revoke owner 확인
- EDR browser profile access와 new-device·proxy·bulk export·API spend telemetry 상관 분석
- endpoint isolation→session invalidation→key/grant rotation→connector scope review→audit preservation 순서의 incident runbook 적용
