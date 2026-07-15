---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-ai-protection-aws/
title: Introducing Amazon GuardDuty AI Protection for AWS AI workloads
ingested: 2026-07-15
published: 2026-07-15 04:00 KST
sha256: 0246b6ba0b7618138df3f616d2eb8e8b26a01d5f8d0dbf01218844deff7e814c
tags: [cloud-security, ai, aws, bedrock, sagemaker, guardduty]
---

# Amazon GuardDuty AI Protection for AWS AI workloads

- AWS가 GuardDuty AI Protection을 공개해 Amazon Bedrock·Amazon SageMaker의 AI workload를 위협 탐지 범위에 추가함
- 입력: CloudTrail management event와 data event를 분석해 비정상 모델 invocation, 비용 수확, 프롬프트 주입 시도를 탐지하는 구조
- 통합: finding을 AWS Security Hub로 보내고 AWS Organizations에서 다계정 중앙 활성화 가능
- 제공: GuardDuty 고객 대상 30일 무료 평가 제공

## 검증 경계

- AWS 공식 발표는 기능 범위와 통합 경로를 설명한 자료이며 계정별 탐지 정확도·요금·리전 가용성은 실제 workload 설정에서 검증 필요
- `cost harvesting`은 GPU 시간·token을 과소비시키는 공격 시나리오로 AWS가 명시한 탐지 범주이며, 실제 비용 손실 규모를 뜻하지 않음
