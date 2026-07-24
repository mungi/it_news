---
source_url: https://labs.zenity.io/p/agentforger-part-1-chatgpt-cross-site-agent-forgery
title: AgentForger, Part 1: ChatGPT Cross-Site Agent Forgery
ingested: 2026-07-24
published: 2026-07-23 22:00 KST
sha256: 838088f2a28d7fa349e257bc89650186abf55fa0130c7cb5dca8dcef1955869e
tags: [ai, security, governance]
---

# ChatGPT Workspace Agents AgentForger: 피싱 URL 기반 cross-site agent forgery 연구

Zenity Labs의 2026-07-23 primary research와 The Hacker News의 2026-07-24 후속 보도를 직접 확인해 작성. 연구는 Workspace Agents Builder가 URL의 `initial_assistant_prompt`를 자동 제출·실행해 authenticated session에서 agent를 생성할 수 있었던 과거 CSRF chain을 설명함. 연구진은 2026-06-04 OpenAI Bugcrowd에 신고했고 2026-06-08 수정됐다고 명시함. 현재 active exploitation, 특정 조직 피해, 모든 ChatGPT 배포의 영향은 확인하지 않음.

## 핵심 사실

- primary research 발행: `article:published_time` 2026-07-23T13:00:00Z = 2026-07-23 22:00 KST
- 뉴스 시각: The Hacker News RSS `pubDate` 2026-07-24 17:23:55 +05:30 = 2026-07-24 20:53 KST
- 전제: 로그인 사용자, Workspace Agents 접근, 기존 authorized connector 하나 이상 필요
- 경로: URL `template_name`과 `initial_assistant_prompt`가 Builder 초기화·자동 prompt 실행에 사용된 연구 결과
- 가능 동작: agent 생성, 기존 connector 부착, `Never ask` approval 설정, Preview 실행, schedule publish chain
- 수정: Zenity가 OpenAI에 2026-06-04 신고, 2026-06-08 수정됐다고 공개
- 대응: agent·connector·approval·schedule audit, URL 초기화 state-change confirmation, least privilege와 immutable audit log 검증
