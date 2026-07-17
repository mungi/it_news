---
source_url: https://www.cncf.io/blog/2026/07/16/running-a-self-hosted-llm-in-kubernetes-with-vllm/
title: Running a self-hosted LLM in Kubernetes with vLLM
ingested: 2026-07-17
published: 2026-07-17 20:00 KST
sha256: 8f0c736a959b2408f1b1e58459bac4f67a3e638b068102571b1679e08459d81e
tags: [ai, infra, kubernetes, inference, open-source]
---
# Running a self-hosted LLM in Kubernetes with vLLM

- CNCF member post가 Kubernetes에서 vLLM·LINSTOR CSI로 self-hosted LLM inference stack을 구성하는 실습 경로를 공개함
- vLLM의 OpenAI-compatible REST API를 사용해 기존 OpenAI SDK·LangChain·LlamaIndex 호출을 endpoint URL 변경으로 self-hosted endpoint에 연결하는 구조 제시
- 예시는 Meta `Llama-3.2-1B-Instruct`, LINSTOR의 replicated block storage, `50Gi` PVC, `ClusterIP` service를 사용함
- 모델 가중치를 `/root/.cache/huggingface` PVC에 저장해 pod restart·node failure 뒤 재다운로드를 피하는 운영 경로 설명
- CPU-only lab에서 `--gpu-memory-utilization 0.80`을 지정해 기본 92% memory reservation으로 인한 startup failure를 피한 사례 제시

## 출처 사실과 경계

- 게시물은 2026-07-16에 CNCF 블로그에 게시된 LINBIT member post이며, 공식 Kubernetes/vLLM release announcement가 아닌 reference implementation 성격임
- self-hosting의 선택 이유로 high-volume cost predictability, latency control, data residency를 제시하지만 비용·성능 수치는 제공하지 않음
- gated Meta model 다운로드에는 Hugging Face access approval과 read token이 필요하다고 명시함

## 운영 검증 경계

- PVC·CSI replication은 model-cache durability 예시이며 model shard distribution, multi-replica vLLM serving, GPU scheduling, autoscaling, model lifecycle governance를 완성한 production architecture로 해석 불가
- `HF_TOKEN`을 Kubernetes Secret으로 주입하는 예시는 secret rotation·workload identity·namespace isolation·egress restriction을 별도로 설계해야 하는 출발점임
- hybrid routing 채택 전에는 동일 workload에서 p95 latency, tokens/s, GPU/CPU utilisation, storage warm-up, cache miss egress, managed API 비용을 직접 비교 필요
