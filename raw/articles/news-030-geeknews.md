---
source_url: https://news.hada.io/topic?id=31134
title: MemNixFS - 리눅스 메모리 덤프를 파일시스템으로 변환해 조사하는 도구
ingested: 2026-07-06
published: 2026-07-05
tags: [security, geeknews]
---

# MemNixFS, 리눅스 메모리 덤프를 파일시스템으로 변환해 조사

## Source
- Source: GeekNews
- URL: https://news.hada.io/topic?id=31134
- Published KST: 2026-07-05 09:31
- Ingested KST: 2026-07-06 12:13

## Summary
GeekNews는 MemNixFS가 Linux 메모리 덤프를 일반 파일과 폴더 구조로 마운트해 기존 도구로 조사할 수 있게 하는 포렌식 프레임워크라고 소개했습니다.

## Detail
MemNixFS는 AVML, LiME, raw, kdump 이미지를 지원하며 캡처 시점의 커널 상태, 프로세스, 열린 파일, 소켓, 로드된 모듈, 페이지 캐시 등을 파일시스템 형태로 탐색하게 해줍니다.

## Engineering implication
보안팀은 메모리 덤프 수집 절차, 체인 오브 커스터디, 민감정보 처리, 분석 환경 격리를 함께 준비해야 합니다.
