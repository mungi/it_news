---
source_url: https://blog.cloudflare.com/d1-control-plane/
title: Under the hood, off the hot path: how D1 scales to millions of databases
created: 2026-10-14
ingested: 2026-10-14
published: 2026-10-14 01:20 KST
sha256: 92a4bac47951bdd122e4087001ce619d04edcbec8c2faca4e4c07b0b6f2be2ce
tags: [database, cloud, infra, serverless, global]
---
# Cloudflare D1 control plane

Cloudflare 공식 글의 D1 control plane 확장 구조를 기록.
- live non-deleted database 수 15배 증가와 수백만 생성·수십만 활성 database 지원 범위를 공개
- query data plane을 Durable Object·Eyeball Worker에 남기고 edge metadata cache·Postgres read replica·Hyperdrive로 central control-plane round trip을 축소하는 구조
- create lifecycle에서 Postgres 상태, Durable Object mapping, Workers KV mapping을 연결하며 failure recovery를 설계하는 경로
- 팀 액션: account·database lifecycle, metadata cache staleness, retry idempotency, schema migration·delete 복구를 query SLO와 분리해 canary 검증 필요
