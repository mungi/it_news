---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys/
title: Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion
ingested: 2026-09-24
published: 2026-09-24 07:51 KST (AWS RSS pubDate; source page displays Sep 23, 2026)
sha256: 4e9631011ceb0c06a3f9d0eb34194bfa627d7ba5e4fbf4bb0185fb49cd7db864
tags: [aws, cloud, data, streaming, kinesis, serverless, global]
---

# Amazon Kinesis Data Streams announces Service-Managed Partition Keys for simplified data ingestion

AWS는 Amazon Kinesis Data Streams의 On-Demand Standard와 On-Demand Advantage stream에 service-managed partition key를 추가했다고 발표함. record ordering이 필요 없는 log aggregation·metrics collection·IoT telemetry workload에서 producer가 partition key를 지정하지 않아도 service가 warm capacity 기준으로 shard에 record를 분산하는 범위임. 기존 random UUID 방식은 aggregate capacity가 남아도 shard별 throughput 편차와 throttling을 만들 수 있었으며, AWS는 최신 SDK 또는 Kinesis Producer Library(KPL)로 upgrade하면 producer-side distribution logic 없이 이 기능을 사용할 수 있다고 설명함. 모든 AWS commercial Region에서 추가 비용 없이 제공한다고 공지했으나 ordering 보장, regional quota·throughput, application-level idempotency·retry·consumer lag는 workload canary로 별도 확인 필요.
