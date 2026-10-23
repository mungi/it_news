---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-opensearch-serverless-supports-5-second-refresh-interval/
title: Amazon OpenSearch Serverless now supports a 5-second default refresh interval
ingested: 2026-10-23
published: 2026-10-23 03:34 KST
sha256: a52e8c07caf7709b9e5c06e3921f81227a943d34bcf5257c6e7276ed4dd0e272
tags: [aws, opensearch, vector-search, rag, data, cloud, global]
---

# Amazon OpenSearch Serverless now supports a 5-second default refresh interval

AWS What’s New RSS `Thu, 22 Oct 2026 18:34:00 GMT`와 canonical announcement를 대조해 KST `2026-10-23 03:34` 기준으로 기록.

- 변경: search·vector collection 기본 refresh interval `10초`→`5초`
- 의미: 새 ingest document의 search 가능 시점 단축
- 적용: 차세대 OpenSearch Serverless, 별도 configuration·사용자 action 없이 적용
- 대상: 현재 Amazon OpenSearch Serverless 제공 24개 리전
- 사용 사례: frequently updated full-text search·RAG·semantic search·recommendation·personalization
- 경계: embedding 생성·bulk ingest·application cache·retrieval relevance·end-to-end latency 보장 범위 아님
- 운영: source-to-search freshness와 indexing throughput·query p95·cache TTL을 별도 검증 대상
