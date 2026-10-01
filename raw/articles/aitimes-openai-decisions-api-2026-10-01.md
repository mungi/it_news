---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215835
title: 오픈AI, 자체 에이전트에 ‘디시전스 API’ 적용...AI 아키텍처 판도 바뀐다
created: 2026-10-01
ingested: 2026-10-01
published: 2026-10-01 13:08 KST
sha256: b43cc1779d860e431de68b5dd55e8e609eb95cc032b79bab472e89fbb12afa17
tags: [ai, agent, routing, classification, safety, observability, global]
---
# OpenAI Decisions API 제한 프리뷰

- AI타임스 canonical article `article:published_time` `2026-10-01T13:08:23+09:00`, OG image와 본문 직접 대조
- 공개: OpenAI가 DevDay 2026에서 `GPT-6 Luna` 기반 `Decisions API`를 제한 프리뷰로 공개했다는 보도 범위
- 계약: text 또는 image 입력과 개발자가 미리 정의한 선택지를 받아 하나의 결과를 반환하는 방식
- 사용: content classification·request routing·agent next action 선택을 예시로 제시
- 구조: 범용 model의 생성 결과를 다시 parse하는 경로 대신 output space를 제한한 판단 layer로 분리하는 설명
- 내부 적용: OpenAI가 자체 agent 시스템의 행동 감시와 오작동 방지에 적용하겠다는 보도 범위
- 운영: action set·policy version·input provenance·decision output·tool call·approval을 동일 trace ID로 보존 필요
- 증거 경계: 공식 API schema·maximum choice 수·confidence/abstention·rate limit·가격·region·SLA·일반 제공 일정은 확인한 source에서 미확정

## 핵심 요약

- 변화: agent planning/generation과 routing·gate 판단을 분리할 수 있는 선택지 제한 API 제한 프리뷰
- 검증: false allow/deny·abstention·override·p95/p99·fallback success·completed-task cost를 read-only canary에서 baseline과 비교 필요
- 통제: write tool은 deterministic policy·least-privilege credential·human approval 뒤에 두고 decision 결과만으로 execution 권한 부여 금지
- 범위: AI타임스 보도와 포함된 OpenAI Developers 발표 인용을 근거로 하며 tenant별 access·data handling은 공식 문서 재확인 필요
