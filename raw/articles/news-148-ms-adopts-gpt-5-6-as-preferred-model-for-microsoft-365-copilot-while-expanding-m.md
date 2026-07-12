---
source_url: https://www.aitimes.com/news/articleView.html?idxno=212678
title: MS adopts GPT-5.6 as preferred model for Microsoft 365 Copilot while expanding MAI usage
ingested: 2026-07-12
published: 2026-07-12 18:25
tags: [enterprise-ai, microsoft-365-copilot, model-routing, gpt-5.6, finops]
---

# MS 365 Copilot 권장 모델로 GPT-5.6 채택, 자체 MAI 병행으로 멀티모델 라우팅 전략 확인

- 원문 제목: MS adopts GPT-5.6 as preferred model for Microsoft 365 Copilot while expanding MAI usage
- 출처: AI Times
- 원문 URL: https://www.aitimes.com/news/articleView.html?idxno=212678
- 발행(KST): 2026-07-12 18:25
- 카테고리: AI

## 핵심 요약
핵심: AI타임스는 OpenAI 발표와 Bloomberg 보도를 묶어 GPT-5.6이 MS 365 Copilot 권장 모델이 되고 Excel·Outlook 일부 요청은 MS 자체 MAI 모델이 처리 중이라고 정리함. 영향: 엔터프라이즈 AI 제품은 단일 모델 표준화보다 작업 난이도·비용·latency에 따른 모델 라우팅 체계로 이동 중임.

## 상세
기사에 따르면 OpenAI는 GPT-5.6 정식 서비스와 함께 MS 365 Copilot의 preferred model 채택을 알렸고, MS는 운영비 절감을 위해 Excel·Outlook에서 자체 MAI 모델 요청 처리를 확대하고 있음. TechCrunch 해석처럼 preferred model은 모든 작업을 한 모델로 처리한다는 뜻이 아니라 성능이 중요한 작업에 우선 사용하는 의미로 설명됨.

## 왜 중요한가
대규모 업무용 AI는 최고 모델 하나의 도입보다 작업별 라우팅, 비용 최적화, fallback, 품질 회귀 테스트를 결합한 플랫폼 운영 문제로 바뀜.

## 시사점
기업 AI 플랫폼팀은 Copilot·사내 에이전트 조달 시 모델별 routing policy, telemetry, 품질 회귀, 비용 상한, 데이터 처리 조건을 계약과 운영 대시보드에 포함 필요.

## 상세 내용

### 무슨 일이 있었나
MS 365 Copilot에서 GPT-5.6 권장 모델 채택과 MS 자체 MAI 모델 확대가 동시에 보도됨.
- 발표: OpenAI가 GPT-5.6 정식 서비스와 함께 MS 365 Copilot preferred model 채택을 공개
- 운영: Bloomberg 보도 기준 Excel·Outlook에서는 매주 수만 건의 AI 요청을 MS 자체 MAI 모델이 처리 중
- 해석: preferred model은 모든 요청을 한 모델로 처리한다는 뜻이 아니라 성능 민감 작업 우선 사용 의미

### 본문 핵심 포인트
상반된 발표처럼 보이지만 실제로는 멀티모델 운영 전략에 가까움.
- 비용: MS는 외부 모델 사용 비용을 낮추기 위해 자체 MAI 모델 적용 범위를 확대하는 전략
- 품질: GPT-5.6은 Word·Excel·PowerPoint 등 Copilot 전반에서 고난도 작업의 권장 모델로 배치
- 라우팅: 작업 성격, 품질 요구, 비용, latency에 따라 OpenAI 모델과 자체 모델을 병행하는 구조

### 왜 중요한가
업무용 AI의 비용 구조가 모델 계약보다 요청 라우팅 정책에 좌우됨.
- 영향: 동일 제품 안에서도 요약·분류·생성·코딩·분석 작업별 최적 모델이 달라질 수 있음
- 리스크: 라우팅 로직이 불투명하면 사용자 품질 편차, 감사 어려움, 비용 폭증이 발생 가능
- 조달: 공급자 종속을 줄이려면 모델 교체 가능성과 telemetry access가 계약 조건이 됨

### 시사점
AI 플랫폼팀은 모델 선택을 제품 기능이 아니라 control-plane 설계로 관리해야 함.
- 팀 액션: 작업군별 model selection policy와 fallback 기준을 코드가 아닌 정책 레이어로 분리 필요
- 측정: 모델별 성공률, 재시도율, p95 latency, cost per task, 사용자 재요청률을 같은 대시보드에 기록 필요
- 거버넌스: Copilot류 도구 조달 시 어떤 데이터가 어떤 모델로 전달되는지 감사 가능한 로그와 문서화 요구 필요
