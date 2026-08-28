---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/redshift-streaming-supports-kds-10mib-records/
title: Amazon Redshift streaming can now ingest 10MiB records from Amazon Kinesis Data Streams
ingested: 2026-08-28
published: 2026-08-28 06:41 KST
sha256: 0ea190e3a0c4941eb218bf89f25cce4b831fe008cf224b923c777da35f10a966
tags: [aws, redshift, kinesis, streaming-ingestion, data, cloud]
---
Amazon Redshift가 Amazon Kinesis Data Streams(KDS)에서 최대 10 MiB record를 streaming ingestion으로 받을 수 있게 됨. 기존 1 MiB 제한의 10배이며 KDS의 확장된 최대 record size와 일치함. record를 분할하지 않고 대형 payload를 Redshift로 직접 적재하는 범위임.

AWS는 이 변경으로 high-volume·large-record workload의 ingestion pipeline 단순화와 추가 use case를 제시함. 적용 범위는 Redshift가 제공되는 모든 commercial AWS Region이며, announcement는 direct streaming ingestion·KDS documentation을 후속 자료로 연결함.

공지는 schema evolution, record serialization/compression, shard throughput·producer retry, streaming materialized view latency, malformed/oversized record handling, target table/WLM·Serverless capacity, end-to-end ingest 비용과 delivery SLO를 보증하지 않음. production 적용 전 representative 1~10 MiB payload에서 producer retry·KDS throughput·ingest lag·parse error·Redshift queue/compute·completed-record 비용을 기존 split pipeline과 비교할 필요가 있음.
