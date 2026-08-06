---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213590
title: 메타, 코딩 에이전트 '뮤즈 코드' 공개...백그라운드 비동기로 차별화
ingested: 2026-08-06
published: 2026-08-06 12:04 KST
sha256: fde695753a69d62edc9f2d8578faca8c6f395c364d50df552dd72953259d49b1
tags: [ai, agent, devtools, git, security, global]
---

## 원문 확인
- AI타임스 기사를 2026-08-06 KST에 직접 확인
- 기사 canonical URL: `https://www.aitimes.com/news/articleView.html?idxno=213590`
- `article:published_time` `2026-08-06T12:04:16+09:00`를 카드 시각 `2026-08-06 12:04 KST`로 사용; 화면 업데이트 표시는 12:06
- Meta가 8월 5일 현지 시각 terminal 기반 `Muse Code` 및 `Muse Spark 1.2` 베타를 공개했다는 AI타임스 보도
- 보도에 나온 구조: 세션 동안 지속하는 비동기 background agent, 독립 Git worktree 병렬 작업, 모델 호출·tool 실행·사용자 승인·코드 변경을 기록하는 local append-only event log

## 출처·주장 경계
- 이 캡처의 카드 source는 직접 읽은 AI타임스 보도이며 Meta의 공식 기술 문서·repository·pricing·security/SLA 문서는 본 실행에서 확인하지 못함
- 게임 프로젝트에서 6개 기능을 병렬 구현했다는 사례, 장시간 작업의 exact resume, 반복 정보 수집 감소는 기사에 인용된 제품 설명 범위
- 실제 repository 충돌률, benchmark 재현성, 지원 OS/model, agent privilege, sandbox 경계, enterprise data retention, network egress, production availability는 미확정

## 운영 검증 포인트
- 지속형 coding agent는 worktree 분리만으로 충분하지 않으며 repository write scope·protected branch·CI runner·secret·network egress·merge approval을 함께 제한 필요
- append-only log는 tamper resistance, run ID·tool/version·approval·diff·test artifact 연결, retention·redaction, token revoke와 crash resume failure drill을 통과해야 audit evidence가 됨
