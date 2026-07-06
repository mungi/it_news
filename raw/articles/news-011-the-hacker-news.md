---
source_url: https://thehackernews.com/2026/06/microsoft-warns-poisoned-mcp-tool.html
title: Microsoft Warns Poisoned MCP Tool Descriptions Can Make AI Agents Leak Data
ingested: 2026-07-06
published: 2026-07-01 02:46
sha256: f895357fed353b6c27117c347a9a739be19962c919672f63470ee1a996517eaa
tags: [mcp, ai-agent, prompt-injection, microsoft, data-leak]
---

# Microsoft Warns Poisoned MCP Tool Descriptions Can Make AI Agents Leak Data

## Source
- Source: The Hacker News
- URL: https://thehackernews.com/2026/06/microsoft-warns-poisoned-mcp-tool.html
- Published KST: 2026-07-01 02:46
- Ingested KST: 2026-07-06 10:02

## Korean briefing summary
The Hacker News는 Microsoft 연구를 인용해 공격자가 MCP 도구 설명을 오염시키는 방식으로 AI 에이전트를 조종해 회사 데이터를 유출시킬 수 있다고 보도했습니다. 도구 설명 자체가 프롬프트 주입 채널이 될 수 있다는 지적입니다.

## Detail
MCP와 도구 호출 생태계가 확산되면서 도구 메타데이터, 설명문, 스키마도 신뢰 경계 안에 들어왔습니다. 에이전트가 도구 설명을 읽고 행동을 결정한다면 설명문 오염은 간접 프롬프트 주입으로 이어질 수 있습니다.

## Why it matters
에이전트 보안은 코드뿐 아니라 도구 레지스트리와 메타데이터 공급망까지 포함해야 합니다.

## Engineering implication
MCP 서버 허용 목록, 도구 설명 검증, 민감 데이터 접근 정책, 사용자 승인 단계가 필요합니다.
