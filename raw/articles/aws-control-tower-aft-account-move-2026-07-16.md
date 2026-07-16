---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-control-tower-account/
title: AWS Control Tower Account Factory for Terraform now re-applies customizations when accounts move between OUs
ingested: 2026-07-17
published: 2026-07-16 13:07 KST
sha256: 65e47e0519d60f184c69dc46c3a85c2b50eb77eddcafe4738eb7cf2bdfcd6606
tags: [aws, cloud, terraform, platform-engineering, governance]
---

# AWS Control Tower AFT OU 이동 후 Terraform 사용자 지정 자동 재적용

- AWS가 Account Factory for Terraform(AFT)의 `account_move` trigger를 공개해 계정이 다른 Organizational Unit(OU)로 이동할 때 customization을 자동 재적용 가능
- 설정: `aft_customization_triggers = ["account_move"]`를 AFT deployment에 지정하는 opt-in 방식
- 실행 범위: bootstrap·provisioning phase를 건너뛰고 global·account-level customization만 재실행
- 예외: `account_skip_customization_triggers = "true"`로 특정 계정의 trigger 실행 제외 가능
- 배경: 기존에는 enrolled account의 OU 이동 뒤 재적용을 수동으로 시작해야 해 OU 기반 compliance·security baseline drift 위험 존재

## 원문에서 확인한 범위

- AWS는 Terraform Cloud·Enterprise workspace naming 변수 지원, AFT logging bucket 접근 제어 강화, 대규모 AWS Enterprise Support enrollment 확장도 같은 발표에 포함
- AFT 제공 모든 AWS 리전에서 사용할 수 있다는 AWS 설명
- 원문은 기능 범위와 설정을 설명하며, 계정별 customization 성공률·실패 recovery·rollback 보장은 제시하지 않음

## 운영 해석 경계

- OU 이동은 network·IAM·logging·tagging 정책의 적용 범위를 바꿀 수 있는 control-plane 변경으로 취급 필요
- 자동 재적용 전 OU별 Terraform variable, provider 권한, remote state dependency, idempotency를 staging에서 검증 필요
- skip 설정은 임시 예외로 관리하고 owner·사유·만료일·재검증 결과를 change evidence로 보존 필요
