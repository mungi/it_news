---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-dynamodb-vector-search
title: Amazon DynamoDB now supports real-time vector search
ingested: 2026-08-06
published: 2026-08-06 01:59 KST  # AWS RSS-derived; page displays date only
sha256: 7f76bd5af185e0bdc399b93d4e3f7cd99e20428b181b11ce218e636f3ad01c78
tags: [cloud, database, aws, ai, vector-search, global]
---

## 원문 확인
- AWS What’s New 페이지를 2026-08-06 KST에 직접 확인
- 페이지 표시일은 `Aug 5, 2026`뿐이며 정확한 게시 시각은 AWS RSS `Wed, 05 Aug 2026 16:59:00 GMT`에서 `2026-08-06 01:59 KST`로 변환
- AWS가 DynamoDB vector index, approximate nearest neighbor search, vector index partition key와 attribute filter를 일반 제공 범위로 공지
- AWS는 99% 이상 recall에서 single-digit millisecond latency 및 trillion-vector scale을 설계 범위로 제시했으나 workload별 latency·recall·cost 보장은 아님
- all commercial AWS Regions 및 AWS GovCloud (US) Regions 제공 공지; 한국 리전 제공, quota, 가격, workload 성능은 target account 확인 필요

## 운영 검증 경계
- embedding dimension·partition key·filter selectivity·tenant/query skew별 recall@k, p50/p95 latency, RCU/WCU, index storage, ingestion/backfill을 baseline과 비교 필요
- agent memory/RAG는 tenant authorization, deletion propagation, re-embedding version, stale-vector rollback을 별도 failure test로 확인 필요
