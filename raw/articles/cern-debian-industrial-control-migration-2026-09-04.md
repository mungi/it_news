---
source_url: https://news.hada.io/topic?id=33217
title: CERN Transitioning Industrial Computers To Debian After Being A Longtime RHEL Institution
ingested: 2026-09-04
published: 2026-09-04 16:01
sha256: 71470dc8f1b23438a8f3e5978bde2fbbc8464c946df217a979e3e931022c112a
tags: [infra, operating-system, devops, legacy-hardware, global]
---

# CERN Transitioning Industrial Computers To Debian After Being A Longtime RHEL Institution

## 원문 확인

- GeekNews GN⁺: https://news.hada.io/topic?id=33217
- 인용 원문: https://www.phoronix.com/news/CERN-Goes-Debian-Leaving-RHEL
- 연결 발표: https://gemmei.ftp.acc.umu.se/pub/debian-meetings/2026/MiniDebConf-Winterthur/ch2026-53-controlling-cerns-accelerators-with-debian.av1.webm
- GeekNews RSS 발행: 2026-09-04T16:01:11+09:00
- 표시 시각: 2026-09-04 16:01 KST

## 핵심 요약

- CERN이 가속기 제어용 산업 컴퓨터·임베디드 시스템 2,200대 이상을 2026년 말까지 Debian 13으로 전환할 계획
- Scientific Linux 약 10년과 2015년 이후 CentOS 약 10년의 운영 뒤 일부 산업 시스템을 Debian으로 이전하는 경로
- CentOS Stream의 기본 `-march=x86-64-v2`가 구형 hardware의 강제 노후화를 유발한다는 판단이 전환 요인
- 자동 package build·publish 도구 공백과 동일 package의 복수 version 지원 제약이 온보딩 과제
- 데이터센터와 실험용 컴퓨팅은 RHEL/AlmaLinux를 유지하며 산업 제어 시스템만 전환 대상

## 운영 검증 경계

- 보도와 발표는 전환 계획·배경·온보딩 과제 범위이며 device driver 인증, safety case, 실제 interruption·일정 준수 보증이 아님
- CPU ISA·kernel module·PCI/VME/serial I/O·time synchronization·operator console·field alarm·rollback을 representative rack에서 현행 image와 비교 필요
- package repository snapshot·artifact signing·SBOM·offline update mirror·downgrade/restore 시간을 control-system change evidence로 관리 필요
