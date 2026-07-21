---
source_url: https://www.island.io/blog/agentbaiting-how-800-fake-ai-skills-and-mcp-servers-delivered-malware
title: AgentBaiting: How 800+ Fake AI Skills and MCP Servers Delivered Malware
ingested: 2026-07-21
published: 2026-07-21 04:23
sha256: 68c7e458b7496be42c702afcd65c5b8220ff27b45bfe5a0a8a64eafc787485bc
tags: [ai, cybersecurity, devtools, open-source, global, security]
---
# AgentBaiting: How 800+ Fake AI Skills and MCP Servers Delivered Malware

## Source facts
- Published: 2026-07-21 KST; Island 원문은 date-only 표기이며, 연결된 The Hacker News RSS `pubDate` 2026-07-20 23:53:03 +05:30 = 2026-07-21 04:23 KST를 뉴스 시각으로 사용함.
- Island는 약 7,600개 malicious GitHub repositories와 약 6,600 profiles를 관측했고, 800개 이상이 AI Skills 또는 MCP servers로 위장됐다고 분석함.
- AI capability repository가 public AI registry·catalog에 600회 이상 나타났고, 약 200 campaign repository의 GitHub Release assets에서 1,400만 회 이상 measured downloads를 제시함.
- copied project, lookalike profile, README, malicious ZIP을 통해 SmartLoader를 전달하고 StealC 같은 secondary payload를 설치하는 chain을 설명함.
- Claude Code, Gemini, ChatGPT가 직접 link 없이도 악성 campaign repository를 surface한 research test를 제시함.

## Source boundary
- 수치와 agent behavior는 Island가 관측·시험한 campaign 및 configuration의 분석 결과이며 특정 조직 감염이나 모든 agent deployment의 동일한 동작 증거 아님.
- GitHub Release assets 외 embedded ZIP download는 공개 집계되지 않는다고 원문이 명시함.

## Related source
- The Hacker News: https://thehackernews.com/2026/07/fakegit-campaign-uses-7600-github.html
