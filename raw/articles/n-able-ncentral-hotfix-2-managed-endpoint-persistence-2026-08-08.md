---
source_url: https://thehackernews.com/2026/08/n-central-attackers-reach-managed.html
title: N-able Issues N-central Hotfix 2 as Attackers Reach Managed Systems and Persist
ingested: 2026-08-10
published: 2026-08-08 15:57 KST
sha256: 1fc6c7d2b78baea4524cf32635b31eec766af75b2530197b88337c5b9220d66e
tags: [it, cybersecurity, cloud-security, devops, security, release]
---
# N-able N-central Hotfix 2 및 관리 대상 시스템 지속성 조사

- 원문 제목: N-able Issues N-central Hotfix 2 as Attackers Reach Managed Systems and Persist
- 원문: https://thehackernews.com/2026/08/n-central-attackers-reach-managed.html
- 발행 시각: The Hacker News RSS `Sat, 08 Aug 2026 12:27:43 +0530` → 2026-08-08 15:57 KST

## 핵심 요약

- N-able이 ongoing exploitation 조사 중 기존 Hotfix 1을 대체하는 `Hotfix 2`를 요구하고 on-premises `2026.3.1.10` update를 안내함
- `CVE-2026-18577`은 `CVE-2026-18556`의 incomplete fix이며 report는 두 CVE의 KEV active-exploitation 상태를 설명함
- 관측된 공격자가 remote administrator access 뒤 Take Control로 managed system에 연결하고 Cloudflare Tunnel service를 등록한 vendor-observed 경로
- 확대 IP IoC와 Windows endpoint 점검 template이 제공됐으나 clean result가 무영향 보장은 아니라는 vendor 경고

## source-bounded 운영 정리

- server patch와 함께 N-central audit, admin/session, Take Control, Windows service creation, Cloudflare Tunnel artefact, egress를 customer endpoint 범위까지 상관 분석 필요
- Cloudflare Tunnel은 정상 도구이므로 service 발견만으로 악성 행위를 단정하지 않고 binary path·creation time·destination·session evidence 결합 필요
- 모든 customer compromise, data theft, actor identity, 완전한 IoC coverage는 원문이 확인하지 않은 범위
