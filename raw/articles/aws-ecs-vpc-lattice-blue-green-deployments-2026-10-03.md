---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments/
title: Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments
created: 2026-10-03
ingested: 2026-10-03
published: 2026-10-03 05:18 KST
sha256: d5480bc03336bc4ce6f2bffcbf5bf09a02271177f582ec6e9ec8d6c22ce97eca
tags: [cloud, aws, ecs, networking, sre, devops, global]
---
# Amazon ECS VPC Lattice controlled deployment traffic shift

- AWS What’s New canonical page와 RSS `Fri, 02 Oct 2026 20:18:00 GMT` 대조, KST `2026-10-03 05:18`
- 제공: VPC Lattice 사용 ECS service의 blue/green·linear·canary traffic shift
- 선택: all-at-once blue/green, equal increments linear, small-percentage start canary
- 검증: production traffic 전환 전 test traffic 지원
- lifecycle: Lambda와 pause hook 기반 custom validation 또는 manual approval 지원
- 복구: CloudWatch alarm과 ECS deployment circuit breaker의 issue detection/automatic rollback 연결
- bake time: previous version을 무중단 quick rollback 대상으로 유지하는 범위
- evidence boundary: Region availability, account quota, alarm threshold, connection draining, state migration, workload SLO는 AWS Regions·documentation·tenant canary 확인 대상

## 핵심 요약

- 변경: Lattice traffic control과 ECS service deployment lifecycle 결합
- 설계: route·target health·test traffic·hook idempotency·approval owner를 release artifact로 관리
- 관측: traffic percentage·5xx·p95·error-budget burn·hook failure·rollback duration 상관
- 검증: stateless low-blast-radius route에서 strategy별 rollback game day 수행
