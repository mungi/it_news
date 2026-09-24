---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/postgresql-post-quantum-tls-key-exchange/
title: Amazon RDS for PostgreSQL now supports post-quantum TLS key exchange
ingested: 2026-09-25
published: 2026-09-25 01:00 KST
sha256: c3ae0a23a08f49286b5d2f649f813616407102d54f7549df1598a776e61048a7
tags: [ai, cloud, infra]
---

# Amazon RDS for PostgreSQL: 18 이상에서 PQ-TLS key exchange와 `ssl_groups` 선택 지원

## 핵심 요약

- AWS는 RDS for PostgreSQL 18 이상에서 PQ-TLS key exchange와 `ssl_groups` cryptographic group 선택을 지원한다고 발표함.
- announcement는 console 또는 CLI로 managed database 설정을 생성·업데이트할 수 있다고 설명함.
- region availability, client compatibility, handshake latency와 fallback behavior는 source에서 보장하지 않음.
- 운영 대응: engine·driver·proxy·connection pool별 TLS compatibility matrix와 handshake/latency/rollback canary 필요.

## 원문

https://aws.amazon.com/about-aws/whats-new/2026/09/postgresql-post-quantum-tls-key-exchange/
