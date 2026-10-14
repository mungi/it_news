---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-agent-registry-custom-metadata-registry-records
title: AWS Agent Registry now supports custom metadata for registry records
created: 2026-10-14
ingested: 2026-10-14
published: 2026-10-14 06:00 KST
sha256: a68535d22a338f80a44a8599a10400a518d2c16b9222569b1de828770c19e9cb
tags: [aws, agent, mcp, ai-governance, platform-engineering, global]
---
# AWS Agent Registry now supports custom metadata for registry records

AWS 공식 공지의 Agent Registry custom metadata schema 기능을 기록.
- agent·MCP server·agent skill·gateway·custom resource의 중앙 catalog record에 조직별 구조화 field 추가
- registry별 common attribute schema와 record type별 확장 field 지원
- free text·URL·Boolean·허용 choice field, 생성·update 시 required value validation 지원
- Console·CLI·SDK·registry MCP endpoint에서 custom metadata filter 지원
- 예시: team ownership·data classification·review status·agent model family 기록
- 공지된 제공 리전: US East (N. Virginia)·US West (Oregon)·Asia Pacific (Sydney·Tokyo)·Europe (Ireland)
- 경계: metadata는 runtime authorization·connector scope·approval·audit의 자동 강제 수단이 아니므로 별도 policy와 deployment control 필요
- 팀 액션: owner·data class·tool write scope·review expiry·runtime identity를 required field로 설계하고 CI/CD 검증에 연결
