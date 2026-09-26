---
source_url: https://www.jamf.com/blog/pamstealer-wavel-macos-infostealer/
title: PamStealer adapts again: a move to Swift with a server-side decryption chain
published: 2026-09-22
ingested: 2026-09-26 11:14 KST
sha256: 6a2565fc39f654cfc185783bb4abd131af007c6374662219212d6a70a17ab772
tags: [cybersecurity, macos, devtools, git, endpoint, global, weekly-briefing]
---

# PamStealer macOS 변종: server-side 복호화와 Git hook 지속성

- Jamf Threat Labs는 fake crypto wallet `Wavel` installer로 배포되는 PamStealer의 세 번째 알려진 변종을 분석
- compiled JXA가 `/bin/zsh -s`로 carrier payload를 넘긴 뒤 전용 decryptor·X25519 key exchange를 통해 server 협조가 있어야 payload를 해제하는 경로
- LaunchAgent·repair script·`~/.zshrc`·global `core.hooksPath`가 중첩돼 shell session과 모든 Git checkout·commit에서 persistence가 다시 실행될 수 있는 범위
- fake crash dialog PAM validation, Keychain·browser credential·shell/Git configuration 수집과 archive upload를 source 범위로 기록
- 피해 조직·침해 규모는 source 미확정이며 local endpoint·network telemetry로 compromise 여부 판정 필요
