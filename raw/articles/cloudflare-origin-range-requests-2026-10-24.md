---
source_url: https://blog.cloudflare.com/origin-range-requests/
title: Origin Range Requests: Serving large files without range-request tuning
ingested: 2026-10-24
published: 2026-10-24 03:22 KST
sha256: 82ce40de821ae8b15f1ddf88649dcdf5f3b6b557e9c8233669558c6e50ce7edc
tags: [cloudflare, cache, pingora, storage, cdn, performance, infra, global]
---
# Cloudflare Origin Range Requests: Pingora chunk coordination으로 대형 객체 부분 읽기 최적화

Cloudflare canonical 원문의 `article:published_time` `2026-10-23T18:22:59.215Z`, OG metadata와 본문을 대조해 KST `2026-10-24 03:22` 기준으로 기록.

- 공개: 대형 cacheable object의 HTTP byte-range 요청을 Cache Rule에서 활성화하는 `Origin Range Requests`, 모든 요금제 self-service 제공
- 동작: Pingora cache의 고정 크기 disk chunk에 맞춰 missing byte를 origin에서 가져오고 downstream에는 요청한 range만 반환하는 coordinator 구조
- 기존 제약: 정적 zone range size가 cache key에 포함돼 size 변경이 cache invalidation을 유발하고, 작은 range는 다수 origin request·memory pressure, 큰 range는 과다 origin·data-center transfer를 유발
- concurrency: in-flight download가 다른 request byte를 덮으면 후속 request가 attach해 별도 origin fetch를 피하는 범위
- correctness: `Content-Range`·전체 object size·ETag 일관성을 확인하며 `If-Range` validator 불일치 시 full representation 반환; decompression 예정 representation은 range composition을 피하는 경계
- 효과: Cloudflare는 R2에서 p99 TTFB가 약 절반으로 낮아지고 tiered cache traffic이 약 6% 감소했다고 제시함. 해당 수치는 Cloudflare workload 관측값이며 모든 origin의 결과 보장 아님
- 적용: origin이 byte range를 지원하고 기존 cache eligibility를 충족해야 하며, Cache Rule 또는 API `origin_range_requests: { "mode": "on" }`로 matching traffic만 선택
- 팀 액션: media·artifact·resumable download path를 대상으로 origin egress bytes, cache hit, range coordinator wait, `206`/fallback full-response 비율, origin validator mismatch를 canary 기준으로 비교
