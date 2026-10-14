---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/
title: Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric
created: 2026-10-14
ingested: 2026-10-14
published: 2026-10-14 07:00 KST
sha256: c88ddce129c6358c066e1f0964be2c16e5dc90b52781968fdd64f8a4f03e4e9f
tags: [aws, ecs, cloudwatch, autoscaling, observability, finops, global]
---
# Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric

AWS 공식 공지의 ECS service task lifecycle metric과 Container Insights 가격 변경을 기록.
- `LiveTaskCount`: `ACTIVATING`·`RUNNING`·`DEACTIVATING` 상태의 활성 task를 보고하는 ECS service utilization metric
- connection draining 중인 scale-in task도 포함해 autoscaling·capacity planning에 적합한 전체 active capacity 범위
- `RunningTaskCount`: current·desired state가 모두 RUNNING인 task만 추적하며 health·stability signal로 계속 제공
- `LiveTaskCount`는 CloudWatch Container Insights opt-in 없이 추가 비용 없이 제공
- `RunningTaskCount`의 CloudWatch Container Insights 추가 비용은 2026-10-01부터 자동 제거
- ECS 제공 전 리전에서 사용 가능하며 별도 action 불필요
- 경계: target-tracking·alarm·SLO에서 두 metric의 의미가 같지 않으므로 deployment·draining·rollback 시계열 검증 필요
- 팀 액션: LiveTaskCount·RunningTaskCount·desired count·request latency·scale action을 같은 trace로 비교
