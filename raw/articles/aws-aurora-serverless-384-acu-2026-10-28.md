---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-serverless-supports-384-acu/
title: Amazon Aurora serverless now supports up to 384 ACUs
ingested: 2026-10-28
published: 2026-10-28 01:00
sha256: a97f6568696cffacaa1f9bb362f6de100bbdcdad022bdebb756f199b2eee770d
tags: [cloud, aws, database, postgresql, serverless, finops, global, release]
---

# Amazon Aurora Serverless 최대 384 ACU

- 확인 시각: 2026-10-28 14:10 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-serverless-supports-384-acu/
- 발행: AWS RSS `Tue, 27 Oct 2026 16:00:00 GMT` → 2026-10-28 01:00 KST

## 확인한 사실
- Aurora PostgreSQL-Compatible Edition의 Aurora Serverless v2가 최대 384 ACU 지원, 이전 256 ACU 대비 50% 확대
- ACU당 약 2 GiB memory 및 이에 상응하는 CPU·networking 제공이라는 AWS 설명, 단일 DB는 최대 약 768 GiB memory 범위
- workload 완료 후 zero까지 자동 축소하는 동작을 유지하며, burst·idle window가 섞인 agentic AI workload를 사용 사례로 제시
- 신규 cluster는 지원 engine version에서 maximum capacity를 384 ACU까지 설정 가능
- Platform Version 4의 기존 cluster는 maximum capacity 변경 가능, 구형 platform은 pending maintenance action을 통한 Platform Version 4 upgrade 필요
- 지원 범위: Aurora PostgreSQL 18.4·17.10·16.14·15.18·14.23 및 Platform Version 4

## 운영 경계
- 384 ACU maximum은 query throughput·p99 latency·connection scale·failover duration·regional quota를 자동 보장하지 않음
- Platform Version upgrade 전 parameter group·extension·client driver·maintenance window·restore/rollback 경로 검증 필요
- agent retry·concurrency와 query budget을 통제하지 않으면 capacity burst가 ACU-hour·I/O 비용과 downstream saturation으로 연결될 리스크
