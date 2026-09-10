---
source_url: https://blog.cloudflare.com/post-quantum-dnssec-1111/
title: 1.1.1.1 now supports post-quantum DNSSEC, all 2,420 bytes of it
ingested: 2026-09-11
published: 2026-09-10 22:00 KST
sha256: c44bee6d1a0ef049f5d415fff22b34082fa35470ce9d83a9a49583c3907d6b30
tags: [infra, cybersecurity, global, weekly-briefing]
---

# Cloudflare 1.1.1.1 post-quantum DNSSEC 공식 공지

## 직접 확인한 본문 사실

- `article:published_time` `2026-09-10T13:00:00.000Z`를 KST `2026-09-10 22:00`으로 환산
- 1.1.1.1 resolver가 NIST 표준 post-quantum signature algorithm `ML-DSA-44` DNSSEC signature validation을 지원한다고 공개
- `ML-DSA-44` signature는 **2,420 bytes**, public key는 1,312 bytes이며 일반 UDP DNS response budget을 단독으로 초과하는 크기
- authoritative server가 truncated response를 반환하면 resolver가 TCP 등 다른 transport로 retry하는 DNS protocol path를 사용
- 기존 resolver 호환성을 위해 conventional algorithm과 post-quantum algorithm을 함께 publish하는 기간에는 downgrade validation이 필요한 범위
- Cloudflare는 1.1.1.1 도착 query 약 85%와 Big Pineapple 전체 DNS service query 약 60%가 UDP라고 설명

## 증거 경계와 운영 메모

- 1.1.1.1의 validation support는 authoritative zone의 ML-DSA signing, enterprise recursive resolver support, 모든 DNS path의 자동 migration을 뜻하지 않음
- large DNSKEY response와 TCP/DoT/DoH fallback, EDNS fragmentation, firewall TCP/53 policy, DNSSEC validation failure metric을 zone·resolver별 canary로 확인 필요
- Cloudflare의 2029 full post-quantum security 목표는 provider 계획이며 보편적 industry deadline 또는 migration 완료 보증이 아님
