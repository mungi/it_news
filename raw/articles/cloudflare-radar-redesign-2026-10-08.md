---
source_url: https://blog.cloudflare.com/radar-redesign/
title: Bridging technical depth and usability: The story behind Radar’s redesign
ingested: 2026-10-09
published: 2026-10-08 22:00 KST
sha256: 8664764ab00f4e2fdbd9a685f4be6dcbb6e7361d814ef29d9f63bbd4fce5e39c
tags: [cloud, infra, observability, networking, global]
---

# Cloudflare Radar 재설계: traffic·outage 외부 관측 신호의 탐색 흐름

- Cloudflare global network 기반 real-time Internet trend view인 Radar의 landing experience 재설계 공개
- 상단 map에서 outage와 traffic을 우선 제시하고, global view에서 country·trend·data story로 들어가는 navigation 흐름 구성
- 기존 bento box chart widget을 summary statistics와 in-depth exploration을 연결하는 tabbed flow로 교체
- Cloudflare product system의 Kumo component로 표준화·maintainability를 높이는 설계 방향
- 공개 Internet trend data의 접근성과 탐색성을 높이는 UI 변경이며, 특정 조직·tenant의 availability·root cause·SLA를 보장하는 telemetry는 아님

## 운영 경계

- public traffic/outage signal은 incident detection context로 사용하고, root cause·customer impact·복구 판정은 internal synthetic·RUM·edge log·APM·business metric으로 교차 검증 필요
- public dashboard의 geography·aggregation·timestamp를 case evidence에 기록하되 단독 forensic 또는 outage declaration 근거로 사용하지 않을 것
