---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41069
title: 알리바바, 2.4조 파라미터 '큐웬 3.8' 공개… 오픈 웨이트 전략으로 글로벌 AI 시장 정조준
ingested: 2026-07-22
published: 2026-07-21 18:13 KST
sha256: ce71b5ab4670ce08fd6d7a2fcfb32d729f55704278b42aaeec1b72a19719ab5e
tags: [ai, foundation-model, multimodal, open-source, global, product, weekly-briefing]
---

# 알리바바 Qwen 3.8 Max Preview — 2.4조 파라미터·오픈 웨이트 계획 보도

## 확인한 사실
- 인공지능신문 기사 입력 시각: 2026-07-21 18:13 KST
- 기사에서 `Qwen 3.8 Max Preview`를 약 2.4조 파라미터의 텍스트·이미지·영상·문서 멀티모달 모델로 설명
- preview 접근 표면으로 Token Plan·Qoder·QoderWork를 열거
- 향후 open-weight 배포 계획은 언급됐으나 공개 시점과 라이선스 조건은 미공개 상태

## 증거 경계
- Claude Fable 5 다음 수준이라는 문구는 알리바바 자체 평가로 보도됐으며 독립 benchmark 결과는 기사에서 확인되지 않음
- active parameter, MoE 구조, model card, 공식 benchmark, weight release artifact는 기사 공개 범위 밖
- 따라서 2.4조 total parameter 또는 preview access를 production serving capacity·성능·배포 권한의 증거로 전환하지 않음

## 운영 메모
- 실제 artifact·model card·license 공개 후 한국어·코드·문서·이미지 task의 품질·p95 latency·GPU memory·비용을 canary로 검증 필요
- API preview는 데이터 분류·egress log·rate limit·fallback을 갖춘 제한 환경에서 평가 필요
