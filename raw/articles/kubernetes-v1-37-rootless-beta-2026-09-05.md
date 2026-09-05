---
source_url: https://kubernetes.io/blog/2026/09/04/kubernetes-v1-37-rootless-beta/
title: Kubernetes v1.37: KubeletInUserNamespace (aka Rootless mode) Graduates to Beta
ingested: 2026-09-05
published: 2026-09-05 03:30
sha256: 196cec0b2422fe03623938137a83c5ff8b61755be2290278dc25d5139ba17d43
tags: [infra, kubernetes, cybersecurity, devops, release]
---
# Kubernetes v1.37: KubeletInUserNamespace (aka Rootless mode) Graduates to Beta

- 원문: https://kubernetes.io/blog/2026/09/04/kubernetes-v1-37-rootless-beta/
- 원문 제목: Kubernetes v1.37: KubeletInUserNamespace (aka Rootless mode) Graduates to Beta
- 발행: 2026-09-05 03:30 KST (`2026-09-04T10:30:00-08:00` `article:published_time`)
- 확인: Kubernetes Blog canonical article·Open Graph metadata·본문 직접 확인

## 원문 핵심

- v1.37에서 `KubeletInUserNamespace` feature gate가 Beta로 승격되고 기본 활성화
- 실제 활성화 시 kubelet·CRI/OCI runtime·CNI plugin·kube-proxy가 Linux user namespace 안의 host non-root user로 실행
- 기본 gate 활성화만으로 기존 rootful node가 자동으로 user namespace에 들어가지는 않음
- Pod `hostUsers: false` user namespace와 다른 기능이며 두 기능을 결합해 privileged 없이 Kubernetes-in-Kubernetes 구성 가능
- CRI-O·runc·kubelet·containerd의 과거 container-breakout 사례를 host full-root 대신 non-root account 범위로 제한하려는 목적
- kernel 취약점에는 방어가 아니며 seccomp 같은 기존 hardening 병행 필요
- 특정 CNI·CSI driver 호환성 문제가 가능하며 `runningInUserNamespace` property로 node label·taint를 설정해 real-root workload 분리 가능
- rootless Docker·nerdctl·Podman 기반 kind/minikube, Usernetes, rootless k3s 사용 경로를 공식 글에서 예시

## 증거 경계

- Beta 승격과 default-enabled feature gate는 managed Kubernetes 제공·지원, 모든 CNI/CSI·GPU/device plugin 호환성, 성능·SLO·host OS 조건을 보증하지 않음
- user namespace는 kernel 자체 취약점, 잘못된 RBAC, application compromise, privileged workload의 모든 위험을 제거하지 않음
- production 적용 전 node bootstrap·network·storage·cgroup·hostPath·privileged DaemonSet·upgrade·rollback을 rootful baseline과 pool별 비교 필요

## 출처

- Kubernetes Blog: https://kubernetes.io/blog/2026/09/04/kubernetes-v1-37-rootless-beta/
- Kubernetes documentation: https://kubernetes.io/docs/tasks/administer-cluster/kubelet-in-userns/
