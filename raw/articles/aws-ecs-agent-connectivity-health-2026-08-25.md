---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-agent-connectivity-health/
title: Amazon ECS now automatically detects and repairs container instances with impaired agent connectivity
ingested: 2026-08-26
published: 2026-08-25 07:42 KST
sha256: 14b83905b2ec8840ecc22cc0d813f77f35e910e017b038909758a8c648afae84
tags: [aws, ecs, infra, sre, cloud]
---
AWS는 ECS agent connectivity를 지속적으로 감시하고, EBS volume degradation·host thermal event·network connectivity failure 등으로 ECS agent와 control plane 연결이 끊기는 경우 새 `AGENT_CONNECTIVITY` container instance health change event를 제공함. event는 AWS Fargate, ECS Managed Instances, ECS on EC2 전체에 제공됨. Fargate와 ECS Managed Instances는 impaired instance의 running task를 자동 drain하고 replacement capacity를 launch한 뒤 instance를 deregister함. ECS on EC2 고객은 event를 instance replacement workflow에 연결해야 함.

공지는 detection threshold·drain timeout·replacement latency·capacity availability·cross-AZ 동작·application state consistency를 보증하지 않음. 서비스별 graceful shutdown·checkpoint·idempotent retry·connection draining·maximum replacement rate를 명시하고, network partition·capacity shortage·deployment 동시 실행 조건에서 event delivery, p95 recovery, duplicate execution, traffic recovery를 검증해야 함.
