---
source_url: https://thehackernews.com/2026/08/microsoft-patches-398-flaws-including.html
title: Microsoft Patches 398 Flaws Including a Windows Driver Zero-Day Under Active Attack
ingested: 2026-08-12
published: 2026-08-12 05:10 KST
sha256: bdb0660edd91b1e1816c53cce60ea58be25ac1b821d3b410da36926f3d214ac4
tags: [cybersecurity, operating-system, cloud-security, global]
---

## 원문 확인

- The Hacker News 원문 제목·본문·article image를 직접 확인함
- 기사 화면은 `Aug 11, 2026` calendar date만 표시함
- 카드 시각 `2026-08-12 05:10 KST`는 The Hacker News RSS `Wed, 12 Aug 2026 01:40:55 +0530` 변환값이며, 원문이 주장한 정확한 공개 시각 아님

## 확인된 사실

- Microsoft가 active exploitation으로 표시한 `CVE-2026-68820`은 Windows `afd.sys` race condition 기반 local privilege escalation으로 보도됨
- 공격자는 먼저 target machine에서 code execution을 확보해야 하며, 성공 시 SYSTEM privilege escalation 가능 범위
- Windows DNS Server `CVE-2026-62878`, Windows Deployment Services `CVE-2026-62893`, Microsoft QUIC `CVE-2026-62815`, HPC Pack `CVE-2026-59124`은 무인증·사용자 상호작용 없는 RCE로 보도됨
- 보도는 ZDI 기준 신규 CVE 398건·Critical 62건을 집계하며, 위 4개 RCE의 CVSS 9.8을 언급함
- HPC Pack은 default installation이 아니며, DNS/WDS/QUIC/HPC 서비스의 실제 우선순위는 설치·reachability에 따라 달라짐

## 증거 경계

- Lazarus Operation Dream Job 연계는 Check Point Research의 attribution을 인용한 보도이며 Microsoft의 공개 attribution으로 독립 확인하지 않음
- 4개 server RCE는 기사 기준 release 시점 active exploitation으로 표시되지 않았으며 worm 존재·실제 조직 침해를 뜻하지 않음
- CVE별 fixed build·조직별 노출·patch 성공·침해 여부는 Microsoft Security Update Guide와 endpoint/server inventory로 별도 확인 필요

## 운영 경계

- `afd.sys` 관련 local escalation은 endpoint foothold 이후 SYSTEM escalation 가능성으로 triage하고, initial access와 혼동하지 않을 것
- DNS·WDS·QUIC·HPC Pack은 service installation·listening path·network exposure·maintenance window를 inventory한 뒤 patch queue 구성 필요
- on-premises SharePoint는 July `CVE-2026-55040`과 August `CVE-2026-63520` 수정 적용을 함께 검증 필요
