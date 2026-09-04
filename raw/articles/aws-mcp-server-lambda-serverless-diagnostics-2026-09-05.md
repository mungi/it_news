---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/aws-mcp-server-serverless/
title: AWS MCP Server adds a serverless capability for AWS Lambda functions
ingested: 2026-09-05
published: 2026-09-05 01:31
sha256: d86d887d4af050dfdc69a4d0e6b633a5ed778792d6ea4ebcfb33c9f010706acf
tags: [ai, cloud, aws, agent, serverless, devtools]
---

# AWS MCP Server adds a serverless capability for AWS Lambda functions

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/aws-mcp-server-serverless/
- 원문 제목: AWS MCP Server adds a serverless capability for AWS Lambda functions
- 발행: 2026-09-05 01:31 KST (`Fri, 04 Sep 2026 16:31:00 GMT` RSS pubDate)
- 확인: AWS What’s New canonical announcement와 AWS RSS entry 직접 확인

## 원문 핵심

- AWS MCP Server에 Lambda serverless diagnostic capability 추가
- Claude Code·Kiro 등 coding agent가 실행 중인 Lambda와 연결 리소스의 문제를 조사하는 용도
- Lambda와 Amazon API Gateway·EventBridge·S3·DynamoDB·SNS·SQS·Step Functions 연결 리소스를 함께 검사하는 공식 범위
- 7일 baseline 대비 error signal 변화, recurring error, 배포 구성, 최근 변경 timeline, 연결 리소스 latency 분석 지원
- Agent Toolkit for AWS 또는 standalone installation으로 제공하며 `aws configure agent-toolkit`으로 Agent Toolkit 설정 가능
- AWS MCP Server 자체 실행 리전은 US East (N. Virginia)·Europe (Frankfurt), 접근 대상 서비스는 모든 commercial AWS Region이라는 공식 설명
- serverless diagnostic capability는 추가 비용 없이 제공한다는 공지 범위

## 증거 경계

- 공지는 기본 IAM policy·cross-account role assume·CloudTrail audit·prompt/telemetry retention·data residency·query rate limit·service별 실제 tool action·진단 정확도·latency·token 절감률·SLA를 보증하지 않음
- 읽기 전용 진단에서 시작하고 Lambda source·환경변수·secret·payload·로그의 agent 접근 범위를 역할·태그·account·시간 조건으로 최소화 필요
- baseline anomaly와 모델 요약을 incident 원인 확정으로 취급하지 않고 CloudWatch metric·trace·deployment event·runbook 검증을 별도 유지 필요

## 출처

- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/09/aws-mcp-server-serverless/
- AWS MCP Server User Guide: https://docs.aws.amazon.com/mcp/latest/userguide/what-is-mcp.html
