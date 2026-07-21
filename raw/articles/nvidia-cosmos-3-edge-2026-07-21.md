---
source_url: https://huggingface.co/blog/nvidia/cosmos3edge
title: Introducing Cosmos 3 Edge
ingested: 2026-07-21
published: 2026-07-21 00:58
sha256: 2d523308894d96c66373a4abc496001dd504de675fd9ce01fca6a0237e5bf597
tags: [ai, physical-ai-infrastructure, edge, robotics, nvidia, global, release]
---
# Introducing Cosmos 3 Edge

## Source facts
- Published: 2026-07-21 00:58 KST (Hugging Face RSS `pubDate`: 2026-07-20 15:58:51 UTC)
- NVIDIA가 Hugging Face Cosmos 3 repository에 40억 파라미터 open world model `Cosmos 3 Edge`를 공개함.
- vision·text 추론의 autoregressive tower와 vision·audio·action 예측·생성의 diffusion tower가 multimodal attention을 공유한다고 설명함.
- Jetson Thor에서 640×360 observation, inference당 32 actions, 15Hz real-time control을 제시함.
- RTX PRO, DGX, GeForce RTX, Jetson과 Jetson T2000/T3000을 지원 hardware로 제시함.

## Source boundary
- 15Hz와 VANTAGE-Bench 순위는 NVIDIA가 제시한 환경·benchmark 결과이며 모든 robot, sensor, site의 성능 보장 아님.
- 안전 제어, embodiment adaptation, data governance, thermal behavior, fleet rollout 결과는 원문이 보장하지 않음.

## Related source
- Model repository: https://huggingface.co/nvidia/Cosmos3-Edge
