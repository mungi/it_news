---
source_url: https://kubernetes.io/blog/2026/09/09/kubernetes-v1-37-node-lifecycle-conditions/
title: Kubernetes v1.37: Introducing Node Lifecycle Conditions
ingested: 2026-09-10
published: 2026-09-10 03:30
sha256: d0a7b2b69a5cd72f284905a039a3648eb478baf54b50be047cb9be0bf354c261
tags: [infra, kubernetes, devops, sre, release]
---
# Kubernetes v1.37: Introducing Node Lifecycle Conditions

- 원문: https://kubernetes.io/blog/2026/09/09/kubernetes-v1-37-node-lifecycle-conditions/
- 원문 제목: Kubernetes v1.37: Introducing Node Lifecycle Conditions
- 발행: 2026-09-10 03:30 KST (`2026-09-09T10:30:00-08:00` `article:published_time`)
- 확인: Kubernetes Blog canonical article·발행 메타데이터·본문 직접 확인

## 원문 핵심

- v1.37에서 `DrainInProgress`·`Drained`·`MaintenancePlanned`·`MaintenanceInProgress`·`GracefulNodeShutdownInProgress` 5개 well-known Node condition 도입
- 각 condition은 active/inactive/판정 불가를 `True`·`False`·`Unknown`으로, stable machine-readable `reason`과 human-readable `message`로 전달
- `NodeLifecycleConditions` feature gate는 Alpha·default-disabled이며 v1.37에서는 writer 권한을 제한하지 않고 core component가 읽지 않는 no-op 범위
- 관리자는 기존 `kubectl cordon`, `kubectl drain`, taint, workload-specific control로 scheduling·eviction을 수행하고, condition은 status publishing에 사용
- 관리자는 condition 설정·해제 주체이며 여러 controller의 conflicting write를 막기 위해 condition별 owner 정의 필요
- Node Ready·taint·Pod 상태만으로 planned maintenance, unexpected failure, graceful shutdown을 구분하기 어려운 문제를 해결하려는 shared context
- DaemonSet rollout availability budget, Job terminal phase 대기, storage operator maintenance 인지 지연이 component별 간접 signal 해석 충돌 사례
- 후속 controller consumption, ownership·locking·dedicated API는 향후 lifecycle coordination 작업 범위

## 증거 경계

- well-known condition 도입은 v1.37에서 scheduling, eviction, DaemonSet rollout, autoscaling, storage control의 자동 동작 변경을 보증하지 않음
- feature gate enable은 writer authorization, drain criteria, operation lock, provider maintenance integration을 자동 제공하지 않음
- production 적용 전 condition writer ownership·reason taxonomy·stale signal cleanup·dashboard/alert consumer·existing cordon/drain/taint 절차를 canary node pool에서 함께 검증 필요

## 출처

- Kubernetes Blog: https://kubernetes.io/blog/2026/09/09/kubernetes-v1-37-node-lifecycle-conditions/
- KEP-5683: https://kep.k8s.io/5683/
