---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-postgresql-post-quantum-tls-key-exchange/
title: Amazon Aurora now supports post-quantum TLS key exchange
ingested: 2026-10-30
published: 2026-10-30 01:00
sha256: 42616a5b83d2817e7e01b14a11324c0168e5ce1e0488cba6cefcdc971393e7f8
tags: [cloud, aws, database, postgresql, cloud-security, post-quantum, global, release]
---

# Amazon Aurora PostgreSQL PQ-TLS key exchange 지원

- 확인 시각: 2026-10-30 10:59 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-postgresql-post-quantum-tls-key-exchange/
- 발행: AWS embedded `postDateTime` `2026-10-29T16:00:00Z` → 2026-10-30 01:00 KST

## 확인한 사실
- Amazon Aurora PostgreSQL-Compatible Edition이 data-in-transit 암호화를 위한 post-quantum TLS(PQ-TLS) key exchange 지원 추가
- Aurora PostgreSQL `18` 이상에서 `ssl_groups` parameter 변경 지원
- 조직의 보안 표준에 맞춰 Aurora PostgreSQL allow list의 cryptographic group 선택 가능

## 운영 경계
- 공지는 supported group의 정확한 구성, client driver·TLS library interoperability, existing connection 재협상 동작, 모든 Region·engine minor version의 제공 범위를 열거하지 않음
- `ssl_groups` 변경은 기존 client와의 TLS handshake, connection pool recycle, proxy·certificate validation, rollback을 자동 보장하지 않음
