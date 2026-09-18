---
source_url: https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/
title: Cloudflare Pingora consistent hashing memory optimization
ingested: 2026-09-19
published: 2026-09-18
sha256: c09a87faf39180feab6110b9d148853d18721326922575a35a0ad2b25dc58c38
tags: [cloud, infra, open-source, performance, global]
---

# Cloudflare Pingora consistent hashing memory optimization

Cloudflare는 2026-09-18 Pingora Backend Router의 consistent-hashing implementation 최적화로 global RAM 100TB 이상을 회수했다고 밝혔다. 이 route는 cacheable URL을 backend로 안정적으로 보내 data center 내 copy 수와 server addition/removal 때의 이동을 제한한다. 원문은 `pingora-ketama` 구조의 과도한 memory 사용을 출발점으로 제시한다. 효과는 Cloudflare fleet 수치이며 다른 proxy나 cache에 일반화할 수 없다. 자체 환경에서는 ring state size, key distribution, backend churn, cache hit, origin retry, tail latency를 trace replay와 failure canary로 검증해야 함.
