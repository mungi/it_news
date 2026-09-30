---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215779
title: 오픈AI, 24시간 자율 에이전트 '닷츠' 공개…소비자용 아닌 B2B 승부수
created: 2026-09-30
ingested: 2026-09-30
published: 2026-09-30 07:07 KST
sha256: ecbb9b932ce3c4253281163b3bac9dd14627237f0a8421dc70b5344d9bc2cc65
tags: [ai, agent, enterprise-ai, identity, cloud, devops, finops, global]
---
# OpenAI Dots enterprise background agent 공개 보도

- AI타임스 canonical article `article:published_time` `2026-09-30T07:07:16+09:00`, OG image 직접 대조
- 공개 보도: OpenAI가 9월 29일 현지시간 DevDay 2026에서 GPT-6 Astra 기반 `dots`를 공개
- 실행: agent별 isolated cloud virtual computer·dedicated browser를 부여하고 background coding·test·research·data collection을 수행하는 구조
- 연결: 4,000개 이상 내·외부 application, ChatGPT·Slack·Microsoft Teams·SMS 대화 맥락 유지 보도
- 권한: Specialized dots의 전용 ID·system login credential·internal DB access, research read-only mode, account/payment human approval 설명
- 운영: Pro/Business Premium 기본 1개, high-load task token overage, enterprise/API는 Q4 waitlist 후 순차 제공 예정 보도
- evidence boundary: OpenAI official page는 current browser에서 Cloudflare challenge로 본문 재검증 불가. SLA·region·retention·connector permission·official availability는 source에서 확정하지 않음

## 핵심 요약

- 제품: 단발성 chat이 아닌 long-running B2B workflow를 cloud VM에서 수행하는 agent 보도
- 통제: read-only mode·human approval 주장이 credential scope·egress·rollback 통제를 자동 보장하지 않음
- 비용: token 외 VM·tool·connector·storage·log·retry·human review를 completed-task 비용으로 계측 필요
- 도입: low-risk canary에서 identity·approval·trace·retention·egress·revocation을 함께 검증 필요
