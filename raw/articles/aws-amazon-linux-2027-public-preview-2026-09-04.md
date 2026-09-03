---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/announcing-amazon-linux-2027/
title: Amazon Linux 2027 public preview
ingested: 2026-09-04
published: 2026-09-04 02:00
sha256: 05726fcb354c7b643ac2272ba0bf996e24d7ed0036b384f4ab60cd24008f7964
tags: [cloud, operating-system, aws, cloud-security, release]
---

# Amazon Linux 2027 public preview

## 원문 확인

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/announcing-amazon-linux-2027/
- RSS 발행: Thu, 03 Sep 2026 08:00:00 GMT
- 표시 시각: 2026-09-04 02:00 KST

## 핵심 요약

- AL2023 baseline 기반 Amazon Linux 2027 public preview가 commercial AWS Region의 x86-64·ARM AMI와 ECR Public Gallery base image로 제공
- kernel 7.1+, SELinux enforcing 기본값, AWS-LC, 최신 toolchain·language runtime과 AWS Neuron driver 지원이라는 공식 범위
- web·database·container microservice·AI/ML·대규모 infrastructure workload를 target으로 명시

## 운영 검증 경계

- public preview는 GA 일정, LTS, package ABI, third-party agent/driver, managed service 지원, 성능·비용 보증이 아님
- AL2023와 분리한 launch template·node pool에서 boot, SELinux AVC, CNI/CSI, security/observability agent, container runtime, Neuron/device plugin, application SLO, rollback을 검증 필요
- AMI ID·kernel·SELinux mode·base image digest·policy module을 deployment artifact와 연결해 rollback 가능 상태 유지 필요
