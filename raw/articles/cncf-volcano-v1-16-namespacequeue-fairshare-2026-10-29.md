---
source_url: https://www.cncf.io/blog/2026/10/28/volcano-v1-16-released-namespacequeue-fairshare-and-a-broader-hypernode-ecosystem/
title: Volcano v1.16 Released: NamespaceQueue, fairshare, and a broader HyperNode ecosystem
ingested: 2026-10-29
published: 2026-10-29 05:45
sha256: b2c2470ed7123880faca55db79547f356db6842cf7df16b46280b3c8c77f3146
tags: [infra, kubernetes, ai-chip, weekly-briefing]
---

# Volcano v1.16 공개: NamespaceQueue·fairshare로 멀티테넌트 batch/GPU queue 제어 범위 확대

## 확인된 원문 범위

Volcano 공식 발표는 `NamespaceQueue`로 tenant가 namespace 내부에서 queue hierarchy를 구성하고, `fairshare`로 queue 간 자원 배분을 다루는 기능을 설명함. HyperNode ecosystem 확장도 포함되며, upgrade 전 existing queue·quota·priority·gang scheduling·GPU plugin 호환성과 rollback을 staging cluster에서 확인해야 함.

## 운영 메모

시사점: 운영팀은 upgrade를 단순 scheduler 교체로 처리하지 말고, tenant·queue·priority·quota·GPU topology별 waiting time과 eviction/preemption 결과를 canary에서 측정해야 함.

## 출처

https://www.cncf.io/blog/2026/10/28/volcano-v1-16-released-namespacequeue-fairshare-and-a-broader-hypernode-ecosystem/
