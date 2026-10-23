---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/emr-eks-reduces-emr-charge-30-percent/
title: Amazon EMR on EKS reduces EMR charge by 30 percent
ingested: 2026-10-24
published: 2026-10-23 17:00 KST
sha256: 13afc7a40ec8c3dd4cf83ff03d4dd540bdd98d04f6b7ebcbb2226c6793aeb8c1
tags: [aws, emr, eks, spark, finops, data, cloud, global]
---
# Amazon EMR on EKS EMR charge 30% 인하

AWS What’s New canonical announcement의 embedded `postDateTime` `2026-10-23T08:00:00Z`와 본문을 대조해 KST `2026-10-23 17:00` 기준으로 기록.

- 변경: EKS deployment option에서 EMR이 더하는 per-vCPU-hour·per-GB-hour charge를 30% 인하
- 대상: EMR on EKS로 실행하는 모든 EMR workload와 Apache Spark workload 범위
- 유지: underlying Amazon EKS charge는 변경되지 않는다고 AWS가 명시
- 적용: 추가 action 없이 새 가격이 EMR on EKS workload에 자동 적용되는 범위
- 제공: Amazon EMR on EKS 제공 모든 AWS Region 범위
- 경계: total job cost 30% 절감, EC2/Fargate·EKS control plane·S3·network·observability 비용 인하를 뜻하지 않음
- 팀 액션: CUR에서 EMR surcharge와 compute·storage·data transfer를 분리해 workload별 completed-job cost와 autoscaling 기준 재산정
