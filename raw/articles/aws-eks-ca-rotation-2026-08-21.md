---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-certificate-authority-ca-rotation-automated-lifecycle-management
title: Amazon EKS CA rotation 관리형 lifecycle
ingested: 2026-08-21
published: 2026-08-21 03:30 KST
sha256: bc8d3fe6fde04b3d1b5dd3a7c0a14e26b83126441bcd0a99ff4a99a73c7bb9c4
tags: [cloud, infra, aws, kubernetes, cloud-security, sre, weekly-briefing]
---

# Amazon EKS certificate authority rotation 공식 공지

- AWS RSS 발행 `Thu, 20 Aug 2026 18:30:00 GMT`를 KST `2026-08-21 03:30`으로 환산
- visible page label: `Posted on: Aug 20, 2026`
- 모든 commercial AWS Region에서 추가 비용 없이 제공한다는 AWS 범위

## 직접 확인한 본문 사실

- EKS cluster마다 Kubernetes API 암호화 연결을 위한 자체 CA 존재
- 2018년 출시 이후 생성된 EKS cluster CA는 10년 유효기간이며 초기 cluster가 rotation 준비 시점에 접근한다는 AWS 설명
- AWS-managed component successor CA trust 자동 갱신, Auto Mode·Fargate node 자동 갱신
- customer-managed worker node 교체와 external API client successor CA trust 갱신은 고객 책임
- 사전 알림, successor CA 자동 append, 자동 activation, previous CA rollback capability 제공

## 증거 경계와 운영 메모

- managed lifecycle은 kubeconfig·CI/CD·GitOps·admission webhook·operator·monitoring 등의 trust bundle 호환과 무중단 전환을 보증하지 않음
- API client inventory, non-production rotation drill, activation/rollback owner와 alert를 cluster change record에 연결 필요
