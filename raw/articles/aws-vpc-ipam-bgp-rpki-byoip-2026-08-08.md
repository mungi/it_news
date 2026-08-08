---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-vpc-ipam-bgp-rpki-byoip/
title: Amazon VPC IPAM now supports BGP route protection monitoring and delegated RPKI for BYOIP prefixes
ingested: 2026-08-08
published: 2026-08-08 01:00
sha256: 13fb9ab2294580ea11f4a63f8b5e793faa4f2ceb3195100689964e0566e31bfd
tags: [cloud, infra, networking, cloud-security]
---

- AWS 공식 공지: VPC IPAM이 BYOIP prefix의 BGP route protection monitoring과 delegated RPKI 관리를 지원
- dashboard 범위: account·Region 전체 RPKI validity·ROA strength·route overlap 조회, invalid/missing ROA와 hijacking 가능성 overlap 식별
- delegated RPKI: ARIN·RIPE·APNIC·LACNIC 중 해당 RIR과 1회 연동 후 BYOIP provisioning의 ROA 생성·만료 전 갱신, on-premises prefix ROA 관리
- 제공 범위: commercial AWS Region, GovCloud (US)와 중국 Beijing/Ningxia 제외; route blocking·RIR 권한·가격·propagation·조직별 response SLA는 별도 검증 필요
