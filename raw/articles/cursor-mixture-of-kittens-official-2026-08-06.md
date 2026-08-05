---
source_url: https://cursor.com/blog/mixture-of-kittens
title: Mixture-of-Kittens: our open-source MoE megakernel for NVL72s
ingested: 2026-08-06
sha256: bf6d9e867d142cb53e75314be97fe4dfd77e985663758fab522def0ca18e1527
tags: [infra, ai, gpu, open-source, global]
---

## 원문 확인
- Cursor 공식 blog와 GitHub repository를 2026-08-06 KST에 직접 확인
- official blog가 NVL72용 deterministic MoE training megakernel `Mixture-of-Kittens`의 오픈소스 공개와 computation·communication single-kernel fusion을 설명
- GitHub repository가 Apache-2.0 license, BF16·MXFP8 forward/backward 지원, NVIDIA Blackwell SM100/SM103 대상 및 PyTorch/CUDA 요구사항을 명시
- official materials가 fastest baseline 대비 MXFP8 forward 최대 2.37배, MXFP8 backward 1.78배, BF16 forward 1.92배, BF16 backward 1.58배의 자체 benchmark를 제시
- 공식 수치는 standalone MoE layer와 Cursor internal production stack 범위이며 다른 model·routing·topology의 end-to-end throughput·cost·SLA 보장은 아님
