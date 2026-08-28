---
source_url: https://kubernetes.io/blog/2026/08/27/kubernetes-v1-37-metrics-api-ga/
title: Kubernetes v1.37: Metrics API graduates to stable
ingested: 2026-08-29
published: 2026-08-28 03:30 KST
sha256: fb75e1b0ca0f15eba14cc17b649f61b84f292b995a5cbc304e1b5974ad7f40fc
tags: [kubernetes, infra, observability, sre, cloud]
---
Kubernetes v1.37은 `metrics.k8s.io` Resource Metrics API를 stable `v1`으로 승격함. 공식 Atom feed의 `Thu, 27 Aug 2026 10:30:00 -0800` 발행 시각은 KST `2026-08-28 03:30`임. API는 node·Pod의 CPU와 memory usage를 제공하며 `kubectl top` 및 resource-metrics-based autoscaling의 기반임.

`v1` API는 기존 `v1beta1`와 resource type·field·CPU/memory 값 의미가 같고 API version만 승격됨. `NodeMetrics`는 node usage를, `PodMetrics`는 container별 breakdown을 포함한 Pod usage를 제공함. full monitoring pipeline 또는 `custom.metrics.k8s.io` API의 대체가 아님.

공식 원문 기준 `kubectl top`은 `v1`을 우선 사용하고 제공되지 않으면 `v1beta1`로 fallback함. Kubernetes v1.37의 HPA controller는 아직 `v1beta1`만 지원하며 discovery-based version selection은 계획 상태임. API stability를 metric freshness·metrics-server availability·HPA control-loop·application scaling SLO 보증으로 해석하지 말고 APIService·client·HPA·metric age·workload load test를 분리 검증해야 함.
