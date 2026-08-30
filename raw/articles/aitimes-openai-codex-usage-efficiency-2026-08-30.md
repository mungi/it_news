---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214613
title: '오픈AI, 코덱스 용량 한계 보완 조치 단행 — 사용 효율 최대 50% 개선 보도'
ingested: 2026-08-31
published: 2026-08-30 09:56 KST
sha256: 961ee84190d69389d67080bf76150b85b99aaf2aa8de546427a5d075e597bec9
tags: [ai, devtools, coding-agent, codex, token-efficiency, quota, global]
---

AI타임스는 `article:published_time` `2026-08-30T09:56:50+09:00`로 OpenAI가 Codex와 ChatGPT Work 유료 사용자의 사용량 한도를 reset하고 시스템 효율화 작업을 진행한다고 보도함. 기사는 Codex 책임자의 X 게시물을 인용해 최근 사용자 제보를 바탕으로 비효율적 token 소비 원인을 수정했다고 설명함.

기사상 수정 사례는 context compression에서 과거 이미지가 남아 재압축을 유발한 문제, background task가 중단 여부를 1만5,000회 이상 반복 확인한 문제, duplicate activity summary가 주간 사용량 최대 20%를 소모한 문제, `/goal` 뒤 오류를 무한 retry해 주간 할당량 최대 70%를 소모한 문제임. 작업 방식에 따라 체감 사용 가능량은 10~50% 늘 수 있으며 token 소비 UI도 계획됐다고 보도함.

이번 실행에서 직접 확인한 것은 AI타임스 기사 자체의 제목·본문·발행 시각·Open Graph image와 기사에 인용된 Codex 책임자 X 게시물 설명 범위임. reset의 실제 대상·요금제·지역·모델별 quota, token accounting, API latency·availability·품질, UI 출시 일정은 독립 확인하지 못했음. 장기 실행 coding agent 운영 팀은 context compaction·background poll·retry·cancel·queue·quota error와 task completion을 trace로 연결하고, runaway retry·quota depletion을 canary에서 재현할 필요가 있음.
