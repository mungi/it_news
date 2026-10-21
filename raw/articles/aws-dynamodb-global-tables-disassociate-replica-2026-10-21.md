---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/
title: Amazon DynamoDB global tables now support disassociating replicas
ingested: 2026-10-21
published: 2026-10-21 08:00 KST
sha256: b77f194fba0a2cf745def8d5e6489daddfb348654718ab0530a8765ae54815ba
tags: [aws, dynamodb, global-tables, multi-region, database, disaster-recovery, cloud, global]
---

# DynamoDB global tables replica 연결 해제

AWS What’s New 원문과 RSS timestamp를 기준으로 replica 삭제 없는 replication topology 변경을 기록. 페이지는 날짜만 표시하며 exact KST 시각은 RSS `Tue, 20 Oct 2026 23:00:00 GMT`에서 변환.

- 변화: replica의 table·data를 삭제하지 않고 replication 송수신 중단 가능
- 결과: 동일 table을 single-Region table로 계속 사용 가능
- 사용: shared multi-account global table에서 account가 독립 table로 전환 가능
- 사용: 특정 Region replication을 멈추고 local workload·validation·audit용 table 유지 가능
- 대상: same-account·multi-account MREC global table, 모든 AWS Region
- 제어: Management Console·AWS CLI·DynamoDB API·CloudFormation 경로
- 경계: application failover·write conflict·client endpoint·stream·IAM/KMS·backup·RPO/RTO 자동 처리는 별도 검증 대상
