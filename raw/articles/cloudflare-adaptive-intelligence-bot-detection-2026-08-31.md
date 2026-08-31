---
source_url: https://blog.cloudflare.com/introducing-adaptive-intelligence/
title: Introducing Adaptive Intelligence: undermining the economics of every bot attack
ingested: 2026-08-31
published: 2026-08-31 21:59 KST
sha256: e2c445bec80a87c28b03c63862ffef0a1fe67dfb92adccf85f6a05469c2e284f
tags: [cybersecurity, cloud, machine-learning, bot-management, observability]
---
Cloudflare가 `2026-08-31T12:59:00.000Z`에 Adaptive Intelligence를 공개함. 이는 Bot Management의 Bot Score 뒤에서 자동화 악용 확률을 판단하는 새 bot detection engine이며, 고정 model version 대신 live traffic으로 지속 재학습하는 ML 경로를 첫 구성요소로 제공하는 범위임.

원문은 JA4 TLS fingerprint, request structure, challenge outcome, session behavior, network reputation, Turnstile와 Precursor client telemetry를 결합한다고 설명함. residential proxy를 넓게 분산하고 요청별 rate를 낮추는 credential stuffing·scraping처럼 단일 request 기준 rule을 피하는 공격을 session·network signal로 판단하려는 구조임.

새 model weight는 현재 model과 shadow mode에서 live traffic을 score하고 score distribution·challenge solve rate·customer feedback을 비교한 뒤 점진 rollout하는 절차로 설명됨. genuine visitor를 더 나쁘게 score하는 candidate는 production 반영하지 않는다고 밝혔으나, 개별 고객의 false positive ceiling·탐지 지연·fraud 감소율·business conversion 결과를 보증하지는 않음.

Cloudflare는 attack별 disposable rule 생성·임의 주기 폐기와 labeled traffic 기반 automatic detection mining을 후속 구성요소로 설명함. 출시 시점에 확인된 범위는 continuous retraining이며, Enterprise 고객은 Bot Management dashboard의 `Auto Update Machine Learning`을 활성화해야 자동 적용받음. 운영 전후에는 bot score·action·challenge solve·login/checkout/account recovery 성공·false-positive appeal·credential-stuffing success·rollback time을 cohort별로 연결해 검증할 필요가 있음.
