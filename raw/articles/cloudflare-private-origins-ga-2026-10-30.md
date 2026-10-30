---
source_url: https://blog.cloudflare.com/private-origins-public-to-private/
title: Cloudflare services for private origins is now generally available
ingested: 2026-10-31
published: 2026-10-30 23:23
sha256: 780ee8a5c6ddc6f54d588195d464c8173b815bacca56a5406d52c98371b6e213
tags: [cloud, infra, cybersecurity, global]
---

# Cloudflare Private Origins GA

- 확인 시각: 2026-10-31 07:19 KST
- 원문: https://blog.cloudflare.com/private-origins-public-to-private/

## 확인한 사실
- proxied A/AAAA record가 private IP를 가리키면 기존 Cloudflare One private connectivity로 origin을 연결하는 GA 기능
- WAF·managed rules·bot management·rate limiting·caching·transform/rewrite rules·Workers 적용 범위
- RFC 1918 IPv4, RFC 6598 `100.64.0.0/10`, RFC 4193 `fc00::/7`에서 private network routing 자동 활성화
- Cloudflare WAN은 origin connector 없이 기존 connectivity 사용 가능, Mesh는 private network connector가 여러 origin 제공
- Argo Smart Routing·Dedicated CDN Egress IP 미지원, origin health check는 Load Balancing 필요

## 운영 경계
- private routing은 application authorization·service identity·secret scope·tenant isolation을 자동 제공하지 않음
- DNS record·route table·connector/overlay·origin firewall·health check·rollback을 실제 topology에서 검증 필요
