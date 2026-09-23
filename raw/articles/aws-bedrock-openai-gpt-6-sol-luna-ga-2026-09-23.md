---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-sol-luna-on-amazon-bedrock/
title: OpenAI GPT-6 Sol and GPT-6 Luna generally available on Amazon Bedrock
created: 2026-09-23
ingested: 2026-09-23
published: 2026-09-23 03:09 KST
sha256: b18b26c521835abe57f0ab140f56940268397fde9a09bd92e8c45bc39a2a5e71
tags: [ai, cloud, aws, foundation-model, agent, inference, finops, global]
---
# Amazon Bedrock: OpenAI GPT-6 Sol·GPT-6 Luna GA

- AWS canonical announcement: `Tue, 22 Sep 2026 18:09:00 GMT`, KST 2026-09-23 03:09
- image: AWS What’s New page에 article-specific Open Graph image 미확인, site fallback 사용
- evidence boundary: AWS announcement의 model availability·use-case·context·internal OpenAI factuality claim 범위임. benchmark methodology, regional availability, endpoint, inference profile, price, workload latency·quality는 linked model documentation과 tenant account에서 별도 확인 필요

## 핵심 요약

- 공개: Amazon Bedrock에서 OpenAI `GPT-6 Sol`과 `GPT-6 Luna` GA, 기존 GPT-6 Astra와 함께 제공 범위 확장
- Sol: recurring complex task·software development·feature implementation·debug·review/refactor·data analysis·multistep tool workflow 대상 모델로 AWS가 설명
- Luna: summarization·extraction·classification·routing 같은 focused high-volume workload와 adjustable reasoning effort 대상 모델로 AWS가 설명
- context: 두 모델 모두 최대 `1M token` context 지원 범위
- vendor claim: Sol이 internal OpenAI factuality evaluation에서 GPT-5.6 Sol 대비 오류를 약 절반으로 낮췄다는 AWS 인용; benchmark setup·대표 workload 일반화 불가
- 운영: Bedrock console과 supported API로 호출 가능하며, Region·endpoint·feature·inference profile·pricing은 account rollout 전 model card와 documentation 대조 필요
