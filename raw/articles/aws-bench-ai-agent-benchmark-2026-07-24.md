---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-bench/
title: AWS announces aws-bench, an open-source benchmark for AI agents on AWS
ingested: 2026-07-25
published: 2026-07-24 22:00 KST
sha256: cff671a653831e0dfc0a7dc360ba049d56ad89f43fb4aa71dccca92045f63334
tags: [ai, cloud, devtools, benchmark]
---

# AWS aws-bench: 실제 AWS 환경 기반 AI coding agent benchmark 연구 preview

## Verified source facts
- AWS What’s New page date: 2026-07-24; RSS `pubDate`: 2026-07-24 13:00 UTC = 2026-07-24 22:00 KST
- `aws-bench` is an open-source research preview for evaluating AI coding agents on real-world AWS tasks
- Each scenario provisions a dedicated AWS account with CDK stacks; agents run in sandboxed containers with scoped AWS credentials
- Read-only diagnosis uses an LLM judge; create/modify tasks use a programmatic verifier against live AWS state
- README datasets: quickstart 9 tasks/1 scenario, basic 78/4, advanced 47/3
- Requirements include macOS/Linux, Python 3.12+, `uv`, Docker Compose v2 with buildx 0.17+, and AWS permission to create an Organization and member accounts

## Evidence boundary
- AWS labels this a research preview; benchmark reward is not a production safety or reliability guarantee
- Scenario cost, quotas, IAM scope, cleanup, account termination, and verifier behavior require organization-specific validation
