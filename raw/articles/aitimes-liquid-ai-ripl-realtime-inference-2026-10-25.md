---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216627
title: Liquid AI, 짧은 응답용 실시간 추론 엔진 RIPL 공개: 50ms 미만 목표의 workload 경계
created: 2026-10-25
ingested: 2026-10-25
published: 2026-10-25 16:32 KST
sha256: 5bea235a1377bc2cec0ee370deced2e2bf14aa85838f5e63b6a6fa03f9a3ad03
tags: [ai, infra, inference, finops, gpu, global]
---
# Liquid AI RIPL 실시간 추론 엔진 보도와 latency·SLO 검증 경계

- AI타임스 canonical article의 `article:published_time` `2026-10-25T16:32:11+09:00`, OG image, 본문을 직접 대조
- 공개: 기업용 상용 `RIPL`과 search rewrite·intent classification·fraud detection 같은 짧은 출력 workload 범위
- 목표: LFM 연결 경로에서 50ms 미만 response를 겨냥한다는 공급자 설명
- 지표: B200 자체 benchmark의 14.4~28.4배 및 5.6~7.7배 p95 비교는 model·token 조건이 다른 vendor 측정 범위
- 환경: H100·H200·B200·RTX PRO 6000 지원이라는 보도 범위
- 경계: benchmark를 long-context·tool-using agent의 end-to-end latency·quality·cost 보장으로 확대하지 않음
- 팀 액션: token·queue·GPU·p99·fallback·calibration·human review를 baseline과 동일 trace로 계측

## 핵심 요약

- 변화: source 기반 capability와 workload 조건을 분리해 검토할 대상
- 검증: region·hardware·input/output token·queue·tool path에서 실측이 필요한 범위
- 팀 액션: production canary와 rollback evidence를 deployment gate에 연결
