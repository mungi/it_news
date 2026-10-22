---
source_url: https://www.cncf.io/blog/2026/10/22/filtering-and-reducing-ai-agent-telemetry-with-the-opentelemetry-collector/
title: Filtering and reducing AI agent telemetry with the OpenTelemetry Collector
ingested: 2026-10-22
published: 2026-10-22 20:00 KST
sha256: d5a3fbd1cdb703d74b1e6a7054d2ed3b4fc8685e9f2e7a388e27d458971065c3
tags: [cncf, opentelemetry, observability, ai-agent, telemetry, finops, infra, global]
---
# CNCF member post AI agent telemetry OpenTelemetry Collector 축소

CNCF member post를 기준으로 AI coding agent trace·log·metric의 content 중복·고카디널리티를 Collector pipeline에서 줄이는 방법을 기록.

- 공개: 2026-10-22 11:00 UTC, KST 2026-10-22 20:00
- 측정 사례: Claude Code의 작은 test 수정 실행에서 content flag를 모두 켠 경우 181 telemetry record·289KB JSON 생성
- 보존 질문: model별 cost, token·cache, tool failure, edit rejection, TTFT, API error에 필요한 counter·short attribute 선별
- 중복 경로: tool output이 trace event에, tool_result·tool_decision parameter가 log에 기록돼 source/file content가 중복될 수 있는 구조
- 카디널리티: session·user·email·account identity attribute로 25개 session에서 8개 metric의 300 series가 생긴 사례
- 비교 설계: 하나의 OTLP receiver input을 raw·optimized trace/log/metric pipeline으로 fan-out하고 dashboard에서 cardinality·bytes/minute·record count를 대조
- 운영 범위: raw exporter는 production에서 object storage 보관 또는 미전송으로 바꿀 수 있으나 forensic retention·access policy는 별도 결정 필요
- 경계: member post의 sample config가 모든 agent·backend의 비용·privacy·detection coverage를 보장하지 않음
- 팀 액션: field를 dashboard·alert·forensic 질문과 mapping하고 redaction·hash·sampling·restricted raw access와 rollback을 canary로 검증
