---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213161
title: 앤트로픽, '클로드 오퍼스 5' 출시..."페이블 5 성능에 가격은 절반"
ingested: 2026-07-26
published: 2026-07-25 09:28 KST
sha256: 2ba8c67bebf67f651328922d263687e47904512e89fe62803a0bc796db1dd818
tags: [ai, foundation-model, agent, inference, cloud, weekly-briefing]
---

# Claude Opus 5 기능·가격 보도 캡처

## 확인한 원문 사실

- AI타임스 기사 제목: `앤트로픽, '클로드 오퍼스 5' 출시..."페이블 5 성능에 가격은 절반"`
- 기사 표기 업데이트 시각: 2026-07-25 09:28 KST
- 보도는 Anthropic이 7월 24일 현지시간 Claude Opus 5를 공개하고 Claude Max·Pro, Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry를 통한 제공을 언급했다고 설명
- 보도된 모델 구성: 100만 token context, 최대 12만8천 output token, low·medium·high·xhigh·max의 5단계 Effort Ladder, Fast Mode
- 보도된 가격: 입력 100만 token당 5달러, 출력 100만 token당 25달러. Fable 5의 입력 10달러·출력 50달러와 비교한 절반 가격 설명은 보도에 인용된 Anthropic 주장임
- 코딩·agent benchmark 성능과 비용 효율은 기사에 인용된 공급자 주장·평가로 기록. 조직 workload의 품질, latency, quota, SLA, 지역 가용성, retention은 이 보도만으로 확정하지 않음

## AWS 제공 공지와의 결합 해석

- 동일 모델의 AWS 제공은 별도 AWS What’s New 공지로 확인
- Bedrock의 기본 ZDR·regional data residency·Guardrails와 Claude Platform on AWS의 AWS billing/authentication·요청 기반 ZDR은 provider surface별 검증 대상으로 분리
- 이 캡처는 모델 기능·가격 관련 보도 원문을 보존하며, 계약 조건·tenant별 data retention·실제 benchmark 재현성의 근거는 아님

## 운영 메모

- 모델/effort/context/provider 조합을 versioned configuration으로 기록
- 동일 task set에서 pass rate·p95·input/output token·retry·tool error·성공 작업당 비용을 비교
- prompt·tool output·trace·attachment의 retention, ZDR 적용 조건, IAM/SSO, rate limit, provider outage fallback을 canary에서 검증
