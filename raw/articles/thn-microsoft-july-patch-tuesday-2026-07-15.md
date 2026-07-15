---
source_url: https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html
title: Microsoft Patches Record 622 Flaws, Including Two Zero-Days Under Active Attack
ingested: 2026-07-15
published: 2026-07-15 05:25
sha256: b7e062f8e8825fb214137d9de0c0ed8a7742be1023d59271f0b650657d8a2cc1
tags: [cybersecurity, microsoft, sharepoint, authentication]
---

# Microsoft 2026년 7월 Patch Tuesday: 622개 CVE와 SharePoint·AD FS 활성 악용 결함

- Microsoft Security Update Guide 기준 **622개 CVE** 수정으로, The Hacker News는 2026년 7월 15일 KST 보도에서 전월 약 200개 수준의 이전 최고치보다 3배 이상 많은 배포로 정리함
- `CVE-2026-56164`: 온프레미스 SharePoint Server의 네트워크 권한 상승 결함으로 Microsoft가 공격 중 악용을 표시한 조건
- `CVE-2026-56155`: AD FS의 접근 통제 약점을 통한 로컬 권한 상승 결함으로 Microsoft가 공격 중 악용을 표시한 조건
- SharePoint Server 2016·2019는 같은 날 연장 지원 종료에 도달했고, SharePoint는 JWT 인증 우회 `CVE-2026-55040`과 별도 RCE 체인의 위험도 언급됨
- Kerberos RC4 hardening rollout이 `RC4DefaultDisablementPhase` rollback switch를 제거하며, legacy service account와 RC4 전용 client의 인증 회귀 점검 필요

## 운영 점검

- 외부 노출 SharePoint·AD FS의 패치 우선순위를 KEV 등재 대기 없이 Microsoft exploited 표시, 권한 범위, 인터넷 노출 여부로 결정 필요
- RC4 audit event로 영향 service account를 찾고 비밀번호 회전·AES key 생성·로그인 회귀 시험 뒤 패치 적용 필요
- SharePoint 권한 상승, AD FS 관리자 권한 변화·token issuance 이상, RC4 ticket 요청을 단일 change record와 SIEM 탐지 항목으로 결합 필요

## 원문·공식 참고

- 원문: https://thehackernews.com/2026/07/microsoft-patches-record-622-flaws.html
- Microsoft Security Update Guide: https://msrc.microsoft.com/update-guide/releaseNote/2026-Jul
- CVE-2026-56164: https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-56164
- CVE-2026-56155: https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-56155
