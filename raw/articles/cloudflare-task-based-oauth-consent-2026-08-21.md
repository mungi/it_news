---
source_url: https://blog.cloudflare.com/task-based-oauth-consent/
title: "From all-or-nothing to task-based OAuth consent"
ingested: 2026-08-21
published: 2026-08-21 02:03 KST
sha256: 7d2f94298902be40bd1567bc567d7b0516e18230633a9e30e4519908cfec5521
tags: [cloud, cybersecurity, oauth, identity, agent, weekly-briefing]
---

# Cloudflare optional OAuth scopes와 task-based consent

- Cloudflare 공식 원문 `From all-or-nothing to task-based OAuth consent`를 직접 확인하고 `article:published_time` `2026-08-20T17:03:03.370Z`를 KST `2026-08-21 02:03`으로 변환
- 6월 이후 third-party OAuth app 수천 개와 authorization 100만 건 이상이라는 Cloudflare 집계, scope customization으로 OAuth client의 scope를 required/optional로 표기하는 기능 공개
- 사용자 consent 화면에서 authorization request에 포함된 optional scope를 해제할 수 있고, 발급 token에는 실제 동의한 scope만 포함되는 구조

---

## 기능 범위

- 기존 client는 configured scope의 subset을 request할 수 있었지만 consent 화면에서 사용자가 requested scope를 더 좁힐 수는 없었던 구조
- 신규 `optional_scopes`는 client owner가 configured scope 중 선택 가능 scope를 지정하고 user가 authorization 시점에 해당 scope를 제외하는 방식
- required/optional 판정은 client 전체 configured scope가 아니라 해당 authorization request가 요구한 scope 집합을 기준으로 수행

## agent·MCP 권한 경계

- MCP server나 agent가 이론적으로 broad scope를 요청해도 실제 task에는 모든 write/read 권한이 필요하지 않을 수 있는 문제를 Cloudflare가 적용 사례로 제시
- optional scope 해제 후 token에는 grant된 scope만 들어가므로 application은 authorization-code 교환 뒤 granted scope를 확인해야 하는 구현 요구
- scope selection을 authorization security의 단일 보증으로 해석하지 않고 redirect URI, client authentication, token storage, API authorization, audit와 결합해 검증 필요

## 팀 액션

- OAuth client별 requested·granted scope, task, API action, initiating identity, token TTL, resource를 inventory하고 default optional/required 분류 검토
- partial grant에서 UI·workflow·tool call이 unavailable permission을 안전하게 거절하고 escalation/reauthorization하는 integration test 수행
- optional scope 기능 제공 범위, product별 scope coverage, existing token migration·revocation·audit log·regional availability는 원문에 구체적으로 확인되지 않아 운영 계약과 dashboard evidence로 대조 필요
