---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-msk-tls/
title: Amazon MSK now supports TLS 1.3 for data in transit
ingested: 2026-10-31
published: 2026-10-31 02:00
sha256: 05bc14427da8591c9808460593875b3aed2e6f759659a41652f8930ac508a622
tags: [cloud, infra, cybersecurity, global]
---

# Amazon MSK Provisioned TLS 1.3 encryption policy

- 확인 시각: 2026-10-31 11:29 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-msk-tls/

## 확인한 사실
- MSK Provisioned cluster가 named encryption policy를 통해 TLS 1.3 지원
- policy가 accepted TLS version·cipher suite를 정의하고 조건 미충족 connection을 거부
- TLS 1.2·1.3 병행 policy의 highest-version negotiation과 TLS 1.3-only policy 선택 범위 명시
- MSK Provisioned 제공 모든 AWS Region에서 추가 비용 없이 제공 범위 명시

## 운영 경계
- policy 적용 전 existing cluster는 변경되지 않음
- TLS 1.3 지원이 PQC protection·certificate algorithm 변경·모든 Kafka client 호환성·end-to-end encryption을 자동 보장하지 않음
