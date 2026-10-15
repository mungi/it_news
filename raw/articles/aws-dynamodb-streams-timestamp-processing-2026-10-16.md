---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-streams-timestamp-processing
title: Amazon DynamoDB Streams now supports timestamp-based stream processing
created: 2026-10-16
ingested: 2026-10-16
published: 2026-10-16 03:30 KST
sha256: 02080297c0ad04beae6529987d7d9e4c639c6913d621ecd0dd1616f98398e2d7
tags: [aws, dynamodb, streams, database, recovery, audit, infra, global]
---
# Amazon DynamoDB Streams timestamp-based processing

AWS 공식 공지와 Recent Announcements RSS의 `AT_TIMESTAMP` shard iterator 추가를 기록.

- 시작 위치: 가장 오래된 retained record 또는 새 record만 선택하던 기존 방식에 timestamp 기반 시작점 추가
- 범위: 지정 시각 이후 첫 record부터 읽는 `AT_TIMESTAMP` shard iterator, DynamoDB Streams Kinesis adapter를 통한 KCL 사용 경로
- 용도: 중단 뒤 resume, debugging·audit replay, backlog 건너뛰기, PITR export 시각 이후 동기화
- 제공: 모든 commercial AWS Region·AWS GovCloud (US)·China Region, 표준 `GetRecords` API 요청 요금 외 추가 요금 없음
- 경계: 24시간 stream retention, record 처리의 멱등성·ordering·consumer checkpoint·PITR export consistency는 애플리케이션 설계 범위
- 팀 액션: timestamp replay request에 export watermark·checkpoint·deduplication key·lag/duplicate metric을 함께 기록
