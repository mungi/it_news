---
source_url: https://thehackernews.com/2026/08/greatness-phaas-adds-device-code.html
title: "Greatness PhaaS Adds Device Code Phishing to Bypass MFA and Steal Tokens"
ingested: 2026-08-05
published: 2026-08-05 02:27 KST
sha256: a77457658a162a8ad3781a0584f8fcc9e20fbb913d4c92edfdae8f273d262535
tags: [ai, cloud, infra, cybersecurity, weekly-briefing]
---

# Greatness PhaaS의 device-code phishing·token incident 대응

- The Hacker News RSS `Tue, 04 Aug 2026 22:57:39 +0530`을 `2026-08-05 02:27 KST`로 환산
- ZeroBEC 분석을 인용한 PhaaS capability 보도이며 특정 조직 피해나 모든 tenant의 침해 증거가 아님
- OAuth 2.0 Device Authorization Grant, AiTM token theft, OAuth consent abuse를 같은 operator panel에서 제공한다는 분석

---

## 유인과 인증 경로

- anti-analysis·User-Agent fingerprinting·CAPTCHA를 포함한 5단계 redirect chain이라는 보도
- AiTM proxy 또는 device-code endpoint로 유도하고 정상 provider page에서 code 입력을 유도할 수 있는 흐름
- RingCentral safe-sender exclusion을 악용한 voicemail lure 사례와 11개 이상 lure template이라는 분석

## token 악용과 탐지

- dedicated proxy에서 수분 내 token replay, Microsoft Graph API resource enumeration이라는 ZeroBEC 분석
- Microsoft가 관찰한 new device registration·PRT·지연된 inbox rule/data exfiltration은 관련 device-code campaign 사례
- sign-in·mail·Graph·device/app registration log를 revoke 전 보존하고 동일 timeline으로 상관 분석 필요

## 정책과 대응

- 필요하지 않은 device authorization grant의 Conditional Access global block 우선
- 필요한 경우 사용자·resource의 명시적 최소 예외, 지속 audit, 사용 종료 즉시 revoke 필요
- suspicious token은 session revoke·credential reset·device/app registration review·inbox rule 조사 runbook으로 대응
