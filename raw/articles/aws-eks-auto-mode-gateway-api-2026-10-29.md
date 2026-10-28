---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/
title: Amazon EKS Auto Mode now supports Kubernetes Gateway API
ingested: 2026-10-29
published: 2026-10-29 02:33
sha256: 332ab2267352875b11611858a4a362639415159c51bfb3008da39f7ee3f29d3f
tags: [aws, cloud, infra, weekly-briefing]
---

# Amazon EKS Auto Mode, Kubernetes Gateway API 지원: 별도 controller 없이 HTTP·gRPC·weighted routing·ACM TLS discovery 제공

## 확인된 원문 범위

AWS는 기존 Ingress resource가 Gateway API resource와 함께 동작한다고 설명하고, 기능은 EKS Auto Mode 지원 모든 AWS Region에서 제공된다고 밝힘. provision되는 AWS load-balancing resource에는 standard charge가 적용됨. Gateway API 지원이 tenant isolation·route correctness·certificate lifecycle·canary safety를 자동 보장하지는 않음.

## 운영 메모

시사점: migration 전 Ingress와 Gateway API의 route behavior를 replay traffic으로 비교하고, namespace boundary·TLS renewal·load-balancer 비용·rollback을 운영 문서에 고정해야 함.

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/
