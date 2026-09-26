---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/aws-sts-vpc-oidc/
title: AWS IAM outbound identity federation now supports interface VPC endpoints for OIDC discovery
ingested: 2026-09-26
published: 2026-09-26 02:54 KST (AWS RSS pubDate)
sha256: 9671c16293e66c8298888dd522b3b8716a8c7cb263c877c08a2931428d3508f9
tags: [aws, cloud-security, identity-federation, oidc, jwt, privatelink, vpc, global]
---

# AWS IAM outbound federation의 PrivateLink OIDC discovery

- OIDC discovery metadata·JWKS verification key endpoint를 interface VPC endpoint로 접근 가능함.
- AWS workload는 STS short-lived JWT를 받고, external service가 해당 metadata·public key로 token 검증하는 흐름임.
- 기존 public-only endpoint 제약으로 internet access가 없던 VPC verifier workload의 discovery retrieval 경로를 AWS network 내부로 이동함.
- commercial AWS Region·AWS GovCloud (US)·China Region 제공이며 기능 자체는 추가 비용 없고 standard PrivateLink pricing 적용.
- issuer·audience·signature·expiration validation, endpoint policy·private DNS·external service authorization은 조직별 검증 대상임.
