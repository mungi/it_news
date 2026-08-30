---
source_url: https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/
title: Tencent Hy4 preview 공개·오픈소스 제공
ingested: 2026-08-30
published: 2026-08-28 17:48 KST
sha256: 9d4037f3576321a665ec977b7fe81651c8d509ae81a18098031757dbd101d224
tags: [ai, foundation-model, open-source, inference, long-context, devtools, global]
---
Tencent 공식 발표의 `article:published_time` `2026-08-28T08:48:45+00:00`를 KST `2026-08-28 17:48`로 변환해 기록함. Tencent는 Hy4 preview를 전체 770B·활성 49B 매개변수와 100만 token 초과 context window를 갖춘 오픈소스 모델로 공개했으며 WorkBuddy·CodeBuddy·Yuanbao·ima와 Tencent Cloud TokenHub·OpenRouter API 접근 경로를 제시함.

공식 발표는 Tencent 내부 163명 전문가가 203개 engineering task를 평가한 blind evaluation에서 Hy4 preview가 4점 만점 평균 2.99, GLM-5.3이 2.92, Kimi K3가 2.94를 기록했다고 제시함. 내부 task set·judge·runtime 결과이므로 외부 benchmark 또는 일반 production 품질로 확대하지 않음.

Tencent는 Hy4가 training method·data strategy·evaluation framework·low-level operator 개선안을 제안·실험하고 결과를 이후 탐색에 반영하는 초기 recursive self-improvement loop에 참여했다고 설명함. inference bottleneck 분석과 operator fusion·communication 최적화로 baseline 대비 end-to-end throughput 31.8% 향상을 주장하나 hardware·network topology·precision·batch·concurrency·context·cache 조건은 별도 재현 대상임.

발표 가격은 100만 token 기준 input $0.834, output $2.501, cache hit $0.042임. 도입 전 weight revision·digest·license·serving framework·accelerator topology·quantization과 API route별 data retention·quota·cache accounting을 inventory하고, representative long-context task에서 quality·tool success·TTFT·p95/p99·tokens/s·GPU memory·effective token cost·fallback rollback을 기존 route와 비교해야 함.
