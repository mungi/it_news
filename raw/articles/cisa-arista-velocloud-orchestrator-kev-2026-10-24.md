---
source_url: https://www.cisa.gov/news-events/alerts/2026/10/23/cisa-adds-one-known-exploited-vulnerability-catalog
title: CISA Adds One Known Exploited Vulnerability to Catalog
ingested: 2026-10-24
published: 2026-10-23 KST
sha256: 15b8db8960ef20f3ef83ff1bea3808fb9d4b56b5ec0981e56ba4bbd425d0181e
tags: [cisa, kev, arista, velocloud, sql-injection, cybersecurity, incident-response, global]
---
# CISA KEV: Arista VeloCloud Orchestrator SQL injection

CISA alert 원문을 기준으로 2026-10-23 KST에 기록. 원문은 `CVE-2026-114625` Arista VeloCloud Orchestrator SQL Injection Vulnerability를 KEV Catalog에 추가했고 active exploitation evidence를 근거로 제시함.

- 추가: `CVE-2026-114625` Arista VeloCloud Orchestrator SQL injection vulnerability를 KEV Catalog에 등록
- 근거: CISA가 active exploitation evidence를 기준으로 KEV 추가 사실을 명시
- 우선순위: publicly exposed asset에서 post-exploitation total control을 주는 KEV를 rapid remediation 대상으로 다루는 BOD 26-04 방향
- 조사: BOD 26-04가 patch 전 compromise 여부 점검의 기본 기대를 둔다는 설명
- 경계: alert는 affected version, fixed release, exposure 조건, exploitation detail을 본문에서 제공하지 않으므로 vendor advisory와 local inventory로 별도 확인 필요
- 팀 액션: exposed orchestrator inventory·internet reachability·administrator identity·SQL/application log·configuration export를 보존하고 vendor remediation 확인 전 access restriction과 hunting 병행
