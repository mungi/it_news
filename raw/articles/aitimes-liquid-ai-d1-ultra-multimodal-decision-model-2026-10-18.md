---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216371
title: Liquid AI d1-ultra 멀티모달 의사결정 모델 공개 보도
ingested: 2026-10-18
published: 2026-10-18 17:13 KST
sha256: 51a6ae16458ac27c30f8c3a506c8f15f01e4524c6fa47df4e045c8a12fdb9727
tags: [ai, multimodal, decision-model, inference, api, global]
---

# Liquid AI d1-ultra 멀티모달 의사결정 모델 공개 보도

- Liquid AI가 텍스트·이미지 입력을 한 번의 forward pass로 처리하고, 생성 토큰 대신 선택지별 확률 또는 score를 반환하는 `d1-ultra`를 API로 제공하기 시작했다는 보도
- `Noul`의 0~1 확률, `Choice`의 다중 선택지 확률, `Score`의 기준 기반 점수 세 output 형식을 제시한 범위
- 회사는 TypeSafe AI `Jev 1.14`를 앞섰고 독립 평가에서 의사결정 모델 1위라고 주장했으나, benchmark 구성·비용·latency·calibration 조건과 production 결과는 기사에서 전체 공개되지 않음
- 회로 기판 이미지와 규격 대조, 보험 청구 사진과 설명 대조를 활용 사례로 제시했으며, false positive/negative 비용과 사람 검토 임계값은 조직별 검증 대상

## 운영 경계

확률값을 action 승인이나 자동화 policy에 연결하기 전 task별 calibration·threshold·abstention·human-review queue·입력 이미지 provenance·drift·audit trace를 함께 측정할 필요.
