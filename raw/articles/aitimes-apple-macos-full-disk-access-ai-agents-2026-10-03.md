---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215938
title: macOS Full Disk Access의 AI agent 명시적 승인 제어 보도
ingested: 2026-10-04
published: 2026-10-03 12:39 KST
sha256: e824bed27864ae17d957bd6f8efa4994170c3e60c247d3c7f143a819e1840e72
tags: [ai, cybersecurity, devtools, privacy, operating-system, global]
---
## 원문 확인

- AI타임스 기사 제목: 애플, AI 에이전트 무단 접근 증가로 맥OS '전체 디스크 접근' 제어 강화
- 기사 입력 시각: `article:published_time` `2026-10-03T12:39:36+09:00`, KST `2026-10-03 12:39`
- 원문 URL: https://www.aitimes.com/news/articleView.html?idxno=215938
- 직접 확인한 Open Graph 이미지: https://cdn.aitimes.com/news/photo/202610/215938_219909_3316.jpeg
- 보도는 Apple의 10월 2일 현지 발표를 인용하나, 해당 발표의 직접 URL은 기사 DOM에서 확인하지 못함

## GN⁺ 핵심 요약

- 변경: Apple이 AI agent의 개인 데이터 접근 risk를 이유로 macOS `Full Disk Access`에 추가 제어를 예고한 보도
- 권한: file·Mail·Messages·web browsing history까지 접근 가능한 OS-level data boundary
- 승인: broad access에 사용자의 `very explicit user action`을 요구하는 방향을 기사에서 설명
- 미확정: approval UX·적용 시점·macOS version·MDM/admin API·audit log·revocation·enterprise policy
- 팀 액션: agent·plugin·automation의 Full Disk Access grant와 TCC/EDR telemetry를 inventory화하고 least privilege 검증 필요

---

## 보도에서 확인한 사실

- AI타임스는 Apple이 AI agent의 automatic execution과 large-scale data access에서 생길 수 있는 security·privacy risk를 줄이기 위해 OS-level control을 강화한다고 보도
- 기사 설명상 Full Disk Access는 backup app 등의 system-data 처리 목적이 있었으나, file read·app manipulation agent 확대로 risk가 커진 범위
- Mail 또는 communication app 접근은 해당 사용자 외 대화 상대방의 privacy까지 노출할 가능성을 기사에서 언급

## 확인 경계

- 정확한 user approval flow, rollout date, macOS release/version, existing-grant migration, MDM 관리 interface, enterprise audit/retention, API·SLA는 source에서 확인되지 않음
- 인용된 Apple 발표의 직접 URL을 현재 기사에서 찾지 못했으므로, 이 capture는 AI타임스의 timestamped secondary report 범위만 확정

## 팀 조치

- macOS endpoint별 Full Disk Access grant, process identity, parent/child process, plugin/task owner, MDM profile, data-access purpose를 같은 inventory에 기록
- privileged agent rollout 전 grant/revoke, explicit approval, sensitive-data read, TCC/EDR event, plugin compromise, offboarding denial을 test fleet에서 검증
