---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai/
title: AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets
ingested: 2026-07-15
published: 2026-07-15 02:00 KST
sha256: 4d5a0090b5cf6d455b7f79fcff83863827aa744045a0762dbab93dc69189a035
tags: [aws, security, ai, asset-inventory, sbom, guardduty]
---

# AWS Security Hub AI inventory

- AWS Security Hub가 조직 전체 AI asset과 security posture를 위한 AI inventory를 공개함
- 관리형 AI: Bedrock, Bedrock AgentCore, SageMaker의 AWS Config resource를 inventory화
- 자체 호스팅 AI: Amazon Inspector SBOM 분석으로 EC2와 ECR image의 endpoint·model·agent를 식별하며 Ollama·vLLM·Hugging Face TGI를 예시로 제시
- 외부 의존성: GuardDuty DNS telemetry로 EC2가 호출하는 third-party AI API endpoint를 발견하는 경로
- 발견 asset을 기반 infrastructure와 GuardDuty threat finding을 포함한 security finding에 연결하고, account·resource type·discovery method·model identity로 조회 가능

## 검증 경계

- inventory는 Config·SBOM·DNS telemetry가 관찰한 범위의 목록이며 모든 runtime과 data flow의 완전한 증명은 아님
- AWS는 Security Hub Essentials에 추가 비용 없이 포함되고 상용 Security Hub 리전에서 제공된다고 밝힘; Inspector·Config·GuardDuty의 기존 계정별 수집·처리 비용은 별도 점검 필요
