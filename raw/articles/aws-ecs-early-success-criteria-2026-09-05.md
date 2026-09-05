---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/
title: Amazon ECS introduces Early Success Criteria for service deployments
ingested: 2026-09-05
published: 2026-09-05 02:00
sha256: ce6efdd854923f54d51ad6f1b574eaa3661d272ccf3a9a87bfafc93e8223cc3e
tags: [cloud, aws, infra, ecs, cicd, sre]
---

# Amazon ECS introduces Early Success Criteria for service deployments

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/
- 원문 제목: Amazon ECS introduces Early Success Criteria for service deployments
- 발행: 2026-09-05 02:00 KST (`2026-09-04T17:00:00Z` AWS `postDateTime`)
- 확인: AWS What’s New canonical announcement와 AWS RSS entry 직접 확인

## 원문 핵심

- Amazon ECS rolling deployment에 `Early Success Criteria` 추가
- target service revision의 desired task 중 running·healthy 상태여야 하는 비율을 healthy percent로 설정
- desired count 100·healthy percent 90% 예시에서 90개 task healthy 시 deployment success 처리, 나머지 task launch는 regular service scaling으로 계속
- GPU-accelerated inference처럼 constrained capacity로 task launch가 길어지는 workload의 CI/CD·dependent operation unblock 용도
- configured success criteria 도달 전까지 deployment rollback monitoring 적용 가능
- source revision cleanup은 `BLOCKING`과 `DEFERRED` 선택 가능
  * `BLOCKING`: source revision cleanup 완료 뒤 deployment success 처리
  * `DEFERRED`: criteria 충족 시 success 처리, source task drain은 비동기 진행
- rolling deployment strategy에서 AWS Commercial 및 AWS GovCloud (US) Region 제공
- Console·AWS CLI·AWS SDK·infrastructure as code tool로 new/existing ECS service 설정 가능

## 증거 경계

- 공지는 partial healthy threshold가 application SLO·remaining task capacity 확보·connection draining·autoscaling·rollback 결과를 보증하지 않음
- `DEFERRED` cleanup은 long-lived connection 또는 task scale-in protection에서 deployment lifecycle을 줄일 수 있으나 source drain·error·rollback trace를 deployment success와 분리해 관측 필요
- healthy percent·cleanup mode·capacity reservation·autoscaling·alarm·manual rollback authority를 IaC change record와 release ID에 연결 필요

## 출처

- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-ecs-deployments-early-success/
