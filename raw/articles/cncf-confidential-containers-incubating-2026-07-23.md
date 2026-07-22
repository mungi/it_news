---
source_url: https://www.cncf.io/blog/2026/07/22/confidential-containers-becomes-a-cncf-incubating-project/
title: Confidential Containers becomes a CNCF incubating project
ingested: 2026-07-23
published: 2026-07-23 01:00 KST
sha256: 7b0ed198bc12002735ba8a1e063e38651047e18999a7f5ae5056da17c1c31d3e
tags: [infra, kubernetes, security, confidential-computing, open-source]
---

# Confidential Containers becomes a CNCF incubating project

## Source facts
- CNCF Technical Oversight Committee가 Confidential Containers를 incubating project로 승인함.
- 프로젝트는 hardware-based TEE로 cloud-native environment의 data in use를 보호하고, Kata Containers runtime을 통해 Kubernetes workflow에 통합하는 구조.
- 주요 구성은 unmodified container용 Pod abstraction, attestation service `Trustee`, Helm chart·controller, Intel TDX·AMD SEV-SNP를 포함한 hardware abstraction layer.
- CNCF는 Kyverno integration과 confidential AI use case를 위한 KServe integration 진행을 언급.
- RSS `pubDate`: 2026-07-22 16:00 UTC = 2026-07-23 01:00 KST.

## Source boundary
- CNCF가 제시한 contributor·repository·issue 활동 지표는 프로젝트 생태계 지표이며, 특정 조직의 performance·GPU support·isolation overhead·availability 보장은 아님.
- TEE 적용의 실제 security boundary는 hardware, firmware, Kata runtime, attestation policy, key release, cloud operator model에 따라 검증 필요.
