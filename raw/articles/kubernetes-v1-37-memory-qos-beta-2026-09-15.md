---
source_url: https://kubernetes.io/blog/2026/09/14/kubernetes-v1-37-memory-qos-graduates-to-beta/
title: Kubernetes v1.37 Memory QoS Beta의 default-on feature gate·cgroup v2 opt-in 운영 경계
created: 2026-09-15
ingested: 2026-09-15
published: 2026-09-15 03:30
sha256: b9d9c297bd94828cb586a25741f172d37a51811904d08e42fb460bf67f431430
tags: [kubernetes, infra, sre, resource-management, open-source, global]
---

# Kubernetes v1.37: Memory QoS Graduates to Beta

- 원문: https://kubernetes.io/blog/2026/09/14/kubernetes-v1-37-memory-qos-graduates-to-beta/
- 원문 게시: 2026-09-14 10:30 UTC-08:00 / KST 2026-09-15 03:30

## 핵심 요약

- Kubernetes v1.37에서 `MemoryQoS`가 Beta로 승격되고 모든 kubelet에서 feature gate 기본 활성화
- Linux `cgroup v2` memory controller 대상이며 기본 kubelet configuration은 `memory.high`·`memory.min`·`memory.low`를 자동 기록하지 않음
- `memoryThrottlingFactor`를 명시하면 Burstable·BestEffort container의 `memory.high` throttling 활성화
- `memoryReservationPolicy: TieredReservation`을 명시하면 `memory.min`·`memory.low` 기반 tiered memory protection 활성화
- Alpha 기본값 `memoryThrottlingFactor: 0.9`은 v1.37에서 `null`로 변경돼 default-on gate로 인한 기존 workload 자동 throttling 회피

---

## 원문 확인 내용

- feature gate가 default-on이어도 default kubelet configuration은 throttling과 reservation을 활성화하지 않는다고 원문 명시
- `memoryThrottlingFactor` 기본 `null`과 `memoryReservationPolicy` 기본 `None`을 공개
- Alpha 기본 `0.9`은 gate enabled 시 `memory.high`를 설정했으며, v1.37 기본 `null`은 명시 config 전까지 해당 값을 쓰지 않음
- Memory QoS는 v1.22 Alpha 도입 뒤 v1.36에서 tiered memory reservation으로 확장된 기능 범위

## 증거 경계

- 원문은 feature-gate·kubelet configuration과 cgroup behavior를 설명하며, 특정 workload의 latency·throughput·OOM 감소·capacity 이득을 보장하지 않음
- `memory.high`·tiered reservation의 효과는 QoS class, memory pressure, node cgroup mode, workload allocation pattern에 따라 local canary로 검증 필요
