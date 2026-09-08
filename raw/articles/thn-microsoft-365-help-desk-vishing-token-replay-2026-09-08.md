---
source_url: https://thehackernews.com/2026/09/microsoft-365-attackers-use-help-desk.html
title: Fake IT Calls Target Executives in Microsoft 365 Data Theft and Extortion Attacks
ingested: 2026-09-08
published: 2026-09-08 00:51 KST # THN RSS timestamp: Mon, 07 Sep 2026 21:21:56 +0530
sha256: 590227caa9cc7269a5c71b4725e3793fc2ebb8f8e8eae61be1ba2c290eed82b1
tags: [it, cybersecurity, identity-security, saas, global, weekly-briefing]
---
## 한국어 브리핑

- 공격: PREY-0058이 IT/help desk 사칭 전화로 Microsoft 365 authentication URL에 유도하는 vishing 경로 보도
- 탈취: AitM login flow에서 credential·MFA approval을 수집해 authenticated session token 확보
- 재사용: victim과 같은 지역·ASN처럼 보이는 residential proxy에서 token replay 수행 경로
- 수집: SharePoint·OneDrive·Exchange·Box discovery·대량 collection 뒤 extortion demand 연결
- 대응: phishing-resistant MFA·Conditional Access·data least privilege와 token replay·bulk access 탐지 결합 필요

---

## 원문 사실

- The Hacker News는 Arctic Wolf 분석을 인용해 director·vice president 등 executive staff가 주 표적이라고 보도
- `My Signins`·`My Profile`·`My Apps` 조회 뒤 SharePoint·Entra ID discovery, `SearchQueryPerformed` 기반 SharePoint 검색을 수행하는 범위
- endpoint malware·network lateral movement 없이 SaaS data plane에서 활동하는 것으로 설명

## 운영 대응

- residential proxy sign-in·token replay·MFA method·device/session·SharePoint search/download volume을 하나의 incident timeline으로 연결
- executive account Conditional Access·phishing-resistant MFA·SaaS data access scope·help desk call-back verification을 점검
- session/token revoke·credential reset·mailbox/SharePoint/OneDrive/Box export 조사와 evidence preservation 절차 준비

## 증거 경계

- PREY-0058, UNC6671, Cinder, Pink의 단일 actor identity는 보도에서 확정되지 않음
- individual victim·실제 유출량·각 SaaS tenant impact는 공개되지 않음
