---
source_url: https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html
title: Compromised jscrambler 8.14.0 npm Release Drops Rust Infostealer During Install
ingested: 2026-07-12
published: 2026-07-12 02:59
sha256: 3d46f62ba7577043fd396bb1b8df3feb09140feea59d2447de3747a7475b2df1
tags: [ai, cloud, infra, security, weekly-briefing]
---

## 핵심 요약
- jscrambler 8.14.0 npm release가 `preinstall` hook으로 OS별 Rust infostealer를 실행함.
- 추가 파일 `dist/setup.js`와 `dist/intro.js`는 공개 GitHub repo의 tag·commit·PR과 일치하지 않음.
- payload는 AWS·Azure·Google Cloud credential, CI metadata endpoint, password vault, browser session, Slack/Discord/Telegram session을 수집 대상으로 삼음.
- Claude Desktop, Cursor, Windsurf, VS Code, Zed 설정 파일도 대상이라 AI coding tool API key와 MCP credential 노출 가능성.
- Linux build는 eBPF program load capability를 포함해 kernel foothold 가능성이 분석 중임.

## 운영 메모
- npm install script allowlist, provenance, maintainer MFA, package diff gate 필요.
- CI credential은 job별 short-lived token과 metadata endpoint 제한으로 축소 필요.
