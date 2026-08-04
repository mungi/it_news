---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/gpt-sol-terra-luna-long-context-bedrock
title: "OpenAI GPT-5.6 Sol, Terra, and Luna now support 1 million token context windows on Amazon Bedrock"
ingested: 2026-08-04
published: 2026-08-04 06:03 KST
sha256: 5f4d4dc294845e8b58c60e5c3e0937a3a3242086fff2422b17a603c19b74559e
tags: [ai, cloud, infra, security, release]
---

# Amazon Bedrock GPT-5.6 100만 token context

- AWS What’s New page는 Aug 3, 2026만 표시하며 RSS `2026-08-03T21:03:00Z`를 `2026-08-04 06:03 KST`로 환산
- GPT-5.6 Sol·Terra·Luna의 100만 token context window 지원 발표
- full codebase·장문 문서·multi-turn agent history를 single request에서 처리한다는 AWS 설명

---

## 제공 범위

- Sol: US East (N. Virginia), US East (Ohio) 제공이라는 AWS 설명
- Terra·Luna: 앞선 두 리전과 US West (Oregon) 제공이라는 AWS 설명
- explicit cache breakpoint long-context request에 repeated context prompt caching discount 적용이라는 AWS 설명

## 운영 경계

- token price, cache hit ratio, latency, throughput, context utilization과 model-specific quality는 공지 미제시
- context window는 authorization·provenance·prompt injection control을 대체하지 않음
- full-context와 RAG hybrid의 task quality·cost·tail latency·failure recovery를 workload별로 비교 필요
