---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215131
title: DeepSeek-V4.1-Flash KV cache compression·1M context 공개 보도
ingested: 2026-09-12
published: 2026-09-11 12:11 KST
tags: [ai, inference, finops, agent, open-source, global]
sha256: 61dca8d19347055e5c89557ed6bce7b06638e102bfc9267004b4e307313c6c0e
---

## 원문 메타데이터

- 제목: '딥시크 V4.1 플래시' 출시..."100만 토큰 창에 KV 캐시 75% 축소"
- 출처: AI타임스
- URL: https://www.aitimes.com/news/articleView.html?idxno=215131
- 기사 발행 시각: 2026-09-11 12:11 KST (`article:published_time` 2026-09-11T12:11:55+09:00)
- Open Graph image: https://cdn.aitimes.com/news/photo/202609/215131_218922_37.jpeg

## 직접 확인한 AI타임스 본문 사실

- DeepSeek-V4.1-Flash 출시와 2026-09-14부터 V4 Pro API 요청을 V4.1-Flash로 자동 라우팅한다는 기사 보도
- 100만 token context, 최대 384,000 output token, 552B backbone과 196B Engram parameter라는 기사 인용 수치
- prefill token당 8B·decode token당 16B activation, 890 bytes/token global KV cache, 이전 V4-Flash 대비 약 4분의 1이라는 설명
- off-peak/peak pricing 및 benchmark 수치는 기사 보도 범위이며 직접 청구서·SLA·regional availability 확인 범위 아님

## 직접 확인한 공식 model card 범위

- Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash` model card의 100만 token context·multimodal MoE·MIT license 표기
- 20-layer causal encoder와 20-layer decoder CED, CSA2 Full/Reindex/Reuse mode, hierarchical sparse indexer, E2M1 FP4 main KV cache 구조
- 890 bytes/token global KV cache·V4-Flash의 약 1/4이라는 model-card 수치
- Transformers·vLLM·SGLang·Docker Model Runner 예제와 model inference·tool execution·HTTP transport는 caller 책임이라는 범위

## 증거 경계와 운영 메모

- model card의 internal benchmark·구조 수치는 고객 workload의 GPU memory, throughput, p95/p99, cost, availability, security, support SLA를 보장하지 않음
- 1M context rollout 전 동일 corpus·context distribution·batch/concurrency·reasoning effort에서 KV bytes/token, GPU/host memory, prefill/decode latency, retry, task success, GPU-hour cost를 비교 필요
- AI타임스 기사 시각은 현재 보도 event ordering evidence이며 source URL은 readable report, 공식 model card와 technical report는 distinct related links로 유지
