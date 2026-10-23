---
source_url: https://blog.cloudflare.com/post-quantum-geo-key-manager/
title: Bringing post-quantum cryptography to geographically fenced key management
ingested: 2026-10-24
published: 2026-10-24 03:06 KST
sha256: 79736c7fabdaca9812a7c0137a29b6b0e0bf9497abc1314d806590269d3f026d
tags: [cloudflare, post-quantum, key-management, data-sovereignty, zero-trust, security, global]
---
# Cloudflare PQ GeoKey Manager closed beta

Cloudflare canonical 원문의 `article:published_time` `2026-10-23T18:06:56.089Z`, OG image와 본문을 대조해 KST `2026-10-24 03:06` 기준으로 기록.

- 공개: Data Localization Suite용 post-quantum geographically restricted key manager closed beta
- 목적: 고객 decryption key를 선택한 geography의 Cloudflare server에서만 사용할 수 있도록 wrapping하는 범위
- 위협: 장기 민감 ciphertext를 현재 수집해 향후 quantum capability로 복호화하는 harvest-now-decrypt-later 대응
- 암호: production-ready PQ ABE 대신 hybrid `ML-KEM-768`·`X25519` 보호와 regional root key·application-specific key pair 구조 사용
- fail closed: configured regional root key가 없거나 malformed이면 edge key service가 시작하지 않으며 request metadata의 key가 local에 없으면 decryption 거부
- 분리: global configuration system은 wrapped private key와 metadata를 배포하되 regional root key는 별도 provisioning path로 authorized edge에만 전달
- 범위: key unwrap geography control이며 request routing·tunnel termination·traffic inspection·plaintext processing 위치 자체를 제어하는 기능 아님
- 일정: GA는 2027년 1분기 계획으로 제시됐으며 현재 일반 제공 기능 아님
- 팀 액션: key-use region, routing/inspection region, plaintext processing region, key rotation epoch와 unavailable-region failure mode를 compliance evidence로 분리 점검
