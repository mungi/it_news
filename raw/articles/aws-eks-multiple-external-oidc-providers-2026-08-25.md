---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-multiple-oidc-providers/
title: Amazon EKS now supports multiple external OIDC identity providers per cluster
ingested: 2026-08-25
published: 2026-08-25 03:29 KST
sha256: 04aa2161a6bfd3bbef9e05e55ce4b6f9959121addf7125f64117215fac767352
tags: [aws, kubernetes, infra, cloud-security, cicd]
---
AWS는 Amazon EKS cluster 하나에 외부 OpenID Connect(OIDC) identity provider를 최대 10개 연결할 수 있게 했음. AWS 공식 공지는 직원·계약자·CI/CD system처럼 user/workload population이 다른 조직이 하나의 provider 또는 intermediary identity broker로 통합하지 않고, provider별 identity mapping을 cluster에 독립적으로 구성하는 사용 사례를 설명. 기존 IAM authentication은 새 provider들과 병행하며, Console 또는 AWS CLI·SDK의 `AssociateIdentityProviderConfig` API로 기존과 같은 방식으로 연결 가능. AWS는 EKS 제공 모든 Region과 추가 비용 없음을 명시함.

공지는 provider별 issuer·audience·claim mapping, RBAC binding, group collision, token TTL·revocation, IdP outage failover, workload identity와 human access 분리, audit log retention·regional compliance, 기존 client/tool compatibility를 보증하지 않음. IdP를 추가하면 Kubernetes API server의 authentication trust boundary와 운영 runbook이 늘어나므로, test cluster에서 JWT issuer·audience·claim·RBAC·break-glass·revoke·IdP 장애·CI credential rotation을 함께 검증해야 함.
