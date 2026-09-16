---
source_url: https://kubernetes.io/blog/2026/09/15/kubernetes-v1-37-pod-level-resource-managers-beta/
title: Kubernetes v1.37 Pod-Level Resource Managers Beta·NUMA/sidecar placement 경계
created: 2026-09-16
ingested: 2026-09-16
published: 2026-09-16 02:30
sha256: 6b627128b5fadaeff9bac23fa2f61bce3ff7262977c275101b945b7f0f2e0e8a
tags: [infra, kubernetes, kubelet, numa, observability, global]
---

# Kubernetes v1.37 Pod-Level Resource Managers Beta·NUMA/sidecar placement 경계

- 원문: https://kubernetes.io/blog/2026/09/15/kubernetes-v1-37-pod-level-resource-managers-beta/
- 원문 게시: 2026-09-16 02:30 KST, `article:published_time` `2026-09-15T10:30:00-08:00` 환산

## 핵심 요약

- Kubernetes v1.37에서 `PodLevelResourceManagers` feature gate 기반 Beta 전환, default disabled 상태
- Kubelet Topology Manager·CPU Manager·Memory Manager가 `.spec.resources` pod-level declaration을 hardware placement에 사용
- primary application의 exclusive NUMA-aligned resource와 non-Guaranteed sidecar의 pod-isolated shared pool을 병행하는 allocation model
- `v1` PodResources gRPC가 top-level `cpu_ids`·`memory` field를 추가해 pod-level assignment 조회 지원
- managed distribution support, device plugin·monitoring parser behavior, latency·resource-accounting 효과는 node-pool canary로 별도 검증 필요

---

## 증거 경계

- source가 설명한 upstream Beta feature와 API field만 기록함
- workload별 p95/p99 latency, CPU/memory utilization, NUMA locality, provider support는 local cluster configuration과 canary telemetry로 검증 필요
