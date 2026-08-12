---
source_url: https://www.cisa.gov/news-events/alerts/2026/08/11/cisa-adds-three-known-exploited-vulnerabilities-catalog
title: CISA Adds Three Known Exploited Vulnerabilities to Catalog
ingested: 2026-08-12
published: 2026-08-11  # CISA page date only; exact time unavailable
sha256: ce1d2e931f5c6c07238483306d03a49bcca89a71699fdbc10378f1861a7bc3ef
tags: [cybersecurity, cloud-security, operating-system, global]
---

## 원문 확인

- CISA alert `CISA Adds Three Known Exploited Vulnerabilities to Catalog` 원문과 KEV JSON을 직접 확인함
- alert 화면은 `Release Date August 11, 2026`만 표시하며, 정확한 공개 시각은 주장하지 않음
- 기존 `news-324` 카드의 `2026-08-12 05:10 KST`는 THN RSS ordering time으로 유지함

## 확인된 사실

- CISA는 active exploitation evidence를 근거로 `CVE-2026-20349`, `CVE-2026-68820`, `CVE-2026-72898`을 2026-08-11 KEV Catalog에 추가함
- KEV JSON은 Windows `CVE-2026-68820`을 authorized attacker가 local privilege를 elevate할 수 있는 `afd.sys` use-after-free로 기술함
- Cisco ASA/FTD `CVE-2026-20349`은 unauthenticated remote attacker가 device reload를 유발할 수 있는 DoS 조건으로 기술함
- Metabase `CVE-2026-72898`은 unauthenticated SQL injection으로 application DB administrator access, configuration change, connected database credential theft, accessible data read/export 가능 범위를 기술함

## 증거 경계

- KEV 등록은 각 조직의 침해·인터넷 노출·patch 성공·data exfiltration을 뜻하지 않음
- CISA BOD 26-04 due date는 U.S. FCEB 대상 요구사항이며 민간 조직의 직접 SLA가 아님
- Windows `CVE-2026-68820`은 local privilege escalation로 기술되며 standalone remote initial-access 결함으로 확대 해석하지 않음

## 운영 경계

- Windows endpoint는 patch와 pre-patch local SYSTEM escalation·credential access 조사 병행 필요
- Cisco ASA/FTD는 internet exposure·HA/failover·vendor mitigation과 reload impact 확인 필요
- self-hosted Metabase는 fixed release·session/API key·stored connection credential rotation·query/export log 보존 확인 필요
