---
source_url: https://z.ai/blog/glm-5.3-flash
title: GLM-5.3-Flash: Frontier Intelligence, Flash Cost
ingested: 2026-08-27
published: 2026-08-26
sha256: 574604861f18034cc0559685a6403244af75936c49791510756677e4649a822b
tags: [ai, foundation-model, multimodal, inference, agent, global]
---
Z.ai가 GLM-5 시리즈 최초의 네이티브 멀티모달 모델 `GLM-5.3-Flash`를 공개함. 총 320B parameter 중 18B active parameter를 사용하며, GLM-5.2 대비 benchmark와 real-world workload 개선 및 약 10분의 1 비용이라는 vendor claim을 제시함. 공개 전 OpenCode·OpenRouter에서 `ox-alpha` 이름으로 익명 시험했으며, 해당 traffic은 중국 AI chip에서 제공됐다고 밝힘.

공식 글은 sparse attention과 linear attention을 결합한 hybrid architecture, `mHC`(Manifold-Constrained Hyper-Connections), 30T-token multimodal pre-training corpus를 효율성 요소로 제시함. 1M-token context indexer의 latency·memory overhead를 줄이기 위해 네 key vector를 weighted pooling으로 하나로 압축하는 `IndexPool`을 설명함. GLM-5.3 대비 attention compute 3.0배, layer당 BF16 KV cache size 4.4배 감소라는 자체 비교 수치와 Artificial Analysis Intelligence Index v4.1.1에서 task당 할인 가격 $0.045·점수 57이라는 결과를 제시함.

공식 benchmark와 비용은 Z.ai의 평가·가격 주장 범위임. model revision, context length, prompt·tool harness, output token, caching, batch·concurrency, region·rate limit, availability, data retention, safety policy, 실제 청구 비용은 별도 검증 대상임. 도입 평가는 대표 workload에서 task success·quality regression·TTFT/TPOT·p95/p99·token당 비용·cache hit·retry·fallback을 같은 trace로 비교해야 함.
