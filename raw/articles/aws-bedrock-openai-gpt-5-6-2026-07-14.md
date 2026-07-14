---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-sol-terra/
title: OpenAI GPT-5.6 Sol, Terra, and Luna now generally available on Amazon Bedrock
ingested: 2026-07-14
published: 2026-07-14 07:03 KST
sha256: 50485312f752de3ecaa51e088c677b4af7920b32ee305fe1c082085583c7a327
tags: [ai, cloud, inference, aws, llmops]
---

# Amazon Bedrock의 OpenAI GPT-5.6 Sol·Terra·Luna 정식 제공

- AWS가 OpenAI GPT-5.6 Sol·Terra·Luna를 Amazon Bedrock에서 정식 제공한다고 발표함
- 접근 경로: Bedrock `Responses API`와 `bedrock-mantle` endpoint 사용 가능
- 계층: Sol은 flagship reasoning, Terra는 균형형 성능, Luna는 고속·저비용 추론 계층으로 AWS가 구분
- 캐시: 명시적 cache breakpoint 기반 prompt caching에서 반복 context 비용 **90% 할인** 안내
- 비용: OpenAI 직접 요율과 동일하고 AWS commitment 사용량에 반영된다는 AWS 발표
- 리전: Sol은 US East (N. Virginia·Ohio), Terra·Luna는 US East (N. Virginia·Ohio)와 US West (Oregon) 제공

## 운영 해석

- 모델별 품질·성공 작업당 비용·p95 지연 시간·cache hit rate를 같은 trace에서 비교 필요
- Sol의 제한된 리전 범위를 고려해 데이터 경계, quota, 장애 시 Terra·Luna 또는 다른 모델로의 fallback 정책 설계 필요
- 실제 비용은 반복 prefix 비율, cache miss, tool-call loop, 출력 길이에 좌우되므로 AWS 발표 수치를 조직 워크로드에 일반화하지 않을 필요
