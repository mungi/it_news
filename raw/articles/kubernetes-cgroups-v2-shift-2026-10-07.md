---
source_url: https://kubernetes.io/blog/2026/10/06/kubernetes-cgroups-v2-shift/
title: The Shift to cgroup v2 in Kubernetes: What You Need to Know
ingested: 2026-10-07
published: 2026-10-07 03:00
sha256: 7298263832b88a5bf7250c89f5f6328769f8a164ab7b26f70464df1aed97df8c
tags: [ai, cloud, infra]
---

# Kubernetes, cgroup v2 전환 가이드 공개: node OS·runtime·resource 관측의 사전 호환성 점검 요구

Kubernetes Blog는 cgroup v2 전환 시 Kubernetes node, kubelet, container runtime, workload resource controls와 observability의 호환성을 점검하는 가이드를 공개했다. 특정 provider의 default 전환이 아닌 migration-oriented guidance 범위다.

## 운영 경계

시사점: node pool canary에서 cgroup mode, kubelet/runtime compatibility, CPU throttling·memory pressure·PSI·OOM/eviction·metrics agent를 함께 비교하고, node image rollback과 workload exception 기준을 정의 필요.
