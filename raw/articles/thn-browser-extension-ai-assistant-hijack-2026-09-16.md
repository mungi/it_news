---
source_url: https://thehackernews.com/2026/09/one-extension-could-hijack-ai.html
title: Browser extension의 Chromium AI assistant control demonstration
created: 2026-09-17
ingested: 2026-09-17
published: 2026-09-16 23:36
sha256: af49256f762dbf9e7bcacc5fc0e363354ce253f4658452159379bf1a8be9024f
tags: [security, ai, browser-security, devtools, global]
---

# Browser extension의 Chromium AI assistant control demonstration

- 원문: https://thehackernews.com/2026/09/one-extension-could-hijack-ai.html
- 원문 게시: 2026-09-16 23:36 KST

## 핵심 요약

- Forever Security가 ordinary extension으로 Chrome·Comet·Edge·Opera Neon·Claude in Chrome AI 기능 제어 demonstration 공개
- page modification과 `declarativeNetRequest` permission으로 trusted AI page injection 경로 제시
- Chrome·Comet local file read, Chrome camera/microphone, 4개 product agent action control이 source demonstration 범위
- Chrome `CVE-2026-0628` fixed 143.0.7499.192, Edge `CVE-2026-55945` fixed 150.0.4078.48
- in-the-wild attack이 아니며 malicious extension 사전 실행이 필요한 research boundary

---

## 증거 경계

- 원문에 명시된 feature·version·research demonstration·운영 수치만 기록
- source가 보장하지 않은 조직별 성능·침해·provider support는 local evidence 없이 확정하지 않음

## 운영 조치

- source fact와 deployment inventory·negative test·telemetry·rollback evidence를 같은 change record로 보존
