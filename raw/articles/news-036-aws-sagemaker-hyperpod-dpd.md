---
sha256: 87a2b0cebdd04d2925ada5f81b5a505bdc81b3ead93eb60b24f500e981e158ad
source_url: https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-sagemaker-hyperpod-dpd/
title: Amazon SageMaker HyperPod now supports disaggregated prefill and decode
ingested: 2026-07-07
published: 2026-07-07 06:29
tags: [aws, sagemaker, llm-inference, gpu, infra, finops]
---

# Amazon SageMaker HyperPod now supports disaggregated prefill and decode

## Source facts
- AWS announced that Amazon SageMaker HyperPod now supports Disaggregated Prefill and Decode (DPD) for LLM inference.
- DPD separates the prefill and decode phases onto dedicated GPU pools.
- The feature transfers KV cache between the pools over Elastic Fabric Adapter (EFA) using GPU-Direct RDMA.
- AWS describes the target workloads as production LLM chat assistants, agentic pipelines, RAG, and long-document analysis that need consistent per-token latency and predictable throughput under mixed traffic.
- AWS states that long-context requests can stall token generation for concurrent requests when prefill and decode share the same GPU.
- DPD lets customers scale prefill and decode capacity independently and uses an intelligent router to send long-context requests through the disaggregated path while sending shorter prompts directly to the decoder.
- Customers enable the feature by adding a `pdSpec` section to the existing `InferenceEndpointConfig` custom resource for HyperPod Inference Operator.
- AWS says DPD is available for SageMaker HyperPod clusters using the EKS orchestrator on EFA-capable instance types in all AWS Regions where Amazon SageMaker HyperPod is available.

## Korean briefing note
SageMaker HyperPod DPD는 LLM 추론 병목을 GPU 증설만으로 풀지 않고 prefill과 decode의 자원 특성을 분리하는 접근이다. 긴 컨텍스트 요청이 많은 RAG·에이전트 서비스는 prompt length 분포, KV cache 전송량, EFA 대역폭, p95/p99 token latency를 함께 측정해야 한다. 운영팀은 `pdSpec` 적용 전 traffic replay로 prefill/decode GPU 비율과 짧은 프롬프트 직접 경로의 기준을 정한다.
