---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-mcp-app/
title: AWS Security Hub MCP App brings exposure findings into your AI-assisted workflow (Preview)
ingested: 2026-07-28
published: 2026-07-28 02:00 KST
sha256: 2d17ffd5fc2e5ecf725a44d32a0d2d55bef319f3c3cc545b9e85ffeeacf052c0
tags: [aws, security, mcp, ai, cloud-security, preview]
---

# AWS Security Hub MCP App preview

- AWS가 Security Hub MCP App preview를 공개함
- 자연어로 top exposure finding, attack path, expanded network path, correlated finding, 영향 resource configuration, remediation recommendation을 조회할 수 있음
- 각 tool call은 AI agent용 text summary와 운영자가 같은 대화에서 검증할 interactive visualization을 함께 반환함
- MCP server는 기존 AWS credential을 사용해 로컬 머신에서 실행됨
- 모든 tool은 read-only이며 AWS 환경을 변경하지 않는다고 AWS가 명시함

## 검증 경계

- 원문은 2026-07-27 UTC 게시일만 제공하므로 카드 시각은 AWS What’s New RSS `pubDate` 2026-07-27 17:00:00 GMT를 KST로 변환한 2026-07-28 02:00 KST임
- preview의 제공 리전·지원 MCP client·credential scope·CloudTrail/CloudWatch audit coverage·rate limit·비용은 원문에서 상세 확인되지 않음
- read-only tool 선언은 agent client의 prompt, local configuration, credential source, 다른 MCP server가 가진 write capability까지 제한한다는 뜻이 아님
