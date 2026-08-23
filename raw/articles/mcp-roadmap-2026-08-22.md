---
source_url: https://blog.modelcontextprotocol.io/posts/mcp-roadmap/
title: "The New MCP Roadmap"
ingested: 2026-08-23
published: 2026-08-22 18:00 KST
sha256: 60168732df4a3a67cfcaecdfacdf0057b5ccb2b9222e296315d2b4ccced5a0b6
tags: [ai, agent, devtools, security, weekly-briefing]
---

# MCP 새 로드맵: 장시간 agent·workload identity·tool discovery 우선순위

- MCP 공식 원문 `The New MCP Roadmap`의 `article:published_time` `2026-08-22T09:00:00+00:00`를 KST `2026-08-22 18:00`으로 변환
- 다음 specification release와 이후 작업의 5개 우선영역으로 agentic messaging, HTTP-native transport, agent identity/security, primitives, SDK experience를 제시
- roadmap은 방향·proposal 우선순위이며 확정 API, SDK 구현, 상호운용성, migration deadline, production availability를 보증하지 않음

---

## 장시간 agent와 transport

- Tasks·`subscriptions/listen`·progress notification, webhook/channel server-initiated event의 조합을 specification 성숙 대상으로 제시
- remote MCP server의 HTTP workload 정렬을 local Streamable HTTP over stdio까지 확장하려는 방향
- task state·cancellation·progress ordering·webhook retry·duplicate delivery·timeout은 현재 서비스 contract와 telemetry로 별도 관리 필요

## agent identity와 권한 위임

- browser human approval만으로 cloud workload agent·부재 사용자 대행·sub-agent delegation을 다루기 어렵다는 원문 문제 정의
- DPoP·Workload Identity Federation·ID-JAG·Enterprise-Managed Authorization·token exchange를 표준 기반 identity 우선 후보로 제시
- roadmap 언급을 DPoP/WIF 지원, tenant isolation, compliance, token portability 보증으로 해석하지 않음

## tool·SDK 운영 액션

- `tools/call` result 표현 contract 정리와 progressive discovery로 대규모 catalog의 context 비용·selection 저하 완화 추진
- exposed tool 수·discovery step·context token·selection error·tool denial·completion rate를 task 단위로 계측
- transport adapter·identity adapter·task lifecycle·fallback/replay를 분리한 canary와 compatibility matrix를 30일 내 작성
