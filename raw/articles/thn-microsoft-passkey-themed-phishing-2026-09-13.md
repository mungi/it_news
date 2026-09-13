---
source_url: https://thehackernews.com/2026/09/attackers-use-passkey-phishing-to.html
title: Attackers Use Passkey Phishing to Hijack Microsoft Cloud Accounts and Exfiltrate Data
ingested: 2026-09-14
published: 2026-09-13 19:11
sha256: 7006d4e31b5cc390b0023a0341dc1ef6e116a9f2b0854b82d6fb5b845f6dd4b0
tags: [ai, infra, security, weekly-briefing]
---

# Microsoft cloud passkey-themed phishing·MFA persistence

- 원문: The Hacker News canonical article 직접 HTTP 200 확인
- 발행 시각: The Hacker News RSS `Sun, 13 Sep 2026 15:41:48 +0530`에서 KST `2026-09-13 19:11` 변환. 본문 page는 exact timezone-bearing timestamp 미노출
- 이미지: 원문 `og:image` 직접 확인
- primary 링크: Microsoft Security Blog passkey-themed social engineering URL이 원문에서 연결됨. 현 run direct HTTP retrieval은 403으로 실패했으므로 primary의 본문을 독립 확인하지 못함

## 확인한 사실
- Microsoft 인용 범위로, attacker-controlled phone number·authenticator app·software OTP 등록 뒤 MFA persistence를 만들 수 있는 경로
- Microsoft 인용 범위로, Graph API user/group/permission/resource enumeration과 SharePoint Online·OneDrive for Business·Exchange Online data access·수시간~수일 exfiltration 가능성
- source는 authentication·reconnaissance·exfiltration에 다른 IP를 쓰는 network-indicator 회피 범위를 설명

## 증거 경계
- passkey protocol cryptographic failure, 모든 Microsoft tenant 침해, 개별 조직의 data theft 성공으로 일반화 불가
- primary article retrieval 403 때문에 모든 기술 claim은 THN의 Microsoft 인용 범위로 귀속

## 운영 확인
- authentication method registration·MFA reset·session/token revocation과 Graph/SaaS data access audit를 사용자별 incident timeline으로 결합 필요
