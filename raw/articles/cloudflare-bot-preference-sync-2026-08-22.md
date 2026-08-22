---
source_url: https://blog.cloudflare.com/bot-preference-sync/
title: "Say it once: introducing Bot Preference Sync"
ingested: 2026-08-23
published: 2026-08-22 08:19 KST
sha256: a15655b8f4ab5016fb64d0c0572bfa4f5b6960a9d314b2494be30e72e83a79bf
tags: [cloud, cybersecurity, agent, ai, weekly-briefing]
---

# Cloudflare Bot Preference Sync: AI crawler 정책과 robots.txt 동기화

- Cloudflare 공식 원문 `Say it once: introducing Bot Preference Sync`를 직접 확인하고 `article:published_time` `2026-08-21T23:19:57.340Z`를 KST `2026-08-22 08:19`으로 변환
- Free~Enterprise 전체 고객 대상 기능으로 공개했으며, 원문 기준 다음 주 제공 예정
- zone dashboard의 AI bot Search·Agent·Training 설정을 `robots.txt`에 반영하고 기존 파일이 있으면 Cloudflare 관리 block을 앞에 추가하는 방식

---

## 기능 범위

- Search·Agent category에 Allow, 광고 제공 페이지 차단, 전체 차단 option 제공
- Training `Disallow`는 협력 mixed-use crawler에 training 거부 preference를 게시하고 검색 indexing을 분리하는 원문 범위
- BotBase의 verified bot 목록을 주기적으로 사용해 `robots.txt`에 추가되는 bot list를 갱신하는 구조

## 정책 경계

- `robots.txt`는 crawler preference이며 edge enforcement·origin access control·계약상 data-use 보증을 대체하지 않음
- category-wide sync는 individual custom rule의 복잡한 logic을 직접 읽지 않는다고 원문이 명시
- crawler 준수, 검색 노출, AI 학습 미사용, 기존 설정 migration 완결성은 dashboard 정책만으로 확정 불가

## 팀 액션

- origin `robots.txt`, Cloudflare AI bot 설정, WAF/Bot Management/custom rule, cache behavior를 zone별로 inventory
- staging에서 Search·Agent·Training request의 served file·edge action·origin log·referral/crawl telemetry를 대조
- custom exception zone은 sync-off 경로, IaC-managed policy, rollback owner와 audit evidence를 change record에 고정
