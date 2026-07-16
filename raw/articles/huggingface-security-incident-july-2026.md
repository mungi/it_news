---
source_url: https://huggingface.co/blog/security-incident-july-2026
title: Security incident disclosure — July 2026
ingested: 2026-07-17
published: 2026-07-16 09:00
sha256: 7db34ddd326993c3b32f2e6b21524aed679b41013aa9ce35b4dfa49f6e0d3486
tags: [security, ai, mlops, supply-chain]
---

# Security incident disclosure — July 2026

Hugging Face는 제한된 internal dataset과 여러 service credential에 대한 unauthorized access를 확인했으며 partner·customer data 영향 평가는 진행 중이라고 밝혔다. 공개 user-facing model·dataset·Space 변조 증거는 없고 container image와 published package 공급망도 clean으로 검증됐다고 설명한다. 침입은 dataset processing worker의 remote-code loader와 template injection 경로에서 시작돼 node access와 internal cluster lateral movement로 이어졌다고 하며, 공격 도구·모델의 정확한 정체와 전체 영향 범위는 확정하지 않았다.

## 검증 메모
- 원문 페이지 제목·공개일·본문 핵심 주장·Open Graph 이미지 현재 실행에서 직접 확인
- 수치·영향 범위·실제 침해 여부는 원문이 명시한 범위만 유지
