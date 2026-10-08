---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=42225
title: NVIDIA and Microsoft Windows AI agent platform Korean report
ingested: 2026-10-09
published: 2026-10-08 13:15
sha256: 30c5b83ba2825801cf40208d120029af580e12c957528204bd1268f91631b6f6
tags: [ai, infra, devtools]
---

# NVIDIA·Microsoft Windows AI agent platform 보도

인공지능신문은 NVIDIA와 Microsoft가 Windows AI and Surface 행사에서 Windows를 AI agent의 실행·보호·관리 플랫폼으로 확장하는 공동 설계를 공개했다고 보도했다. 보도 범위에서 Microsoft Execution Containers(MXC)는 OS 수준에서 background agent 실행을 지원하며 Microsoft Security·Agent 365와 결합할 수 있다. RTX Spark는 최대 128GB unified memory·1 PFLOPS FP4, Windows용 DGX Station은 최대 748GB coherent memory·20 PFLOPS FP4·최대 1조 parameter 모델 실행이라는 NVIDIA 측 사양이 소개됐다.

## 운영 경계

기사에 인용된 사양은 NVIDIA 측 제시 범위이며 실제 SKU·가격·출시 국가·MXC isolation boundary·enterprise policy·모델별 throughput은 독립 검증되지 않았다. endpoint agent pilot에서는 filesystem·process·network·identity scope, EDR/DLP·MDM 호환, kill switch·audit export·update signing·rollback, first-token·p95 latency·power/thermal·background contention을 canary로 검증해야 한다.
