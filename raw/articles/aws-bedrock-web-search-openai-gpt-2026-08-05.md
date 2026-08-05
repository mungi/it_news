---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-web/
title: "Amazon Bedrock launches Web Search for OpenAI GPT models"
ingested: 2026-08-05
published: 2026-08-05 05:37 KST
sha256: 0f6c2856ea0edcc5221c0c402b0259c1809478e3e48772b5cf4e46e37848eec2
tags: [ai, cloud, infra, cybersecurity, weekly-briefing]
---

# Bedrock OpenAI GPT Web Search GA의 server-side grounding 경계

- AWS RSS `Tue, 04 Aug 2026 20:37:00 GMT`를 `2026-08-05 05:37 KST`로 환산
- AWS 공지 visible label은 `Posted on: Aug 4, 2026`이며 exact clock time은 RSS provenance로만 사용
- GPT-5.4·5.5·5.6 Sol/Terra/Luna용 Web Search GA, citation 포함 grounded response라는 AWS 발표 범위

---

## 기능과 호출 경로

- Amazon 운영 web index와 built-in knowledge graph를 이용한다는 AWS 설명
- raw page 대신 semantic snippet extraction으로 context-efficient 결과를 제공한다는 발표
- OpenAI Responses API 호환 tool-use interface와 단일 API call에서 server-side search lifecycle 처리

## 제공·운영 경계

- GA 리전: US East (N. Virginia)·US East (Ohio)·US West (Oregon)
- AWS 내 search 처리와 data residency·zero data egress라는 제품 발표 범위
- index coverage·freshness SLA·citation audit·pricing·quota·한국 리전·tenant retention은 별도 검증 항목

## 팀 액션

- query/prompt data classification, domain allowlist, citation retention과 action approval을 tool policy로 정의
- citation quality·freshness·latency·per-request cost와 prompt injection resistance를 baseline과 비교
