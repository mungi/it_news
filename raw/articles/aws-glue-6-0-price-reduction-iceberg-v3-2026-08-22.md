---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-glue-6-0-price-reduction-iceberg-v3
title: AWS Glue 6.0 가격 인하·Apache Iceberg v3 지원
ingested: 2026-08-22
published: 2026-08-22 01:42 KST
sha256: f9d7391da627033ddaf5da87a6a3c9cb5593863884eba47b12358d923311a289
tags: [cloud, data, aws, database, finops, release, weekly-briefing]
---

# AWS Glue 6.0 공식 공지

- AWS RSS 발행 `Fri, 21 Aug 2026 16:42:00 GMT`를 KST `2026-08-22 01:42`로 환산
- visible page label: `Posted on: Aug 21, 2026`

## 직접 확인한 본문 사실

- AWS Glue 6.0 general availability와 **30% 가격 인하**를 AWS가 공지
- Apache Iceberg v3 full support, Apache Hudi·Delta Lake의 newer version 지원, Apache Spark 4.1·Python 3.13·Scala 2.13 runtime으로의 업데이트
- Iceberg v3의 `VARIANT` data type과 automatic shredding, row-level update용 deletion vector, spatial processing용 geometry·geography type, `UNKNOWN` type과 `DEFAULT` column value를 통한 schema evolution 제공
- Spark Declarative Pipelines, sub-second latency를 목표로 하는 Real-Time Mode streaming, Arrow-native Python UDF를 developer productivity·performance 기능으로 제시
- AWS Commercial·AWS GovCloud (US)·AWS China 전 리전 제공 범위와 console·SageMaker Unified Studio version 선택 또는 Spark Upgrade Agent migration 경로 안내

## 증거 경계와 운영 메모

- 30%는 AWS 공지의 version-level price reduction이며 account별 actual bill, regional price table, job worker type·DPU utilization·autoscaling·reserved capacity·data scan/storage/network 비용 절감 보증이 아님
- Spark 4.1·Python 3.13·Scala 2.13과 Iceberg/Hudi/Delta Lake version 변경은 UDF, connector, catalog, table format, schema evolution, streaming checkpoint의 compatibility·rollback 검증 필요
- `VARIANT`, deletion vector, Real-Time Mode, Arrow-native Python UDF의 throughput·latency·correctness는 production workload와 data distribution·file layout·concurrency 조건에서 별도 측정 필요
