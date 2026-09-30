---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/claude-region-expansion-in-sk/
title: Amazon Bedrock expands Claude model availability to India, South Korea, and Singapore
created: 2026-09-30
ingested: 2026-09-30
published: 2026-09-30 00:41 KST
sha256: 18cf027af3e06b27af9785eadfa2f44175a1ffa9313b209c3090d91991127e60
tags: [ai, cloud, aws, anthropic, korea, data-residency]
---
# Amazon Bedrock Claude 모델의 서울 리전 in-Region inference 확대

- AWS What’s New canonical announcement와 RSS `Mon, 29 Sep 2026 15:41:00 GMT` 대조, KST `2026-09-30 00:41`
- 제공: Amazon Bedrock의 Anthropic `Claude Opus 5`·`Claude Sonnet 5`를 서울 `ap-northeast-2`에서 in-Region inference로 제공
- 데이터 경계: 호출한 리전 안에서 inference request와 data를 처리하며 해당 리전을 벗어나지 않는다고 AWS가 명시
- 대상: 지리적 데이터 처리 요구가 있는 금융·의료·공공 고객을 포함한 in-country inference 사용 사례
- 비교: 인도는 Mumbai·Hyderabad의 geographic cross-Region inference, 싱가포르는 Claude Sonnet 5 in-Region inference 제공
- 확인 경계: 계정별 model access·quota·가격·feature parity·정확한 model ID·서비스 약관은 공지가 확정하지 않아 Regional availability 문서와 tenant에서 별도 확인 필요

## 핵심 요약

- 변경: 서울 `ap-northeast-2` `bedrock-runtime` endpoint에서 Claude Opus 5·Claude Sonnet 5 in-Region inference 제공
- 데이터: inference request와 data가 호출 리전 내에서 처리되고 해당 리전을 벗어나지 않는다는 AWS의 공지 범위
- 아키텍처: 기존 global 또는 cross-Region inference를 사용한 workload는 endpoint·inference profile·data path·observability를 분리 검증 필요
- 거버넌스: 데이터 국외 처리 제약이 있는 workflow는 provider claim과 실제 account routing·logging·retention 설정을 change record로 대조 필요
- 운영: representative request로 model access·quota·latency·streaming·tool use·failover와 rollback 경로 canary 필요
