---
source_url: https://huggingface.co/kakaocorp/kanana-2-3b-instruct
title: kakaocorp/kanana-2-3b-instruct
ingested: 2026-07-29
published: 2026-07-28 13:08 KST (related AI타임스 report; Hugging Face API repository created 2026-07-24)
sha256: ea5969bf5f1a8083530868304429336297cc69da6d179c7c60953a06e5009aea
tags: [ai, open-source, on-device, korean, inference, kakao, weekly-briefing]
---

# Kakao Kanana-2 on-device SLM repositories

## 확인한 원문

- Hugging Face API에서 Kakao 조직의 `kanana-2-1.3b-base`, `kanana-2-1.3b-instruct`, `kanana-2-3b-base`, `kanana-2-3b-instruct` 4개 repository 확인
- `kakaocorp/kanana-2-3b-instruct` API: repository created `2026-07-24T05:51:07Z`, last modified `2026-07-27T12:14:40Z`, `text-generation` pipeline 및 Kanana license link 표기
- AI타임스 `idxno=213247`: 2026-07-28 13:08:46 KST, 4개 SLM 공개와 smartphone·PC 직접 실행, Kanana Open License의 상업 활용 허용을 보도
- AI타임스 보도: 한국어 특화 tokenizer로 한국어 처리 효율 30% 이상 개선, sliding-window attention과 최대 32K 대화에서 memory 최대 72.7% 절감 설명

## 증거 경계

- 한국어 효율·memory 절감은 AI타임스가 전한 카카오 설명이며 model revision, quantization, device, context, baseline이 모두 공개된 독립 benchmark가 아님
- Hugging Face repository와 API metadata는 모델 존재·license field·pipeline metadata의 증거이나, 특정 phone/PC latency·RAM·battery·quality·production support의 보증이 아님
- Kanana Open License의 deployment·fine-tune·quantized redistribution·service hosting 조건은 deployment 전 license 원문 검토 필요

## 운영 판단

- on-device 도입은 weights만이 아니라 quantization, runtime delegate, KV cache, thermal/power, update provenance, cloud fallback, telemetry를 묶은 release 검증 필요
- local inference에도 prompt·conversation·cache·crash report·fallback payload·connector가 data path를 만들 수 있으므로 retention·consent·egress control 분리 필요
- target device별 first-token, tokens/s, p95, peak RSS, OOM, throttling, battery, safety regression을 1K·4K·16K·32K context matrix에서 측정 필요
