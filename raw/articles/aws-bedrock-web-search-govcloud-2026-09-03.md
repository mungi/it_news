---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-web-aws-govcloud/
title: "Web Search on Amazon Bedrock is now available in AWS GovCloud (US-West)"
ingested: 2026-09-03
published: 2026-09-03 02:52 KST
sha256: 4d982fcc48c3057a0a32ec3e4fe997c165aea45ae839c1f3088a9ff705b59d08
tags: [ai, cloud, infra, cloud-security, enterprise-ai, weekly-briefing]
---

# Bedrock Web Search의 AWS GovCloud (US-West) 확장: grounding과 AWS boundary를 tool policy로 분리

- AWS RSS `Wed, 02 Sep 2026 17:52:00 GMT`를 KST `2026-09-03 02:52`로 변환; AWS 페이지의 visible label은 `Posted on: Sep 2, 2026`으로 exact clock은 RSS provenance로 기록
- Amazon Bedrock built-in server-side `web_search` tool이 AWS GovCloud (US-West)에서 지원되며, supported OpenAI GPT model의 web grounding과 citation 반환을 AWS 공식 공지 범위로 확인
- AWS가 관리하는 web index·cache에서 결과를 제공하고 search index·crawler·tool-call loop를 애플리케이션이 직접 운영하지 않는다는 제품 범위
- IAM으로 account 또는 organization 단위 allow/deny와 Region 제한이 가능하고, 기본값으로 request data를 AWS boundary 안에 둔다는 AWS 설명
- launch model은 GPT-5.4·GPT-5.6 Terra·GPT-5.6 Luna이며, GovCloud (US-West) 외 US East (N. Virginia)·US East (Ohio)·US West (Oregon) 제공 범위

---

## 제공 범위와 호출 경로

- `tools` array에 `web_search` type을 추가하는 OpenAI Responses API 호환 호출 경로
- 모델이 최신 정보가 필요하다고 판단한 경우 tool을 사용한다는 AWS 설명
- 응답은 model이 사용한 source citation을 포함해 claim origin 추적을 지원하는 범위

## 데이터 경계와 통제

- request data의 AWS boundary 유지와 IAM control은 AWS 제품 설명 범위
- public web source 자체의 데이터 등급·citation URL·prompt·response·tool result가 조직 정책을 만족하는지는 별도 검증 필요
- account·organization SCP, model access, IAM permission, Region policy와 application-side query allowlist를 함께 확인 대상

## 운영 검증 경계

- 검색 index freshness·coverage, citation completeness·correctness, model별 tool-selection rate, latency·quota·가격, logging·retention·audit export는 이번 공지만으로 보증되지 않음
- GovCloud 지원을 한국 리전 제공, 국내 데이터 처리 조건 또는 일반 상용 리전의 compliance 보증으로 해석하지 않음

## 팀 액션

- use case·data classification·external web access 목적·approver·citation retention을 request trace에 연결
- grounded answer correctness, citation coverage, tool invocation·denial, p95 latency, request/token/tool cost와 prompt-injection rejection을 canary로 측정
