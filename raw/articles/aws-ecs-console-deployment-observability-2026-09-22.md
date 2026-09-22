---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-console-deployment-observability/
title: Amazon ECS now provides real-time deployment observability in the AWS Management Console
ingested: 2026-09-22
published: 2026-09-21
sha256: 665a40c95829c152baf3bceb2cae25c83fc3fe6f87f832da6c1c2383984450ed
tags: [cloud, infra, aws, devops, sre, observability, release, global]
---

# Amazon ECS now provides real-time deployment observability in the AWS Management Console

AWS는 2026년 9월 21일 ECS Management Console에 service deployment의 실시간 observability를 추가했다. live deployment timeline은 deployment phase, service event, task launch·termination progress, source·target revision의 traffic shift distribution과 green task scale-up·lifecycle hook·bake time 상태를 현재 시점으로 표시한다. circuit breaker status와 live task failure·threshold, deployment alarm, container·load balancer health check, lifecycle hook status도 timeline 옆에서 확인할 수 있다. 실패 task에는 diagnostic context와 CloudTrail deep link가 제공된다. Console 상태는 application SLO·synthetic transaction·downstream dependency의 정상성을 보장하지 않으므로, traffic threshold·bake time·alarm owner·rollback 조건과 CloudTrail 조사 권한을 release runbook에 함께 고정해야 함.
