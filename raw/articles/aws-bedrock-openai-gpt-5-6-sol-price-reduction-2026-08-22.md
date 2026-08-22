---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/bedrock-openai-gpt-56-sol-reduced-pricing/
title: Amazon Bedrock OpenAI GPT-5.6 Sol 가격 인하
ingested: 2026-08-22
published: 2026-08-22 05:11 KST
sha256: 7a76a398292f62ef96caba12e3643459ced4ffa68aadf3b8bd014108d4ff614d
tags: [ai, cloud, aws, openai, finops, agent, release, weekly-briefing]
---

# Amazon Bedrock OpenAI GPT-5.6 Sol 가격 인하 공식 공지

- AWS RSS 발행 `Fri, 21 Aug 2026 20:11:00 GMT`를 KST `2026-08-22 05:11`로 환산
- visible page label: `Posted on: Aug 21, 2026`

## 직접 확인한 본문 사실

- Amazon Bedrock에서 OpenAI GPT-5.6 Sol의 입력 가격을 **1백만 token당 4달러**, 출력 가격을 **1백만 token당 20달러**로 인하
- AWS 공지 기준 기존 Sol 가격 대비 입력 20%, 출력 33.3% 인하이며 Terra·Luna 가격 인하 뒤의 Sol 조정 범위
- promotional pricing은 최소 `2026-11-21`까지 적용이라는 AWS 발표
- AWS는 autonomous coding agent, multi-step analysis, advanced research workflow를 활용 사례로 제시
- 최신 모델 리전 제공 범위는 AWS Regions 페이지, 가격은 Bedrock GPT-5.6 Sol documentation에서 확인하도록 안내

## 증거 경계와 운영 메모

- AWS 공지는 Bedrock GPT-5.6 Sol의 token list price와 promotional 기간을 명시하지만 account별 실제 청구, cache·batch·provisioned throughput·network·guardrail·observability 비용이나 workload별 품질·지연·성공률을 보증하지 않음
- 기존 GPT-5.6 Terra·Luna와 Sol 사이 모델 라우팅은 prompt/output token mix, retry, cache hit, tool-call 횟수, concurrency, region/availability와 quality gate를 같은 trace에서 비교 필요
- promotional 종료 전 rate card·budget alert·fallback policy·model pinning·contract 책임자를 정하고 production workload의 cost per completed task와 failure recovery를 검증 필요
