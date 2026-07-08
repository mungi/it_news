---
source_url: https://thehackernews.com/2026/07/15-year-old-ghostlock-flaw-enables-root.html
title: 15-Year-Old GhostLock Flaw Enables Root and Container Escape on Most Linux Distros
ingested: 2026-07-08
published: 2026-07-08 15:16
sha256: 0cafeedcece285f10db50c87b19484753e837b615a381f315fae2f85584606a1
tags: [security, cloud-security, weekly-briefing]
---

# Linux GhostLock 취약점, 로컬 사용자 root 권한 상승·컨테이너 탈출 가능

- 원문 제목: 15-Year-Old GhostLock Flaw Enables Root and Container Escape on Most Linux Distros
- 출처: The Hacker News
- URL: https://thehackernews.com/2026/07/15-year-old-ghostlock-flaw-enables-root.html
- 발행: 2026-07-08 15:16 KST
- 카테고리: Security
- 태그: Linux, Kernel, CVE, Container Security, Cloud Security

## 요약
핵심: GhostLock(CVE-2026-43499), 2011년부터 Linux futex 코드에 포함된 use-after-free 취약점으로 로컬 사용자의 root 권한 상승 가능

## 상세
핵심: GhostLock(CVE-2026-43499), Linux kernel futex 경로의 use-after-free로 로컬 root 권한 상승 가능
변화: Nebula Security가 97% 신뢰도 exploit과 컨테이너 탈출 가능성을 공개했고 Google kernelCTF 보상 92,337달러 수령
영향: 멀티테넌트 서버, 컨테이너 호스트, CI runner, 클라우드 VM은 로컬 foothold 이후 host 권한 상승 경로 노출
시사점: 커널 패치 상태, 배포판 advisory, early fix 이후 CVE-2026-53166 보완 여부까지 확인 필요

## 왜 중요한가
로컬 권한 상승 취약점은 원격 침투 이후 피해 범위를 host와 컨테이너 경계까지 넓힘. exploit 코드 공개와 높은 재현성 때문에 shared Linux host와 CI/CD 실행 환경의 패치 우선순위가 높음

## 시사점
SRE·보안팀은 배포판별 fixed kernel 버전, cloud kernel 패치 상태, 컨테이너 host 재부팅 일정, CI runner 격리 수준을 같은 패치 런북으로 관리 필요
