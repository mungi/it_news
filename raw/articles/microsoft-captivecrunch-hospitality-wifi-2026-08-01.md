---
source_url: https://www.microsoft.com/en-us/security/blog/2026/07/31/captivecrunch-midnight-blizzard-targets-travelers-worldwide-for-malware-delivery-and-credential-theft/
title: CaptiveCrunch: Midnight Blizzard targets travelers worldwide for malware delivery and credential theft
ingested: 2026-08-03
published: 2026-07-31
sha256: 37fa1ff7b258b146a1bac27ba292a4c096db31c0ddbf7a68d1f5327d27a42a74
tags: [it, cybersecurity, ai, global, security]
---

# CaptiveCrunch: hotel captive portal DNS/HTTP traffic manipulation

- Microsoft Threat Intelligence는 2026년 5월 초부터 captive portal을 쓰는 전 세계 hospitality network에서 Storm-2945가 DNS·HTTP traffic manipulation을 관측했다고 공개
- Microsoft는 해당 campaign을 CaptiveCrunch로 명명하고 Midnight Blizzard의 sub-cluster Storm-2945에 귀속했으나, initial compromise vector는 조사 중이며 shared captive-portal service 접근 가능성은 관찰된 equipment·management-system 공통점에 근거한 가능성 범위
- actor-controlled infrastructure는 browser 또는 OS connectivity check 뒤 가짜 update를 제시하고 ClickFix 방식으로 사용자의 download·execution을 유도하는 흐름
- 공개된 Golang RAT variant는 system enumeration, file·keystroke collection, credential·session token theft, audio/video surveillance, removable-media monitoring, remote shell 기능을 가진다고 Microsoft가 설명
- Microsoft는 device-code 및 OAuth code phishing, Entra device registration, Microsoft 365 data collection과의 연결도 설명하며 AI가 operations 상당 부분을 지원하는 것으로 관측했다고 명시

## 공격 경로와 증거 경계

- captive portal gateway의 DNS resolver control이 legitimate domain traffic을 attacker-controlled infrastructure로 redirect하는 전제
- malware delivery는 endpoint의 무인 감염이 아니라 user가 fake update·ClickFix instruction을 따라 payload를 실행하는 조건
- Microsoft는 affected captive portal network의 initial compromise vector를 확정하지 않았고, THN과 ReliaQuest의 public reporting도 victim·successful execution·account theft count를 제공하지 않음
- Microsoft의 Storm-2945 attribution과 ReliaQuest의 APT28-like TTP 평가는 서로 다른 attribution scope이므로 동일 actor 확정으로 병합하지 않음

## 운영 대응

- always-on full-tunnel VPN으로 DNS query를 corporate resolver로 보내 public captive portal의 DNS manipulation 경로 차단 필요
- captive portal에서 제시되는 update·certificate·troubleshooting tool의 download·execution을 endpoint policy와 traveler guidance로 차단 필요
- Entra device-code flow가 불필요한 tenant에서는 Conditional Access block을 검토하고, device registration·OAuth consent·unusual DNS/HTTP redirect·token use를 같은 investigation timeline으로 연결 필요
- travel cohort의 VPN compliance, risky Wi-Fi connection, device-code approval, newly registered device, token replay signal을 hunt 범위로 운영 필요

## Sources

- Primary: https://www.microsoft.com/en-us/security/blog/2026/07/31/captivecrunch-midnight-blizzard-targets-travelers-worldwide-for-malware-delivery-and-credential-theft/
- Secondary report and exact RSS timestamp: https://thehackernews.com/2026/08/hijacked-hotel-wi-fi-pushes-fake.html
- Corroborating technical report: https://reliaquest.com/blog/threat-spotlight-dns-poisoning-tactics-expand-to-hospitality/
