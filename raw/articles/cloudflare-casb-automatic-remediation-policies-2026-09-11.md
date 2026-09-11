---
source_url: https://blog.cloudflare.com/casb-policies/
title: Introducing automatic remediation policies with Cloudflare CASB
ingested: 2026-09-12
published: 2026-09-11 22:00
sha256: ae9be491752a922178513e08e07ce10edff86fed0f46afc879e13c34520a3d7c
tags: [cloud, cybersecurity, saas, cloud-security, devops, global, product]
---

# Cloudflare CASB 자동 remediation policy

- 공개: CASB finding 발생 뒤 file share revoke 또는 webhook dispatch를 실행하는 event-driven policy 추가
- 탐지 대상: overshared file·dormant admin key/token·excessive OAuth permission 등 SaaS posture finding 범위
- 지원: direct remediation은 Microsoft 365·Google Workspace file/folder finding에 제공되며 read-write integration permission 필요 가능성
- 구조: findings engine→Cloudflare Queue→Worker policy match→Cloudflare Workflows remediation pipeline 경로
- 신뢰성: process restart 뒤 job 유지, vendor API rate-limit error backoff/retry, detection-to-completion 5분 이하 provider target
- 감사: policy definition 변경 Admin Activity log와 runtime Cloud & SaaS Security policies log를 분리 제공

## 원문 핵심

Cloudflare는 수동 remediation confirmation을 대체하는 automatic policy를 Cloudflare One에 추가함. 새 finding이 policy와 일치하면 configured action을 직접 실행하거나 webhook을 보냄.

- policy 설정: vendor·특정 integration 또는 전체 integration·finding type·action 선택
- direct remediation: Cloudflare가 SaaS integration API에 실행하는 first-party action 범위
- webhook: Slack·Microsoft Teams·Jira·ServiceNow·Tines·custom HTTP endpoint 전달 범위
- 예시: public sharing 금지 policy에서 허용된 marketing group 예외를 제외하고 공개 share revoke 처리

## 아키텍처·운영 경계

- Queue: findings engine의 orchestration message 전달
- Worker: incoming finding과 policy configuration match 판정
- Workflows: remediation job의 durable, fault-tolerant 실행·retry·rate-limit backoff 처리
- 로그: triggering finding·acted file·success/failure·401 Unauthorized·vendor API rate-limit error 기록 범위
- 경계: 자동 action은 SaaS data-plane write 권한을 사용하므로 false positive·예외 group·restore 권한·OAuth scope를 rollout 전에 검증 필요

## 팀 액션

- Microsoft 365·Google Workspace tenant별 read-write consent·owner·finding type·exception group inventory 고정
- webhook endpoint secret·delivery failure·vendor API 401/429·revoke/restore event를 SIEM case로 상관 분석
- webhook-only observation→canary revoke→false-positive/rollback SLO 검증 순서로 rollout
- policy별 change owner·restore SLA·disable path·audit retention을 runbook에 기록
