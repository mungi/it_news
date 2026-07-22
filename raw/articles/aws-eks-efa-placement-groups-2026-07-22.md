---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-efa-placement-groups/
title: Amazon EKS now supports EFA and placement groups on Amazon EKS Auto Mode and Karpenter
ingested: 2026-07-23
published: 2026-07-22 23:30
sha256: 6c6ba685f24ba52ec7a737d3f45abf888bd7132797c41cc7403d3de84e7ea9b7
tags: [cloud, aws, kubernetes, infra, ai]
---
# Amazon EKS now supports EFA and placement groups on Amazon EKS Auto Mode and Karpenter

## Source facts
- AWS What’s New RSS `pubDate`: 2026-07-22 14:30 UTC = 2026-07-22 23:30 KST.
- EKS Auto Mode와 오픈소스 Karpenter의 node pool에서 Amazon EC2 placement group과 EFA network device configuration 지원.
- EFA-capable instance의 dynamic·static capacity node pool에서 EFA-only 또는 standard ENI 구성 선택 가능.
- EFA-only interface는 IP 주소를 소비하지 않으며, AWS는 IP utilization 세밀한 제어 수단으로 설명.
- AWS는 instance의 물리 배치를 조정해 distributed training·inference workload의 performance·availability 최적화 용도로 제시.

## Source boundary
- AWS는 특정 model, GPU 규모, workload latency, throughput, cost 개선 수치를 발표하지 않음.
- placement capacity, instance quota, subnet CIDR, scheduler policy, actual collective traffic은 조직별 검증 필요.
