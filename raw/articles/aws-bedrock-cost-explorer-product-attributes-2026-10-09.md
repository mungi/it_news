---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-bedrock-attributes-in-cost-explorer/
title: AWS Cost Explorer, Budgets, and Dashboards now support Amazon Bedrock product attributes
created: 2026-10-09
ingested: 2026-10-09
published: 2026-10-09 03:51 KST
sha256: 7aaca9c3349f6dc1091c37a1ef19ebb18b0b8a38a0dcd90689d82d41f15e3311
tags: [ai, cloud, aws, finops, inference, global]
---
# Amazon Bedrock 비용 product attribute 분석

- AWS What’s New RSS: `Thu, 08 Oct 2026 18:51:00 GMT`, KST `2026-10-09 03:51`
- source boundary: AWS는 Cost Explorer·Budgets·Dashboards의 product attribute filter/group과 Region 범위를 명시함. billing delay·tag completeness·account별 attribution 정확도는 공지에서 보장하지 않음

## 핵심 요약

- 제공: Bedrock cost의 model·provider·inference type·feature product attribute 분석
- 활용: Cost Explorer·Dashboards group/filter, Budgets filter 지원
- 연결: application inference profile·project/workspace cost allocation tag와 IAM principal tag 결합 범위
- 범위: GovCloud US·China Beijing/Ningxia를 제외한 Region, additional charge 없음
- 팀 액션: untagged/shared-principal/cross-account spend를 exception bucket으로 분리
