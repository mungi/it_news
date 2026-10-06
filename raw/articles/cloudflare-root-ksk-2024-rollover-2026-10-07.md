---
source_url: https://blog.cloudflare.com/root-ksk-2024-rollover/
title: The keys to the Internet change on October 11, 2026. Are you ready?
ingested: 2026-10-07
published: 2026-10-07 02:50 KST
sha256: 4b58b099b466f227a7d69687502694c24ab5a2a04805491c7326db7f6d961357
tags: [infra, cybersecurity, reliability, global]
---

- DNS root key-signing key rollover가 2026-10-11 예정됨
- DNSSEC validating resolver는 `KSK-2024` trust anchor를 신뢰해야 정상 signed zone 검증 가능함
- Cloudflare readiness test는 RFC 8509 Root Key Trust Anchor Sentinel 기반임
- Cloudflare는 1.1.1.1·Gateway DNS가 이미 KSK-2024를 신뢰한다고 안내함
- authoritative zone 운영자 대부분은 별도 조치 대상이 아니며, validating resolver 운영자는 vendor trust-anchor 갱신 절차 점검 필요

원문: https://blog.cloudflare.com/root-ksk-2024-rollover/
