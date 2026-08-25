---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-full-iam-resource-based-policies/
title: AWS Lambda functions now support full IAM resource-based policies
ingested: 2026-08-26
published: 2026-08-25 11:00 KST
sha256: 464cd00c8ff878d7b2efc506d78c92b7afcbef3fe71af2455de68e3d0f5a80d6
tags: [aws, lambda, cloud-security, serverless, cicd]
---
AWS는 Lambda functions가 full IAM resource-based policy를 지원한다고 공지. 하나의 policy document에서 multiple principal과 action을 정의하고 전체 IAM condition key를 사용할 수 있음. source IP 또는 principal tag로 access를 제한하고, 여러 service가 function을 invoke하도록 단일 policy를 사용할 수 있다는 예시를 제시. Lambda Console JSON editor, AWS CLI, SDK, CloudFormation, AWS SAM으로 정책을 갱신할 수 있으며 AWS commercial Regions에서 추가 비용 없이 제공됨.

기존 principal별 permission을 병합해도 caller identity policy·SCP·permission boundary·event source integration을 합친 effective permission이 자동으로 단순해지지는 않음. service별 condition support, migration compatibility, cross-account behavior, audit retention은 공지의 보증 범위가 아님. principal·action·source ARN/account·condition별 allow/deny matrix, IAM simulation, CloudTrail alert, IaC diff와 rollback template를 staging canary로 검증해야 함.
