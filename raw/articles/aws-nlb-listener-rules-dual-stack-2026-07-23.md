---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-network-load-balancer-supports-listener-rules/
title: AWS Network Load Balancer now supports Listener Rules for custom traffic routing
ingested: 2026-07-23
published: 2026-07-23 04:13
sha256: 2dd9e03fa2cb2e248fffbdbc4ae81c94ab465a241f485d67ad0980dccbd3a7db
tags: [cloud, aws, networking, load-balancing, ipv6, infra]
---
# AWS Network Load Balancer now supports Listener Rules for custom traffic routing

## Source facts
- AWS What’s New RSS `pubDate`: 2026-07-22 19:13 UTC = 2026-07-23 04:13 KST.
- NLB listener rule가 source IP address type에 따라 IPv4·IPv6 target group을 각각 선택하는 기능 공개.
- 하나의 dual-stack NLB에서 양 address family의 original client IP를 end-to-end로 보존하는 구성을 제시.
- TCP·UDP·TCP_UDP·TLS listener 지원, existing dual-stack NLB에 재생성 없이 추가 가능.
- AWS commercial Region과 AWS GovCloud (US)에서 추가 기능 요금 없이 제공, standard NLB hour·LCU pricing은 적용.

## Source boundary
- AWS는 address family별 latency·availability·cost 개선 수치를 제시하지 않음.
- IPv6 target readiness, health-check/failover behavior, cross-zone traffic와 client-IP 기반 policy 영향은 workload별 검증 필요.
