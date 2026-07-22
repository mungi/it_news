---
source_url: https://www.manifold.security/blog/azure-devops-mcp-server-vulnerability
title: When Your AI Reviewer Works for the Attacker: A Confused-Deputy Bug in Microsoft's Azure DevOps MCP Server
ingested: 2026-07-22
published: 2026-07-22 14:57 KST
sha256: 844a71d97a2517b672d3fa3ee3e731631b612f5be2ea2d016fb2f08bf8e144a3
tags: [ai, cybersecurity, devtools, agent]
---

- Manifold Security가 Microsoft 공식 Azure DevOps MCP server의 PR description 처리 경로에서 hidden HTML comment가 agent context로 전달되는 confused-deputy PoC를 공개함.
- PoC는 reviewer 권한 agent가 다른 프로젝트 pipeline 실행·비공개 wiki 읽기·PR comment 게시을 수행할 수 있음을 제시하며, 호출은 reviewer credential로 허용된 API 범위임.
- wiki·build log에는 spotlighting helper가 쓰이지만 PR 반환 tool에는 적용되지 않았다는 연구 분석이며, 연구진은 MSRC acknowledgement·triage를 받았다고 명시함.
- 모든 tenant 또는 configuration의 침해 증거가 아니라 attacker PR text·높은 reviewer 권한·자동 tool approval이 결합된 조건부 경로로 한정함.
