---
source_url: https://kubernetes.io/blog/2026/09/14/csi-changed-block-tracking-beta/
title: Kubernetes Changed Block Tracking API Beta의 v1beta1 CRD migration·CSI snapshot metadata compatibility
created: 2026-09-15
ingested: 2026-09-15
published: 2026-09-15 03:30
sha256: 9f4d05701cdd6ddb7a526866be7b3bb8c6ab67d647c22b2c8076687ab920cdb8
tags: [kubernetes, storage, backup, api, release, global]
---
# Kubernetes Changed Block Tracking API - Beta Differences

- 원문: https://kubernetes.io/blog/2026/09/14/csi-changed-block-tracking-beta/
- 원문 게시: 2026-09-14 10:30 UTC-08:00 / KST 2026-09-15 03:30

## 핵심 요약

- `external-snapshot-metadata` 프로젝트 `v1.0.0`에서 CSI Changed Block Tracking(CBT)이 Alpha에서 Beta로 승격됨
- `SnapshotMetadataService` CRD API가 `cbt.storage.k8s.io/v1alpha1`에서 `v1beta1`으로 변경되며, 구 버전을 병행 제공하지 않음
- Alpha 사용자는 CRD 재적용, manifest `apiVersion` 변경, CRD client/controller 코드 변경이 필요한 one-time migration 대상
- 최소 Kubernetes `1.33`, CSI spec `1.10+`, sidecar `registry.k8s.io/sig-storage/csi-snapshot-metadata:v1.0.0` 조건 공개
- 현재 범위는 block volume이며 file volume·network file-share changed-list tracking은 포함하지 않음

---

## 원문 확인 내용

- CSI SnapshotMetadata gRPC service, `SnapshotMetadataService` CRD, `external-snapshot-metadata` sidecar가 CBT 구성 요소임
- `GetMetadataAllocated`와 `GetMetadataDelta` RPC를 client 또는 `snapshot-metadata-lister`로 호출하는 사용 흐름 공개
- CSI driver가 volume snapshot과 해당 sidecar를 지원해야 하며, hostpath driver example을 end-to-end 시작점으로 제시
- Beta 기간의 다음 과제는 CSI driver 채택 확대와 streaming client·iterator package의 운영 피드백 수집임

## 증거 경계

- 원문은 Kubernetes API/sidecar compatibility와 migration 조건을 설명하며, 특정 CSI driver의 지원 여부·backup 성능·RPO/RTO·GA 일정은 보장하지 않음
- source가 제시한 `v1beta1` 전환은 automatic conversion 없는 API migration이므로 backup application과 controller의 manifest/client matrix를 별도 검증 필요
