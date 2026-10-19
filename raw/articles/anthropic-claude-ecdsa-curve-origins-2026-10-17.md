---
source_url: https://www.anthropic.com/research/ecdsa-curve-origins
title: Anthropic Claude ECDSA 곡선 시드 출처 재현 연구
ingested: 2026-10-19
published: 2026-10-17 02:02 KST
sha256: 81b8be6b8d68f5f826e6af2d211ab7a6f3616322950b5a74338c6001e97596dc
tags: [ai, cybersecurity, cryptography, verification, research, global]
---

# Claude가 ECDSA 곡선 시드의 출처를 재현한 연구

- Anthropic은 2026-10-16 공식 연구 글에서 내부 연구용 Claude가 NIST P-192·P-224·P-256·P-384·P-521의 공개 seed 생성 방식을 30분 이내에 찾아냈다고 공개함
- 결과는 ECDSA를 깨는 공격·새 취약점·이용자 비밀키 복구가 아니며, 공개된 곡선 parameter의 생성 과정에 대한 오랜 의심을 줄이는 재현 결과임
- Claude는 1990년대 C 라이브러리의 `lrand48` 출력 특징을 찾아 Unix timestamp로 초기화한 PRNG와 20-byte candidate 반복 생성 과정을 식별함
- P-256은 standardized seed가 나오기까지 1,842회 iteration이 필요했고, Anthropic은 재현 코드를 공개함
- 공개 seed는 curve coefficient `b`를 정의하는 parameter이며 실제 서명자의 private key와 구분해야 함

## 확인 범위

공식 원문은 단순한 clock-seeded PRNG 생성 과정이 intentional backdoor 가능성을 낮춘다고 설명하지만, 선택 조건을 만족한 다른 곡선이 제외된 이유와 selected base point의 생성 방식은 미해결 질문으로 남김. 기존 ECDSA deployment의 key rotation·certificate 교체·algorithm migration이 필요하다는 공지는 없음.

## 운영 경계

AI가 생성한 cryptographic provenance 분석 결과는 재현 가능한 code·input artifact·독립 검토와 함께 다뤄야 함. 모델의 30분 탐색 결과를 다른 cryptosystem의 안전성 보장이나 자동 compliance evidence로 일반화하지 않음.
