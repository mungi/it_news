---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-security-hub-runtime-monitoring/
title: GuardDuty Runtime Monitoring is now included in the AWS Security Hub Threat Analytics plan
created: 2026-10-02
ingested: 2026-10-02
published: 2026-10-02 12:35 KST
sha256: eea4895eb312705ebfa8c1d32b0fc54008810af1b080a534b03796188e11611c
tags: [cloud, aws, cybersecurity, guardduty, security-hub, eks, ecs, ec2, finops, global]
---
# GuardDuty Runtime Monitoring의 Security Hub Threat Analytics 요금 통합

- AWS What’s New canonical announcement과 RSS `Fri, 02 Oct 2026 03:35:00 GMT` 대조, KST `2026-10-02 12:35`
- image metadata 미확인, 검증된 `assets/images/fallback-security.svg` 사용
- 대상: EC2·EKS·AWS Fargate ECS의 OS·network·file activity를 검사하는 GuardDuty Runtime Monitoring
- 탐지: container escape·privilege escalation·cryptomining surface, coverage·finding type·GuardDuty security agent 유지
- 청구: Security Hub 활성 account·Region에서는 별도 GuardDuty Runtime Monitoring charge가 없어지고 Security Hub 단일 usage type으로 계량
- trial: Threat Analytics와 Security Hub Essentials free trial은 별도이며 Runtime Monitoring의 새 free trial 추가 없음
- evidence boundary: 단가·할인·invoice 영향·각 Region 제공은 pricing page, Region table, Cost Explorer와 account usage page 확인 필요

## 핵심 요약

- 변경: Runtime Monitoring 청구를 GuardDuty resource type별 line item에서 Security Hub plan usage로 통합
- 불변: detection coverage·finding type·security agent·reconfiguration 필요 여부 유지
- 범위: EC2·EKS·Fargate ECS의 runtime telemetry와 container escape·privilege escalation·cryptomining 탐지
- 운영: budget·chargeback·anomaly alert를 Security Hub usage type과 account·Region tag로 재연결
- 검증: Cost Explorer·Security Hub usage·finding volume·agent health를 cutover 전후 대조
