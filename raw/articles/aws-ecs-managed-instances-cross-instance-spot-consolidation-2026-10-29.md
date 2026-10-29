---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/
title: Amazon ECS Managed Instances adds cross-instance and Spot consolidation
ingested: 2026-10-29
published: 2026-10-29 03:00
sha256: 1b55010f75ddbba9cd4ee29092793de850db5562a9ee45a8e6a7b75c7ee4c02f
tags: [aws, cloud, infra, containers, finops, weekly-briefing]
---
# Amazon ECS Managed Instances, cross-instance·Spot consolidation 추가

## 확인된 원문 범위

Amazon ECS Managed Instances가 여러 underutilized instance의 task를 동시에 평가·재배치하는 cross-instance consolidation과 Spot consolidation을 추가함. Spot에서는 replacement capacity 확인 뒤 consolidation을 진행하며, 모든 기존·신규 Managed Instances capacity provider에 자동 적용됨.

- 동작: 기존 instance별 replacement 평가에서 다수 instance task의 동시 repack으로 범위 확대
- replacement: graceful start-before-stop task replacement를 사용하는 existing infrastructure optimization 경로 확장
- AWS test 예: `c9g` minimum `4xlarge`, task 261개(각 1 vCPU·1.94 GiB)에서 fleet 19대→13대, CPU 42%→91%, memory 41%→88%
- 범위: 추가 비용 없이 모든 AWS Region에서 제공, Spot은 replacement capacity 확인이 선행 조건

## 운영 메모

AWS의 19대→13대 수치는 특정 instance type·minimum size·task profile의 vendor test이며, 서비스별 savings·drain time·Spot interruption·placement constraint·SLO를 보장하지 않음. consolidation이 자동 적용되므로 capacity provider의 task placement, disruption budget, scale-out responsiveness, instance family 제한을 production telemetry로 확인해야 함.

- 검증: consolidation 전후 instance hours·CPU/memory headroom·task start latency·deployment duration·error rate·Spot interruption recovery를 같은 workload로 비교
- 통제: start-before-stop 동안 connection draining·load balancer deregistration·stateful task·EBS/local cache·PDB equivalent의 종료 경로 확인
- 비용: On-Demand/Spot saving을 requested resource, bin packing, replacement churn, interrupted task 재시도 비용과 함께 산정

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/
