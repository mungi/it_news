---
source_url: https://thehackernews.com/2026/07/goddamn-ransomware-uses-poisonx-driver.html
title: GodDamn Ransomware Uses PoisonX Driver to Disable Endpoint Defenses
ingested: 2026-07-09
published: 2026-07-09 19:43
tags: [ransomware, byovd, endpoint-security, windows, incident-response]
sha256: 943fc02d3fc219815fb0a8d9831f64fbec2aa9fa9d5c4863cf5676cfab85dcb5
---

# GodDamn 랜섬웨어, PoisonX 커널 드라이버로 EDR·백업 방어를 무력화

- THN 보도 기준 GodDamn 랜섬웨어는 PoisonX 커널 드라이버를 사용해 endpoint defense를 무력화함.
- Symantec Threat Hunter Team은 GodDamn을 Beast·Monster 계열 재브랜딩으로 평가하고, 개발자를 Hyadina로 추적함.
- 공격 흐름에는 AnyDesk, PsExec, NetScan, MegaSync, rclone, Mimikatz, GMER, RDPClip, WinSCP, vssadmin 사용이 포함됨.
- 운영 의미: 드라이버 차단 정책, 원격 관리 도구 감시, 백업 격리, EDR tamper protection 점검 필요.
