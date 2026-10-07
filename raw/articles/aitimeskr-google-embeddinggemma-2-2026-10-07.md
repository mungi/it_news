---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=42208
title: Google EmbeddingGemma 2 Korean report
ingested: 2026-10-07
published: 2026-10-07 12:04
sha256: 03f7a68e838a6be42467b7c6a292c90e40c2158f82468973f0cfbb1158575ff0
tags: [ai, cloud, infra]
---

# Google EmbeddingGemma 2 보도: 7.4억 파라미터 온디바이스 멀티모달 임베딩·Apache 2.0 공개

인공지능신문은 Google EmbeddingGemma 2의 740M parameter, Apache 2.0, 8K context, text-only 270M 및 optional vision/audio encoder, cross-modal embedding, MTEB code 68.76→78.68이라는 Google 측 설명을 보도했다. official model card와 benchmark methodology는 source에서 독립 확인하지 못했다.

## 운영 경계

시사점: source corpus와 target device별 retrieval recall, embedding latency, RAM/storage, battery/thermal, modality별 failure, license·model artifact provenance를 canary로 측정하고 기존 embedding model과 rollback 가능하게 비교 필요.
