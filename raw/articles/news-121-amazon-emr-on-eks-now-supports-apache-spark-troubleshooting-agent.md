---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-emr-eks-spark-troubleshooting/
title: Amazon EMR on EKS now supports Apache Spark troubleshooting agent
ingested: 2026-07-11
published: 2026-07-11 03:16
tags: [ai, cloud, infra, weekly-briefing]
---

# Amazon EMR on EKS, Apache Spark troubleshooting agent 지원

- 출처: AWS What's New
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-emr-eks-spark-troubleshooting/
- 발행(KST): 2026-07-11 03:16

## 요약
핵심: AWS가 EMR on EKS에서 Apache Spark troubleshooting agent 지원을 공개, Spark 애플리케이션 실패 분석과 권장 조치를 자동화하는 방향. 영향: 데이터 플랫폼 운영은 로그 수집을 넘어 agent 기반 원인 분석과 human review를 결합하는 형태로 이동.

## 상세
AWS What’s New는 Amazon EMR on EKS가 Apache Spark troubleshooting agent를 지원한다고 발표함. Kubernetes 기반 Spark 운영팀은 job 실패, 성능 저하, 리소스 설정 문제를 진단하는 데 agent-assisted workflow를 적용할 수 있으며, 자동 권고와 운영자 검토 경계를 함께 설계해야 함.

## 무슨 일이 있었나
- 핵심: Amazon EMR on EKS가 Apache Spark troubleshooting agent 지원을 발표
- 대상: EKS 위에서 Spark 워크로드를 운영하는 데이터 플랫폼·ML 플랫폼 팀
- 목표: Spark application 장애·성능 이슈의 진단 시간을 줄이고 운영 권고를 제공하는 agent-assisted workflow 추가

## 본문 핵심 포인트
- 운영 변화: Spark troubleshooting은 driver/executor log, Kubernetes event, resource request/limit, shuffle, skew, dependency 문제를 함께 봐야 함
- 자동화 범위: agent는 실패 증상과 관련 로그를 연결해 원인 후보와 next action을 제시하는 보조 계층으로 활용 가능
- 경계: 자동 권고가 cluster setting 변경이나 재실행 정책으로 이어질 때 human review와 audit trail 필요
- 연계: EMR on EKS 운영은 Kubernetes, IAM, S3, Glue, network, workload scheduling 지표를 함께 보는 구조

## 왜 중요한가
- 데이터 플랫폼: Spark 장애는 배치 SLA, feature pipeline, ML training data freshness에 직접 영향
- 운영 비용: 반복 장애 분석을 agent로 줄이면 SRE/DataOps 인력의 야간 대응과 MTTR 감소 가능
- 품질 리스크: agent 권고를 무검증 적용하면 과도한 리소스 증설이나 잘못된 재시도로 비용 증가 가능

## 시사점
- 팀 액션: Spark incident runbook을 agent 입력과 운영자 승인 단계로 나누고 권고 결과를 ticket/comment로 남기는 흐름 필요
- 검토 항목: IAM scope, 로그 보존, 민감 데이터 마스킹, 자동 재시도 상한, 리소스 증설 권한 분리 필요
- 운영 과제: troubleshooting agent 효과는 MTTR, 재발률, 권고 수용률, 추가 비용으로 측정 필요
