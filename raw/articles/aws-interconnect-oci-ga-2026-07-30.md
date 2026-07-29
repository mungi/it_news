---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-announces-AWS-interconnect-multicloud-OCI-GA/
title: AWS announces AWS Interconnect - multicloud connectivity with Oracle Cloud Infrastructure in GA
ingested: 2026-07-30
published: 2026-07-30 00:00 KST
sha256: 271123ea3e712914ce466bc99b51c007c8b5fe7e9b2ff1dcccf4869011af064f
tags: [cloud, infra, aws, oracle-cloud, networking, global, release]
---

# AWS Interconnect - multicloud with OCI GA

- Source page: AWS What’s New, `AWS announces AWS Interconnect - multicloud connectivity with Oracle Cloud Infrastructure in GA`
- Published: page label `Jul 29, 2026`; RSS `Wed, 29 Jul 2026 15:00:00 GMT` = `2026-07-30 00:00 KST`
- Verified facts:
  - AWS Interconnect - multicloud의 OCI 일반 제공(GA) 발표
  - OCI는 5월 public preview에서 open specification 채택
  - GA 기준 OCI와 Google Cloud workload 간 private connection을 같은 AWS experience로 provision 가능
  - Azure support는 2026년 후반 예정이라는 AWS 발표 범위
  - 현재 OCI availability는 `us-east-1`이며 Console, CLI, API에서 생성 가능
- Evidence boundary:
  - latency, bandwidth, redundancy design, pricing, SLA, cross-cloud routing policy, Korea Region availability는 원문에 없음
  - private connection이라는 AWS 표현을 universal private-by-default architecture 보장으로 확대하지 않음

## GN⁺ 핵심 요약
- AWS–OCI multicloud private connectivity를 GA로 전환, `us-east-1`에서 Console·CLI·API provisioning 제공
- Google Cloud 연결과 동일한 AWS experience를 언급, Azure 지원은 2026년 후반 계획 단계
- 기존 DIY multicloud network의 global multi-layer 운영 복잡도를 배경으로 제시
- 팀 액션: cross-cloud route·DNS·identity·egress·failure domain·commercial terms를 자체 설계 검증 항목으로 분리
