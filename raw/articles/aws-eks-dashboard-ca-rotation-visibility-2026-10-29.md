---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-dashboard-fleet-wide-visibility-certificate-authority-ca-rotation/
title: Amazon EKS Dashboard now provides fleet-wide visibility into certificate authority (CA) rotation
ingested: 2026-10-29
published: 2026-10-29 03:07
sha256: 8507d8d0f2eda79cbe6af1148ab3639b0d759544736c91b468894253fba42a28
tags: [aws, cloud, infra, weekly-briefing]
---

# Amazon EKS Dashboard, fleet-wide CA rotation 가시성 추가: 계정·리전별 만료·자동 rotation event 통합 확인

## 확인된 원문 범위

AWS는 EKS Dashboard에서 CA rotation 상태를 fleet-wide로 확인하고 action priority를 정할 수 있다고 설명함. trusted access를 management account에서 활성화해야 하며 dashboard view는 `us-east-1`에서 제공됨. 가시성 기능은 kubeconfig·client trust·webhook·외부 integration의 rotation readiness를 자동으로 해결하지 않음.

## 운영 메모

시사점: fleet view를 inventory의 시작점으로 사용하고, 각 cluster의 API client와 automation dependency를 change record·drill 결과에 연결해야 함.

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-dashboard-fleet-wide-visibility-certificate-authority-ca-rotation/
