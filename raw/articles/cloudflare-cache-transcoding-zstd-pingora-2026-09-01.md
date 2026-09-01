---
source_url: https://blog.cloudflare.com/cache-transcoding/
title: How we could save petabytes of cache storage with Zstandard and Pingora
ingested: 2026-09-02
published: 2026-09-01 21:59 KST
sha256: c4fa82d077197936a00562f242baaf0001eefc6fdf6e4c54ea4b5ee13844bcfa
tags: [infra, cloud, cache, zstandard, pingora, performance, finops]
---
Cloudflare는 Pingora 기반 Cache Transcoding prototype을 공개함. eligible response가 cache에 들어올 때 Zstandard(zstd) level 3으로 encode하고, asset이 disk cache와 Tiered Cache를 이동하는 동안 compressed representation을 유지한 뒤 client 전달 전에 decode하는 구조임. origin이 uncompressed response를 보내면 기존에는 그 bytes를 disk와 data center 간 전송 경로에 그대로 보관했으나, prototype은 cache 내부 representation을 바꾸는 범위임.

공식 controlled corpus 표는 eligible asset compression ratio 2.834x, encode cost byte당 4.31 ns(약 232 MB/s, fill당 1회), decode cost byte당 1.56 ns(약 641 MB/s, serve마다 발생)를 제시함. initial testing에서 eligible asset은 on-disk size가 평균 원본의 약 1/3으로 줄었다고 설명함. 이 수치는 Cloudflare의 prototype·controlled corpus·traffic sample 범위이며 다른 CDN의 cache capacity·비용·latency 결과로 일반화할 수 없음.

원문은 모든 asset을 압축하지 않음. traffic sample에서 image·video·font는 request 21.4%지만 byte 63.3%를 차지하고 대체로 이미 압축돼 재압축의 CPU 비용이 유효하지 않다는 설명임. HTML·JSON·CSS·JavaScript는 request 67.3%·byte 22.3%였고, text slice의 약 71%가 `Content-Encoding` 없이 유입됐음. cache fill/serve CPU, p99 latency, compression ratio, hit·eviction·reuse, Tiered Cache/origin bytes, decode integrity, cache key·range request·purge·rollback을 cohort canary로 검증해야 함.
