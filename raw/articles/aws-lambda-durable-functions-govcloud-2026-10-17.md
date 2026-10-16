---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/durablefunctions-govcloud/
title: AWS Lambda durable functions are now available in AWS GovCloud (US) Regions
created: 2026-10-17
ingested: 2026-10-17
published: 2026-10-17 03:26 KST
sha256: 6283bb4d684c04a131e17e11898e46696fd1aac789f3442467cdfad1a69f46d4
tags: [aws, lambda, serverless, workflow, ai, cloud, compliance, global]
---
# AWS Lambda Durable Functions, AWS GovCloud(US) 제공

AWS 공식 공지와 Recent Announcements RSS의 GovCloud(US-West·US-East) 제공 범위를 기록.

- 범위: Lambda durable functions를 AWS GovCloud(US-West)·AWS GovCloud(US-East)에서 제공
- 기능: event handler의 `step`·`wait` primitive로 multi-step application·AI workflow의 진행 상태 checkpoint, failure recovery, pause를 지원
- 비용: on-demand function이 wait 상태일 때 compute charge를 부과하지 않는다는 공지 범위
- 런타임: Python 3.13·3.14, Node.js 22·24, Go 1.24 이상, .NET 2.2, Java 17 이상 신규 Lambda function에서 활성화 가능
- 구성: Lambda API·Console·SDK 및 CloudFormation·SAM·CDK로 활성화 가능
- 경계: compliance 충족, stateful workflow의 exactly-once 처리, callback authorization, retry·compensation·business deadline은 자동 보장 범위 아님
- 팀 액션: GovCloud workflow별 state schema, idempotency key, callback principal, timeout·retry·compensation 및 CloudTrail/CloudWatch evidence를 release gate에 포함
