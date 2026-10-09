---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-reasoning-summaries-openai/
title: Amazon Bedrock now supports reasoning summaries for OpenAI models
created: 2026-10-10
ingested: 2026-10-10
published: 2026-10-10 02:44 KST
sha256: 937a010d04279396eead57c8245e7cc8d2dc65efdb1b2a8d23b9acb676332146
tags: [ai, cloud, aws, openai, agent, observability, global]
---
# Amazon Bedrock OpenAI reasoning summary

- AWS What’s New RSS: `Fri, 09 Oct 2026 17:44:00 GMT`, KST `2026-10-10 02:44`
- source boundary: AWS는 OpenAI 모델의 Responses API `reasoning.summary` parameter, `summary` array 반환, in-Region·GEO cross-Region·global cross-Region inference 범위를 명시함. summary 길이·형식·가격·latency·보존·redaction 동작은 공지에서 확정하지 않음

## 핵심 요약

- 제공: OpenAI 모델 Responses API의 `reasoning.summary` parameter 지원
- 반환: model answer와 함께 reasoning output item의 `summary` array 제공
- 활용: coding·analysis·multi-step problem solving 응답의 접근 방식 평가·디버깅 보조 신호
- 범위: OpenAI GPT 모델 제공 Bedrock Region의 in-Region·GEO cross-Region·global cross-Region inference
- 팀 액션: summary를 restricted telemetry로 분류하고 trace·RBAC·redaction·retention·export control에 연결
