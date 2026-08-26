---
source_url: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
title: Kubernetes v1.37: Garhwal
ingested: 2026-08-27
published: 2026-08-26 09:00 KST
sha256: 1b535ff1a739cd77ae93201aaae0dc3cc6a279d0338f6cb97914102ca4b74eec
tags: [kubernetes, infra, platform-engineering, devops, cloud]
---
Kubernetes 프로젝트는 Kubernetes v1.37 “Garhwal”을 공개함. 공식 release post는 resilient watchcache initialization, Pod certificates·Cluster Trust Bundles, `metrics.k8s.io` API, SELinuxMount·SELinuxChangePolicy 및 Dynamic Resource Allocation 기능의 Stable 승격을 열거함. HPA scale-to-zero, manifest 기반 admission control configuration, gang scheduling, native histogram, cgroups v2 Memory QoS, Pod-level resource manager, etcd RangeStream 등은 Beta 또는 Alpha 범위로 포함됨.

동시에 `kube-dns`와 `kube-proxy` ipvs mode 지원 deprecation, `kubectl run --filename/-f` deprecation 예정, static Pod의 Secret·ConfigMap 참조 금지, cgroup v1 지원의 향후 제거 계획을 공개함. upstream feature state는 managed distribution·CNI/CSI·node OS·container runtime·add-on compatibility와 동일하지 않으므로, API/manifest inventory, node runtime, HPA·StatefulSet·watch reconnect·volume/SELinux·rollback을 representative workload에서 검증해야 함.
