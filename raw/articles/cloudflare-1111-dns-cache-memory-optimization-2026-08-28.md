---
source_url: https://blog.cloudflare.com/dns-cache-memory-optimization-1111/
title: How we saved 100 terabytes of memory by optimizing 1.1.1.1’s DNS cache
ingested: 2026-08-29
published: 2026-08-28 02:02 KST
sha256: fe65524eec9ff2b618a2cd69945f454ee2545064d9d0d91f086326c69cd4642e
tags: [infra, dns, cache, rust, performance, sre]
---
Cloudflare Big Pineapple은 1.1.1.1·Gateway DNS·DNS Firewall·AS112 등 뒤에서 2,500억 개가 넘는 DNS cache entry를 저장함. 다섯 가지 memory layout 변경으로 entry당 net footprint를 953 B에서 420 B로 56% 줄였고 fleet aggregate working-set memory를 약 100 TB 낮췄다고 공개함.

변경은 immutable cache entry의 `Vec<T>`·`String`을 `Box<[T]>`·`Box<str>`로 전환, answer·authority·additional section을 하나의 list와 offset으로 통합, query domain과 같은 record owner 생략, record data의 packed wire-format buffer 저장을 포함함. benchmark traffic mix는 A 56%, AAAA 25%, TXT 19%, entry당 1~4 record이며 custom allocator로 per-entry allocation을 측정함.

공개 수치는 insert throughput 625,000에서 893,000 entries/s로 43% 증가, lookup latency 828 ns에서 670 ns로 19% 감소, per-entry allocation 1.1 KB에서 461 B로 축소한 결과임. traffic mix·cache occupancy·allocator state·process의 cache 외 memory와 DNSSEC/ECS/response composition 조건이 다르므로 다른 fleet에 절대값을 환산할 수 없음. layout 변경은 correctness·TTL·DNSSEC·ECS variant와 p99 resident memory·hit/eviction·tail latency·upstream load를 같은 canary에서 검증할 필요가 있음.
