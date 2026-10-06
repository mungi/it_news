---
source_url: https://kubernetes.io/blog/2026/10/05/scaling-kubernetes-workloads-with-node-swap/
title: Scaling Kubernetes Workloads with Node Swap
ingested: 2026-10-06
published: 2026-10-06 03:00
sha256: ed4e0c84dc2e9978171b9cf3df6cd5d7ee2af7d2db62e06129850c6a6c5cc6ce
tags: [infra, kubernetes, sre, devops, storage, cicd, global]
---

# Kubernetes node swap workload density benchmark

- Kubernetes v1.34 GA node swap과 fast NVMe SSD backing 조합의 node packing benchmark
- CI/CD kernel build·sandboxed headless browser·isolated Python runtime에서 pod density 최대 `3배` 및 작은 또는 없는 latency 비용 보고
- workload working set, NVMe I/O contention, cgroup/kernel setting, tail latency와 OOM/eviction은 별도 production canary 검증 대상
