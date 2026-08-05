---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213572
title: Cursor Mixture-of-Kittens MoE megakernel
ingested: 2026-08-05
published: 2026-08-05 17:05
sha256: 5341611ff29431f2879fc66876fcbb456af3a6d489863b316ee2ee71a960504f
tags: [infra, ai, gpu, open-source, global]
---

## 원문 확인
- AI타임스 `article:published_time` `2026-08-05T17:05:19+09:00` 및 `og:image` 확인
- Cursor official repository가 NVL72용 fully deterministic MoE training megakernel, Apache-2.0 license, BF16·MXFP8 forward/backward 지원을 명시
- 공식 README가 fastest baseline 대비 MXFP8 forward 최대 2.37x, MXFP8 backward 1.78x, BF16 forward 1.92x, BF16 backward 1.58x 자체 benchmark를 제시
- 공식 requirements는 Blackwell SM100/SM103, Python 3.12+, PyTorch 2.10+, CUDA 13.0+ 및 CUDA version match
- 수치는 standalone layer·Cursor internal stack 범위이며 다른 topology·model의 production throughput 보장은 아님
