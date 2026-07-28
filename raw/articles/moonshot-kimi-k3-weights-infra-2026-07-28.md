---
source_url: https://huggingface.co/moonshotai/Kimi-K3
title: Moonshot Kimi K3 model weights and infrastructure projects
published: 2026-07-28 13:04 KST
ingested: 2026-07-28
sha256: 388fb85bb026b75b92799be9c8f2f30f0092f3825c1eb9bd7d249957cd67a320
tags: [ai, open-source, inference, agent, infra, global, weekly-briefing]
---

# Moonshot Kimi K3 가중치와 학습·추론·agent 인프라 공개 — 2026-07-28

## 확인한 원문 메타데이터

- 1차 원문: `https://huggingface.co/moonshotai/Kimi-K3`
- 모델 카드: Moonshot AI `moonshotai/Kimi-K3`
- 확인 시각: 2026-07-28 16:43 KST
- 모델 카드 표기: `Kimi K3 License`, total parameters `2.8T`, activated parameters `104B`, context window `1M tokens`, 896 experts 중 token당 16개 선택
- 관련 보도: AI타임스 `idxno=213242`, 업데이트 2026-07-28 13:04 KST, 이미지 `https://cdn.aitimes.com/news/photo/202607/213242_216669_5955.jpg`

## GN⁺ 핵심 요약

- Moonshot AI가 Hugging Face에서 **Kimi K3 전체 가중치**를 Kimi K3 License로 공개
- 모델 카드: native multimodal agentic model, 2.8T total·104B activated MoE, 100만 token context 명시
- MoonEP: 대규모 MoE 학습의 expert 통신 병목 완화용 library 공개 보도
- FlashKDA: H20 GPU prefill 1.72~2.22배 주장은 공급자·보도 범위, hardware·batch·precision 독립 재현 필요
- AgentENV: Firecracker microVM·snapshot·resume·fork 기반 RL 환경과 E2B compatibility 소개, tenant isolation·secret residue·egress 보장은 별도 검증 필요

---

## 모델 공개 범위

- Hugging Face 모델 카드가 full model weights 공개와 Kimi K3 License 적용을 명시
- total parameter `2.8T`, activated parameter `104B`, 93 layers, 896 experts, token당 16개 selected experts 명시
- native vision과 1M-token context를 기능으로 열거
- weight 공개는 serving framework 지원, quantization artifact, GPU memory footprint, production SLA를 자동 보장하지 않음

## 인프라 프로젝트와 증거 경계

- AI타임스 보도가 `MoonEP`, `FlashKDA`, `AgentENV` GitHub repository를 연결
- MoonEP는 expert 간 통신 비용을 줄이는 MoE distributed-training library로 설명
- FlashKDA의 CUTLASS 기반 H20 prefill 1.72~2.22배 수치는 공급자 설명 범위
- AgentENV의 Firecracker microVM, 50ms 실행·복구, 100ms snapshot 저장, 16개 fork, E2B compatibility는 보도·프로젝트 설명 범위

## 엔지니어링 판단

- self-hosting 검토는 license, weights·tokenizer format, GPU·driver·CUDA, tensor parallelism, KV-cache와 1M context의 memory/storage/network 비용을 같은 checklist로 검증 필요
- kernel 성능은 동일 GPU, batch, sequence length, precision, cache 상태에서 prefill·decode p50/p95와 비용을 독립 측정 필요
- agent microVM은 image provenance, host mount, ephemeral credential, default-deny egress, snapshot cleanup, audit trace를 canary에서 검증 필요
