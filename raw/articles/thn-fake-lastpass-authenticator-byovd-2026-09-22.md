---
source_url: https://thehackernews.com/2026/09/fake-lastpass-authenticator-installer.html
title: Fake LastPass Authenticator installer BYOVD campaign
created: 2026-09-22
ingested: 2026-09-22
published: 2026-09-22 02:31 KST
sha256: 7cec72a283eb9946ac06b8144c19bcc5806471065faeadb533a42e2b478e76dd
tags: [cybersecurity, endpoint, windows, byovd, credential-theft, global]
---

# 가짜 LastPass Authenticator 설치 프로그램의 signed driver 기반 EDR 무력화

- 보도 원문: The Hacker News, RSS `Mon, 21 Sep 2026 23:01:01 +0530`, KST 2026-09-22 02:31
- 연구 attribution: LastPass·Delphos Labs가 2026-09-17 공개한 조사 결과를 THN이 인용한 범위
- source 경계: LastPass는 자사 system·service·customer vault가 영향을 받지 않았다고 밝혔으며, victim 수·실제 감염 범위·모든 data exfiltration은 공개 source에서 미확정

## 핵심 요약

- 유입: 검색 결과에 노출된 가짜 GitHub `LastPass-Authenticator` page가 attacker ZIP을 제공하고, `vsdbg.exe`·악성 `vsdbg.dll` DLL side-loading으로 loader 실행
- 권한: loader가 administrator 권한 획득 뒤 SYSTEM으로 올라가 Microsoft Hardware Compatibility Publisher chain으로 서명된 `Alinubx.sys`를 service로 설치하는 흐름
- 무력화: driver가 145개 AV·security process 이름을 종료하며, August 검사에서 renamed driver와 known original 모두 Microsoft vulnerable-driver blocklist에 없던 상태
- 수집: 24개 이상 browser password, wallet file, Discord·Steam·Telegram session, Windows Credential Manager, password·seed·recovery 이름 file을 ZIP으로 수집·전송하는 범위
- 대응: `NvFsFilter`, `nvfsflt64.sys`, Henan Dafeng Software·CnCrypt signer, `\\.\Alinubx`, driver load 뒤 security process kill을 hunt하고 kernel-level forensic 또는 rebuild와 clean device credential/session rotation 수행
