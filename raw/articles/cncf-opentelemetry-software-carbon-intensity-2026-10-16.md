---
source_url: https://www.cncf.io/blog/2026/10/15/carbon-as-a-first-class-signal-bringing-software-carbon-intensity-to-opentelemetry/
title: Carbon as a first-class signal: Bringing software carbon intensity to OpenTelemetry
created: 2026-10-16
ingested: 2026-10-16
published: 2026-10-16 07:21 KST
sha256: 4288e0c4f25b4bda989a3698e780db00f7123492f1fc26d0199cfc40744556a9
tags: [cncf, opentelemetry, observability, sustainability, carbon, infra, global]
---
# OpenTelemetry software carbon intensity 논의

CNCF Ambassador·Kepler maintainer의 OpenTelemetry semantic convention과 Software Carbon Intensity(SCI) 연결 제안을 기록.

- 제안: CPU·memory·latency와 별도로 energy/carbon telemetry를 workload·service·engineering decision과 연결하는 공통 language 필요
- 기반: Kepler 같은 project가 energy/infrastructure 정보를 노출하고, Green Software Foundation이 carbon telemetry 공통화 작업을 진행한다는 설명
- 경계: CNCF project release나 확정 OpenTelemetry semantic convention 공지가 아닌 community perspective·ongoing standardization 논의 범위
- 팀 액션: carbon metric을 SLO 또는 chargeback에 연결하기 전 energy source·allocation boundary·grid-intensity timestamp·estimation method·data completeness를 명시
