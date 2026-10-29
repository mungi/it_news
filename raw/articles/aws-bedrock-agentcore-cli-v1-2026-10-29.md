---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/
title: Amazon Bedrock AgentCore CLI version 1.0 is now available
ingested: 2026-10-29
published: 2026-10-29 05:00
sha256: 636c2242bc33f6bbe3cb5764361cd2f4046c4a14c3b58f9995841a03bcb54df0
tags: [aws, ai, cloud, devtools, weekly-briefing]
---
# Amazon Bedrock AgentCore CLI v1.0 GA: terminal에서 agent resource 생성·배포·운영 범위 확장

## 확인된 원문 범위

AWS는 `@aws/agentcore` 1.0.0의 GA를 공지함. CLI는 terminal에서 AI agent와 지원 resource를 create·develop·deploy·operate하는 도구이며, faster startup·일관된 command structure·확대된 AgentCore resource 지원이 명시 범위임.

- project workflow 없이 harness·runtime·memory·identity·gateway·payments resource를 직접 다루는 경로 추가
- ID 또는 ARN으로 existing resource invoke, interactive shell, harness export, searchable menu·resource picker·guided workflow 제공
- 공통 global flag로 Region 선택·JSON output·debug·version 정보를 command 전반에 적용
- existing project의 AgentCore v1 전환에 `agentcore migrate` command 제공

## 운영 메모

CLI GA는 terminal control plane의 권한 경계를 넓힘. local profile·CI runner·agent tool에서 사용하는 identity, target Region, ARN selection, JSON output의 민감 정보, migration 결과를 deploy evidence와 audit에 연결해야 함.

- 설치 전 npm package provenance·version pin·CI runner credential scope 확인
- non-production에서 `agentcore migrate` 결과와 harness/runtime/memory/identity/gateway command별 IAM permission·Region·rollback 확인
- interactive shell과 resource invoke를 shared workstation·CI agent에서 사용하면 session log·command audit·secret redaction·approval boundary 분리 필요

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/
