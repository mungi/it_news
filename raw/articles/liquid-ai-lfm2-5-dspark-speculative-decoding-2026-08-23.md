---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214258
title: Liquid AI LFM2.5-DSpark speculative decoding 공개 보도
created: 2026-08-24
ingested: 2026-08-24
published: 2026-08-23 11:48
tags: [ai, inference, edge, open-source, devtools, global]
sha256: ce2be15f48d283e879090cda5555dbf273a447832ec2b06c4efa5e36870bd1bb
---
## 출처 확인

- 카드 원문: https://www.aitimes.com/news/articleView.html?idxno=214258
- primary 발표: https://www.liquid.ai/blog/lfm2.5-dspark
- 카드 제목: 리퀴드 AI ‘디스파크’, 메모리 병목 뚫었다…소형 모델이 미리 쓰고 대형 모델이 검증
- 직접 확인 시각: 2026-08-24 11:15 KST
- 카드 `article:published_time`: 2026-08-23T11:48:18+09:00
- 카드 Open Graph image: https://cdn.aitimes.com/news/photo/202608/214258_217939_579.gif
- primary Open Graph image: https://aypchzzf9pftwuto.public.blob.vercel-storage.com/dspark_decode_synthetic-eW9KEMLo5fpFfBlmbspCgi8N7GbxDD.gif
- primary 페이지 날짜: 2026-08-20; clock time 미공개

## GN⁺ 브리핑

- 공개: Liquid AI의 LFM2.5용 `LFM2.5-DSpark` speculative decoding draft model
- 성능: GPU 최대 3.18배·온디바이스 최대 2.87배 decoding throughput이라는 Liquid AI 자체 평가
- 방식: draft model이 candidate token을 생성하고 target model이 단일 forward pass로 검증하는 구조
- 대상: `LFM2.5-1.2B-Instruct`·`LFM2.5-2.6B`·`LFM2.5-8B-A1B`와 약 3억 parameter draft model
- 구현: DFlash-style parallel backbone·sequential head·confidence head, llama.cpp·SGLang upstream integration

---

## 검증 경계

- 3.18배·2.87배는 Liquid AI 자체 workload·hardware 평가 수치이며 independent benchmark 아님
- target/draft pairing, acceptance rate, prompt·sampling, batch·sequence length, quantization, runtime·cache에 따라 throughput·tail latency·VRAM·비용 변동
- llama.cpp·SGLang upstream integration은 특정 release·serving configuration의 production support·SLO 보증 아님
- target-only fallback, output equivalence, p95/p99, GPU-hour·J/token·completed-request cost를 representative workload에서 canary 검증 필요
