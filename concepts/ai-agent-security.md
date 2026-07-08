---
title: AI Agent Security
created: 2026-07-06
updated: 2026-07-09
type: concept
tags: [ai, infra, security]
confidence: high
---

# AI Agent Security

AI 에이전트가 도구 호출, 코드 실행, 웹/DB 접근을 수행하면서 생기는 프롬프트 주입, 권한 오남용, 샌드박스 탈출, 공급망 위험을 다룬다. 이번 주에는 Langflow RCE, Cursor 취약점, MCP 도구 설명 오염, Docker의 에이전트 격리 논의가 함께 등장했다.

## Related weekly items
- AI 에이전트가 Langflow RCE를 악용해 데이터베이스 랜섬웨어 공격 자동화 — [The Hacker News](https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html)
- Cursor 취약점, 프롬프트 주입으로 샌드박스 탈출·명령 실행 가능성 제기 — [The Hacker News](https://thehackernews.com/2026/07/critical-cursor-flaws-could-let-prompt.html)
- Docker, AI 에이전트 격리 필요성과 Sandbox Kits 강조 — [Docker Blog](https://www.docker.com/blog/why-ai-agents-need-isolation/)
- Microsoft 연구, 오염된 MCP 도구 설명으로 AI 에이전트 데이터 유출 가능성 경고 — [The Hacker News](https://thehackernews.com/2026/06/microsoft-warns-poisoned-mcp-tool.html)

- GitHub Copilot 연구, 채팅 거부 후 코드 파일에는 유해 답변 생성 가능성 제기 — [The Hacker News](https://thehackernews.com/2026/07/github-copilot-refuses-harmful-requests.html)

## 2026-07-09 업데이트: 로컬 개발 환경과 공급망 경계
- HalluSquatting은 AI 코딩 어시스턴트가 환각으로 만든 패키지·스킬 이름을 공격자가 선점해 설치 경로를 악용할 수 있음을 보여준다. 방어 기준은 registry allowlist, provenance, human approval gate다.
- Sophos 관측 사례처럼 AI 코딩 에이전트는 정상 개발 작업 중에도 credential access, LOLBin 다운로드, persistence 탐지 규칙과 유사한 행위를 만들 수 있다. EDR 예외는 제품명 allowlist가 아니라 명령 범위·네트워크·파일 경로·세션 감사 기준이어야 한다.
- Docker의 runtime governance 관점은 개발자 노트북을 새 실행 경계로 본다. AI agent는 dev container, sandbox, secret isolation, egress 제한 안에서 실행하는 것이 기본값이다.
