---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/training-session-apis-on-sagemaker-ai
title: Amazon SageMaker AI announces training session APIs for serverless model customization
ingested: 2026-10-23
published: 2026-10-23 01:30 KST
sha256: 8c9b4ffe3669b5176abf2384c341df9e4e907c2e7a8d0b11d87d5073d172cfed
tags: [aws, sagemaker, fine-tuning, rl, mlops, ai, cloud, global]
---

# Amazon SageMaker AI announces training session APIs for serverless model customization

AWS What’s New RSS `Thu, 22 Oct 2026 16:30:00 GMT`와 canonical announcement를 대조해 KST `2026-10-23 01:30` 기준으로 기록.

- 공개: serverless model customization용 stateful training session API GA
- API: `forward_backward()`·`optim_step()`·`sample()`을 live session에 Python code로 호출
- 사용: SFT·DPO 재현, custom loss·RL reward signal·data curriculum·custom algorithm 구성 범위
- managed: GPU allocation·model/LoRA loading·distributed execution·fault recovery·checkpoint storage·security
- 복구: checkpointing·resume built-in 설명
- 과금: processed token 기준, local reward scoring은 GPU time 과금 대상 아님
- 리전: US East (N. Virginia)·US West (Oregon)·Asia Pacific (Mumbai)
- 경계: reward validity·model quality·data governance·cost predictability 보장 범위 아님
