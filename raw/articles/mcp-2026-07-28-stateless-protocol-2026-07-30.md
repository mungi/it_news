---
source_url: https://blog.modelcontextprotocol.io/posts/2026-07-28/
title: The 2026-07-28 Specification
ingested: 2026-07-30
published: 2026-07-28 18:00
sha256: 132d3e3dd9dd3525a7b61ef1ac3bd16912281f046e5b88e437ae37a62b8b56b9
tags: [ai, infra, open-source, agent, security, weekly-briefing]
---

# MCP 2026-07-28 명세: stateless core·MRTR·header routing·authorization hardening

## 확인한 원문

- 원문: Model Context Protocol Blog, `The 2026-07-28 Specification`
- 원문 시각: `2026-07-28T09:00:00+00:00` 메타데이터, KST `2026-07-28 18:00`
- 원문 이미지: `https://blog.modelcontextprotocol.io/og-image.png`
- 관련 한국어 보도: AI타임스 `2026-07-29T17:11:49+09:00`, MCP의 stateless core·OAuth/OIDC 변경·Tasks를 설명

## 핵심 요약

- `2026-07-28` 명세와 TypeScript·Python·Go·C# Tier 1 SDK 공개, 기존 bidirectional stateful protocol을 request/response **stateless core**로 전환
- `initialize`/`initialized` handshake와 `Mcp-Session-Id` header를 retire하고, protocol version·client identity·capability를 request `_meta`에 포함하도록 변경
- `server/discover` RPC는 사전 capability 조회용 optional call이며, 각 request가 round-robin load balancer 뒤의 어떤 instance에도 shared storage 없이 도달 가능한 구조
- `Mcp-Method`·`Mcp-Name` HTTP header로 gateway·rate limiter·WAF가 JSON body parsing 없이 route·authorization·metering 가능
- server-initiated sampling/elicitation/roots 요청은 long-lived stream 대신 Multi Round-Trip Requests(MRTR)로 재설계, `input_required`와 `inputResponses` retry 경로 제공
- `tools/list`, `prompts/list`, `resources/list`, `resources/read`는 `ttlMs`·`cacheScope`와 deterministic order를 제공해 tool catalog와 prompt cache 안정화 지원
- authorization은 RFC 9207 `iss` validation, issuer-bound client credential, DCR의 CIMD 전환을 포함. Tasks는 `io.modelcontextprotocol/tasks` extension으로 이동하고 legacy HTTP+SSE·Roots·Sampling·Logging은 최소 12개월 deprecation window로 관리

## 운영 경계

- stateless transport는 application state 제거가 아님. 원문은 state가 필요할 때 tool이 explicit handle을 발급하고 model이 argument로 반환하는 방식을 제시
- 명세 공개만으로 모든 MCP client/server·gateway·SDK가 즉시 호환된다는 보장은 없음. session identifier, held-open stream, DCR, legacy transport 의존성을 inventory하고 version negotiation·dual-stack·rollback 검증 필요
- header-based routing은 gateway policy enforcement 위치를 제공하지만 tool authorization, identity propagation, secret boundary, request-body validation을 대체하지 않음
- primary 명세는 latency, throughput, availability SLO, migration completion률을 제공하지 않음. 조직별 load test와 security regression으로 release gate 설정 필요

## 출처

- Primary: https://blog.modelcontextprotocol.io/posts/2026-07-28/
- Related report: https://www.aitimes.com/news/articleView.html?idxno=213307
