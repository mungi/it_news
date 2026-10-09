---
source_url: https://www.cncf.io/blog/2026/10/09/who-owns-nis2-and-dora-on-a-kubernetes-platform-team/
title: Who owns NIS2 and DORA on a Kubernetes platform team
ingested: 2026-10-09
published: 2026-10-09 17:07 KST
sha256: eada92eaa22d21839ac6dd71531932572a33aa9079d20a96a620e44846817ff0
tags: [cloud, infra, kubernetes, cloud-security, compliance, global]
---

# CNCF, Kubernetes 플랫폼의 NIS2·DORA evidence를 규정명이 아닌 운영 artifact에 배정하는 방법 제시

- NIS2 Article 20과 DORA Article 5의 경영진 책임을 Kubernetes control artifact·sprint item·정기 운영 증거로 연결하는 조직 설계 제안
- risk·legal·security는 scope·control question·evidence definition을 맡고, platform·application team은 artifact·sprint item·recurring operation을 맡는 traceability chain 제시
- hardened image catalog·rebuild pipeline, secrets manager, API server audit/SIEM, admission policy 등은 owner·증거·예외 만료일이 있는 운영 항목으로 분해 필요
- NIS2 Article 23의 24시간 early warning·72시간 incident notification·1개월 final report 일정은 원문에 제시된 범위이며, 적용 대상·증거 충분성·구체적 통제 매핑은 조직 위험평가·국가 이행법·규제기관에 따라 달라져 법률 자문 또는 공식 mapping이 아님

## 운영 경계

- control statement를 security backlog에만 넣지 말고 Kubernetes object·runbook·retention·owner가 명시된 demo 가능한 artifact로 변환 필요
- public blog의 illustrative open-source mapping을 compliance 충족 증명으로 사용하지 말고 조직별 scope·RACI·evidence retention·incident reporting runbook으로 검증 필요
