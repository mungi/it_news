---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/elastic-disaster-recovery-plans/
title: AWS Elastic Disaster Recovery introduces Recovery Plans for orchestrated application recovery
ingested: 2026-08-28
published: 2026-08-28 03:00 KST
sha256: 20bef98f61dbe6da152071ee44112109791c33571b7d702e3dcc6dbd522a3bf9
tags: [aws, disaster-recovery, drs, recovery-plan, orchestration, infra, cloud]
---
AWS Elastic Disaster Recovery(AWS DRS)가 Recovery Plans를 제공함. recovery 또는 drill에서 다중 서버 애플리케이션을 순서대로 실행하는 기능으로, database·application tier·supporting service처럼 시작 순서 의존성이 있는 구성의 복구 절차를 한 번 정의하고 단일 action으로 실행하는 공식 범위임.

Recovery Plan은 서버를 순차 step으로 묶고 step 사이 wait time을 설정할 수 있음. 비중단 drill mode로 절차를 검증하고, 사람이 개입할 approval step을 추가하며, 실행 진행 상태를 실시간 확인할 수 있음. AWS는 수동 launch 순서 추적 대신 일관된 orchestration을 제공해 recovery time과 고압 상황의 coordination error를 줄이는 목적이라고 설명함.

AWS DRS 제공 모든 AWS Region에서 standard DRS usage 외 추가 비용 없이 사용 가능하다고 공지. 다만 공지는 application dependency discovery, database consistency·replication lag, DNS·load balancer·secret·network cutover, RTO/RPO, step timeout·rollback·approval 운영, account/Region failure, 실제 drill 결과를 보증하지 않음. production 전 dependency graph·runbook·approval owner·observable recovery evidence를 포함한 non-disruptive drill로 검증이 필요함.
