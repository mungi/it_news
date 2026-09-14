---
source_url: https://www.cncf.io/blog/2026/09/14/cilium-1-20-gateway-api-externalauth-tcproute-udproute-eni-ipam-for-ipv6-and-more/
title: Cilium 1.20: Gateway API ExternalAuth, TCPRoute/UDPRoute, ENI IPAM for IPv6, and more
ingested: 2026-09-14
published: 2026-09-14 19:45
sha256: 146471501cdaa4b6048c05e47763b6110bbd314ae02ced2fddfe20ba32ea6a0b
tags: [infra, kubernetes, networking, aws, cloud-security, release]
---
## 원문 확인

- Canonical URL: https://www.cncf.io/blog/2026/09/14/cilium-1-20-gateway-api-externalauth-tcproute-udproute-eni-ipam-for-ipv6-and-more/
- Page title: Cilium 1.20: Gateway API ExternalAuth, TCPRoute/UDPRoute, ENI IPAM for IPv6, and more
- Primary metadata: `article:published_time` = `2026-09-14T10:45:49+00:00`, converted to KST `2026-09-14 19:45`
- Open Graph image: https://www.cncf.io/wp-content/uploads/2026/09/Whose-GPUs-are-these-anyway-4.jpg

## Source-grounded facts

- Cilium 1.20 post states Gateway API moves from v1.4 to v1.6 with ExternalAuth, CORS filters, ListenerSets, TCPRoute and UDPRoute support
- Post describes ExternalAuth as authentication and authorization before a request reaches the application
- AWS ENI IPAM IPv6 is described as a Beta feature; Prefix Delegation attaches an IPv6 /80 prefix to each node ENI and the agent assigns Pod addresses from it
- Post includes `netkit auto`, stable MCS API support and Kubernetes ClusterNetworkPolicy among the release themes

## Evidence boundary

- This is a Cilium release announcement, not a workload-specific performance, availability, compatibility, or SLA guarantee
- Existing ingress/controller, NetworkPolicy, service-mesh, EKS version, VPC route, security group, IPv6 egress, and ExternalAuth failure behavior require local validation

## Korean briefing

- 변경: Gateway API L7/L4 route와 external authorization, ENI IPv6 IPAM을 Cilium 1.20 release 범위로 결합
- 볼 것: CRD/controller compatibility, auth failure mode, dual-stack egress, route/policy precedence, rollback duration
- 팀 액션: canary workload로 request/auth/packet/IPAM telemetry와 failure drill을 promotion gate로 운영
