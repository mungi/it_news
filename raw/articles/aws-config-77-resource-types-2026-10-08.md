---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-config-new-resource-types
title: AWS Config now supports 77 new resource types
ingested: 2026-10-09
published: 2026-10-08 00:00 KST
sha256: 7834af74215bc308dd4dcce3f2f321756b9c9b364271718eadee01298ede90fe
tags: [cloud, cloud-security, security, compliance, global]
---

# AWS Config 77개 신규 리소스 타입: recorder·rule·aggregator 적용 범위

- AWS Config가 EC2·Amazon S3 Files·Amazon Q Business 등을 포함한 **77개** resource type을 추가 지원
- all-resource recording 활성 계정은 새 타입을 자동 추적하며, Config rules·Config aggregators에서도 이용 가능한 범위
- `AWS::BedrockAgentCore::PaymentConnector`·`ResourcePolicy`, `AWS::GuardDuty::ThreatEntitySet`·`TrustedEntitySet`, `AWS::InspectorV2::CodeSecurityScanConfiguration`, Q Business data source·index·permission·plugin·retriever·web experience 포함
- 공지는 resource type 지원 범위를 설명하며, 개별 rule applicability·resource schema·configuration item volume·요금·조직별 remediation 결과는 별도 검증 필요

## 운영 경계

- 신규 타입별 recorder capture, central aggregator visibility, rule evaluation, exception·remediation evidence를 representative account에서 end-to-end 확인 필요
- automatic recording을 automatic compliance로 해석하지 말고 resource policy·permission·tag/owner·IaC drift의 통제 적용 여부 검증 필요
