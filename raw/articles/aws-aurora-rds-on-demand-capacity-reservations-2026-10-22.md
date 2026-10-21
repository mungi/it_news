---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-aurora-rds-on-demand-capacity-reservations/
title: Amazon Aurora and Amazon RDS now support On-Demand Capacity Reservations
ingested: 2026-10-22
published: 2026-10-22 01:00 KST
sha256: 6c29f15fca7ce80a9c820658ec369a3423f6b735262f8be36754346e63b26901
tags: [aws, aurora, rds, database, high-availability, disaster-recovery, finops, cloud, global]
---

# Amazon Aurora·Amazon RDS On-Demand Capacity Reservations

AWS What’s New 원문과 RSS 발행 시각을 기준으로 Aurora·RDS DB instance capacity 예약 기능을 기록. 페이지는 날짜만 표시하며 exact KST 시각은 RSS `Wed, 21 Oct 2026 16:00:00 GMT`에서 변환.

- 공개: Aurora와 RDS DB instance의 AZ별 compute capacity를 필요 기간 동안 예약하는 On-Demand Capacity Reservations
- 목적: instance create·restore·scale-compute·start가 capacity 부족으로 실패하는 위험 완화
- 설정: DB instance class·engine·Availability Zone·AZ별 예약량을 선택하고 Multi-AZ는 2개 이상 AZ에 예약 가능
- 사용: create·restore·modify·start 시 reservation을 reference해 reserved capacity 사용
- 기간: 즉시 사용·언제든 취소 또는 시작일 5~120일 전 예약, scheduled reservation은 최소 commitment 적용
- 과금: active reservation은 instance 실행 여부와 무관하게 On-Demand rate 청구, 기존 Reserved DB Instance·Database Savings Plans 할인 자동 적용
- 범위: 모든 AWS commercial Region의 Aurora·RDS 제공
- 경계: 특정 instance class의 실제 확보·failover·restore RTO·비용 절감은 workload·AZ·예약량별로 별도 검증 대상
