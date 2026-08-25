---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-batch-on-ecs-managed-instances/
title: AWS Batch now supports Amazon ECS Managed Instances
ingested: 2026-08-26
published: 2026-08-26 04:36 KST
sha256: 4a88cfb37962125e04894583791ae98309efd357d25bd742220a3d7a0288f9b0
tags: [aws, batch, ecs, gpu, infra, cloud]
---
AWS Batch가 Amazon ECS Managed Instances(ECS MI)를 새 compute option으로 지원함. GPU 가속·compute-intensive batch workload를 AWS 관리 인프라에서 실행할 수 있으며, AMI update·security patching·instance lifecycle은 AWS가 처리한다고 공식 공지. 고객 관리 EC2 인프라의 운영 부담을 줄이는 범위임.

`CreateComputeEnvironment` API 또는 AWS Batch Console에서 ECS MI compute environment를 만들고, `managedInstancesProvider` block에 허용 instance type·networking configuration을 지정할 수 있음. compute environment를 job queue에 연결해 On-Demand·Spot·reserved capacity로 job을 제출하는 흐름임. AWS Batch가 제공되는 모든 AWS Region에서 지원한다고 공지했으며, capacity availability·GPU SKU·Spot interruption·quota·job startup latency·AMI 변경 시 application compatibility·비용은 workload와 account별 검증 대상임.
