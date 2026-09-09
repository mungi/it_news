---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-astra-on-amazon-bedrock/
title: OpenAI GPT-6 Astra is now generally available on Amazon Bedrock
canonical_source: https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-astra-on-amazon-bedrock/
ingested: 2026-09-09
published: 2026-09-09 07:49 KST
sha256: f51d7c7dcde47b161fb9124cba0c418b017a96e0cf543e69c2a67ba37798bcd9
tags: [ai, foundation-model, agent, aws, bedrock, enterprise-ai, model-governance, global]
---

AWS What’s New RSS의 `Tue, 08 Sep 2026 22:49:00 GMT`와 canonical announcement 본문을 직접 확인해 KST `2026-09-09 07:49`로 기록함. OpenAI GPT-6 Astra가 Amazon Bedrock에서 GA가 됐으며, 지원되는 Bedrock API로 직접 호출하거나 ChatGPT Work·Codex를 Bedrock의 모델에 연결할 수 있다는 AWS 공식 발표 범위임.

AWS는 최대 100만 input token context window, 조직 voice·template·standard에 맞춘 output 생성, autonomous agent·대규모 문서 분석·복잡한 software issue 조사·판단이 필요한 application을 예시로 제시함. ChatGPT Work용 enterprise plugin이 common business application 전반의 Astra browser-use capability를 확장한다는 내용도 포함됨.

지원 리전, model identifier·API parameter, pricing, quota, throughput·latency SLO, data retention·residency, plugin별 권한과 action 승인, Bedrock의 특정 security/audit control 설정은 announcement에서 확인하지 못했음. production 전에는 model access·region·quota와 IAM identity·CloudTrail/audit·VPC/egress·browser tool·plugin scope를 실제 tenant에서 확인하고, read-only cohort의 task success·p95·token/context 비용·approval·rollback을 측정할 대상임.
