---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-opensearch-ui-one-click-dashboard-migration
title: Amazon OpenSearch UI now supports one-click dashboard migration
ingested: 2026-07-18
published: 2026-07-18 02:23 KST
sha256: 36c29c016b8b987fced975551ebcc959a6da9d0b41db7c21711d67762cea90ff
tags: [cloud, aws, opensearch, observability, migration]
---
# Amazon OpenSearch UI now supports one-click dashboard migration

- Amazon OpenSearch UI가 legacy OpenSearch Dashboards의 tenant와 saved object를 one-click으로 이전하는 기능을 공개함
- OpenSearch domain과 serverless collection 모두에서 새 또는 기존 OpenSearch UI workspace로 migration 가능
- 여러 legacy tenant를 single workspace로 변환하거나 팀별로 분리 유지하는 선택지를 제공함
- AWS는 OpenSearch UI를 여러 data source용 search와 unified observability를 위한 zero-downtime serverless interface로 설명함

## 출처 사실과 경계

- 기능은 AWS 발표 기준 OpenSearch UI를 제공하는 모든 Region에서 사용 가능
- 공지는 saved object 수작업 재생성 감소를 설명하지만 모든 visualization·role·data source 연결의 무변경 호환성을 보장하지 않음
- tenant 통합은 UI migration뿐 아니라 data access boundary 변경으로 검토 필요

## 운영 검증 경계

- migration 전 tenant owner·role·saved search·visualization·alert·data source dependency export 필요
- canary workspace에서 query result·visualization·alert delivery·least privilege를 기존 dashboard와 비교할 대상
- cutover 후 access denial·error·cross-team data exposure·rollback 기준을 release evidence로 보존할 대상
