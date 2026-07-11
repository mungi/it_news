---
title: AI Scraper and Open Web Infrastructure
created: 2026-07-11
updated: 2026-07-11
type: concept
tags: [ai, infra, security, open-source]
sources: [raw/articles/news-134-ai-scraper-open-web-2026-07-11.md]
confidence: medium
---

# AI Scraper and Open Web Infrastructure

AI 학습 데이터 수집형 스크레이퍼가 주거용 프록시, 감염 기기, 무료 VPN, 앱 SDK를 통해 독립 웹사이트 origin과 CDN 비용을 압박하는 현상. 핵심 운영 문제는 bot 차단만이 아니라 실제 독자, 검색엔진, Internet Archive 접근성을 동시에 유지하는 것임.

## 2026-07-11 사례
- LWN 사례를 정리한 GeekNews GN+는 수백만 고유 IP와 위장 user-agent를 쓰는 스크레이퍼 트래픽 때문에 공개 웹사이트 운영 비용이 증가한다고 설명함.
- 대응책은 proof-of-work, CAPTCHA, 로그인·유료 장벽, 데이터 오염 도구, CDN rule이지만 정상 접근성을 해칠 수 있음.

## Engineering implications
- AI bot traffic은 보안 탐지, FinOps, content licensing, archival access가 만나는 운영 영역임.
- 플랫폼팀은 allowlist crawler, residential proxy block, rate limit, origin shielding, cache policy, 로그 샘플링을 한 정책으로 묶어야 함.
