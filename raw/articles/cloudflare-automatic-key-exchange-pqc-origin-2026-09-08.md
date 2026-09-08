---
source_url: https://blog.cloudflare.com/automatic-key-exchange-for-origins/
title: Automatic Key Exchange: faster, post-quantum secure origin handshakes for 45 billion daily connections (and counting)
ingested: 2026-09-08
published: 2026-09-08 22:10 KST
sha256: fb6c8c84904321d9d3e3c71875730e1f49ea9c305c36d0c2a44ffbd681614392
tags: [it, cybersecurity, global, weekly-briefing]
---

# Cloudflare Automatic Key Exchange 공식 공지

## 직접 확인한 본문 사실

- `article:published_time` `2026-09-08T13:10:00.000Z`를 KST `2026-09-08 22:10`으로 환산
- TLS 1.3-capable origin의 key-agreement algorithm 지원·선호를 probe하고 첫 origin connection에 적용하는 Automatic Key Exchange 공개
- origin이 지원하면 post-quantum hybrid `X25519MLKEM768`을 우선하는 범위
- rollout 측정에서 HelloRetryRequest 약 `52%`→`3.7%`, handshake p90 `150ms 이상` 절감이라는 Cloudflare 발표
- 수십만 domain의 post-quantum origin connection이 별도 설정 없이 활성화됐다는 Cloudflare 발표

## 증거 경계와 운영 메모

- 수치는 Cloudflare origin connection rollout 측정이며 모든 TLS endpoint·client·proxy·mTLS path의 성능 또는 호환성 보증이 아님
- origin TLS library·supported group·certificate/MTLS·fallback·TLS alert·handshake latency를 origin pool별 canary로 검증 필요
