---
source_url: https://thehackernews.com/2026/08/claude-code-and-gemini-cli-flaws-let.html
title: Claude Code and Gemini CLI Flaws Let a GitHub Issue Reach CI Workflow Secrets
ingested: 2026-08-07
published: 2026-08-07 17:18
sha256: 4bfbdb91cb45f8a4f6275ffdcdd8671c694626c687eba966e1e0951b14f0601d
tags: [ai, security, devtools, cicd]
---

- The Hacker News가 Novee Security의 Black Hat USA 연구를 인용해 coding-agent CI harness 결함을 보도
- Gemini CLI CVE-2026-12537: crafted .gemini/.env를 통한 container launcher OS command injection이라는 보도 범위
- Claude Code CVE-2026-54316: public counter를 통한 API key exfiltration 설명과 2.1.163 fixed version 제시
- Gemini CLI 0.39.1 및 run-gemini-cli 0.1.22 fixed version 제시; 조직별 실제 노출은 workflow, token, runner telemetry로 확인 필요
