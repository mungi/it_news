---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215992
title: 'OpenAI Codex 28일 연속 개선 예고와 GPT-6 기본 처리 속도 50% 상향 보도'
ingested: 2026-10-07
published: 2026-10-06 13:21 KST
sha256: 590b230f98ad24a2963bbb0589914c02c2f9dac8c4704c2df727674a5cf377de
tags: [ai, devtools, coding-agent, codex, inference, global]
---
AI타임스 canonical article의 제목·본문·`article:published_time` `2026-10-06T13:21:15+09:00`·Open Graph image를 직접 확인함. 이 기사는 OpenAI 핵심 제품 총괄이 2026-10-04(현지시간) X에서 Codex와 ChatGPT Work에 대해 28일 동안 매일 개선 또는 개선이 없는 날 full reset을 예고했다고 보도함.

기사상 첫 변경은 model serving infrastructure 최적화이며, 구독 제공 `GPT-6 Astra`와 `GPT-6.1 Sol`의 기본 처리 속도를 약 50% 높이고 별도 설정 없이 자동 적용하는 범위임. Sign in With ChatGPT를 사용하는 OpenCode·Pi·Amp·Devin 등 외부 제품도 같은 속도 향상 범위라고 기사에서 설명함.

직접 확인한 primary OpenAI announcement나 X post canonical URL은 기사 DOM에서 발견되지 않았음. 따라서 28일 계획·50% 수치·외부 제품 적용은 AI타임스가 인용한 OpenAI 설명 범위로만 기록함. API endpoint·region·SLA·가격·요금제별 quota·token accounting·benchmark workload·p50/p95 latency·availability는 미확정임. 운영 팀은 자동 speed-up을 capacity 절감으로 가정하지 말고 workflow별 completion latency, tool wait, retry/cancel, quota depletion, fallback behavior를 canary에서 비교할 필요가 있음.
