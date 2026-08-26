---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/capacity-reservation-resource-groups-ec2
title: Capacity Reservation Resource Groups now support Amazon EC2 Capacity Blocks and interruptible Capacity Reservations
ingested: 2026-08-27
published: 2026-08-26 03:00 KST
sha256: 1d6e8e663a6f5c45c2cdd1ef1648dd0de21c701cae15a3a5189347cf7215d90d
tags: [aws, ec2, capacity-reservation, capacity-blocks, autoscaling, finops, cloud]
---
AWS가 Capacity Reservation Resource Group에 Amazon EC2 Capacity Blocks for ML과 interruptible Capacity Reservations를 추가함. 기존에는 On-Demand Capacity Reservations만 group에 넣을 수 있었으며, 이제 예약 capacity portfolio를 단일 launch target으로 구성 가능함.

EC2 Fleet와 EC2 Auto Scaling group은 reservation type별 우선순위를 지정하고 group의 예약 capacity가 없을 때 EC2 On-Demand capacity로 자동 fallback하도록 구성 가능함. AWS는 관련 Capacity Blocks와 interruptible ODCR 지원 Region에서 제공하고 GovCloud·China Region은 제외, 기능 자체 추가 요금은 없다고 공지함. instance/GPU availability·quota·AZ placement·Fleet fulfillment·fallback 비용과 workload deadline은 보증하지 않으므로 reservation hit/miss·fallback hours·On-Demand premium·queue age를 workload별 검증 대상으로 분리 필요.
