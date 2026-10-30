---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/
title: AWS Step Functions workflows as AI agent tools via Amazon Bedrock AgentCore Gateway
ingested: 2026-10-30
published: 2026-10-29 17:00
sha256: a37ba0354d3b4cab7fb0a5ef8868ebb50777316060d59116eba27f460ca9b472
tags: [security, ai, cloud, devops, global]
---

# AWS Step Functions workflows as AI agent tools via Amazon Bedrock AgentCore Gateway

- 확인 시각: 2026-10-30 23:09 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/

## 확인한 사실
- Amazon Bedrock AgentCore Gateway를 통해 AWS Step Functions workflow를 AI agent tool로 사용 가능
- existing Standard·Express workflow를 tool로 연결하고 agent가 workflow 실행 여부와 input을 선택하는 구조
- AgentCore Gateway가 MCP를 통해 agent와 tool을 연결하며 workflow는 정의된 step 순서대로 실행
- agent가 workflow run을 조회할 수 있고 AWS는 refund eligibility·manager approval·credit 단계 예시를 제시
- AgentCore Gateway 제공 Region에서 사용 가능하며 Step Functions·AgentCore Gateway 표준 요금 적용

## 운영 경계
- 공지는 agent input의 business correctness·least-privilege IAM·human approval·duplicate invocation·side-effect 안전성을 자동 보장하지 않음
- tool schema·execution role·idempotency·approval·execution history와 downstream compensation을 환경별로 검증 필요
