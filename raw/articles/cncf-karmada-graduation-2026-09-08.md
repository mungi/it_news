---
source_url: https://www.cncf.io/announcements/2026/09/07/cloud-native-computing-foundation-announces-karmada-graduation/
title: CNCF Karmada Graduated 승격
published: 2026-09-08 11:06 KST
ingested: 2026-09-08
sha256: f92e92cd9e695244c390ac562e7bf16569cae64c237e4bc34fc3153f974bfd2b
tags: [infra, kubernetes, multi-cluster, cloud-native, open-source, release, weekly-briefing]
---

# CNCF Karmada Graduation 공식 공지

- CNCF 공식 `article:published_time` `2026-09-08T02:06:17+00:00`를 KST `2026-09-08 11:06`으로 환산

## 직접 확인한 본문 사실

- CNCF가 Karmada를 Graduated project로 승격 공지
- Karmada가 Kubernetes API 위에 centralized placement·propagation·failover·multi-cluster autoscaling을 확장하는 범위
- 첫 commit은 2020년 11월, CNCF Sandbox 합류는 2021년 9월, Incubating 승격은 2023년 12월이라는 CNCF 이력
- CNCF 발표 기준 contributor 1,214명 이상, 기여 조직 292곳 이상, GitHub star 5,600개 이상 집계
- hybrid cloud capacity, multi-region resilience, intelligent traffic distribution, AI training, GPU/CPU scheduling, multi-cluster delivery와 fleet-wide configuration distribution 활용 사례 열거
- control-plane component의 Prometheus metric export, bundled etcd state, Helm chart 제공 범위 명시

## 증거 경계와 운영 메모

- graduation은 CNCF 프로젝트의 maturity·governance milestone이며 개별 managed Kubernetes, CNI/CSI, GPU driver, identity, data replication, regional capacity, support SLA의 호환성·가용성 보증이 아님
- contributor·organization·star·adopter 수치는 CNCF가 제시한 집계로, 특정 조직 workload의 reliability·cost·failover 성공 보증과 구분 필요
- 도입 전 placement constraint, member-cluster RBAC·secret boundary, policy conflict, propagation lag, etcd backup/restore, network partition, failover/failback 및 rollback을 representative workload에서 검증 필요
