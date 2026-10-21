---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/
title: Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services
ingested: 2026-10-21
published: 2026-10-21 08:26 KST
sha256: 90413897e705d7081d6e26bddedd88f05d705006753fdaeb9cd3d712498f97e2
tags: [aws, ecs, ingress, application-load-balancer, containers, platform-engineering, cloud, global]
---

# Amazon ECS Gateway 관리형 ingress

AWS What’s New 원문과 RSS timestamp를 기준으로 ECS 서비스용 관리형 ingress resource를 기록. 페이지는 날짜만 표시하며 exact KST 시각은 RSS `Tue, 20 Oct 2026 23:26:00 GMT`에서 변환.

- 공개: ECS service ingress networking용 `Amazon ECS Gateway`
- 구성: gateway에 networking standard를 정의하고 cluster와 연결, service는 gateway connector로 opt-in
- 라우팅: host-based routing·service별 DNS hostname, ALB 하나에 최대 25개 service 공유
- lifecycle: 첫 연결 때 ALB 생성, capacity 도달 시 추가, 연결 service가 없으면 제거
- 관측: standard ALB CloudWatch metric과 target health 정보 사용
- 대상: `awsvpc` network mode의 모든 ECS launch type·모든 commercial AWS Region
- 비용: ECS Gateway 추가 요금 없음, 계정 내 provision된 underlying infrastructure 비용은 별도
- 경계: shared ALB capacity·availability·latency·migration·rollback 성공은 workload별 검증 대상
