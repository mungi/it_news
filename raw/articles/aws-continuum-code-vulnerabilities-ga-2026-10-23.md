---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-for-code-vulnerabilities-is-now-generally-available
title: AWS Continuum for code vulnerabilities is now generally available
ingested: 2026-10-23
published: 2026-10-23 06:00 KST
sha256: 5c4b55a0842f2ad5687c91f8604930eb0ebd95df3a4d974c709ce7e39ecebc5b
tags: [aws, security, vulnerability-management, devops, ai, cloud, global]
---

# AWS Continuum for code vulnerabilities GA

AWS What’s New RSS `Thu, 22 Oct 2026 21:00:00 GMT`와 canonical announcement를 대조해 KST `2026-10-23 06:00` 기준으로 기록.

- 공개: 코드 취약점 발견·검증·우선순위화·수정을 대상으로 한 AWS Continuum GA
- 환경 근거: AWS resource topology·identity relationship·network reachability로 context graph 구성
- 입력: 기존 vulnerability finding 수집과 source code scan 결합
- 검증: isolated sandbox에서 finding의 exploitability를 시험하는 범위
- 우선순위: application 구성 요소와 business impact를 기준으로 risk를 판단하는 방식
- 산출물: exploitability proof·blast radius assessment를 붙인 remediation patch pull request를 개발 workflow에 제공
- 제어: Learn mode의 human-approved proposal에서 조직 guardrail 내 Enforce mode로 전환 가능
- 연계: Amazon GuardDuty·AWS Security Hub와 함께 작동하는 범위
- 경계: 개별 finding의 exploitability·patch correctness·PR merge 안전성·조직별 coverage는 source에서 보장하지 않으므로 pilot evidence로 별도 검증 대상
