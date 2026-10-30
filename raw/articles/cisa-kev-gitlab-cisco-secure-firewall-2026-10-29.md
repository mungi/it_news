---
source_url: https://www.cisa.gov/news-events/alerts/2026/10/29/cisa-adds-two-known-exploited-vulnerabilities-catalog
title: CISA KEV additions: GitLab CE/EE and Cisco Secure Firewall
ingested: 2026-10-30
published: 2026-10-29 21:00
sha256: 5a261627c08af480aae9962ce3dcc8a889b92415d42bde9675f78c4455c342f3
tags: [security, ai, cloud, devops, global]
---

# CISA KEV additions: GitLab CE/EE and Cisco Secure Firewall

- 확인 시각: 2026-10-30 23:09 KST
- 원문: https://www.cisa.gov/news-events/alerts/2026/10/29/cisa-adds-two-known-exploited-vulnerabilities-catalog

## 확인한 사실
- CISA가 active exploitation evidence를 근거로 KEV Catalog에 취약점 2건 추가
- `CVE-2026-97229`: GitLab Community Edition·Enterprise Edition integer overflow or wraparound vulnerability
- `CVE-2026-76418`: Cisco Secure Firewall ASA Software·Cisco Secure FTD Software unchecked return value to NULL pointer dereference vulnerability
- 공지 본문에는 individual affected version·fixed build·exploit precondition 미포함

## 운영 경계
- KEV 등록은 모든 GitLab·ASA·FTD deployment의 직접 영향·exploit 성공·patch compatibility·forensic clean 상태를 보장하지 않음
- GitLab·Cisco vendor advisory와 asset inventory로 fixed version·management exposure를 대조하고 patch 전후 access·configuration evidence와 prior-compromise hunt를 병렬 처리 필요
