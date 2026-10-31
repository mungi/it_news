---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-openai-runtime-govcloud/
title: Amazon Bedrock expands API support and introduces Cross-Region Inferencing for OpenAI models in AWS GovCloud (US)
ingested: 2026-10-31
published: 2026-10-31 05:43
sha256: 637b491fd8a68488c172cdbd13cf6b72f49cbdad1e27e9f72be17b989c2a8b32
tags: [ai, cloud, infra, global]
---

# Bedrock OpenAI GPT-5.6 GovCloud API 및 Cross-Region Inference

- 확인 시각: 2026-10-31 11:29 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/bedrock-openai-runtime-govcloud/

## 확인한 사실
- AWS GovCloud(US) `bedrock-runtime` endpoint에서 OpenAI GPT-5.6 Terra·Luna와 Responses·Converse·Chat Completions API 지원
- 두 AWS GovCloud(US) 리전 사이 inference request를 자동 라우팅하는 Cross-Region Inference 추가
- Bedrock model invocation log의 S3·CloudWatch Logs 전달, invocation·token·latency·throttle·error metric, Cost Explorer·CUR의 model별 비용 귀속 범위 명시

## 운영 경계
- Cross-Region Inference가 model entitlement·data residency interpretation·capacity·application SLO를 자동 보장하지 않음
- API contract·logging destination·KMS/IAM·throttle·retry·fallback을 workload별 canary로 검증 필요
