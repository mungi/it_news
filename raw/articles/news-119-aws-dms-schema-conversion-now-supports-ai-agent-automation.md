---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-sc-ai-agent-automation-mcp-server/
title: AWS DMS Schema Conversion now supports AI agent automation
ingested: 2026-07-11
published: 2026-07-10 16:00
sha256: 2f707879dd7419689fb1813ddfdeb78c4965a9a9f4ec8dc6130e0d401d1face2
tags: [ai, cloud, infra, weekly-briefing]
---

# AWS DMS Schema Conversion, MCP Server로 IDE 안 AI 에이전트 migration 자동화 지원

- Source: AWS What's New
- URL: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-sc-ai-agent-automation-mcp-server/
- Published KST: 2026-07-10 16:00
- Category: Data

## Korean briefing
핵심: AWS가 DMS Schema Conversion을 AWS MCP Server와 연결, Kiro·Claude Code·Cursor 같은 AI coding agent가 IDE에서 자연어로 schema migration workflow를 실행하도록 지원

핵심: agent가 project 생성, source metadata 탐색, schema 변환, assessment report 생성, converted code export 수행 가능
변화: DMS Schema Conversion의 predefined procedure, API pattern, schema exclusion, operational sequencing rule을 agent가 on-demand로 로드
영향: DB migration 작업이 wizard UI에서 IDE 기반 agent workflow로 이동하되 권한·검토·출력 검증 통제가 필요
시사점: database platform team은 MCP 연결 권한, migration dry-run, generated SQL review, rollback 절차를 표준화 필요

## Detailed notes
### 무슨 일이 있었나
- 핵심: AWS DMS Schema Conversion이 AWS MCP Server를 통한 AI agent automation 지원 공개
- 연결 대상: Kiro, Claude Code, Cursor 등 AI coding agent를 DMS Schema Conversion workflow에 연결 가능
- 사용 방식: IDE 안에서 자연어로 schema conversion project 생성, source metadata 탐색, schema 변환 실행 가능
- 범위: 기존 DMS Schema Conversion source·target engine pair 전체에 추가 비용 없이 제공

### 본문 핵심 포인트
- 자동화 항목: agent가 assessment report 생성, converted code export, remaining code object 변환 지원 가능
- 절차 제공: predefined procedure가 API pattern, schema exclusion, operational sequencing rule을 agent에 on-demand 제공
- 목적: agent가 일반 지식으로 trial-and-error를 반복하지 않고 migration 절차를 따라가도록 유도
- 대상 객체: stored procedure, function, trigger 같은 code object 변환 보조 포함
- 운영 조건: regional availability는 AWS DMS Schema Conversion 문서와 region table 확인 필요

### 왜 중요한가
- 생산성 영향: 반복적인 metadata 탐색과 assessment report 작성이 IDE agent workflow로 이동해 migration 초반 분석 시간 절감 가능
- 위험 요소: schema conversion은 잘못된 type mapping, constraint 누락, stored procedure 변환 오류가 서비스 장애로 이어지는 고위험 작업
- 거버넌스 필요: MCP server 연결은 agent 권한, AWS credential scope, audit log, generated SQL review를 함께 요구

### 시사점
- 팀 액션: migration agent는 read-only inventory와 assessment report부터 허용하고 production 적용은 human approval gate와 change ticket에 연결 필요
- 검증 항목: generated schema diff, procedure/function 변환 diff, test data replay, rollback script, AWS CloudTrail 이벤트를 release checklist에 포함 필요
