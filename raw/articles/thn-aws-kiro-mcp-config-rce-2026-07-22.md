---
source_url: https://thehackernews.com/2026/07/aws-kiro-flaw-let-poisoned-web-page.html
title: AWS Kiro Flaw Let a Poisoned Web Page Rewrite Its Config and Run Code
ingested: 2026-07-22
published: 2026-07-22 01:06 KST
sha256: dfe19d7ee0dca682e157e5220c80e97ad43f131b70a5ad6a94e54c918f56da1b
tags: [ai, cybersecurity, devtools, agent]
---

- The Hacker News가 Intezer·Kodem Security 연구를 인용해 Kiro의 웹페이지 요약 경로가 `~/.kiro/settings/mcp.json` 수정과 MCP server command 실행으로 이어질 수 있었다고 보도함.
- Intezer는 macOS `0.9.2`, Ubuntu `0.10.16`에서 재현했고 `v0.11.130`에서 chain 실패를 확인했다고 설명함.
- AWS protected path 통제와 explicit approval을 적용했다는 보도이며, 전체 영향 build·CVE·Kiro CLI/Web 영향 범위는 원문 기준 미공개.
