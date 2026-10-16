---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transform-azure-to-aws-code-conversion/
title: AWS Transform announces Azure-to-AWS cloud-native code conversion
created: 2026-10-17
ingested: 2026-10-17
published: 2026-10-16 22:50 KST
sha256: a850d349c2aa3a3c5db77b11fe7d3ea428853cdc835bf905e54c44a9661bd03e
tags: [aws, azure, cloud, migration, serverless, devtools, global]
---
# AWS Transform Azure-to-AWS .NET 코드 변환

AWS 공식 공지의 Azure SDK→AWS SDK cloud-native .NET code conversion GA를 기록.

- 기능: submitted source code에서 Azure SDK를 발견하고 assessment report·modernization plan에 conversion option 제시
- 지원: Azure Functions→AWS Lambda, Azure Blob Storage→Amazon S3, Azure Queue Storage→Amazon SQS
- Preview: Azure Cosmos DB→Amazon DynamoDB conversion
- 흐름: option accept 또는 adjust 뒤 transformation 실행, identified Azure service code를 equivalent AWS SDK call로 변환하고 transformed code incorporation 확인
- 제공 리전: US East (N. Virginia), Asia Pacific (Mumbai·Tokyo·Seoul·Sydney), Canada (Central), Europe (Frankfurt·London)
- 경계: code conversion 발표이며 service semantics·data migration·IAM·network·SLO·cost·production cutover의 동등성을 보장하지 않는 범위
- 팀 액션: service mapping·data/event behavior·identity·observability·rollback을 contract test와 staged migration evidence로 검증 필요
