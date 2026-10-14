---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-resource-criticality/
title: AWS Security Hub now supports resource criticality for prioritization
created: 2026-10-14
ingested: 2026-10-14
published: 2026-10-14 10:00 KST
sha256: 76659c5252823069321c2e4374e09d9d357e3dd4757a31437e085f56c4d91974
tags: [aws, cloud-security, security, asset-criticality, global]
---
# AWS Security Hub now supports resource criticality for prioritization

AWS 공식 공지의 Security Hub exposure prioritization용 resource criticality 기능을 기록.
- exposure prioritization에 resource criticality를 추가해 business-critical resource를 위협하는 노출의 triage를 지원
- automation rule로 특정 account의 compute resource를 Very High처럼 설정 가능하며 기존 inventory와 이후 발견 resource에 적용
- resource tag·name에서도 별도 설정 없이 criticality 추론, 결정 source 기록
- Resources 페이지와 exposure finding의 Impact assessment에서 정렬·필터·그룹화 지원
- Security Hub Essentials에 추가 비용 없이 기본 활성화
- 경계: criticality는 severity·exploitability·active attack의 대체값이 아니며 tag·rule·asset owner의 정합성 검증 필요
- 팀 액션: criticality taxonomy와 tag drift reconciliation을 SOC escalation·patch SLA에 연결
