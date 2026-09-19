---
source_url: https://thehackernews.com/2026/09/claude-opus-5-helped-researchers-take.html
title: Discourse image-processing 결함·OpenAI SSO trust chain의 직원 ChatGPT·Codex 계정 및 internal repository 접근 연구
created: 2026-09-20
ingested: 2026-09-20
published: 2026-09-19
sha256: 929684fe3c6545cff89232f877de0acf58732b17cbac8bd83cdde4760db553e9
tags: [cybersecurity, ai, identity-security, devtools, cloud-security, global]
---
# Discourse image-processing 결함·OpenAI SSO trust chain: 직원 ChatGPT·Codex 계정과 internal repository 접근 연구

- 보도 원문: https://thehackernews.com/2026/09/claude-opus-5-helped-researchers-take.html
- primary research: https://www.hacktron.ai/blog/hacking-openai
- 원문 보도 시각: 2026-09-19 00:06:53 +05:30, KST 2026-09-19 03:36
- evidence boundary: Hacktron 기술 연구와 The Hacker News 보도를 직접 확인한 범위임. 연구자는 source code·customer data 열람, merge·ship, 실제 공격을 하지 않았다고 명시했으며, OpenAI는 login flaw의 세부 내용과 개별 account takeover를 공개적으로 설명하지 않음

## 핵심 요약

- 공개: Hacktron이 7월 25일 Discourse forum compromise와 별도 OpenAI SSO weakness를 연쇄해 여러 직원 ChatGPT·Codex account 및 internal repository 권한을 시연
- 검증: internal monorepo `openai/openai`에 harmless pull request 1건으로 접근만 증명했고 source code·customer data·merge·deployment는 미수행
- 조치: 연구자 기준 OpenAI-side finding은 신고 약 14시간 뒤 수정됐고 9월 1일 `$6,500` bounty 지급
- 조건: HEIC/HEIF upload의 ImageMagick·`libheif` path에서 Debian 12 image의 `libheif 1.19.7`이 upstream `1.22.0` 수정 뒤에도 남아 있던 상태
- 운영: public web service native dependency patch, SSO client trust boundary, connected-app token scope·revoke를 하나의 incident closure로 점검 필요

---

## 연구가 설명한 chain

- forum: Discourse가 uploaded HEIC·HEIF image를 ImageMagick와 `libheif`로 처리
- native dependency: `CVE-2026-32882` public record는 out-of-bounds read·crash 또는 memory disclosure 범위
- exploit boundary: Hacktron은 memory disclosure와 다른 memory bug를 결합해 ASLR을 우회하고 forum server RCE로 확장했다고 기술
- identity: compromised forum의 shared OpenAI sign-on이 staff ChatGPT·Codex account 접근으로 이어졌다는 연구자 설명
- connector: GitHub·Slack·email은 connected service에 따른 이론 범위이며 연구자가 사용하지 않음

## 패치·대응 경계

- self-hosted Discourse: fixed application release뿐 아니라 container digest·runtime `libheif` package·HEIC/HEIF upload path 점검
- identity: issuer·redirect URI·audience·session binding·account-linking과 privileged membership을 SSO client별 검증
- revocation: forum compromise 가정 시 IdP session·connected-app OAuth token·repository access review와 audit-log preservation 실행
- 경계: 이 사례는 skilled human direction이 포함된 security research이며 AI autonomous attack, 모든 사용자 영향, 고객 데이터 접근을 확인하지 않음
