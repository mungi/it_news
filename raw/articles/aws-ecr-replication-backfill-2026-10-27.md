---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/replication-backfill-amazon-ecr
title: Amazon ECR replication backfill for existing container images
ingested: 2026-10-28
published: 2026-10-27 05:24
sha256: 3071217058f78bd7d704cca87727489a2442c0ed65cd60e1109eaaf94578a1b6
tags: [cloud, aws, containers, devops, supply-chain, global, release]
---

# Amazon ECR replication backfill for existing container images

- 확인 시각: 2026-10-28 01:53 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/replication-backfill-amazon-ecr

## 확인한 사실
- existing private registry image를 configured replication destination으로 복제하는 replication backfill 공개
- 기존에는 replication configuration 이후 push한 image만 자동 replication되고 existing image는 manual retag 필요
- single API call로 full catalog backfill 가능
- 최대 10개 concurrent backfill job, progress·per-image result API, stop job 지원
- new Region expansion·DR readiness·rule update·compliance catalog completeness를 사용 사례로 제시

## 운영 경계
- backfill은 destination digest parity·image scan/signature·repository policy·target Region pull·deployment runtime success를 자동 보장하지 않음
