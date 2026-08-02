---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213443
title: 오픈AI 차세대 모델 '아스트라', 수학·컴퓨터 과학 10대 난제 해결
published: 2026-08-02 09:07 KST
published_source_metadata: 2026-08-02T09:07:45+09:00
updated_source_label: 2026-08-02 09:11 KST
source_name: AI타임스
related_primary_url: https://openai.com/index/ten-advances-in-mathematics/
ingested: 2026-08-03
sha256: adc1967c96e4d6bea83b871f32cb5b162f8dcb6fdcc2535cff99d2e7ff05f0cd
tags: [ai, research, mathematics, formal-verification, reasoning, global, weekly-briefing]
confidence: medium
---

# OpenAI Astra 수학·이론 컴퓨터 과학 결과 보도

- AI타임스 기사 페이지의 제목·본문·업데이트 시각 `2026-08-02 09:11 KST`를 직접 확인함
- 기사는 OpenAI가 8월 1일 공개한 `Ten advances in mathematics and theoretical computer science`를 인용해 차세대 주요 모델 제품군의 내부 버전 `Astra`가 수학·이론 컴퓨터 과학 장기 미해결 문제 10개에서 결과를 냈다고 보도함
- 기사 열거 범위: 고차원 sphere packing, binary·spherical code, non-sofic group, Connes rigidity, arithmetic circuit complexity, quantum parallel repetition, CVP, Ehrhart volume, Ramsey number, extremal graph theory 관련 결과 포함
- 기사 설명 범위: 모델이 논증을 생성하고 연구진이 논문 형태로 정리했으며, 마지막에 Lean으로 다시 작성해 기계 검증 가능한 증명서를 생성했다고 전함
- 비용 수치: 기사에서 전체 토큰 비용을 GPT-5.6 Sol API 기준 약 2,000달러로 소개함

---

## 증거 경계

- 직접 읽을 수 있는 근거는 AI타임스 기사와 해당 페이지의 발행 메타데이터임
- OpenAI 원문 URL은 기사에서 직접 링크된 것을 확인했으나, 현재 요청은 Cloudflare challenge로 본문을 재검증하지 못함
- 따라서 개별 정리의 독립 동료검토, Lean proof artifact 공개 범위, 모델 버전·학습 데이터·추론 조건, 2,000달러 비용 산식, 재현성은 이 캡처만으로 확정하지 않음

## 엔지니어링 확인 항목

- 연구 agent 평가는 문제 해결 건수와 함께 formal checker 통과율, human proof review, counterexample 탐색, 재실행 비용을 분리해 기록 필요
- 모델이 만든 proof text와 공식 artifact, tool version, dependency lockfile, reviewer sign-off를 같은 provenance chain으로 보존 필요
- API token 비용은 end-to-end 연구비가 아니므로 researcher review·verification compute·실패 재시도·보안 검토를 별도 cost center로 측정 필요
