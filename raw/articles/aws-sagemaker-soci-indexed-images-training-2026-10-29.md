---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/sagemaker-ai-soci-images-training/
title: Amazon SageMaker AI now supports SOCI-indexed images to start training jobs in seconds
ingested: 2026-10-30
published: 2026-10-29 17:00
sha256: 58efad25c1ec886014487e72a7b8d8eb9f701ffb4e7b621fba17da5ed552c73e
tags: [aws, ai, cloud, infra, sagemaker, ecr, container, finops, weekly-briefing]
---
# Amazon SageMaker AI, SOCI-indexed image training/processing 지원

## 확인된 원문 범위

Amazon SageMaker AI가 training·processing job에서 Seekable OCI(SOCI) index가 붙은 container image를 지원함. AWS는 deep learning image가 통상 10GB를 넘고 image pull 동안 GPU 비용이 발생하는 문제를 배경으로, 시작에 필요한 file만 먼저 가져오고 나머지를 background streaming하는 lazy loading 경로를 설명함.

- 성능 주장: SOCI-indexed image가 training container start를 seconds 수준으로 만들고 image pull 중 GPU idle time을 최대 90% 줄일 수 있다는 AWS 측 설명
- 적용: private Amazon ECR repository의 SOCI-indexed image를 training 또는 processing job에서 참조하는 방식
- 준비: AWS Deep Learning Container의 `-soci` tag 사용 또는 open-source tool로 own ECR image에 SOCI index 추가, image rebuild 불필요 범위
- 동작: SageMaker AI가 index를 자동 감지하며, index 없는 image는 기존 download 경로 사용, index 사용 불가 시 standard download로 fallback
- 제공: SageMaker AI 제공 모든 AWS Region, API·CLI·SDK·Console 범위

## 운영 메모

SOCI는 image pull 대기와 GPU idle time을 줄일 수 있는 image-delivery 경로이며 training code initialization, dependency download, dataset staging, GPU allocation queue, training throughput을 보장하지 않음. 실제 절감은 image layer 구성·first-read file·ECR path·node cache·job lifecycle에 따라 달라져 full image와 동일 workload canary가 필요함.

- 검증: 동일 image digest와 dataset에서 full-image·SOCI-image의 job submit→container start·first-step·GPU utilization·ECR transfer·failure rate를 분리 측정
- 통제: image digest·SOCI index·SBOM·signature·vulnerability scan·retention policy를 같은 release artifact로 연결
- 배포: index missing·corrupt·stale tag·ECR permission denial 시 standard download fallback과 job retry·rollback을 canary에서 확인

## 출처

https://aws.amazon.com/about-aws/whats-new/2026/10/sagemaker-ai-soci-images-training/
