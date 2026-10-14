---
source_url: https://blog.cloudflare.com/hyperdrive-mysql/
title: Inside Hyperdrive: How we solved a rare Hyperdrive MySQL caching bug
created: 2026-10-15
ingested: 2026-10-15
published: 2026-10-14 22:00 KST
sha256: 7067034a528e7587d7fe5d0deaf1e0c97220b8c474f272eb2a40c77977d98b0f
tags: [database, cloud, infra, devops, global]
---
# Cloudflare Hyperdrive MySQL cache protocol mismatch

Cloudflare 공식 글의 Hyperdrive MySQL cache bug 원인과 수정 범위를 기록.
- 캐시 사용 Hyperdrive에서 비어 있으면 안 되는 query response가 약 0.001% 비율로 빈 결과가 되는 고객 보고를 조사한 범위
- Worker 인접 Client와 origin DB 인접 Endpoint가 같은 data center cache를 공유할 때, 서로 다른 MySQL capability로 encoding된 response bytes를 직접 재사용한 경로
- `CLIENT_DEPRECATE_EOF` 협상 여부에 따라 result-set metadata EOF·final EOF/OK packet 형식이 달라져 capability translation 생략 시 early EOF 또는 hang 가능 범위
- Cloudflare는 cache key에 protocol capability를 포함하는 방향으로 수정했다고 설명하며, 개별 MySQL driver·self-hosted proxy의 동일한 결함을 일반화하지 않음
- 팀 액션: protocol-aware cache는 query text뿐 아니라 wire-format version·capability·compression·character set·prepared-statement state를 cache compatibility contract로 검증 필요
