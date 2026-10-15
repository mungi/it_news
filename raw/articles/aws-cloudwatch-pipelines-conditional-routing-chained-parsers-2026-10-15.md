---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing/
title: Amazon CloudWatch announces log routing and chained log parsers
created: 2026-10-15
ingested: 2026-10-15
published: 2026-10-15 07:14 KST
sha256: c984c1122ad3e1eabf6fc7f684c32c5d601ba9764cebbdbc5301efc54aabf8d1
tags: [aws, cloudwatch, observability, logging, pipelines, security, infra, global]
---
# Amazon CloudWatch announces log routing and chained log parsers

AWS 공식 공지와 Recent Announcements RSS의 CloudWatch pipelines conditional routing·chained parser 확장을 기록.

- RSS 발행 시각: `Wed, 14 Oct 2026 22:14:00 GMT` → `2026-10-15 07:14 KST`
- conditional log routing: 처리된 field 조건으로 event별 CloudWatch log group을 분리해 severity·source·type별 retention·access control 적용
- chained parsers: 앞 parser가 만든 field를 뒤 parser가 소비하는 순차 processor 지원
- 예시: JSON envelope를 먼저 parse한 뒤 추출 field에 Grok parser 적용
- 제공 범위: CloudWatch pipelines GA 상용 AWS Region, Console·CLI·SDK 구성
- 경계: 공지는 parser 오류 처리, schema-drift 격리, cross-account destination policy, 비용·지연 결과를 보장하지 않음
- 팀 액션: routing rule·parser order·parse failure·unmatched event·destination retention을 IaC와 test corpus로 검증
