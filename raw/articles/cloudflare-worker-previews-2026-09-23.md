---
source_url: https://blog.cloudflare.com/worker-previews/
title: Cloudflare Worker Previews: branch별 URL·설정·state·observability 격리
created: 2026-09-23
ingested: 2026-09-23
published: 2026-09-22 22:00 KST
sha256: 034e9a028d0fa63cc9509828b2ff541aeed72a08d66306ade6df81a21afb3d0c
tags: [cloud, infra, devtools, agent, serverless, observability, global]
---
# Cloudflare Worker Previews: branch별 URL·설정·state·observability 격리

- 원문: `2026-09-22T13:00:00Z`, KST 2026-09-22 22:00
- Open Graph image: https://blog.cloudflare.com/_emdash/api/media/file/01M31XDPCKA9WGNB1E6TT9XNFN.01M31XDQDKHJVR4XKHJ3NDFNJK.png
- evidence boundary: Cloudflare canonical announcement을 직접 확인한 범위임. service binding·Queue consumer·Workflow의 Preview 격리 제약은 원문 명시 범위이며 모든 dependency의 production-equivalence를 보장하지 않음

## 핵심 요약

- 공개: Git branch별 독립 URL·code·variables·secrets·bindings·observability·state를 제공하는 Worker Previews
- 실행: `npx wrangler preview`로 Preview 생성, 같은 branch push는 stable Preview URL 갱신
- 상태: Preview마다 Durable Object namespace·Container application 생성으로 migration·session·memory를 branch 단위로 격리
- 관측: logs·errors·metrics·traces를 Preview scope에서 조회하고 Browser Run·human review와 연결 가능
- 제약: service binding은 bound Worker production deployment 호출, Queue consumer와 Workflow isolation은 현재 자동 지원 범위 밖
- 통제: custom domain Preview는 Cloudflare Access, test secret·data 분리, TTL·cleanup owner·trace evidence 관리 필요
