---
source_url: https://thehackernews.com/2026/08/nearly-800-malicious-npm-packages.html
title: "Nearly 800 Malicious npm Packages Deliver Cross-Platform RAT and Infostealer"
ingested: 2026-08-08
published: 2026-08-08 03:48 KST
sha256: 51df5bef821e540839ff729b0413deb48b47807f14b4c652cb4d37d736621d55
tags: [it, cybersecurity, devtools, open-source, supply-chain, weekly-briefing]
---

# npm 악성 패키지 약 800개: import 유도형 WEL1DROPPER 공급망 캠페인

- The Hacker News RSS `Sat, 08 Aug 2026 00:18:17 +0530`을 `2026-08-08 03:48 KST`로 환산
- OpenSourceMalware·Sonatype 분석을 인용한 nearly 800개 악성 npm package 보도이며, package artifact 수는 감염·실행·credential theft 건수가 아님
- lifecycle hook 대신 README의 `require()` import를 유도하고, 실행된 `WEL1DROPPER`가 OS·CPU별 payload를 Cloudflare Workers와 DNS TXT fallback으로 가져오는 경로

---

## 실행과 전달

- `WEL1DROPPER`가 host OS·processor architecture를 식별하고 Cloudflare Workers host에서 호환 payload를 조회하는 보도 범위
- HTTPS download 실패 시 `wel1[.]ru` 계열 DNS TXT record의 1~2,000 chunk를 조합·Base64 decode하는 fallback 경로
- Linux·macOS의 `/bin/sh`, Windows의 `cmd.exe`로 temporary folder payload를 실행하는 보도 범위

## OS별 artifact와 대응 경계

- Windows의 ETW·AMSI 방해, Registry Run key·scheduled task persistence·encrypted payload download는 Sonatype 추적 범위
- macOS의 LaunchAgent persistence, Linux의 UPX-packed ELF·Sliver C2 deployment는 보도 범위이며 개별 host 실행 증거가 필요
- `lib/telemetry.js`처럼 보이는 downloader와 README import 유도를 package review·Node module load·DNS/HTTPS egress·EDR process tree로 함께 조사

## 운영 액션

- lockfile·SBOM·registry proxy·CI artifact에서 신규 package의 exact version·integrity hash·import call site 확인
- `wel1[.]ru` DNS TXT 및 Workers host egress를 hunt하고, suspect execution 때 token rotation 전에 runner/host·artifact·network evidence 보존
- npm token·GitHub/cloud credential·registry publish permission을 job별 최소 권한·short-lived identity로 축소
