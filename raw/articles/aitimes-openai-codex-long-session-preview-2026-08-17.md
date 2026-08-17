---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214016
title: OpenAI Codex 장시간 세션 성능 개선 예고 보도
ingested: 2026-08-18
published: 2026-08-17 17:34
tags: [ai, devtools, agent, observability, global]
sha256: bc4690d18f6d3c82e797d97b4fbbe15153b30b0d377aa2a49bbf36c3bbcb4af5
---

## 원문 메타데이터

- 제목: 오픈AI, 코덱스 대대적 개편 예고… 속도 94%·메모리 88% 감축
- 출처: AI타임스
- URL: https://www.aitimes.com/news/articleView.html?idxno=214016
- 기사 입력 시각: 2026-08-17 17:34 KST (`article:published_time` 2026-08-17T17:34:00+09:00)
- 화면 업데이트 표기: 2026-08-17 18:36 KST
- Open Graph image: https://cdn.aitimes.com/news/photo/202608/214016_217632_3326.jpg

## 직접 확인한 본문 사실

- OpenAI 개발자 Andrew Ambrosino가 8월 14일 공개한 내부 Slack 메시지를 AI타임스가 인용
- Codex 장시간 작업 성능 개선이 이번 주 진행될 예정이라는 기사 설명
- 741턴 장시간 대화 테스트에서 loading time 27.6초에서 1.7초로 감소했다는 기사 수치
- renderer memory 증가량 약 88% 감소, server-client 요청 횟수 약 98% 감소라는 기사 수치

## 증거 경계와 운영 메모

- 직접 확인한 출처는 AI타임스 기사와 기사 내 공개 인용이며 OpenAI release note·deployed version·GA 일정은 이번 capture에서 직접 확인하지 않음
- test repository·task definition·model·context·tool·OS·memory absolute value·task completion·오류율·SLA는 기사에서 확인되지 않은 항목
- 운영 action: 고정 repo·version·tool permission으로 turn bucket별 UI load·memory peak·request·retry·task completion·rollback을 canary에서 수집 필요
