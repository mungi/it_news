---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41038
title: 삼성SDS, FuriosaAI RGND 기반 SCP NPUaaS 출시
ingested: 2026-07-20
published: 2026-07-20 09:28 KST
sha256: 6cdb4691804b864422a8ff0d34d2a82621179e1ebf6666f315a876a33e5aa110
tags: [cloud, ai, korea, inference, semiconductor, release]
---

# 삼성SDS, FuriosaAI RGND 기반 SCP NPUaaS 출시

- 인공지능신문은 삼성SDS가 FuriosaAI 2세대 NPU `RGND` 기반 NPUaaS를 Samsung Cloud Platform에 출시했다고 보도함
- 고객은 서버 구매 없이 NPU **1·2·4·8장** 단위를 구독형으로 선택 가능하며 SCP storage·compute·high-speed network와 연계를 제시함
- 기사에서 소버린 클라우드 환경 제공 계획을 언급했으나 제공 region·quota·가격·SLA·model별 성능은 공개되지 않음
- GPU 대비 전력 효율·가격 경쟁력은 model, precision, batch, traffic, power 조건이 없는 vendor claim으로 분리 필요

## 운영 경계

- production 도입 전 GPU baseline과 동일 prompt·context·batch에서 tokens/s, p95/p99 latency, queue time, error rate, cost/request 검증 필요
- quota·reservation·autoscaling·model update·rollback·capacity shortage와 incident escalation을 서비스 조건으로 확인 필요
- regulated workload는 tenant isolation·data residency·key ownership·audit log·지원 범위를 계약과 운영 runbook에 명시 필요
