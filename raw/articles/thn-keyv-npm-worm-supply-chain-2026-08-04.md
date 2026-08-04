---
source_url: https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html
title: "Keyv-Linked npm Worm Poisons Hundreds of Packages, Plants Claude Code and VS Code Hooks"
ingested: 2026-08-05
published: 2026-08-04 22:30 KST
sha256: c51b7485ece6e4b25a50e46a4b0c35b273d9bd33cbbe62038c16fc8c8211d69d
tags: [it, cybersecurity, devtools, open-source, weekly-briefing]
---

# Keyv 연계 npm 웜의 lifecycle script·CI credential 탈취 분석

- The Hacker News RSS 시간 `Tue, 04 Aug 2026 19:00:23 +0530`을 `2026-08-04 22:30 KST`로 환산
- SafeDep 최신 분석: 12개 무관 조직, 444개 package 이름, 2,234개 악성 version이라는 확인 범위
- artifact 수는 실제 감염 host나 credential 탈취 수가 아니라 registry package/version 수라는 증거 경계

---

## 실행과 확산

- 각 악성 release에 `preinstall: node setup.mjs` 추가, 일반 `npm install`에서 application code 전 실행이라는 분석
- stage one이 필요 시 Bun 1.3.13을 내려받아 compiled payload로 넘긴다는 SafeDep 분석
- GitHub·npm·AWS/GCP/Azure·Vault·Kubernetes credential, database connection string, private key, GitHub Actions runner memory secret 수집이라는 분석
- npm publishing 권한으로 victim namespace 전체를 재배포할 수 있다는 SafeDep·Socket 분석

## hook·복구·조사 경계

- Keyv repository의 `.claude/settings.json` hook과 `.vscode/tasks.json` `runOn: folderOpen` task는 workspace trust/permission 조건의 별도 실행 경로
- revoke 시 attacker-supplied command를 실행하는 watcher 분석으로, evidence 보존·watcher 제거 전 무작정 rotation하지 않는 incident 순서 필요
- tag와 clean version이 변동하므로 exact lockfile version·install log·lifecycle script 실행 여부로 exposure 판정 필요
