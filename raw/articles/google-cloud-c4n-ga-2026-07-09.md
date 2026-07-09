---
source_url: https://cloud.google.com/blog/products/compute/c4n-network-and-storage-optimized-vms/
title: C4N, now GA: Delivering cloud’s highest per vCPU network and block storage I/O for x86 workloads
ingested: 2026-07-09
published: 2026-07-09 05:00
tags: [cloud, infra, networking, storage]
sha256: cd6e4d4b952ad0324887661967d071f6b7908a476218412735add8cb55cb0bb3
---

# Google Cloud C4N VM GA

- Google Cloud가 Titanium offload architecture 기반 C4N network- and block-storage-optimized x86 VM을 일반 제공으로 전환함.
- C4N은 최대 400Gbps network bandwidth와 95MPPS를 제공한다고 설명됨.
- Hyperdisk Extreme 결합 시 최대 25GiB/s storage bandwidth와 1M IOPS를 제공한다는 수치 제시.
- 주요 대상은 virtual appliance, next-generation firewall, virtual router, DDoS mitigation, large-scale analytics, 5G UPF, distributed compute, CPU-based AI/ML inference임.
- 운영 시사점은 x86 compute SKU 평가에서 vCPU 가격뿐 아니라 network bandwidth per vCPU, PPS, block storage I/O, Hyperdisk 비용을 workload replay로 검증하는 것임.
