---
source_url: https://thehackernews.com/2026/09/taskstomp-powershell-backdoor-steals.html
title: TASK#STOMP PowerShell backdoor campaign
created: 2026-09-22
ingested: 2026-09-22
published: 2026-09-21 23:15 KST
sha256: c2c072f2abd72fb9772bebd3d0bf4bc29d09f4b1de1e278ad734a212a192af15
tags: [cybersecurity, endpoint, powershell, windows, incident-response, global]
---

# TASK#STOMP PowerShell backdoor

- 보도 원문: The Hacker News, RSS `Mon, 21 Sep 2026 19:45:40 +0530`, KST 2026-09-21 23:15
- primary research URL: https://www.securonix.com/blog/task-stomp-powershell-backdoor-document-theft-remote-access
- Securonix 직접 페이지는 current run HTTP 403으로 본문 재수집 불가. mechanism은 직접 읽은 THN canonical body의 Securonix 인용 범위로 한정

## 핵심 요약

- 실행: encoded VBS가 `wscript.exe`로 실행되고 scheduled task·Startup folder persistence를 생성하는 흐름
- 수집: document·Wi-Fi password·clipboard·screenshot·system metadata와 arbitrary PowerShell command 기능 언급
- 구조: `sys_loader.ps1`·`win_conn.ps1`의 별도 기능과 mutual watchdog, 두 token-authenticated C2 설명
- 경계: initial access, victim identity, exfiltration success, credential misuse는 공개 source에서 미확정
- 대응: process tree·Task Scheduler·Startup artifact·PowerShell/AMSI·DNS/proxy와 credential/session closure를 시간축 대조
