---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/
title: Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview
created: 2026-09-30
ingested: 2026-09-30
published: 2026-09-30 06:10 KST
sha256: 2b4bf871dbd1dc50050ac554982b77e505f27a76e67fd5215ccc01cd69111c79
tags: [ai, cloud, aws, agent, mcp, iam, devops, global]
---
# Amazon Bedrock Managed Agents preview

- AWS What’s New canonical announcement과 RSS `Tue, 29 Sep 2026 21:10:00 GMT` 대조, KST `2026-09-30 06:10`
- article-specific Open Graph/Twitter image metadata 미확인, 검증된 `assets/images/fallback-ai.svg` 사용
- preview: AWS와 OpenAI 공동 개발, OpenAI Agents API의 AWS-native customized version
- state: model state·tool selection/use·code execution·multi-step coordination과 durable session message·tool call·intermediate result 보존
- control: agent별 IAM role, consequential action human approval, supported API activity CloudTrail 기록
- availability: US East (N. Virginia), US West (Oregon), US East (Ohio) preview
- pricing: preview 중 BMA 추가 요금 없음, underlying AWS resource 비용 발생, GA 가격 변경 가능
- evidence boundary: model/tool별 availability·quota, session retention 기간, code-execution isolation, network egress, service terms와 GA price는 account·documentation에서 별도 확인 필요

## 핵심 요약

- 공개: `Bedrock Managed Agents(BMA)` preview와 OpenAI 모델용 AWS-native agent runtime 제공
- 실행: durable session에 message·tool call·intermediate result를 보존하고 reusable skill·MCP tool 연결 지원
- 통제: agent별 IAM role·human approval·CloudTrail audit을 제공하되 application authorization 대체 아님
- 비용: BMA 별도 preview 요금 없음, compute·token·storage·log·network·tool 비용은 workload별 발생
- 운영: read-only canary에서 quality·tail latency·tool retry·approval·egress·rollback 검증 필요
