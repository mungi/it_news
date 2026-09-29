---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-1-sol-on-amazon-bedrock/
title: OpenAI GPT-6.1 Sol is now generally available on Amazon Bedrock
created: 2026-09-30
ingested: 2026-09-30
published: 2026-09-30 05:17 KST
sha256: 48e35c5dd71404fd43ffccef988962728e80d57f408a91775c5f59eccc25e943
tags: [ai, cloud, aws, foundation-model, agent, inference, finops, global]
---
# Amazon Bedrock: OpenAI GPT-6.1 Sol GA

- AWS What’s New canonical announcement: `Tue, 29 Sep 2026 20:17:00 GMT`, KST `2026-09-30 05:17`
- AWS Machine Learning Blog metadata: `2026-09-29T11:34:14-08:00`, KST `2026-09-30 04:34`; related technical source and Open Graph image verified
- image: AWS ML blog Open Graph image `ML-22090-featured-image.png`
- evidence boundary: `DeepSWE v1.1` Astra-near, GPT-6 Sol 대비 6.4%p, task당 약 5분의 1 비용은 AWS가 인용한 OpenAI vendor evaluation 범위임. Region, endpoint, inference profile, pricing, quota, workload quality·latency·actual cost는 account와 linked documentation에서 별도 확인 필요

## 핵심 요약

- 공개: OpenAI `GPT-6.1 Sol`의 Amazon Bedrock GA와 agentic coding·computer use·professional work 대상 사용 범위
- cache: 반복 context를 재사용하는 agent workload용 explicit prompt caching 지원
- benchmark: OpenAI 주장으로 `DeepSWE v1.1`에서 GPT-6 Astra와 task당 약 5분의 1 비용 수준, GPT-6 Sol 최고 점수 대비 6.4%p 향상
- control: IAM model access, CloudTrail invocation audit, PrivateLink VPC endpoint로 application control plane 구성 가능
- retention: inference prompt·completion의 model training 미사용, abuse classifier flag traffic 최대 30일 AWS 보존, zero data retention 요청 경로 안내
- rollout: quality·tail latency·cache hit·token/tool call·retry·fallback을 completed task 기준으로 canary 검증 필요
