---
source_url: https://www.cncf.io/blog/2026/07/28/welcome-cohdi-to-the-cncf-evolving-kubernetes-into-composable-disaggregated-infrastructures/
title: "Welcome CoHDI to the CNCF: Evolving Kubernetes into composable disaggregated infrastructures"
ingested: 2026-07-29
published: 2026-07-29 09:00 KST
sha256: 3ce367034bf0ee196a9db6b923b1cff77d9febcf8db0999a6908fc36dba43f84
tags: [kubernetes, infra, ai, open-source, cloud, platform-engineering]
---

# CoHDI CNCF Sandbox 편입: Kubernetes DRA 기반 composable disaggregated infrastructure

- CNCF는 2026년 7월 28일 CoHDI를 Sandbox project로 수용했다고 공개함
- CoHDI는 Red Hat, FSAS Technology, Fujitsu, IBM Research, NTT가 2025년 3월 시작한 협업이며, 이전 명칭은 InfraDDS임
- Kubernetes node에서 Dynamic Resource Allocation(DRA)으로 PCIe device를 host 수준에서 동적으로 attach·detach하는 composable disaggregated infrastructure를 대상으로 함
- 원문은 LLM inference의 prefill compute-bound 단계와 decode memory-bound 단계, agentic AI workflow의 phase별 자원 요구를 예시로 제시함

## 구현 구성

- `Composable-DRA-Driver`: CoHDI manager가 관리하는 자원을 Kubernetes DRA `ResourceSlices`로 노출하고 Dynamic-Device-Scaler와 함께 pod request에 따라 device scaling을 연결함
- `Dynamic-Device-Scaler`: OS reboot 없이 pod request에 맞춰 device를 add/remove하는 구성 요소로 설명됨
- `Composable Resource Operator`: CoHDI manager external API를 사용해 GPU 등 composable hardware resource를 cluster node에 동적으로 attach·detach하는 Kubernetes operator임

## 검증 경계

- CNCF Sandbox 수용은 project governance 단계이며 production readiness, Kubernetes upstream 기능 편입, vendor interoperability, hardware availability를 보장하지 않음
- 원문은 benchmark, supported PCIe device·fabric, failure recovery, attach/detach latency, scheduler semantics, security isolation, API stability, SLA를 공개하지 않음
- 운영 검증은 DRA ResourceSlice lifecycle, pod scheduling, device hot-plug failure, node drain, topology placement, multi-tenant isolation, rollback을 실제 hardware matrix에서 측정하는 범위임
