---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/
title: Structured outputs for Claude models available on Amazon Bedrock
ingested: 2026-10-21
published: 2026-10-20 23:00 KST
sha256: 1f3c18cc7fa2f4ba7539e74ca9cf6a69207a3f1f402fe074a487ae3dcece2f10
tags: [aws, amazon-bedrock, anthropic-claude, structured-output, json-schema, agent, governance, global]
---
# Amazon Bedrock Claude structured outputs

AWS What’s New RSS 원문을 기준으로 Claude 모델의 schema-compliant JSON structured output 지원을 기록.

- 지원: 모든 Anthropic Claude 모델에서 정의한 schema에 맞는 JSON 응답 경로 제공
- endpoint: boto3·`bedrock-runtime` API 및 Messages API·`bedrock-mantle` endpoint
- 예시: financial/compliance document extraction, EHR parsing, catalog enrichment, contract 분석, support ticket routing
- 가용성: Claude 모델이 제공되는 리전 범위
- 경계: schema compliance는 사실 정확도·semantic validation·authorization·PII 처리·downstream write 안전성을 보장하지 않는 범위
- 팀 액션: schema versioning, business rule, exception queue, human override, write approval을 별도 control로 운영 필요
