---
source_url: https://developer.nvidia.com/blog/route-ai-agent-workloads-across-models-with-nvidia-nemo-switchyard/
title: Route AI Agent Workloads Across Models with NVIDIA NeMo Switchyard
ingested: 2026-08-13
published: 2026-08-12 19:26
source_time_note: NVIDIA 원문은 2026-08-11 날짜만 표기; AI타임스 보도 시각을 카드 정렬에만 사용
sha256: 533b501e3828c4c5454b3ed2c04f5809b67a85074a89c2c83f28db40b37bdd38
tags: [ai, agent, inference, devops, observability]
---

- NVIDIA 공식 기술 블로그: `NeMo Switchyard`는 agent workload를 specialized model과 frontier model에 배분하는 오픈소스 model-routing library
- NVIDIA 원문 날짜: 2026-08-11, exact clock time 미공개
- 카드 정렬 시각: AI타임스 보도 `2026-08-12 19:26 KST`; NVIDIA 원문의 시각으로 주장하지 않음
- runtime router는 request·available context·task requirement·constraint·policy를 평가하고 classification·stage·escalation·tunable routing을 제공하는 설명
- stage router는 최근 tool activity·반복 오류·exploration·test 통과 뒤 안정적 edit/write 신호를 사용해 capability tier를 조정하는 범위
- LangChain internal deep-agent suite 145개 multi-turn task·5회 run에서 Nemotron 3.5 Lightning·Claude Opus 4.8 escalation routing은 frontier-only baseline 대비 비용 74% 감소, frontier call 7%, 약 6 point accuracy trade-off라는 NVIDIA 인용 결과
- 이 수치는 해당 benchmark 조건의 결과이며 모든 workload·모델·tool 권한·provider·production SLO에 대한 보장 아님
- 운영 판단: selected model·decision reason·token·tool call·latency·cost·task outcome·fallback을 trace ID로 수집하고 quality floor·retry budget·policy denial·outage fallback을 rollout gate로 관리 필요
