---
source_url: https://thehackernews.com/2026/10/dell-csm-flaws-enable-unauthenticated.html
title: Dell CSM critical CVE 6건의 storage-admin·JWT·Kubernetes node privilege 경계
ingested: 2026-10-03
published: 2026-10-03 02:33 KST
sha256: 631348c2141acf116c7ef89ee464a2ff85371b0eaf92d4a82a44f6cab05c53ed
tags: [cybersecurity, kubernetes, storage, cloud-security, devops, global]
---
## 원문 확인

- The Hacker News 기사 제목: Dell CSM Flaws Enable Unauthenticated Admin Access and Root on Kubernetes Nodes
- RSS 발행 시각: `Fri, 02 Oct 2026 22:32:12 +05:30`, KST `2026-10-03 02:33`
- 원문 URL: https://thehackernews.com/2026/10/dell-csm-flaws-enable-unauthenticated.html
- Dell security advisory는 현재 직접 request에서 HTTP 403으로 원문 재열람 불가 상태이며, 본 capture는 직접 읽은 THN 보도 범위만 사용

## GN⁺ 핵심 요약

- 수정: Dell CSM `1.17.0` 이전의 critical 6건을 `1.18.0`에서 수정, update 외 workaround/mitigation 부재와 JWT signing secret rotation 권고
- 인증: `CVE-2026-63688`·`CVE-2026-63692` missing authentication이 storage backend administrator credential 또는 authorization service admin control로 이어질 수 있는 CVSS `10.0` 범위
- privilege: `CVE-2026-67269` Custom Resource reconciler가 cluster node root 조건, `CVE-2026-67273`이 RBAC tampering·cluster-wide Secret read 조건으로 보도됨
- token: `CVE-2026-54472` hard-coded credential·`CVE-2026-61421` publicly available JWT signing secret이 administrative token forge 조건으로 설명됨
- 경계: active exploitation·피해 tenant·patch 전 compromise 판별 방법은 source에서 확인되지 않음

---

## 취약점과 영향 범위

- `CVE-2026-63688` CVSS 10.0: `csm-authorization-storage` gRPC server의 critical-function missing authentication, registered storage array의 backend administrator credential 접근 조건
- `CVE-2026-63692` CVSS 10.0: authorization proxy·tenant service missing authentication, authorization service administrative control 조건
- `CVE-2026-67269` CVSS 9.9: ContainerStorageModule Custom Resource reconciler privilege management, cluster node root 조건
- `CVE-2026-54472` CVSS 9.8: CSM Authorization hard-coded credential, authorization proxy administrative token forge 조건
- `CVE-2026-61421` CVSS 9.8: `karavi-authorization` JWT authentication hard-coded cryptographic key, administrative token forge 조건
- `CVE-2026-67273` CVSS 9.6: template element neutralization 결함, sensitive information·RBAC tampering·cluster-scoped RBAC resource creation 및 Secret read 조건

## 운영·incident 대응 경계

- CSM/controller·authorization proxy exposure·registered storage backend·JWT secret·ContainerStorageModule CR·cluster Role/RoleBinding·node audit를 asset inventory로 결합
- update만으로 prior token/credential/RBAC abuse 부재를 판단하지 않고 secret rotation과 patch-window audit hunt를 병렬 수행
- CSI provisioning·attach·snapshot·failover, controller HA/version parity, workload recovery를 fixed-version canary로 검증

## 증거 경계

- source는 active exploitation, victim, attacker, patch 전 compromise 여부를 확정하지 않음
- Dell advisory의 직접 본문은 현 run에서 HTTP 403이므로 THN가 보도한 version·CVE·remediation 범위를 넘어 vendor claim을 추가하지 않음
