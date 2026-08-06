---
source_url: https://www.cncf.io/blog/2026/08/05/opencost-1-121-0-first-of-a-kind-kubernetes-inference-cost-tracking/
title: OpenCost 1.121.0: First-of-a-kind Kubernetes inference cost tracking
ingested: 2026-08-06
published: 2026-08-05 20:00 KST
sha256: 08bb06068192b798074483607f5350e885f93fd2513b94ad7cecb139cd59337c
tags: [infra, kubernetes, finops, ai, inference, global]
---

## 원문 확인
- CNCF Blog를 2026-08-06 KST에 직접 확인
- `article:published_time` `2026-08-05T11:00:00+00:00`를 `2026-08-05 20:00 KST`로 변환
- OpenCost 1.121.0과 CNCF Sandbox 프로젝트 llm-d 통합으로 model·token과 actual resource consumption을 연결하는 Kubernetes inference cost tracking을 소개
- llm-d를 사용하지 않는 vLLM도 core metrics를 활용할 수 있다는 CNCF 설명

## 운영 검증 경계
- token counter만으로 self-hosted cost와 SaaS API price를 동일시할 수 없음; GPU allocation·utilization·idle share·reservation·network·storage 배분 규칙 필요
- cloud invoice/CUR·node billing·scheduler allocation·model gateway log와 reconciliation하고 metric label cardinality·privacy·retention을 통제 필요
