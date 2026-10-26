---
source_url: https://github.com/qlabs-eng/noise
title: Q Labs Noise no-backprop pretraining speedrun
ingested: 2026-10-27
published: 2026-10-26 19:07 KST
sha256: 9c82aa3b2b3a016c8c2e67647d69dea48fded7c84af71aeb013059d673126bd8
tags: [ai, training, open-source, gpu, research, global]
---

# Q Labs Noise no-backprop pretraining speedrun

GitHub 원문 확인: Noise는 backward pass 없이 pretraining learning algorithm을 겨루는 공개 speedrun이며 no autograd·no reverse/forward-mode AD·no handwritten backward pass 규칙을 둠. README는 30M-token data·validation loss 3.5·single 8×H100 node 조건과 artifact 기록을 설명함. AI타임스가 보도한 1.6초는 과거 10M-token·loss 4.2 조건의 기록이므로 frontier-scale training 우위·비용 절감 보장으로 확대하지 않음.
