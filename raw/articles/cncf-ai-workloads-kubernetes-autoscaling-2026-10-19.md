---
source_url: https://www.cncf.io/blog/2026/10/19/how-ai-workloads-are-reshaping-kubernetes-autoscaling/
title: How AI workloads are reshaping Kubernetes autoscaling
ingested: 2026-10-20
published: 2026-10-19 20:00 KST
sha256: 20a3df78479fb3ce8c54b7d1983dd042e6415fbd1f2e8330526a67307aec3699
tags: [cncf, kubernetes, autoscaling, gpu, dynamic-resource-allocation, topology, finops, infra, global]
---
# CNCF AI workload Kubernetes autoscaling 해설

CNCF member post를 기준으로 accelerator workload의 scheduler·autoscaler·reservation·topology·DRA 관계를 기록.

- 공개: 2026-10-19 11:00 UTC, KST 2026-10-19 20:00
- 문제: autoscaler가 추가 가능한 node와 scheduler가 사용할 node가 다를 때 pending pod와 유휴 accelerator가 함께 발생 가능
- reservation: 이미 비용을 지불한 capacity를 scale-up decision에서 소비해야 하는 운영 제약
- topology: accelerator count 외 local NUMA CPU·memory, NIC, peer fabric, rack·data-center locality 포함
- DRA: accelerator와 연결 NIC 같은 관계를 structured claim으로 표현하는 Kubernetes 기능 방향
- 경계: DRA-aware autoscaler 지원은 구현체마다 다르며 API 존재가 placement·성능·capacity 확보를 보장하지 않음
- 팀 액션: pending reason·reservation·DRA claim·topology·queue time·throughput·cost를 canary trace로 비교
