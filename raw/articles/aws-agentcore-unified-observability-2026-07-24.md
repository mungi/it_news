---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-unified-observability-single-log-group/
title: Amazon Bedrock AgentCore now delivers unified observability with traces and logs in a single log group
ingested: 2026-07-24
published: 2026-07-24 02:00 KST
sha256: 37483cb9495ef0fa80aafd6211cbc9ffbcacd0b9112c26bf6cb99ca017c3961c
tags: [ai, cloud, observability]
---

# Amazon Bedrock AgentCore 단일 log group observability

AWS는 AgentCore Runtime의 trace, prompt, structured log, stdout를 agent별 단일 CloudWatch log group으로 보낸다고 발표함. 기존 shared `aws/spans` trace destination과 resource-specific event log 분리 구조를 통합하는 변경임.

## 핵심 사실

- per-agent 경로: `/aws/bedrock-agentcore/runtimes/<agent_id>-<endpoint_name>`
- 신규 agent: supported commercial Region에서 2026-07-20부터 default 적용
- 기존 agent: `UNIFIED_TRACES_DESTINATION_ENABLED=true`, ADOT 0.17.1 이상 요구
- 운영 영향: agent별 IAM·CMK encryption·subscription·retention을 설계하고 prompt/input/output 보관 범위를 통제 필요
- 발행 시각: AWS RSS `pubDate` 2026-07-23 17:00 UTC = 2026-07-24 02:00 KST
