---
source_url: https://www.phoronix.com/news/CERN-Goes-Debian-Leaving-RHEL
title: CERN Transitioning Industrial Computers To Debian After Being A Longtime RHEL Institution
ingested: 2026-09-05
published: 2026-09-03 00:17 KST
sha256: 64ec9f6e5cb0cbf7619a1144b2fcf0437c2f9fd40d7bc61969f64d9c446ea333
tags: [infra, operating-system, devops, legacy-hardware, global]
---
# CERN 산업용 가속기 제어 시스템 Debian 13 전환

## 원문 확인

- Phoronix 기사 표기: 2026-09-02 11:17 AM EDT
- KST 환산: 2026-09-03 00:17 KST
- 연결 발표: https://gemmei.ftp.acc.umu.se/pub/debian-meetings/2026/MiniDebConf-Winterthur/ch2026-53-controlling-cerns-accelerators-with-debian.av1.webm

## 핵심 요약

- CERN이 2026년 말까지 산업용 컴퓨터와 embedded system 2,200대 이상을 Debian 13으로 전환할 계획
- 데이터센터와 experimental compute workload는 RHEL/AlmaLinux를 유지하고 accelerator-control 시스템만 별도 전환 범위
- CentOS Stream의 기본 `-march=x86-64-v2` compiler flag가 구형 hardware의 forced obsolescence를 만든다는 판단을 전환 요인으로 인용
- automated package build·publishing 표준 도구의 공백과 동일 package 복수 version 지원 제약을 Debian onboarding 과제로 언급

## 증거 경계

- 원문은 계획·배경·tooling 과제를 전달하며 개별 driver 인증, safety case, interruption, 일정 준수 결과를 보증하지 않음
- CPU ISA·kernel module·PCI/VME/serial I/O·time synchronization·alarm·operator workflow·rollback은 현장 control cell에서 별도 검증 대상
