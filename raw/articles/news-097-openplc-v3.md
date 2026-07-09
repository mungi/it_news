---
source_url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-190-01
title: OpenPLC v3
ingested: 2026-07-10
published: 2026-07-09 21:00
tags: [ai, cloud, infra, security, weekly-briefing]
---

# CISA, OpenPLC v3 임의 파일 쓰기·native code execution 위험 경고

- 출처: CISA
- 게시: 2026-07-09 21:00 KST
- 원문: https://www.cisa.gov/news-events/ics-advisories/icsa-26-190-01

## 요약
핵심: CISA가 OpenPLC Runtime v3 legacy web UI upload workflow의 authenticated arbitrary file write 취약점 공지. 영향: 공격자가 writable path에 파일을 쓰고 OpenPLC compile flow를 통해 runtime user 권한 code execution으로 확장 가능.

## 상세 메모
### 무슨 일이 있었나
- 핵심: CISA가 OpenPLC v3에 대한 ICS Advisory ICSA-26-190-01 공개
- 취약점: legacy web UI program-upload workflow에서 `prog_file` 값을 검증 없이 Programs.File database field와 upload destination path에 사용
- 영향: 인증된 공격자가 임의 파일을 쓰고 정상 OpenPLC program compilation 흐름을 통해 native code execution으로 확장 가능

### 본문 핵심 포인트
- 제품: OpenPLC Runtime v3 대상 취약점이며 v3는 end-of-life 상태임
- 섹터: Critical Manufacturing, Energy, Transportation Systems, Water and Wastewater 등 주요 ICS 영역 영향
- 원인: Python `os.path.join()`이 공격자 제어 absolute path를 받아 destination path 제한을 우회하는 구조
- 조치: OpenPLC는 v4 업그레이드를 권고하며 v3는 패치·버그 수정·보안 업데이트를 받지 않음
- 완화: CISA는 control system internet exposure 최소화, firewall 뒤 배치, business network와 control network 분리, VPN 최신화 권고

### 왜 중요한가
- 영향: PLC runtime은 실험실·교육·운영 자동화 경계에 쓰일 수 있어 code execution 취약점이 OT network pivot으로 이어질 수 있음
- 운영: EOL control software는 CVE 패치가 아니라 버전 교체와 network segmentation으로 위험을 줄여야 하는 대상임

### 시사점
- 팀 액션: OT/ICS 운영팀은 OpenPLC v3 inventory, web UI 노출, 인증 계정, compiler workflow 접근권한을 즉시 점검 필요
- 방어: 인터넷 노출 제거, jump host/VPN 경유, control/business network 분리, upgrade to v4 계획 수립 필요
