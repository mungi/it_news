---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-consumption-based-pricing
title: Announcing consumption-based pricing for short-term memory in Amazon Bedrock AgentCore
created: 2026-10-13
ingested: 2026-10-13
published: 2026-10-13 01:00 KST
sha256: 434e1338677372e18a9df00b83316be3e65ac11953b1c1dbc9c372bb1a23e1b8
tags: [aws, cloud, agent, finops, global]
---
# Announcing consumption-based pricing for short-term memory in Amazon Bedrock AgentCore

AWS 공식 공지의 AgentCore Memory short-term memory consumption pricing을 기록.
- ingestion $1.00/GB·retrieval $0.20/GB·storage $0.10/GB-month
- ingestion/retrieval event별 12KB minimum·64KB maximum billable size, storage actual size 청구
- long-term memory 가격은 변동 없음
- 팀 액션: byte histogram·floor hit rate·TTL·retrieve-to-ingest ratio·agent별 비용 trace 필요
