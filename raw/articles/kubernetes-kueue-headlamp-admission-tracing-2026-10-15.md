---
source_url: https://kubernetes.io/blog/2026/10/14/tracing-kueue-admission-with-headlamp/
title: Why Is My Kubernetes Job Still Pending? Tracing Kueue Admission with Headlamp
ingested: 2026-10-16
published: 2026-10-15 03:35 KST
sha256: e3c3f0e28afe03eaca86b56efade6417d67409e3837ba0d34b0317b3e1d3c937
tags: [kubernetes, queueing, scheduling, observability, gpu, infra, global]
---

# Kueue Headlamp plugin으로 Job admission 추적

- 발행 시각: `2026-10-14T10:35:00-08:00` → `2026-10-15 03:35 KST`
- 대상: Headlamp Kueue plugin `0.1.0-alpha`, Kueue v1beta2 Cohort·ClusterQueue·LocalQueue·ResourceFlavor·Workload의 read-only view
- 책임 분리: Kueue는 quota·ResourceFlavor·admission check·대기 workload를 기준으로 admission 판단, kube-scheduler는 admission 뒤 Pod node 배치 판단
- 진단 순서: Workload의 `Admitted`·`QuotaReserved` condition과 event를 확인한 뒤 LocalQueue·ClusterQueue·ResourceFlavor·Cohort로 이동
- 예시: Pod 3개와 CPU 3개 요청이 CPU 2개·Pod slot 2개 ClusterQueue를 넘으면 `QuotaReserved=False`로 대기, scheduler node shortage와 다른 admission-capacity 문제
- 경계: plugin은 create·edit·stop·resume·delete workflow를 제공하지 않으며 API·kubectl·GitOps policy control을 대체하지 않음

## 운영 경계

- `Admitted=True` 이후 Pending만 node capacity·affinity·taint/toleration·topology·PVC·image pull branch로 조사
- read RBAC와 queue visibility가 부족하면 on-call이 quota·flavor 문제를 scheduler 장애로 오진할 수 있음
- team action: admission wait·scheduler wait·reserved-but-unscheduled time·idle/borrowed quota를 lifecycle별 dashboard와 capacity review에 분리
