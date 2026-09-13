---
source_url: https://www.cncf.io/blog/2026/09/10/kubernetes-disaster-recovery-guidance-from-three-reproducible-failure-scenarios/
title: Kubernetes disaster recovery: Guidance from three reproducible failure scenarios
ingested: 2026-09-13
published: 2026-09-10 20:37
sha256: 2e84adb9f11a5edbf7fbe50dc2e6b257a160a15c9fdca0ab0e9b59b8baa21ced
tags: [infra, kubernetes, disaster-recovery, backup, gitops, storage, sre]
---
# Kubernetes 재해복구: 재현 가능한 세 failure scenario

- 원문: https://www.cncf.io/blog/2026/09/10/kubernetes-disaster-recovery-guidance-from-three-reproducible-failure-scenarios/
- 발행: 2026-09-10 20:37 KST (`2026-09-10T11:37:00+00:00` source metadata)
- 확인: CNCF canonical article·JSON-LD 발행 시각·본문·Open Graph image 직접 확인

## 원문 핵심

- laptop에서 재현 가능한 production/recovery Kubernetes cluster·external S3-compatible store·GitOps·PostgreSQL lab으로 stateful DR failure 세 종류 제시
- Velero data mover가 `47,989,888 bytes` volume data 이동을 기록하고 namespace/PVC 삭제 뒤 expected 4개 row 복원 확인
- GitOps `Synced`·Pod `Ready` 상태가 manifest만 복원한 빈 PVC database가 될 수 있는 scenario 재현
- source lab은 production 종료부터 validated data까지 4분, rehearsal rerun은 2분 미만 기록; detection·decision·traffic cutover·failback은 production RTO에 추가되는 별도 구간
- 두 PVC의 5초 간격 snapshot에서 25개 payment가 대응 order 없이 복원되는 inconsistent recovery point 재현
- Kubernetes v1.36 GA `VolumeGroupSnapshot`은 coordinated crash-consistent snapshot API이나 CSI group RPC support·CRD/feature gate와 application quiesce는 별도 조건

## 증거 경계

- source lab의 byte·duration·snapshot 결과는 재현 환경의 측정값이며 조직별 application RTO/RPO·CSI driver compatibility·storage 성능 보증이 아님
- `Completed` backup, `ReadyToUse` snapshot, GitOps `Synced`, Pod `Ready`는 각각의 component 상태이며 clean target data invariant·traffic/identity path의 end-to-end recovery 증거를 대체하지 않음
- VolumeGroupSnapshot은 cross-volume timing skew를 줄이지만 database/application-level flush·quiesce가 필요한 application consistency를 보장하지 않음
