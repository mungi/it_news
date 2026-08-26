---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/lambda-microvms-supports-privatelink
title: AWS Lambda MicroVMs now supports AWS PrivateLink
ingested: 2026-08-27
published: 2026-08-26 01:34 KST
sha256: 4158d50a39d8023e55dcd4ca7c84d00c8f6b5abac4315cdb57ca82c2e31d3687
tags: [aws, lambda-microvms, privatelink, vpc, network-security, cloud]
---
AWS Lambda MicroVMs가 AWS PrivateLink를 지원함. VPC resource가 public internet을 거치지 않고 MicroVM API와 각 MicroVM HTTP endpoint에 private connectivity를 구성하는 범위임. MicroVM image 생성·launch API와 workload HTTP endpoint가 대상임.

PrivateLink VPC Endpoint는 Console·AWS CLI·CloudFormation·AWS SDK로 생성 가능하며 Lambda MicroVMs 제공 Region에서 지원한다는 공식 공지. endpoint policy·private DNS·security group·route·cross-VPC/hybrid reachability·API authorization·TLS·PrivateLink 비용·endpoint failure와 MicroVM lifecycle SLO는 원문 보증 범위가 아니므로 isolated VPC에서 allow/deny, public-path 차단, DNS·endpoint 장애, audit log와 비용을 검증 대상으로 분리 필요.
