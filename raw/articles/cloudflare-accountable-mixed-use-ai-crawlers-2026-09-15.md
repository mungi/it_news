---
source_url: https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/
title: Cloudflare mixed-use crawler 제어·검색 노출과 AI 학습 차단 분리
created: 2026-09-17
ingested: 2026-09-17
published: 2026-09-15 22:00
sha256: 39c2fa1b2afbd692e08e008dcb00ccaeabcaa1faba2fd58ad47ffb6e898b8398
tags: [security, ai, bot-management, web, privacy, global]
---

# Cloudflare mixed-use crawler 제어·검색 노출과 AI 학습 차단 분리

- 원문: https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/
- 원문 게시: 2026-09-15 22:00 KST, `article:published_time` `2026-09-15T13:00:00.000Z` 환산

## 핵심 요약

- `Disallow AI Training`은 search와 training을 함께 수행하는 mixed-use crawler에서 search indexing을 유지하며 training만 거부하는 domain-level control
- Cloudflare는 Search·Training·Agent behavior를 분리하고, Accountable mixed-use crawler에는 search access를 유지하는 동작을 설명
- Accountable 조건은 training opt-out, AI summary opt-out, URL-level training visibility, training opt-out의 traditional search 비영향 assurance
- source 집계는 search bot block 선택 1% 미만·training block mechanism 활성화 17%이며 전체 web benchmark 아님
- `robots.txt`만으로 crawler identity·purpose·비준수 차단을 보장하지 않으므로 bot telemetry·WAF policy·SEO impact 검증 필요

---

## 증거 경계

- Apple·Google·Microsoft의 Accountable qualification은 Cloudflare article의 capability·commitment 설명 범위로 기록함
- crawler operator의 실제 downstream model training use, classification accuracy, 조직별 SEO·수익 영향은 local telemetry와 계약 조건 없이는 확정 불가
