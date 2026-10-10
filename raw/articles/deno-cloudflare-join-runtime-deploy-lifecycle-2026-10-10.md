---
source_url: https://deno.com/blog/cloudflare
title: Deno is joining Cloudflare
created: 2026-10-10
ingested: 2026-10-10
published: 2026-10-09 21:50 KST
sha256: a7a7db62f447ae961409e7f0249203672b22621f226204d0d7c2bec417531019
tags: [devtools, cloud, infra, serverless, javascript, open-source, global]
---
# Deno 팀의 Cloudflare 합류와 runtime·hosting 수명주기 변경

- Deno 공식 원문: 2026-10-09 게시 표기, Deno 팀 전체가 Cloudflare에 합류한다고 발표
- 통합 방향: `workerd`와 Deno의 `celld`를 결합하고 Cloudflare Workers·Durable Objects를 Cloudflare network와 자체 인프라에서 같은 primitive로 쓰는 방향 제시
- runtime: Deno runtime은 1년간 월별 bug fix·security update 지원 뒤 Deno 자체 개발 종료, open source 상태는 유지
- hosting: Deno Deploy는 6개월간 운영 뒤 종료, 유료 고객의 Cloudflare Workers 이전 지원 예고
- registry·engine: JSR은 Cloudflare로 인프라를 옮겨 계속 운영, `rusty_v8`는 계속 지원하고 `workerd` 통합 추진
- source boundary: self-hosted `workerd`/celld의 support model·feature parity·pricing·regional availability는 두 발표에서 확정하지 않음
- 팀 액션: Deno Deploy endpoint·state·binding·credential을 inventory화하고 Workers canary에서 SLO·data path·비용·rollback 증거 검증 필요
