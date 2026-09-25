---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/
title: Amazon EventBridge relaunches event buses for enterprise scale
ingested: 2026-09-25
published: 2026-09-25 06:00 KST
sha256: 85c9346c047b32d8982f672d43598fb49ae53601b983b34fcb489e1956277c01
tags: [ai, cloud, infra]
---

# Amazon EventBridge enhanced Custom event bus: strict ordering·CloudEvents·최대 1년 retention을 enterprise event broker에 추가

## 핵심 요약

- AWS가 기존 Custom event bus를 `Custom event bus - classic`으로 분리하고 enhanced Custom event bus를 출시함.
- AWS RAM account sharing, strict ordering, 수정 없는 CloudEvents/JSON format publish, 24시간 기본·최대 1년 retention, 250개 이상 AWS service delivery를 source 범위로 확인.
- source는 기존 API 유지와 event count가 아닌 transferred data 기준의 새 가격 모델을 명시함.
- 운영 대응: classic/enhanced inventory, ordering·idempotency·replay·retention contract, cross-account IAM, payload GB cost canary 필요.

## 원문

https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/
