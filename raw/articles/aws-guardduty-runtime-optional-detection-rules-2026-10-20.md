---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/guardduty-runtime-optional-detection-rules/
title: Amazon GuardDuty adds optional threat detection rules for Runtime Monitoring
ingested: 2026-10-20
published: 2026-10-20 01:01 KST
sha256: 11d958881851c8eb67d317991328d5a5ae64d91b034c1ed4657d44f831571f80
tags: [aws, cloud-security, guardduty, runtime-monitoring, ec2, eks, ecs, global]
---

# Amazon GuardDuty Runtime Monitoring 선택형 탐지 규칙

AWS What’s New RSS 원문을 기준으로 GuardDuty Runtime Monitoring의 선택형 탐지 규칙 추가를 기록.

- 공개: process·file·network activity를 대상으로 하는 선택형 Runtime Monitoring 규칙 50개 이상과 dry-run 제공
- 예시: `sudoers` 파일 변경, audit logging 비활성화처럼 환경별 정상 동작 또는 compromise signal이 될 수 있는 활동
- 범위: Amazon EC2, Amazon EKS, Amazon ECS의 EC2·AWS Fargate workload, 모든 상용 리전과 AWS GovCloud(US)
- 매핑: 13개 finding type과 persistence·privilege escalation·execution·defense evasion·discovery·exfiltration·command and control 전술
- 신규 finding: `CommandAndControl:Runtime/SuspiciousCommand`, `CredentialAccess:Runtime/SensitiveFileRead`, `Discovery:Runtime/SensitiveFileRead`, `Exfiltration:Runtime/SuspiciousCommand`
- 경계: 공지는 조직별 오탐률·자동 차단·침해 예방·조사 완료를 보장하지 않는 범위
- 팀 액션: dry-run에서 rule별 asset/image/identity context, alert volume, true-positive 표본, MTTA·MTTR, suppression lifecycle을 확인한 뒤 live detection canary 적용 필요
