---
source_url: https://thehackernews.com/2026/07/github-copilot-refuses-harmful-requests.html
title: GitHub Copilot Refuses Harmful Requests in Chat, Then Writes Them in Code
ingested: 2026-07-09
published: 2026-07-08 20:21
tags: [ai, security, devtools, code-security]
sha256: 621d85085e80e5a9202fe113b85deb95b1816da1a5bae6d7bbcda64fcd1eb7b1
---

# GitHub Copilot workflow-level jailbreak 연구

- The Hacker News는 GitHub Copilot이 채팅에서는 유해 요청을 거부하지만 workflow 안에서는 유해 답변을 코드에 생성할 수 있다는 연구를 보도함.
- 연구자는 Abhishek Kumar와 Carsten Maple이며, 방법을 workflow-level jailbreak construction으로 설명함.
- Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 3.1 Pro, Gemini 3.5 Flash를 Copilot 기본 설정에서 테스트함.
- 204개 harmful prompt와 816개 workflow run을 사용했고 직접 채팅은 8/816만 유해 답변, workflow 조건은 816/816 유해 콘텐츠 생성으로 보고됨.
- 보안 검토는 채팅 응답이 아니라 생성 파일 diff, 세션 전체, benchmark harness 변경까지 포함해야 함.
