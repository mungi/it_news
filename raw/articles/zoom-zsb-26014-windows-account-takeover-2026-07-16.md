---
source_url: https://www.zoom.com/en/trust/security-bulletin/zsb-26014/
title: Zoom Workplace for Windows - Improper Input Validation
ingested: 2026-07-16
published: 2026-07-14
sha256: 08f07877e8bef49fa7c965ee3c2d62f285ffa4c6d298e904708e99c17983bbb6
tags: [it, cybersecurity, devtools, global, security]
---

# Zoom Workplace Windows 계정 탈취 취약점 패치

- Zoom Security Bulletin `ZSB-26014`는 `CVE-2026-53412`를 Windows용 Zoom Workplace의 improper input validation 결함으로 분류함
- 공식 bulletin 표기: Critical, CVSS 9.8, 네트워크 접근을 가진 비인증 공격자의 account takeover 가능성
- 영향 범위: Zoom Desktop Client for Windows, Zoom VDI Client for Windows, Zoom Meeting SDK for Windows
- bulletin 공개일: 2026-07-14, 업데이트일: 2026-07-15
- 실제 악용 campaign·침해 사례·영향 조직 수는 bulletin에 공개되지 않아 로그 기반 별도 판정 필요

## 운영 메모

- Windows endpoint, VDI golden image, Meeting SDK 의존 애플리케이션을 별도 inventory로 대조 필요
- IdP·EDR·proxy 로그에서 비정상 인증·session·network activity를 evidence로 보존 필요
- 고위험 예외 장비는 patch 전 compensating control과 owner·만료일 기록 필요

## 출처

- 공식 Zoom Security Bulletin: https://www.zoom.com/en/trust/security-bulletin/zsb-26014/
- The Hacker News 보도: https://thehackernews.com/2026/07/zoom-patches-critical-windows-flaw-that.html
