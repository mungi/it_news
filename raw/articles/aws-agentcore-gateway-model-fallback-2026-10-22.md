---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-gateway-invokemodel-fallback/
title: AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback
ingested: 2026-10-23
published: 2026-10-22 17:00 KST
sha256: 6765b8e1be2cd8af5c8baf5cdbac2cc0699dde128cf12b1e334acbadde3e3857
tags: [aws, bedrock, agentcore, model-routing, ai-agent, resilience, ai, cloud, global]
---

# AgentCore Gateway now supports Bedrock InvokeModel APIs and model fallback

AWS What’s New RSS `Thu, 22 Oct 2026 08:00:00 GMT`와 canonical announcement를 대조해 KST `2026-10-22 17:00` 기준으로 기록.

- 공개: AgentCore Gateway inference endpoint의 `InvokeModel`·`InvokeModelWithResponseStream` API 지원
- 연결: 기존 Bedrock SDK integration을 gateway endpoint로 바꿔 governed endpoint 사용 가능
- fallback: ordered alternative destination chain과 switching condition을 gateway rule에 정의
- 조건: throttling·server error·response timeout, primary capacity 부족·unreachable 사례
- 복원력: built-in circuit breaker가 현재 failing destination skip
- client view: internal trial과 switch 뒤에도 one request·one response 형태
- 제공: AgentCore Gateway 제공 Region, China 제외
- 경계: output quality·provider parity·side-effect idempotency·data residency 보장 범위 아님
