---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/time-series-collection-next-generation-opensearch-serverless/
title: Introducing time series collections for the next generation of Amazon OpenSearch Serverless
ingested: 2026-10-29
published: 2026-10-29 03:35
sha256: 74fa71c3a508ff91e07563772d345a2558a440e35148b45298ae4b1e47ae89ff
tags: [aws, cloud, infra, weekly-briefing]
---

# Amazon OpenSearch Serverless 차세대 time series collection: hot/warm tier·100TB hot storage·alerting 추가

## 확인된 원문 범위

AWS는 cluster provisioning 없이 time-series data를 ingest·store·analyze하고, hot tier에 이어 lower-cost warm tier로 덜 자주 접근하는 data를 이동할 수 있다고 설명함. application monitoring·security analytics·IoT telemetry가 사용 사례이며, warm tier가 hot query 성능·detection coverage·retention compliance를 자동으로 보장하지 않음.

## 운영 메모

시사점: hot retention을 기본값으로 두지 말고, incident query window·security detection rule·compliance retention을 기준으로 tier policy와 cost model을 정해야 함.

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/time-series-collection-next-generation-opensearch-serverless/
