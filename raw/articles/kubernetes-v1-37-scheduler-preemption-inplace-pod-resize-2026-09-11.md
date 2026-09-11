---
source_url: https://kubernetes.io/blog/2026/09/10/kubernetes-v1-37-scheduler-preemption-for-in-place-pod-resize-alpha/
title: Kubernetes v1.37: Scheduler Preemption for In-Place Pod Resize (Alpha)
ingested: 2026-09-11
published: 2026-09-11 03:30
sha256: 5fd810dd25dc90f11143ee1015ca73392af35bc989925d590a7710f26bb31cc1
tags: [infra, kubernetes, scheduler, sre, release]
---
# Kubernetes v1.37: Scheduler Preemption for In-Place Pod Resize (Alpha)

- 원문: https://kubernetes.io/blog/2026/09/10/kubernetes-v1-37-scheduler-preemption-for-in-place-pod-resize-alpha/
- 원문 제목: Kubernetes v1.37: Scheduler Preemption for In-Place Pod Resize (Alpha)
- 발행: 2026-09-11 03:30 KST (`2026-09-10T10:30:00-08:00` `article:published_time`)
- 확인: Kubernetes Blog canonical article·발행 메타데이터·본문 직접 확인

## 원문 핵심

- v1.35 GA in-place Pod resize는 restart 없이 실행 중 container CPU·memory allocation 변경 가능 범위
- node allocatable headroom 부족 시 Kubelet이 resize request를 `Deferred`로 표시하고 자연 resource 해제를 대기하던 gap 존재
- v1.37 Alpha `InPlacePodVerticalScalingSchedulerPreemption` gate가 scheduler의 `Deferred` Pod tracking·lower-priority victim graceful eviction 경로 추가
- 일반 placement preemption과 달리 resize 대상 Pod가 있는 동일 node에서만 victim selection 수행
- Kubelet은 local eviction을 수행하지 않고 scheduler가 priority·PDB·graceful termination policy를 고려하는 분리 구조
- v1.37 이상 control plane·all worker node, `kube-apiserver`·`kube-scheduler`·`kubelet` 전체 gate enable 필요

## 증거 경계

- Alpha gate는 production-ready capacity remediation·cluster-wide enable 권고·API/behavior stability 보증이 아님
- preemption은 node capacity 부족을 제거하지 않으며 priority class·PDB·eviction·stateful workload·autoscaler policy와 결합해 검증 필요
- source page에 article-specific `og:image`가 없어 site fallback `assets/images/fallback-infra.svg` 사용

## 출처

- Kubernetes Blog: https://kubernetes.io/blog/2026/09/10/kubernetes-v1-37-scheduler-preemption-for-in-place-pod-resize-alpha/
- In-place Pod resize documentation: https://kubernetes.io/docs/tasks/configure-pod-container/resize-container-resources/
- Vertical Pod Autoscaling documentation: https://kubernetes.io/docs/concepts/workloads/autoscaling/vertical-pod-autoscale/
