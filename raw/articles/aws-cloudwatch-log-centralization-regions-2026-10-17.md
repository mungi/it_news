---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-cloudwatch-centralization-region-expansion/
title: Amazon CloudWatch log centralization now available in AWS GovCloud and additional commercial Regions
created: 2026-10-17
ingested: 2026-10-17
published: 2026-10-17 05:04 KST
sha256: 400a4b2b44d3c7e68434986dfd096f5fedd567c83c751feacbc0f98fdbc25788
tags: [aws, cloudwatch, logs, observability, security, governance, cloud, global]
---
# Amazon CloudWatch 로그 중앙화, GovCloud·13개 상용 리전으로 확대

AWS 공식 What’s New API와 canonical announcement의 제공 범위를 기록.

- 제공: CloudWatch log centralization을 AWS GovCloud(US-East·US-West)와 Cape Town·Hong Kong·Hyderabad·Jakarta·Malaysia·Melbourne·Canada West(Calgary)·Milan·Spain·Zurich·Tel Aviv·Bahrain·UAE에 추가 제공
- 기능: AWS Organizations 통합으로 전체 조직·특정 OU·선택 account의 여러 account·Region log를 단일 destination account로 복사
- 맥락: 복사한 log에 source context를 enriched system field로 보존하는 공지 범위
- 구성: CloudWatch console·AWS CLI·AWS SDK로 centralization rule 생성 가능
- 비용: 한 개 centralized copy는 무료, 추가 copy는 GB당 $0.05라는 공지 범위
- 경계: retention·KMS/IAM policy·cross-partition 통합·parser 호환성·delivery lag·alert completeness는 자동 보장 범위 아님
- 팀 액션: rule scope, source/destination owner, KMS·retention·SIEM parser, copied byte·delivery lag·coverage·추가 copy 비용을 동일 change record로 검증
