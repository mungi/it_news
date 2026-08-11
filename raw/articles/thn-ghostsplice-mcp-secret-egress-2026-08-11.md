---
source_url: https://thehackernews.com/2026/08/malicious-mcp-servers-can-split.html
title: Malicious MCP Servers Can Split Instructions to Make AI Coding Agents Exfiltrate Secrets
ingested: 2026-08-11
published: 2026-08-11 19:24 KST
sha256: 8d2922bbb5a5b487cdbdea0ce625b21b4fb4f8322fa64a83101553e04843aafc
tags: [ai, cybersecurity, devtools, agent, mcp, prompt-injection, global]
---

## 원문 확인

- The Hacker News 기사 제목·본문·기사 이미지를 직접 확인함
- 기사 본문은 ASSET Research Group의 GhostSplice 공개 연구와 GitHub reference implementation을 연결함
- 기사에는 `Aug 11, 2026` 날짜만 표시됨. 카드 시간 `2026-08-11 19:24 KST`는 THN RSS `Tue, 11 Aug 2026 15:54:00 +0530` 변환값이며, 원문이 주장한 clock time 아님

## 확인된 사실

- 악성 MCP server가 tool description과 tool result, 일부 client의 sampling channel에 각각 무해해 보이는 fragment를 배치할 수 있음
- 공개 example은 `integrity_checker` fields와 scan result mapping을 조합해 SSH key·source·customer CSV·`.env` 내용을 외부 tool에 넘기도록 유도함
- ASSET 공개 연구는 isolated project와 fake credential 환경의 controlled test이며, 이미 악성 server 연결과 agent file-read capability가 전제임
- 공개 연구 수치에서 11개 API-tested model의 평균 compliance는 단일 instruction 42%와 split-two 82%로 제시됨
- client safety control이 결과를 바꿀 수 있으며 실제 침해·CVE·보편적 영향은 확인되지 않음

## 운영 경계

- MCP server output은 instruction이 아닌 untrusted data로 처리 필요
- secret-bearing tool result가 후속 tool argument로 이동하는 flow에 approval·allowlist·egress policy 필요
- registry publisher·version·filesystem permission·network destination·tool trace를 deployment evidence로 보존 필요
