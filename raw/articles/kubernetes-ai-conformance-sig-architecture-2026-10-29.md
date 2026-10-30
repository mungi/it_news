---
source_url: https://kubernetes.io/blog/2026/10/29/sig-arch-ai-conformance-2026/
title: From Working Group to SIG Architecture: spotlight on AI Conformance
ingested: 2026-10-30
published: 2026-10-29 14:00
sha256: e9730829cb2beb3a5c4fd8ce21cb573735d9fbf78f0ae27e3e101305e18da928
tags: [infra, kubernetes, ai, platform-engineering, gpu, scheduling, global, policy]
---

# Kubernetes AI Conformance, SIG Architecture subproject로 전환

- 확인 시각: 2026-10-30 10:59 KST
- 원문: https://kubernetes.io/blog/2026/10/29/sig-arch-ai-conformance-2026/
- 발행: `article:published_time` `2026-10-29T05:00:00+00:00` → 2026-10-29 14:00 KST

## 확인한 사실
- Kubernetes AI Conformance이 CNCF Program·Working Group 단계를 거쳐 SIG Architecture의 permanent subproject로 전환
- 공식 인터뷰에서 Certified Kubernetes AI Conformance Program, Kubernetes AI Requirements(KAR), certified platform `18→31`, automated conformance verification roadmap을 성과로 제시
- AI infrastructure의 accelerator scheduling, high-performance networking, workload-aware orchestration, low-latency inference를 ecosystem-level standardization 대상으로 설명
- 새 요구사항은 초기 `SHOULD`에서 API 안정화·ecosystem adoption 뒤 `MUST`로 승격하는 tiered graduation model을 설명
- framework나 model server가 아닌 Dynamic Resource Allocation(DRA) 같은 infrastructure capability에 초점을 둔다는 범위

## 운영 경계
- 인터뷰의 18→31 certified platform 수치와 roadmap은 특정 distribution·managed Kubernetes service의 GPU performance, portability, SLO, certification 획득을 보장하지 않음
- KAR requirement와 automated verification의 버전·적용 범위는 실제 도입 제품의 certification record 및 release documentation과 별도 대조 필요
