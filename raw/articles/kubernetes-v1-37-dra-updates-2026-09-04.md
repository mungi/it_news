---
source_url: https://kubernetes.io/blog/2026/09/03/kubernetes-v1-37-dra-updates/
title: Kubernetes v1.37 DRA Updates
ingested: 2026-09-04
published: 2026-09-04 03:30
sha256: 0d8c12b6d135f0fca7b906ae035daf04f710f0eb985e8baba9e08070a06f6d29
tags: [infra, kubernetes, gpu, platform-engineering, release]
---

# Kubernetes v1.37 DRA Updates

## 원문 확인

- 원문: https://kubernetes.io/blog/2026/09/03/kubernetes-v1-37-dra-updates/
- RSS 발행: Thu, 03 Sep 2026 10:30:00 -0800
- 표시 시각: 2026-09-04 03:30 KST

## 핵심 요약

- DRA Extended Resource 지원이 GA가 되어 `DeviceClass`에 extended resource 이름을 설정하면 기존 Pod request를 DRA driver가 처리 가능한 범위
- `ResourceClaim.status.devices`가 per-device 상태를 제공하며 network device는 interface name·MAC·IP 보고 가능
- device taint/toleration과 `DeviceTaintRule`이 Stable로 승격되어 device 단위 정비·신규 배정 차단·기존 workload eviction 제어 가능
- `resource.kubernetes.io/numaNode` attribute가 Stable이며 Derived Attributes·Compatibility Groups·PreQueueingHint 등은 feature gate별 Alpha 범위

## 운영 검증 경계

- existing device plugin과 DRA driver의 inventory·allocation ownership 중복 여부 확인 필요
- ResourceClaim RBAC, driver prepare/unprepare, topology match, taint eviction, node drain, rollback을 workload trace에서 검증 필요
- upstream GA는 managed Kubernetes 제공, vendor driver 호환, tenant isolation, capacity accounting 보증이 아님
