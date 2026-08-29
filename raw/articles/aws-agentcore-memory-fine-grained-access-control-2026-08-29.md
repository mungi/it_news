---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control/
title: Amazon Bedrock AgentCore Memory fine-grained access control
ingested: 2026-08-29
published: 2026-08-29 05:00
sha256: c748f9c2c12bf7cc9a82582f21c26e8f202136abeede9f196be6aa927d221008
tags: [ai, cloud, cybersecurity, agent, aws]
---

# Amazon Bedrock AgentCore Memory fine-grained access control

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control/
- 원문 제목: Amazon Bedrock AgentCore Memory now supports fine-grained access control
- 발행: 2026-08-29 05:00 KST (`Fri, 28 Aug 2026 20:00:00 GMT` RSS pubDate)
- 확인: AWS What’s New canonical announcement와 RSS entry 직접 확인

## 원문 핵심

- AgentCore Memory가 AgentCore Gateway 기반 fine-grained access control(FGAC) 지원
- OAuth JWT 인증 Gateway에 Cedar policy를 연결해 authenticated caller identity 기반 access control 적용
- user별 actor data 접근, token claim-derived namespace record 접근, caller별 Memory operation allow/deny 지원
- AgentCore Memory connector가 Gateway target과 Memory data plane을 연결하고 12개 Memory operation을 Cedar action 및 request attribute로 노출

## 증거 경계

- AWS 발표는 JWT issuer·audience·claim normalization, tenant/actor/namespace mapping, policy authoring, default-deny, token rotation·revocation, application authorization, cross-tenant migration, audit retention·latency·가격을 보증하지 않음
- 도입 전 정상/다른 tenant/expired·replayed/missing·forged claim과 12개 action matrix를 실행하고 decision·request·trace correlation을 검증 필요

## 출처

- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/08/agentcorememory-fine-grained-access-control/
- Developer Guide: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory-gateway-fgac.html
