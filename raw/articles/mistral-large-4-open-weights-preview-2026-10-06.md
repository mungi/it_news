---
source_url: https://mistral.ai/news/mistral-large-4/
title: Introducing Mistral Large 4
ingested: 2026-10-08
published: 2026-10-06
sha256: cbb492094e76ae16fede768f3a1a07b1b322bd3e2f9ef977b80959e8e9885d3b
tags: [ai, foundation-model, agent, multimodal, cybersecurity, open-source, global, release]
---

# Mistral Large 4 공개 프리뷰

- 확인 원문: https://mistral.ai/news/mistral-large-4/
- 공식 공개일: 2026-10-06 (원문 표기; 시각 미표기)
- 국내 보도 확인: AI타임스 2026-10-07 18:13 KST

## 확인된 사실
- Mistral AI가 Mistral Large 4 public preview API를 공개하고 이달 말 가중치 공개를 예고함
- 공식 발표상 native multimodal MoE, total 1조·active 520억 parameter, 최대 100만 token context
- 유럽 자체 데이터센터에서 NVIDIA Grace Blackwell GPU 3,800대로 from-scratch 학습했다는 vendor 발표
- 가중치 공개 전 cyber 리더·검증 partner·정부 기관과 reduced moderation·expanded cyber capability를 포함한 real-world red-teaming 수행 범위
- benchmark 방법론, production throughput, 가격, license, regional availability, self-hosting requirement는 본문만으로 확정하지 않음

## 운영 경계
- self-deployment는 artifact provenance, GPU/runtime compatibility, IAM, egress, trace/audit, human approval을 조직이 운영해야 하는 경로
- preview 또는 vendor benchmark 결과를 production SLO·safety 보장으로 일반화하지 않음
