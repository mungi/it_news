---
source_url: https://news.hada.io/topic?id=31315
title: fenic - Semantic DataFrames for humans and agents
ingested: 2026-07-11
published: 2026-07-11 09:31
tags: [ai, devtools, data]
sha256: b4f016861d3489d1cd058bca3e2f88ecad86e6df10aafa03ea388dd4e5376de7
---

# fenic - Semantic DataFrames for humans and agents

## Korean briefing

요약: 핵심: fenic은 PySpark/SQL식 DataFrame 연산과 LLM 기반 extract·classify·summarize·embed·semantic join을 하나의 쿼리 모델로 묶는 오픈소스 엔진. 영향: 에이전트 컨텍스트 구축을 채팅 기록이 아니라 재실행 가능한 데이터 파이프라인과 MCP 도구로 관리하는 패턴 제시.

상세:
- 핵심: typedef-ai가 사람과 에이전트가 함께 쓰는 Semantic DataFrames 프로젝트 fenic 공개
- 범위: `select`, `filter`, `join`, `group_by`, `agg` 같은 DataFrame 연산과 LLM 시맨틱 연산자를 같은 쿼리 모델에 배치
- 대상 데이터: 문서, 트랜스크립트, 로그, eval trace, 티켓, 테이블, API 응답을 typed row workflow로 변환
- AI 연산자: `extract`, `classify`, `summarize`, `embed`, semantic `join`을 스키마와 타입을 가진 연산자로 제공
- 비용 통제: 일반 필터를 시맨틱 필터보다 먼저 실행하고 자동 batching, rate limit, retry, cache로 불필요한 LLM 호출 감소
- 검사 가능성: row-level lineage, `explain`, 쿼리별 token/cost metric으로 pipeline 검토 가능
- 런타임: Polars/DuckDB를 일반 데이터 연산에 활용하고 Apache Arrow로 교환, Pydantic schema binding과 PDF/Markdown/JSON/HTML logical type 지원
- 에이전트 연계: `fenic skill install`, `fenic check`, catalog 등록, MCP 노출로 pipeline을 type-safe tool로 전환
- 컨텍스트 엔지니어링: RAG·agent 입력 데이터 준비가 ad-hoc script나 chat transcript가 아니라 versionable pipeline으로 이동
- 운영성: semantic join과 추출 결과가 반복 실행 가능해야 eval, regression test, 비용 비교가 가능
- 거버넌스: 에이전트가 호출하는 데이터 처리 도구에 schema, lineage, cost metric이 붙으면 감사와 권한 분리가 쉬워짐
- 팀 액션: agent용 데이터 준비 코드를 notebook에서 production pipeline으로 승격할 때 type schema, cache, token budget을 기본 설계에 포함 필요
- 검토 항목: semantic operator의 비결정성, prompt/version 변경, PII masking, tool 권한 범위를 CI 검증 대상으로 편입 필요
- 운영 과제: MCP tool로 노출되는 데이터 파이프라인은 API와 동일하게 owner, SLA, audit log, rollback 기준 필요

시사점: 에이전트 플랫폼팀은 비정형 데이터 추출·요약·조인을 LLM 호출 묶음이 아니라 typed, cached, explainable pipeline으로 표준화할 필요.
