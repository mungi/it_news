---
source_url: https://kubernetes.io/blog/2026/08/31/kubernetes-v1-37-storage-version-migration-ga/
title: Kubernetes v1.37: Storage Version Migration Enabled by Default
ingested: 2026-09-01
published: 2026-09-01 03:30 KST
sha256: d2105836408424adb7a062917fc2f99f67bdc59c7cb404ad54d102b74c250f14
tags: [kubernetes, infra, cloud, devops]
---
Kubernetes 공식 블로그는 Storage Version Migration(SVM)이 v1.37에서 GA가 됐으며, 내장 `storagemigration.k8s.io/v1` API와 control-plane `StorageVersionMigrator` controller가 모든 v1.37 cluster에서 기본 활성화된다고 발표함. Kubernetes API resource는 특정 storage version schema로 저장되며, 새 write만 새 version으로 저장해도 기존 object는 이전 version으로 남을 수 있음.

CRD가 `v1alpha1`을 폐기하고 `v1beta1`·`v1`으로 옮기는 경우, 모든 기존 object가 재기록되기 전에는 CRD `.status.storedVersions`에서 이전 version을 안전하게 제거하거나 serving을 중단할 수 없음. encryption at rest 설정 또는 encryption key rotation 뒤에도 기존 etcd object는 API server를 통해 재기록되기 전까지 unencrypted 또는 이전 key 상태로 남을 수 있음.

운영자는 declarative `StorageVersionMigration` object를 생성해 migration을 시작함. control-plane controller가 이를 감시하고 해당 API의 기본 storage version으로 기존 resource를 자동 재기록하며, status의 `Succeeded=True` condition으로 진행·성공을 확인함. CRD migration 성공 뒤 `.status.storedVersions`가 최신 version만 가리키지 않으면 migration 중 CRD가 변경됐다는 뜻이므로 이전 API version 폐기 전 migration 재시도가 필요함.

기존에는 `kubectl get`·`kubectl replace` script 또는 out-of-tree `kube-storage-version-migrator`가 필요했음. 공식 글은 built-in 기능의 기본 활성화와 declarative CRD upgrade 결합을 설명하지만, object 수에 따른 migration duration·API server/etcd load·managed Kubernetes 제공 상태·backup/restore 영향·encryption provider별 key retirement은 보증하지 않음. 대량 cluster에서는 API QPS·etcd latency·controller error·write amplification을 관측하고 canary namespace부터 migration을 실행할 필요.
