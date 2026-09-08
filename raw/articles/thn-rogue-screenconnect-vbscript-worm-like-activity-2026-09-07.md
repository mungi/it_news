---
source_url: https://thehackernews.com/2026/09/rogue-screenconnect-clients-spread-four.html
title: Rogue ScreenConnect Clients Spread Four-Stage VBScript Chain to Newly Connected Hosts
ingested: 2026-09-08
published: 2026-09-07 20:36 KST # THN RSS timestamp: Mon, 07 Sep 2026 17:06:39 +0530
sha256: 579f4a7a233e4c5262c6a9f376d907080a34e58ea8094e7e6ec08c4425072abd
tags: [it, cybersecurity, rmm, endpoint-detection, remote-access, global, weekly-briefing]
---
## 한국어 브리핑

- 관측: 여러 조직의 rogue ScreenConnect client가 `wscript.exe`로 `1.vbs`~`4.vbs`를 반복 실행한 activity 확인
- 확산: 변조된 client가 새로 연결된 ScreenConnect endpoint로 네 script를 자동 transfer·execute하는 worm-like behavior라는 Huntress 분석
- 초기 접근: Quick Assist 사칭·phishing MSI·가짜 Geek Squad 환불 form의 서로 다른 social-engineering 경로 관측
- 통제: ConnectWise가 cloud·on-premise session의 file-transfer behavior 이슈를 공지하고 `TransferFiles`/`TransferFilesInSession` 권한 비활성화를 안내
- 탐지: `Process: Guest`의 `RunFiles`/`RanFiles`, ScreenConnect→`wscript.exe`·PowerShell, Temp/AppData artifact 상관 분석 필요

---

## 원문 사실

- The Hacker News는 Huntress 분석을 인용해 2026년 8월 서로 다른 조직에서 네 단계 VBScript chain을 실행하는 rogue ScreenConnect installation을 보도
- Huntress는 `1.vbs`가 host resource·기존 ScreenConnect·보안 제품을 확인하고 후속 script가 Dropbox content·state value를 사용해 payload를 처리하는 흐름을 설명
- Huntress post의 9월 3일 update는 ConnectWise가 Support·Access session file-transfer behavior 이슈를 확인했으며 cloud·on-premise deployment가 범위라고 인용
- CVE·official fix는 주중 제공 예정이라는 당시 advisory 범위이며, fixed version·active exploitation·전체 피해 규모는 이 source에서 확정되지 않음

## 운영 대응

- `TransferFiles` 및 legacy `TransferFilesInSession` permission, tenant·role·session owner·guest action을 inventory로 정렬
- `ScreenConnect.WindowsClient.exe`→`wscript.exe`/PowerShell, `%TEMP%\1.vbs`~`4.vbs`, `value.txt`·`map.txt`·`out.enc`, AppData `WindowsServiceHost.vbs` Run Key를 EDR·audit telemetry로 상관 분석
- 의심 endpoint는 session revoke·RMM credential/API token review·forensic preservation 뒤 persistence와 payload를 제거

## 증거 경계

- 관측된 initial-access path는 세 incident의 사례이며 단일 operator, 모든 campaign payload, 모든 ScreenConnect customer 영향을 확정하지 않음
- Huntress가 당시 안내한 ConnectWise CVE·fix 일정은 live advisory 재검증 전 현재 fixed-state로 해석하지 않음
