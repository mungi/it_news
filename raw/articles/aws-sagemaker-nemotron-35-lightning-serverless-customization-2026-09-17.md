---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sagemaker-ft-nemotron-3-5-lightning/
title: SageMaker AI Nemotron 3.5 Lightning serverless fine-tuning·preference optimization 제공 범위
created: 2026-09-17
ingested: 2026-09-17
published: 2026-09-17 07:29
sha256: 97f756f60a056990572096c9e8a1d27139bf1cf8c1625ddd57bf3f36124ef398
tags: [aws, ai, foundation-model, training, finops, global]
---

# SageMaker AI Nemotron 3.5 Lightning serverless fine-tuning·preference optimization 제공 범위

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sagemaker-ft-nemotron-3-5-lightning/
- 원문 게시: 2026-09-17 07:29 KST, AWS RSS `Wed, 16 Sep 2026 22:29:00 GMT` 환산

## 핵심 요약

- SageMaker AI가 NVIDIA Nemotron 3.5 Lightning 대상 serverless SFT·DPO·RFT customization 제공
- source는 hybrid MoE 30B total parameter·3B active parameter 모델로 설명
- serverless job에서 infrastructure provisioning·training orchestration을 AWS가 처리하는 범위
- US East (N. Virginia)·US West (Oregon)·Asia Pacific (Tokyo)·Europe (Ireland) 제공
- Studio Models page 또는 SageMaker Python SDK로 customization job 시작 가능

---

## 증거 경계

- AWS What’s New 원문의 모델·학습 방식·리전·접근 경로만 기록
- 비용 절감·latency·frontier model quality matching은 AWS의 일반적 customization 설명이며 조직별 benchmark·dataset·guardrail 결과 보장 아님

## 운영 조치

- task baseline·holdout evaluation·SFT/DPO/RFT reward/preference data provenance를 job 시작 전 versioned artifact로 고정
- Tokyo availability와 account quota·data residency·training output encryption·endpoint deployment region을 별도로 확인
