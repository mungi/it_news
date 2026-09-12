---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/sgm-hyperpod-model-caching-inf/
title: Amazon SageMaker HyperPod now supports model caching for faster inference autoscaling and reduced cold starts
ingested: 2026-09-13
published: 2026-09-12 03:25
sha256: e3579317f83b0e2ba946c71fbae0311014b9cb57ec49f6bbef0d46651295bc2a
tags: [ai, aws, inference, autoscaling, finops, cloud, release]
---
# SageMaker HyperPod model caching GA

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/sgm-hyperpod-model-caching-inf/
- 발행: 2026-09-12 03:25 KST (AWS What’s New `Posted on: Sep 11, 2026`, RSS `18:25 GMT`)
- 확인: AWS canonical announcement·RSS publication time·본문 직접 확인

## 원문 핵심

- SageMaker HyperPod Inference의 model caching GA 공개
- weights cache는 S3/FSx 대신 local NVMe에서 model weight를 읽는 경로
- image cache는 ECR image download를 줄이기 위한 pre-pull 경로
- warm cache가 없는 node는 original source pull로 자동 fallback하는 동작
- AWS benchmark: 57GB~145GB model에서 약 60% faster scale-out, image pull 2분 이상·97% reduction 설명
- `InferenceEndpointConfig` 또는 `JumpStartModel`의 `modelCacheConfig`로 HyperPod Inference Operator lifecycle 관리

## 증거 경계

- source benchmark는 AWS가 제시한 model·image·cluster 조건 결과이며 workload별 p95·GPU cost·availability SLA 보증이 아님
- production enable 전 cache hit/miss·NVMe pressure·artifact digest·node turnover·fallback·first inference latency 검증 필요
