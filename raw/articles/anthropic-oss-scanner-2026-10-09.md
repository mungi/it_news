---
source_url: https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source
title: An opt-in vulnerability-finding service for open-source software
created: 2026-10-09
ingested: 2026-10-09
published: 2026-10-09 04:00 KST
sha256: b1901f2ca92e2f9957a192cd3e767ed7601c12ae2c68744e1d3a841f1692fb6b
tags: [ai, cybersecurity, open-source, devtools, global]
---
# Anthropic OSS Scanner: opt-in 오픈소스 취약점 탐지

- Anthropic launch post publication: `2026-10-08T19:00:00Z`, KST `2026-10-09 04:00`
- 공식 FAQ: `https://red.anthropic.com/oss-scanner/`
- source boundary: opt-in eligible project에 strongest model의 unreviewed report를 전달하는 서비스임. 모든 finding의 정확도·severity·scan frequency·SLA·CVE 발급을 보장하지 않음

## 핵심 요약

- 공개: core maintainer opt-in 기반 `OSS Scanner` fast track
- 검증: 48개 project high/critical 후보 97건 중 85건이 CVD bar 충족이라는 Anthropic evaluation
- 운영: repository·contact·offline audit Dockerfile·optional threat model과 severity rubric 제출
- 경계: unreviewed report는 duplicate·severity inflation·threat-model mismatch 가능성 존재
- 팀 액션: isolated reproduction·triage SLA·CVD ownership·patch acceptance test를 report intake 전에 고정
