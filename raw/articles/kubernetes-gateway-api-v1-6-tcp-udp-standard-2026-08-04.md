---
source_url: https://kubernetes.io/blog/2026/08/03/gateway-api-v1-6-release/
title: "Gateway API v1.6: TCPRoute and UDPRoute Graduate to Standard"
ingested: 2026-08-04
published: 2026-08-04 01:00 KST
sha256: 2958ee617dd0ca6747bf1a64e035805a89bb6ed0be2cd01f2287f7969e25f4be
tags: [ai, cloud, infra, security, release]
---

# Kubernetes Gateway API v1.6 TCPRoute·UDPRoute Standard 승격

- Kubernetes page `article:published_time` `2026-08-03T08:00:00-08:00`을 `2026-08-04 01:00 KST`로 환산
- TCPRoute·UDPRoute Experimental에서 Standard channel 승격 발표
- GRPCRoute·HTTPRoute·TLSRoute·TCPRoute·UDPRoute v1.6.0, Gateway·ReferenceGrant v1.4.1 제공

---

## API 범위

- BackendTLSPolicy subjectAltNames validation과 Gateway infrastructure labels·annotations은 Experimental channel 추가
- Standard channel은 upstream API maturity 범위이며 controller·cloud load balancer 구현 보증이 아님
- provider/controller별 route kind, listener, health check, connection behavior, policy enforcement 확인 필요

## 운영 검증

- CRD bundle·controller version·GatewayClass·ReferenceGrant·backend TLS policy matrix 작성 필요
- TCP/UDP connection lifecycle, drain, timeout, source IP, health check, failover canary 필요
- pre/post telemetry baseline과 reversible manifest rollout을 migration gate로 관리 필요
