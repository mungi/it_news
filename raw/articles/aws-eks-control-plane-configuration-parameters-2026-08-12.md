---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-control-plane-configuration-parameters/
title: Amazon EKS now supports advanced Kubernetes control plane configuration parameters
ingested: 2026-08-13
published: 2026-08-12
sha256: 7c036017ac9cf693be2a3104c095829529d2161d7d6ebbc363fe27937f4653bd
tags: [aws, kubernetes, infra, scheduling, finops]
---

AWS는 Amazon EKS에서 Kubernetes scheduler, controller manager, API server의 control plane parameter를 설정할 수 있다고 공지함. 설정 범위에는 pod placement strategy, horizontal pod autoscaling 반응, event retention duration 같은 lifecycle parameter가 포함됨. AWS가 제시한 `MostAllocated` scheduler node resource fit strategy는 이미 사용률이 높은 node에 pod를 배치해 같은 workload를 더 적은 node에서 실행하는 방향이며, 기본 `LeastAllocated`는 headroom 우선 배치를 유지함. 공지는 EKS 제공 모든 AWS Region에서의 사용 가능성을 설명하지만, 비용 절감 규모·scheduling latency·autoscaling 안정성·managed add-on 호환성·workload SLO는 source에 제시되지 않아 cluster별 canary 검증이 필요함.
