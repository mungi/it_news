---
source_url: https://www.metabase.com/blog/security-update
title: Security update available for Metabase - Please upgrade now
ingested: 2026-08-08
published: 2026-08-08 15:58 KST (The Hacker News RSS time; official page is date-only)
sha256: 50c10a9d92e232e398d4c5c4b10fd8635e3c6d81c51e3e6d7a12b76b936b7d82
tags: [it, cybersecurity, database, saas]
---

- Metabase 공식 공지: Metabase Cloud가 1.58 이상 version의 unknown zero-day로 공격받았고, attack endpoint 차단 뒤 취약점을 식별·patch했다고 명시
- self-hosted 영향: unauthenticated attacker의 application database arbitrary SQL injection이 administrator access, application configuration 변경, connected database stored credential 탈취, 접근 가능한 data 열람·export로 이어질 수 있는 공식 범위
- fixed release: 0.58.24·0.59.21·0.60.17·0.61.11·0.62.9·0.63.5 이상; version 58 미만은 공식 글에서 vulnerable하지 않다고 설명
- 조사·완화: `/api/session/reset_password` 일시 차단은 patch 대체가 아니며, `POST` 400 뒤 `GET /api/user/current` 200 pattern, active session·API key·administrator·connected database credential·warehouse activity를 검토하도록 공식 권고
- 시간 경계: official page는 date-only 표기, `2026-08-08 15:58 KST`는 The Hacker News RSS `Sat, 08 Aug 2026 06:58:17 +0530` 변환값이며 primary의 asserted clock time이 아님; CVE ID·actor·scope·exfiltration·persistence는 공식 미공개 범위
