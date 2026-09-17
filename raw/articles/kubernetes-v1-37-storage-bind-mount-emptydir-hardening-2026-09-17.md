---
source_url: https://kubernetes.io/blog/2026/09/16/kubernetes-v1-37-hardening-container-storage/
title: Kubernetes v1.37 storage hardening: bind mount option·emptyDir permission mode
created: 2026-09-17
ingested: 2026-09-17
published: 2026-09-17 03:30
sha256: 99b0eb58f6d0334c72b169dfcafd7eb2b098d5bf6066e9efc80723142eae10ac
tags: [kubernetes, security, storage, devops, global]
---

# Kubernetes v1.37 storage hardening: bind mount option·emptyDir permission mode

- 원문: https://kubernetes.io/blog/2026/09/16/kubernetes-v1-37-hardening-container-storage/
- 원문 게시: 2026-09-17 03:30 KST

## 핵심 요약

- Kubernetes v1.37이 `VolumeBindMountOptions`·`EmptyDirVolumeMode` Alpha feature gate 추가
- container volume bind mount에 `noexec`·`nosuid`·`nodev` 지정, image volume은 미지원
- `emptyDir.mode: 01777`로 shared directory sticky bit 적용 가능
- API server·kubelet feature gate와 CRI runtime capability·node declared feature가 bind mount enforcement 조건
- `fsGroup` override·Windows 미적용·version skew fallback을 staging negative test로 확인 필요

---

## 증거 경계

- 원문에 명시된 feature·version·research demonstration·운영 수치만 기록
- source가 보장하지 않은 조직별 성능·침해·provider support는 local evidence 없이 확정하지 않음

## 운영 조치

- source fact와 deployment inventory·negative test·telemetry·rollback evidence를 같은 change record로 보존
