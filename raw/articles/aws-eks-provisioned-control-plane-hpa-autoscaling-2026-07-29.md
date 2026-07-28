---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-provisioned-control/
title: Amazon EKS Provisioned Control Plane now delivers faster pod autoscaling
ingested: 2026-07-29
published: 2026-07-29 02:18 KST
sha256: 50f6230a46917ab77c9e37a93b0b600bbde096e0d60e4a762cc767831e8d5389
tags: [aws, eks, kubernetes, autoscaling, hpa, cloud, infra]
---

# Amazon EKS Provisioned Control Plane의 HPA autoscaling 처리량 상향

- AWS가 모든 EKS Provisioned Control Plane cluster에서 HPA sync concurrency를 기본 Kubernetes 값의 최대 40배로 상향함
- HPA는 workload metric을 지속 관찰하고 demand에 맞춰 pod 수를 조정하며, 수백~수천 HPA object가 있는 cluster에서는 control plane의 병렬 평가 처리량이 scale-out 반응 시간을 좌우함
- 변경 뒤 control plane이 더 많은 HPA object를 동시에 평가해 load 증가 감지와 pod scale-out 사이 시간을 줄이는 구조임
- 적용 대상은 모든 EKS Provisioned Control Plane 고객이며 별도 configuration 변경이 필요 없다고 AWS가 명시함

## 검증 경계

- AWS 원문은 `Posted on: Jul 28, 2026` 날짜만 표시함
- 카드 시각 `2026-07-29 02:18 KST`는 AWS What’s New RSS `pubDate` `Tue, 28 Jul 2026 17:18:00 GMT`를 KST로 변환한 값이며, 원문이 clock time을 직접 주장한 값은 아님
- 원문은 기존 대비 scale-out latency, cluster size별 HPA 처리율, API throttling, control-plane cost, region/cluster-version 조건을 수치로 공개하지 않음
- 40배는 HPA sync concurrency 설정의 기본 Kubernetes 값 대비 상한이며, workload의 end-to-end autoscaling latency가 40배 빨라진다는 성능 보장은 아님
