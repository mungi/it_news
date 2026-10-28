---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry/
title: AWS Lambda durable functions now exports live telemetry for execution insights
ingested: 2026-10-29
published: 2026-10-29 03:00
sha256: 91d3afdfd29fc4e99ac117926a4fde4522286d57fc70480dadd5d525219741e1
tags: [aws, cloud, infra, weekly-briefing]
---

# AWS Lambda Durable Functions, execution telemetry exporter·MCP server 추가: 장기 workflow step trace의 export 경로 제공

## 확인된 원문 범위

AWS 설명에 따르면 exporter는 CloudWatch Logs, S3/Athena, DynamoDB, Aurora, OpenSearch Service 등을 포함한 13개 built-in destination으로 telemetry를 전송함. sensitive field redaction과 sampling rate를 설정할 수 있고 TypeScript·Python·Java·Go에서 제공됨. 자연어 MCP query가 export data의 접근 통제를 대체하지 않으므로 IAM, tenant scope, prompt injection, audit를 분리해야 함.

## 운영 메모

시사점: export 전 payload schema와 redaction을 결정하고, destination별 IAM·retention·encryption·MCP query audit을 release gate로 검증해야 함.

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry/
