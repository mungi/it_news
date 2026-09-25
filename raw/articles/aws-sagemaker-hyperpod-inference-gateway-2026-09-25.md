---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/sagemaker-hyperpod-inference-gateway/
title: Amazon SageMaker HyperPod Inference Gateway for scalable LLM inference
ingested: 2026-09-25
published: 2026-09-25 02:00 KST (AWS RSS pubDate)
sha256: dc45c8c30dfc8933e092ec4306860bee767379bd8ad5df3b4923786ba4408ef7
tags: [aws, ai, cloud, infra, inference, kubernetes, gpu, global]
---

# SageMaker HyperPod Inference Gateway

- AWS가 HyperPod용 Kubernetes-native GPU-aware routing add-on을 공개함.
- Envoy endpoint, request model-name router, KV cache·queue·LoRA·prefix cache 등 6개 signal endpoint picker 구조를 source 범위로 확인.
- vLLM·SGLang 등 OpenAI-compatible model server 지원과 single-cluster 제공 범위를 확인.
- first-token latency 최대 82%, p99 TTFT 97~98% 감소는 AWS mixed-hardware·burst scenario claim이며 workload canary 필요.
