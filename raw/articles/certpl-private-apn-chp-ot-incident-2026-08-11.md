---
source_url: https://cert.pl/en/posts/2026/08/incident-follow-up-report-energy-sector-2025/
title: Follow-Up Report of the December 2025 Energy Sector Incident
ingested: 2026-08-11
published: 2026-08-08
sha256: 6e6f2e81d246f81614ede09d48e284b6097a4654cc10f7ec2dbc7d9b059aa6ad
tags: [cybersecurity, infra, networking]
---
CERT Polska가 2025년 12월 폴란드 소규모 열병합발전소 침해의 후속 보고서를 2026년 8월 공개함. 공격은 풍력발전 단지 경로에서 private cellular APN의 client-to-client 통신 허용을 거쳐 WAGO PFC200 controller와 발전소 OT network로 이동한 흐름으로 조사됨. Siemens S7-300·S7-1200·S7-1500 controller가 STOP mode로 전환되고 password protection이 적용돼 steam turbine과 process-water treatment system이 정지했으며, Moxa serial device server·switch 초기화와 unreachable IP 설정도 관측됨. 약 5만 명 대상 열 공급 설비였으나 사업자 대응으로 고객 열·전력 공급 중단은 없었음. CERT는 단일 CVE·malware·router credential 획득 방식을 확정하지 않음. The Hacker News RSS `Tue, 11 Aug 2026 12:25:45 +0530` = 2026-08-11 15:55 KST는 관련 보도 시각이며, primary CERT 보고서의 정확한 시각 주장이 아님.
