---
source_url: https://blog.cloudflare.com/programmable-gateway-dlp/
title: A fully programmable secure web gateway
created: 2026-10-16
ingested: 2026-10-16
published: 2026-10-16 02:11 KST
sha256: 20a2c7797e945caafd1af4b57302e193220be2931dcc12f8015dc2a1b3a164cb
tags: [cloud, infra, cybersecurity, devops, global]
---
# Cloudflare Gateway·DLP programmable secure web gateway

Cloudflare 공식 글의 Gateway·DLP inline policy code 실행 범위와 운영 경계를 기록.
- Gateway와 DLP에 Worker로 traffic을 전달하는 `Forward` action 및 custom validation function을 공개한 범위
- 모든 Cloudflare Zero Trust plan 대상이라는 발표와, Worker로 request traffic 변환 또는 policy evaluation용 customer data를 제공할 수 있다는 설명
- identity provider JWT claim 기반 HTTP header 주입, SaaS 가입 event 처리, 민감 destination 접근 전 justification 수집 사례를 제시한 범위
- Gateway에서 Worker로의 dispatch는 같은 edge location·machine·data center의 local function call이라며 network hairpin과 추가 network latency가 없다고 설명한 범위
- Worker code 오류·timeout·외부 dependency·fail-open/closed·secret·request log·egress·approval·rollback은 고객이 별도 설계·검증해야 하는 운영 경계
- 팀 액션: policy rule·Worker digest·input/output schema·claim 최소화·secret binding·egress allowlist·failure default·trace·canary를 단일 security change set으로 관리 필요
