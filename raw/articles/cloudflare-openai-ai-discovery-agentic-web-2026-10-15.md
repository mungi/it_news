---
source_url: https://blog.cloudflare.com/cloudflare-openai-discovery-agentic-web/
title: Cloudflare and OpenAI: making AI discovery better for everyone
ingested: 2026-10-16
published: 2026-10-15 22:00 KST
sha256: 8ecf0623c4672dfbc7c8762dbe82c0f7d66310339794fa7859c50589d06c822d
tags: [ai, crawler, bot-management, web-discovery, security, infra, global]
---

# Cloudflare·OpenAI AI discovery research pilot

- 발행 시각: `2026-10-15T13:00:00.000Z` → `2026-10-15 22:00 KST`
- 범위: 2026년 7월 시작한 research pilot에서 참여 Cloudflare network 약 1%의 신호를 OpenAI crawler URL discovery에 활용
- 공개 결과: OpenAI가 이전에 알지 못했던 수억 개 웹 페이지를 발견·색인했다는 양사 발표 범위
- 역할 분리: Cloudflare signal은 discovery input, relevance·helpfulness 평가와 ranking은 OpenAI가 독립 수행
- 효율: nonexistent URL 반복 요청, 임의 URL의 homepage redirect, duplicate content를 fetch 전 판별하는 실험
- 보안: domain 전체 차단 대신 compromised page 하나를 flag해 index에서 제외할 수 있는 harmful-page signal 시험

## 운영 경계

- pilot 결과는 ranking·publisher referral·crawl volume·false-positive·개별 site 효과의 production 보장 아님
- AI crawler 허용 정책은 robots.txt만이 아니라 canonical URL·404/redirect·cache·WAF/bot rule·origin egress·침해 페이지 대응을 함께 변경하는 운영 계약 필요
- team action: crawler별 request·unique URL·fetch-to-index ratio·404/redirect·origin bytes·cache-hit·security flag를 같은 dashboard와 incident runbook에 연결
