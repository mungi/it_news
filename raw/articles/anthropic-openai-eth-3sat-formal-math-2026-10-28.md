---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216756
title: 오픈AI 이어 앤트로픽도 '난제' 반박…성능 경쟁, 과학 발견으로 확대
ingested: 2026-10-28
published: 2026-10-28 15:50
sha256: fb3d75f5e29e372e20c17feb85b9738c98a45411bbd6f0c659e64a2cb43cc017
tags: [ai, research, formal-verification, algorithm, open-source, global]
---

# Anthropic·OpenAI의 ETH 반박 3-SAT 결과 공개

- 확인 시각: 2026-10-28 22:19 KST
- 보도 원문: https://www.aitimes.com/news/articleView.html?idxno=216756
- Anthropic 공개 artifact: https://github.com/anthropics/formal-math/tree/main/eth
- OpenAI 관련 발표: https://openai.com/ko-KR/index/building-scientific-understanding-with-academic-communities/
- 발행: AI타임스 canonical `article:published_time` `2026-10-28T15:50:14+09:00` → 2026-10-28 15:50 KST

## 확인한 사실

- AI타임스는 Anthropic과 OpenAI가 약 6시간 간격으로 ETH에 반하는 3-SAT 결과를 공개했고, 양측이 10월 16일 발견을 언급했다고 보도
- Anthropic `formal-math/eth` repository README는 deterministic 3-SAT algorithm이 `n`개 변수에서 `2^o(n)` 시간에 동작한다고 설명
- 같은 README는 만족 assignment 수를 세는 `#3-SAT`도 `2^O(n log log n / √log n)` 시간에 푼다고 설명
- repository에 `paper.pdf`, Lean source, `lakefile.toml`, `lean-toolchain`, proof·script directory를 공개
- AI타임스는 Anthropic 결과가 Lean으로 작성된 code와 함께 공개됐으며 OpenAI도 Lean 검증을 언급했다고 보도
- Anthropic README는 결과가 purely asymptotic이며 실제 formula를 실용적으로 푼다는 뜻이 아니라고 명시

## 운영·해석 경계

- 공개 repository와 보도는 독립 학계 검토·정리 오류 부재·proof dependency의 정당성을 확정하지 않음
- ETH 반박을 `P vs NP` 해결, 즉시 사용 가능한 SAT solver 성능 향상, 특정 암호 체계 무력화로 확대하지 않음
- Lean source 공개는 검증 가능한 artifact를 제공하지만, theorem statement·Lean version·dependency lockfile·clean build 재현을 별도 확인할 대상
- 연구 결과가 production optimization·cryptography·capacity planning에 주는 영향은 practical complexity와 workload benchmark가 확인된 뒤 평가 필요
