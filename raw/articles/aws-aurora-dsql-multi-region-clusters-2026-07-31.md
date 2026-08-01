---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-adds-multi-region-clusters-four-more-regions/
title: Amazon Aurora DSQL adds multi-Region cluster support in four more Regions
ingested: 2026-08-01
published: 2026-08-01 03:00 KST
sha256: 763fd81262b61975d36cf6a570ed871b59e63719974df1fe8b47e0a881e2a3d7
tags: [cloud, database, aws, global, release]
---

# Amazon Aurora DSQL multi-Region cluster 지원 리전 확대

## 확인한 원문 사실

- AWS What’s New 제목: `Amazon Aurora DSQL adds multi-Region cluster support in four more Regions`
- 원문 표시 날짜: `Jul 31, 2026`
- 같은 AWS What’s New RSS `pubDate`: `Fri, 31 Jul 2026 18:00:00 GMT`, KST 변환 `2026-08-01 03:00`
- 추가 리전: Europe (Stockholm), Europe (Spain), Asia Pacific (Mumbai), Asia Pacific (Singapore)
- Aurora DSQL은 active-active high availability와 multi-Region strong consistency를 제공한다고 AWS가 설명
- multi-Region cluster는 peered 두 리전에 writable endpoint를 제공하고 하나의 logical database로 제시
- AWS 원문은 한 리전이 unavailable이어도 logical database가 available하다고 설명
- AWS 원문에는 US East (N. Virginia/Ohio), US West (Oregon), Asia Pacific (Mumbai/Osaka/Seoul/Singapore/Tokyo), Canada (Central/Calgary), Europe (Frankfurt/Ireland/London/Paris/Spain/Stockholm)를 multi-Region cluster 제공 목록으로 열거
- single-Region cluster 제공 리전은 별도 목록이며 Hong Kong, Melbourne, Sydney, São Paulo를 추가로 열거

## 출처 경계와 운영 메모

- 정확한 KST 시각은 source page의 날짜-only 표기가 아니라 동일 AWS RSS의 timezone-aware `pubDate`에서 변환한 값
- AWS 발표는 pair별 quota, 가격, throughput, p95/p99 latency, migration path, application compatibility, workload별 RTO/RPO를 제공하지 않음
- writable endpoint와 strong consistency 발표를 application-level retry safety, idempotency, conflict behavior, client routing, 비용 또는 규제 적합성의 보장으로 확대하지 않음
- PoC는 정상·부분 단절·리전 불능 조건에서 transaction completion, duplicate-write 방지, retry storm, connection recovery, data-consistency assertion을 별도 측정 필요
