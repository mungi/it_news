---
source_url: https://kubernetes.io/blog/2026/09/21/kubernetes-v1-37-pvc-last-used-time/
title: Kubernetes v1.37: Tracking When a PersistentVolumeClaim Was Last Used (Beta)
ingested: 2026-09-22
published: 2026-09-21
sha256: 9dbf99973fcad917a4d19b12a42259d2a8be5677fcf81ca9b7bc72f2ea99fd70
tags: [infra, kubernetes, storage, finops, backup, release, global]
---

# Kubernetes v1.37: Tracking When a PersistentVolumeClaim Was Last Used (Beta)

Kubernetes는 2026년 9월 21일 PersistentVolumeClaim의 마지막 사용 시각을 추적하는 v1.37 Beta 기능을 공개했다. usage signal은 오래된 PVC의 조사·cleanup 후보를 찾는 데 쓰이지만 application-level data freshness, backup/restore 성공, regulatory retention, owner approval을 보장하지 않는다. stale PVC cleanup은 mounted Pod 상태, namespace owner, reclaim policy, VolumeSnapshot/backup success, grace period, restore drill을 함께 대조해야 한다. production deletion 전에 v1.37 upgrade canary에서 CSI driver·backup controller·GitOps reconciliation·monitoring query 호환성을 확인하고 report-only workflow부터 운영해야 한다.
