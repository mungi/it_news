---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/
title: AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances
ingested: 2026-10-29
published: 2026-10-29 03:44
sha256: 6cbe28ba8d96e3880a199bca00bd06790f0644a6f7e92ec4cd4b06f9cdd84c87
tags: [aws, cloud, infra, serverless, devops, weekly-briefing]
---
# AWS Lambda Managed Instances, SOCI lazy loading 지원

## 확인된 원문 범위

AWS Lambda Managed Instances에서 OCI image로 패키징한 Event Function에 Seekable OCI(SOCI) lazy loading을 지원함. 실행 환경 시작 단계마다 필요한 file만 가져오며, AWS는 container startup을 최대 70% 줄일 수 있다고 설명함.

- 대상: Lambda Managed Instances에서 OCI image로 실행하는 Event Function
- 동작: 전체 image를 먼저 내려받는 대신 image layer file 목록인 SOCI index를 이용해 시작 단계별 필요 file만 streaming
- 설정: image의 SOCI index를 생성해 Amazon ECR에 push하고, function create/update 시 SOCI-indexed tag를 image URI로 설정 후 version publish
- 범위: Lambda가 SOCI index를 자동 감지하며 별도 function configuration은 필요 없고, Managed Instances 제공 모든 commercial Region에서 사용 가능

## 운영 메모

SOCI는 image pull 병목을 줄이는 선택지이며 application initialization, dependency resolution, ECR throughput, node/instance capacity, cold-start tail latency를 함께 보장하지 않음. image tag와 index의 연결, base image·layer 변경 시 index 재생성, deployment rollback 경로를 release artifact로 관리해야 함.

- 검증: 동일 workload에서 full-image와 SOCI image의 provision time·first invoke·p95/p99 cold start·ECR transfer를 분리 측정
- 통제: SOCI index와 image digest의 provenance·vulnerability scan·signature·retention을 같이 점검
- 배포: image layer 변경 뒤 stale index·tag mutable 설정·function version/alias rollback을 canary에서 확인

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/
