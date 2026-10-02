---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-well-architected-agent/
title: AWS Well-Architected Agent is now available in preview
created: 2026-10-02
ingested: 2026-10-02
published: 2026-10-02 05:00 KST
sha256: 3e45797bd302733837cc71436ab1b061b4670903c09909a2a27414c70c97e0bc
tags: [cloud, aws, well-architected, iac, devops, sre, global]
---
# AWS Well-Architected Agent preview

- AWS What’s New canonical announcement과 RSS `Thu, 01 Oct 2026 20:00:00 GMT` 대조, KST `2026-10-02 05:00`
- article-specific Open Graph/Twitter image metadata 미확인, 검증된 `assets/images/fallback-cloud.svg` 사용
- preview: AWS Trusted Advisor·AWS Well-Architected Tool의 차세대 AI-powered service로 비용·보안·성능·신뢰성 infrastructure 분석과 business-goal 기반 권고 우선순위화
- analysis: key metric·application topology를 Well-Architected best practice에 대조하고 Terraform·CDK·CloudFormation template의 gap·IaC code change 반환 범위
- remediation: 해당 권고에 SSM runbook·prescriptive CLI script·guided console walkthrough 제공, database Multi-AZ failover와 cost/performance cross-pillar 분석 사례
- availability: access는 US East (N. Virginia)·US East (Ohio)·US West (Oregon), AWS commercial Region workload onboarding 가능
- entitlement: AWS Support를 통해 AWS Support plan 고객에게 제공
- evidence boundary: 자동 apply·IAM/CloudTrail·change-set integration·resource coverage, region feature parity·quota·pricing·data retention·residency·SLA는 공지에서 미확정, account·User Guide 확인 필요

## 핵심 요약

- 공개: `AWS Well-Architected Agent` preview와 Trusted Advisor·Well-Architected Tool 차세대 recommendation workflow 제공
- 분석: topology·metric·Terraform/CDK/CloudFormation을 Well-Architected pillar와 대조하는 범위
- 실행 경계: SSM runbook·CLI script·IaC code change 제안은 제공하되 production authorization 대체 아님
- 제공 조건: US 3개 control-plane region·commercial Region workload onboarding·AWS Support plan 조건
- 운영: read-only pilot에서 finding quality·IaC diff·approval·rollback을 기존 change gate와 대조 필요
