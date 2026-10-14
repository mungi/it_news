---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/region-switch-target-health-ssm-lambda/
title: ARC Region switch adds four new capabilities
created: 2026-10-15
ingested: 2026-10-15
published: 2026-10-15 02:38 KST
sha256: 4fcad65ab00e5dc02be8179e2982e1d6c12eea328c2037aa4727e0851adeaf7c
tags: [aws, arc, disaster-recovery, failover, ssm, lambda, sre, global]
---
# ARC Region switch adds four new capabilities

AWS 공식 공지의 Amazon Application Recovery Controller(ARC) Region switch failover automation·readiness check 확장을 기록.

- `SSM Run Command` execution block: failover 중 managed instance·VM에 command 실행, plan evaluation에서 document target과 IAM permission 검증
- custom action Lambda execution block: recovery plan별 payload 전달로 Lambda 재사용 범위 확장
- service quota parity check: primary·recovery Region의 service quota 차이 사전 점검
- compute scaling action: target group health를 기다리는 failover step 추가
- 범위: ARC Region switch는 Regional impairment 중 multi-Region application failover orchestration과 bounded recovery time을 목표로 하는 기능
- 경계: 공지는 application consistency, data replication lag, external dependency, 실제 RTO 보장을 제공하지 않음
- 팀 액션: SSM document·IAM role·Lambda payload schema·regional quota·target-health timeout을 IaC·game day evidence에 연결
