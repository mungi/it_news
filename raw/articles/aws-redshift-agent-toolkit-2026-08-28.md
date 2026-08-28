---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/redshift-agenttoolkit-for-ai-assisted-datawarehouse-mgmt
title: Amazon Redshift integrates with Agent Toolkit for AWS for AI-assisted data warehouse management
ingested: 2026-08-28
published: 2026-08-28 05:07 KST
sha256: 543173d3af6ffd5ab449893ba6944a40771bcdbc4f856227053248666fe6e67b
tags: [aws, redshift, mcp, ai, data, sql, migration, cloud]
---
Amazon Redshift가 AWS Agent Toolkit과 통합돼 Claude Code·Kiro·Cursor 같은 AI agent에서 data warehouse와 data lake의 build·query·troubleshoot·migration을 지원한다고 AWS가 공지함. 통합은 사용자를 대신해 인증된 AWS API 실행을 제공하는 AWS MCP server와 Redshift skills를 결합하는 구조임.

Redshift skills에는 SQL syntax reference, SQL 작성 없이 schema·data를 탐색하는 metadata discovery, data loading pattern, materialized view 권장 사항, function·data type 안내, `QUALIFY`·`PIVOT`·`SUPER` 확장과 discovery·schema/SQL conversion·data movement·validation·performance comparison을 포함한 migration 절차가 포함됨. provisioned cluster·Serverless workgroup에서 기존 인프라 변경 없이 사용할 수 있고, Redshift와 AWS MCP Server 제공 모든 리전에서 추가 비용 없이 제공된다는 공식 범위임.

`aws-data-analytics` plugin은 MCP Server configuration과 Redshift skills를 함께 설치하며, MCP Server access가 있는 agent는 runtime에 skills를 발견·load할 수도 있음. agent IAM 권한, database role, SQL DDL/DML 승인, query 비용·성능·isolation, 데이터 분류·감사 보존, migration correctness·rollback은 공지가 보증하지 않으므로 read-only discovery와 write action을 분리하고 approval·audit·cost guardrail을 canary로 검증해야 함.
