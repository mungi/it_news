---
source_url: https://www.cncf.io/blog/2026/10/23/multi-tenant-gpu-kubernetes-on-simulated-hardware-with-kamaji-and-hami/
title: Multi-tenant GPU Kubernetes on simulated hardware with Kamaji and HAMi
ingested: 2026-10-24
published: 2026-10-23 20:30 KST
sha256: 28a99bb7e64e798f61ecb1468f1895ff5c0ee1265fece662ff7fb6fca0c7c03f
tags: [cncf, kubernetes, gpu, multi-tenancy, ai-infrastructure, infra, global]
---

# Kamaji·HAMi 멀티테넌트 GPU Kubernetes mock-hardware lab

CNCF canonical post의 `article:published_time` `2026-10-23T11:30:00+00:00`를 KST `2026-10-23 20:30`으로 변환하고 본문·OG image를 직접 대조해 기록.

- 목적: team별 Kubernetes control plane 비용과 shared cluster의 약한 격리, whole-GPU allocation의 유휴 capacity 문제를 함께 다루는 lab
- 구성: Kamaji가 management cluster 안에서 tenant별 Kubernetes control plane을 pod로 실행
- 구성: HAMi가 GPU memory MB·compute percentage 요청을 받아 여러 pod를 one card에 packing
- 재현: physical GPU 없이 HAMi mock device plugin으로 fake GPU capacity를 node annotation에 등록
- tenant-a: A100 80GB mock 한 장, tenant-b: L4 24GB mock 두 장 구성
- admission: tenant API server는 management cluster에, HAMi webhook은 tenant worker에 있어 Kamaji Konnectivity tunnel을 통해 callback
- 결과: tenant-a에서 pod 3개가 각각 20,000MB·30% compute를 요청해 same mock card에 배치
- 결과: 90,000MB 요청은 `CardInsufficientMemory`로 Pending 상태 유지
- lab artifact: mock device plugin은 allocation 뒤 node lock을 해제하지 않아 수동 annotation이 필요하며 real-device behavior 아님
- 경계: real NVIDIA driver가 없어 actual memory/compute isolation, CUDA throughput, noisy-neighbor, production support는 검증하지 않음
- 팀 액션: real GPU canary에서 tenant별 webhook latency·queue·actual utilization·OOM·node failure·cost attribution을 mock 결과와 별도로 계측
