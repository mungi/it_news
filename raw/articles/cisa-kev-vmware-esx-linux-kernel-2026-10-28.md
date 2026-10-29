---
source_url: https://www.cisa.gov/news-events/alerts/2026/10/28/cisa-adds-two-known-exploited-vulnerabilities-catalog
title: CISA KEV additions: VMware ESX and Linux Kernel
ingested: 2026-10-29
published: 2026-10-28 21:00
sha256: 51e70a592bca57686a0e5f33ba66845533c4ddfa68dd5b71c159ce2b27a97a2a
tags: [security, infra, vmware, linux, kev, incident-response, global]
---

# CISA KEV additions: VMware ESX and Linux Kernel

- 확인 시각: 2026-10-29 14:37 KST
- 원문: https://www.cisa.gov/news-events/alerts/2026/10/28/cisa-adds-two-known-exploited-vulnerabilities-catalog

## 확인한 사실
- CISA가 active exploitation evidence를 근거로 KEV Catalog에 취약점 2건 추가
- `CVE-2026-41709`: Broadcom VMware ESX insufficient logging vulnerability
- `CVE-2026-46300`: Linux Kernel missing initialization of a variable vulnerability
- 공지 본문에는 individual affected version·fixed build·exploit precondition 미포함
- CISA는 KEV 기반 risk-based vulnerability management와 patch 전 compromise 확인 중요성을 안내

## 운영 경계
- KEV 등록은 모든 ESX·Linux deployment의 직접 영향·exploit 성공·patch compatibility·forensic clean 상태를 보장하지 않음
- vendor advisory와 asset inventory로 fixed version·exposure를 대조하고 patch 전후 hunt·credential rotation·host rebuild 판단을 병렬 처리 필요
