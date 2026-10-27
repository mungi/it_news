---
source_url: https://kubernetes.io/blog/2026/10/27/announcing-workload-conformance-wg/
title: Kubernetes Workload Conformance Working Group
ingested: 2026-10-28
published: 2026-10-27 13:30
sha256: 8d56439b4eadf07f75d69d608057bfda1686e3b4d25473c17196276b99f56456
tags: [infra, kubernetes, platform-engineering, sre, global, policy]
---

# Kubernetes Workload Conformance Working Group

- 확인 시각: 2026-10-28 01:53 KST
- 원문: https://kubernetes.io/blog/2026/10/27/announcing-workload-conformance-wg/

## 확인한 사실
- Kubernetes community가 workload runtime behavior의 shared standard를 작성할 Workload Conformance Working Group을 발표
- scope에 security·disruption resilience·resource use·networking·storage·API usage·observability를 포함
- specific requirement와 test 방법은 아직 합의되지 않았다고 명시
- 모든 requirement를 test binary가 실행하는 objective test로 연결하는 원칙 공개
- node drain·removed API·unnecessary privilege·unused resource reservation을 반복 assessment 사례로 제시

## 운영 경계
- Working Group 발표는 conformance certification·managed service compatibility·application availability 또는 security guarantee가 아님
