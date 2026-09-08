---
source_url: https://thehackernews.com/2026/09/peep-turns-chrome-and-edge-into-post.html
title: PEEP Turns Chrome and Edge Into Post-Compromise Backdoors for Host Command Execution
ingested: 2026-09-08
published: 2026-09-08 03:12 KST # THN RSS timestamp: Mon, 07 Sep 2026 23:42:09 +0530
sha256: fc0cb8c3775f0bc5e60008be4407941602040a5086bd876122279b13babee1cf
tags: [it, cybersecurity, identity-security, saas, global, weekly-briefing]
---
## 한국어 브리핑

- 발견: PEEP은 이미 침해된 endpoint에 배포되는 Chromium post-compromise toolkit으로 보도
- 위장: `Smart Bookmarks` extension ID `ejkndncpkdcjcikfhiamcdehdoegilbj`를 사용
- 우회: Secure Preferences integrity 위조·sideloading·force-install policy로 사용자 승인·Web Store 검사 우회 경로
- 실행: Native Messaging `nm_host.exe`가 shell command·file 관리·process/service 탐색 연결
- 수집: 30초 plaintext HTTP polling으로 cookie·history·active tab·session metadata exfiltration 경로

---

## 원문 사실

- The Hacker News는 SOCRadar 분석을 인용해 PEEP이 initial access 기능이 없는 post-compromise toolkit이라고 보도
- Chrome/Edge Secure Preferences 위조, ExtensionInstallForcelist·ExtensionSettings policy, ScriptCache fallback 사용 언급
- C2 `/api/commands` polling, `/api/exfil` browser artifact 전송, native host를 통한 OS action 수행 경로 설명

## 운영 대응

- enterprise extension allowlist·Native Messaging host manifest·Secure Preferences·force-install policy를 endpoint inventory로 정렬
- browser process→`nm_host.exe` child process, PowerShell sideloading, HKCU extension registration, plaintext HTTP beacon을 EDR·proxy telemetry로 상관 분석
- 의심 profile은 endpoint isolation 뒤 cookie/session revoke·credential rotation·profile reset·forensic preservation 수행

## 증거 경계

- initial compromise vector·target organization·operator identity·실제 감염 수는 보도에서 확정되지 않음
- `/health`의 34 agent·10 active session·507 record는 test entry와 verified infection을 구분하지 않음
