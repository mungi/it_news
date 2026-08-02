---
source_url: https://kubernetes.io/blog/2026/07/31/kubernetes-v1-37-sneak-peek/
title: "Kubernetes v1.37 Sneak Peek"
ingested: 2026-08-03
published: 2026-08-01 01:00 KST (Kubernetes `article:published_time` `2026-07-31T08:00:00-08:00`)
sha256: 57f190325bfcae7704524e491067d7b42b0bbec3d51db5871d9e15b43cdf804c
tags: [infra, kubernetes, networking, storage, observability, security, global]
---
# Kubernetes v1.37 사전 안내: ipvs·cgroup v1·Static Pod API 참조와 운영 마이그레이션

- Kubernetes 프로젝트는 v1.37 정식 릴리스를 **2026-08-26**로 계획했으며, 이 글의 항목은 정식 릴리스 전 변경될 수 있는 사전 안내 범위임
- `kubectl run --filename/-f`는 CLI argument로 Pod가 생성되는 동작과 맞지 않아 deprecation 예정이며, 생성 manifest 전달 의존 automation 점검 필요
- Static Pod의 `configMapRef`·`secretRef` 같은 API resource 참조는 v1.37부터 엄격히 금지되고, opt-out용 `PreventStaticPodAPIReferences` feature gate도 제거 예정
- `kube-proxy`의 `ipvs` mode는 v1.37부터 startup deprecation warning 대상이며, 계획상 v1.40 default disable·v1.43 제거 예정으로 `mode: ipvs` inventory와 replacement test 필요
- legacy cgroup v1은 v1.35부터 `failCgroupV1: true`가 기본값이며, v1.37에도 temporary override는 남지만 in-place pod resize·tiered memory protection은 cgroup v2 의존 범위임
- `SELinuxMount`는 v1.37에서 GA·default enable 예상이며, opt-in CSI driver에서 same-node shared volume을 서로 다른 SELinux label Pod가 쓰면 mount context 제약으로 Pod start 실패 가능성
- `metrics.k8s.io` API는 약 9년 Beta 뒤 GA 예상이며, HPA와 `kubectl top`의 standard CPU·memory usage API로 `v1`과 `v1beta1`을 transition 동안 병행 사용 가능
- kubelet User Namespace/rootless mode는 Beta 예상으로 host-level root privilege를 줄이는 isolation layer이나, 기존 node 운영·CNI/CSI·observability 호환성은 cluster별 검증 필요
- Volume Health Monitor는 Alpha로 reset되어 4개 CSI RPC와 `PersistentVolumeClaim.status.healthStatus`, `Pod.status.volumeHealth`, `CSINode.status.storageHealth`에 machine-readable health를 기록하는 설계 예정

## 원문 핵심

- v1.37은 feature freeze 전 사전 공지이며 final CHANGELOG와 release notes가 정식 기능·지원 범위의 기준임
- `ipvs`는 kernel API만으로 Kubernetes Service를 완전 구현하지 못해 내부적으로 `iptables`도 사용한다는 KEP 설명이 deprecation 근거임
- mode 확인 예시: `kubectl -n kube-system get configmap kube-proxy -o jsonpath='{.data.config\.conf}' | grep 'mode:'`
- cgroup v1의 `failCgroupV1: false`는 단기 override이며 future release removal 계획을 전제로 한 migration bridge임
- SELinux mount option은 한 mount에 하나의 SELinux context만 둘 수 있어 shared volume label topology가 변경 위험 지점임
- Volume Health Monitor의 controller/node report는 서로 독립적으로 노출돼 storage controller 장애와 node attachment path를 분리 판단하는 구조임

## 증거 경계와 운영 메모

- 원문 metadata `article:published_time`은 `2026-07-31T08:00:00-08:00`이며 KST `2026-08-01 01:00`으로 변환함
- 원문은 v1.37 기능·deprecation·예정 일정의 사전 안내이며, actual release artifact·final feature state·provider compatibility·upgrade success를 확정하지 않음
- upgrade 전 `ipvs`, cgroup version, Static Pod API reference, CSI `seLinuxMount`, SELinux label sharing, metrics client version, node-component privilege, CSI health RPC 지원을 inventory하고 staging cluster에서 validation 필요

## 출처

- https://kubernetes.io/blog/2026/07/31/kubernetes-v1-37-sneak-peek/
- https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/5495-deprecate-kube-proxy-ipvs
- https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/5573-remove-cgroup-v1
