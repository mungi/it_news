---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore/
title: Web Search on Amazon Bedrock AgentCore expands to AWS GovCloud and 3 Regions
created: 2026-10-16
ingested: 2026-10-16
published: 2026-10-16 05:40 KST
sha256: 534aa68600f7f781620a8c408a4b843c26018ddca927712d09012bf1b01a7b8f
tags: [aws, bedrock, agentcore, web-search, agent, cloud, governance, global]
---
# Amazon Bedrock AgentCore Web Search 리전 확대

AWS 공식 공지와 Recent Announcements RSS의 AgentCore Web Search 리전 확대를 기록.

- 제공 확대: AWS GovCloud (US-West), US East (Ohio), US West (Oregon), Asia Pacific (Sydney) 추가
- 기능: AI agent가 research·summarization·question answering에 사용할 최신 웹 grounding을 제공하는 fully managed tool
- 경계: 이번 공지는 리전 availability 변경이며 search ranking·citation 정확도·응답 품질·서울 리전 제공을 보장하지 않는 범위
- 보안: retrieved web content의 prompt injection·악성 URL·개인정보·저작권과 downstream tool action 권한은 별도 control 필요
- 팀 액션: agent identity·query·retrieved URL·citation·response digest·downstream action을 trace로 연결하고 allowlist·sanitization·approval·retention·cost budget을 rollout gate로 관리
