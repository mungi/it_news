---
source_url: https://tailscale.com/blog/sqlite-wal-reset-bug
title: How we tracked down a 16-year-old SQLite bug
ingested: 2026-08-13
published: 2026-08-12 23:00 KST
sha256: 2e25181addf226be0f5f492319e9530a57d9482160f5ab9f34170f8533a5b58a
tags: [tailscale, sqlite, database, infra, sre]
---

Tailscale은 2026-08-12 공식 기술 글에서 control plane shard의 SQLite database corruption 19건을 6개월간 조사해 오래된 WAL-Reset data race를 찾고 수정했다고 설명함. shard별 SQLite는 단일 Go process가 독점 접근하며, 몇 분마다 전체 database snapshot을 S3로 저장함. corruption 발생 때 shard control plane을 중지해 repair 또는 restore해야 했고, 해당 기간 신규 device의 peer 목록 획득·새 연결과 admin console·API가 제한됨. 기존 online peer-to-peer WireGuard connection은 유지됨. SQLite database에는 tailnet·device metadata가 저장되며 private encryption key와 network traffic은 포함하지 않는다고 설명함. 재현 가능한 trigger를 찾지 못해 passive production forensic telemetry를 통해 원인을 좁혔으며, 이 원인·수정 효과는 Tailscale deployment 사례로 다른 SQLite deployment에 일반화하지 않음.
