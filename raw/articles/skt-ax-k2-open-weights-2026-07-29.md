---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213289
title: "SKT, 'A.X K2' 오픈 공개...국내 최대 '6880억 매개변수'"
ingested: 2026-07-29
published: 2026-07-29 12:34 KST
sha256: ecff1ece46ce5b4e5d36199c524c773d40673e6fb4edd5aaa94cbc7344dfc67a
tags: [ai, foundation-model, inference, korea, open-source, agent]
---

# SKT A.X K2 공개 가중치: 688B/33B active MoE와 native FP8 checkpoint

- SK텔레콤은 2026년 7월 29일 Hugging Face에 `skt/A.X-K2`를 공개함
- 모델 카드 frontmatter는 Apache-2.0 license, Transformers text-generation, 영어·한국어·중국어·일본어·스페인어 언어 범위를 명시함
- 공식 모델 카드는 총 688B parameter, token당 33B active parameter, 256 routed expert와 1 shared expert 중 8개 routed expert 활성화를 명시함
- 공식 모델 카드는 native FP8(MXFP8/E4M3) 학습과 block-scaled FP8(E4M3) checkpoint 배포, 256K context를 명시함

## 모델·배포 구성

- `Sparse Gated Attention`: top-k token selection과 MLA 위 head-specific gated attention으로 긴 context attention 계산을 줄이는 구조로 설명됨
- `Gated Norm`: RMSNorm 뒤 input-dependent gate로 activation outlier를 억제해 low-precision serving에 유리하다는 공급자 설명
- `Think-Fusion`: 단일 model에서 thinking/non-thinking response mode를 control token으로 선택하는 training recipe로 설명됨
- Hugging Face API의 `lastModified`는 2026-07-28T23:40:17Z이며, repository에는 346개 safetensors shard가 표시됨

## 성능·운영 검증 경계

- AI타임스는 K1 대비 14개 benchmark 평균 32.2%p 향상과 일부 benchmark 수치를 보도하지만, cross-vendor 비교 조건이 동일하지 않아 독립 비교 수치로 사용하면 안 됨
- 256K context는 native training 128K를 YaRN scaling으로 확장한 모델 카드 설명이므로, target runtime·precision·concurrency에서 TTFT·TPOT·KV cache·quality를 별도 측정 필요
- native FP8 checkpoint는 BF16 대비 memory footprint를 절반으로 설명하지만, 실제 cluster capacity는 model shard, KV cache, runtime workspace, interconnect, batch/concurrency, failure reserve를 합산해 산정 필요
- 모델 카드의 training-data provenance·PII masking 설명은 deployment data handling, tool permission, prompt logging, output filtering을 대체하지 않음
