---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iot-core-influxdb/
title: AWS IoT Core now supports native InfluxDB routing for time-series data
ingested: 2026-08-26
published: 2026-08-26 04:42 KST
sha256: 3a11d24224b9250346abd5409c96d7617094df4ecaa6c7952314e59af3e8214a
tags: [aws, iot, influxdb, time-series, telemetry, data]
---
AWS IoT Core가 IoT device의 time-series data를 InfluxDB rule action으로 직접 라우팅함. custom device-side code나 intermediate cloud service 없이 device data를 InfluxDB line protocol로 자동 변환해 Amazon Timestream managed 또는 self-hosted InfluxDB cluster에 기록하는 공식 범위임.

Device-side pre-batched payload와 IoT rules engine의 server-side aggregation을 제공하며, destination database·authentication·batching parameter를 지정하는 흐름임. Amazon Timestream for InfluxDB 제공 Global Region에서 사용 가능하다고 공지. destination network/authentication, write durability·ordering·duplicate·backpressure, schema/tag cardinality·retention, self-hosted capacity·SLO와 비용은 workload별 검증 대상임.
