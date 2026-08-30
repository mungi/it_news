---
source_url: https://www.anthropic.com/news/model-hardware-standard-research-preview
title: Previewing the Model Hardware Standard
ingested: 2026-08-31
published: 2026-08-28 03:00
sha256: f45f82a2d8899cbd443f4f856c7545ae89c9829950c07879ebe630fe5bf634fe
tags: [ai, agent, infra, security, global, release]
---

## 확인된 원문 사실
- Anthropic이 과학 연구소·첨단 제조 partner 대상 MHS research preview 공개
- 프로그래밍 가능한 device를 `read`·`write` driver와 MCP·CLI·code API로 연결
- microscope·liquid handler·robot arm 등 복수 장비 병렬 operation 범위
- device characteristic·measurement·adjustment·safety limit reference file 제공
- safety evaluation·best practice 개발 뒤 open-source 계획 언급

## 운영 경계
- device identity·command authorization·parameter bound·human approval·hardware interlock·emergency stop은 원문의 자동 보증 범위 밖
- read-only discovery·simulation·supervised write·low-risk batch 순 rollout과 command/state/approval trace 검증 필요
