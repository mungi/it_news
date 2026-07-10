---
title: Kubernetes Ingress Controller Lifecycle
created: 2026-07-10
updated: 2026-07-10
type: concept
tags: [infra, kubernetes, networking, weekly-briefing]
sources: [raw/articles/news-103-cncf-ingress-nginx-retirement.md]
confidence: high
---

# Kubernetes Ingress Controller Lifecycle

- Ingress API와 ingress controller 구현체 수명주기는 분리해서 관리 필요.
- ingress-NGINX retirement 논의는 API 제거가 아니라 컨트롤러 유지보수·보안 패치·마이그레이션 경로 판단 문제임.
- 운영팀은 annotation 의존성, TLS/WAF/auth 통합, Gateway API 적합성, rollback 계획을 inventory화 필요.
