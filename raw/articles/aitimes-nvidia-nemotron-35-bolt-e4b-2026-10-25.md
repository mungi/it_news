---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216625
title: NVIDIA, 4GB 경량 로컬 agent 모델 Nemotron 3.5 Bolt E4B 공개
created: 2026-10-25
ingested: 2026-10-25
published: 2026-10-25 16:50 KST
sha256: 0821f8b887e8190d16e3204895515b108dd17df676d5d5fc3ac397998d917f86
tags: [ai, agent, edge, open-source, nvidia, global]
---
# NVIDIA Nemotron 3.5 Bolt E4B 4GB 보도와 온디바이스 agent 검증 경계

- AI타임스 canonical article의 `article:published_time` `2026-10-25T16:50:23+09:00`, OG image, 본문을 직접 대조
- 공개: 약 4GB 메모리 환경을 목표로 하는 오픈소스 `Nemotron 3.5 Bolt E4B 4GB`
- 범위: Gemma 4 E4B 기반 사후학습, RTX·Jetson·RTX Spark·DGX Spark 실행, API 호출과 inference budget 설정 보도
- 지표: 이전 Nemotron 3 Nano 4B 대비 평균 약 40%, 비교 대상 대비 약 10%라는 벤치마크는 보도·공급자 조건 범위
- 경계: device별 quantization·context·thermal·driver·tool latency·privacy는 별도 production evidence 필요
- 팀 액션: model hash·VRAM/RAM·p95·thermal·tool scope·telemetry egress를 release gate로 기록

## 핵심 요약

- 변화: source 기반 capability와 workload 조건을 분리해 검토할 대상
- 검증: region·hardware·input/output token·queue·tool path에서 실측이 필요한 범위
- 팀 액션: production canary와 rollback evidence를 deployment gate에 연결
