---
source_url: https://news.hada.io/topic?id=31287
title: Microsoft Flint 공개
ingested: 2026-07-10
published: 2026-07-10
sha256: b167e0292fd7af0bb61c7cc880cb86784ee68faeba471b13d0c9fb3835bacc84
tags: [ai, devtools, agent]
---

# Microsoft Flint 공개, AI 에이전트용 차트 중간 언어와 MCP 서버 제공

- 출처: https://news.hada.io/topic?id=31287
- 발행(KST): 2026-07-10 09:52
- 분류: Developer Tools / Global

## 요약

핵심: Microsoft Research Flint는 AI 에이전트가 짧고 사람이 편집 가능한 명세로 차트를 만들도록 돕는 시각화 중간 언어임. 범위: 46개 차트 유형, 83개 갤러리 예제, Vega-Lite·ECharts·Chart.js 렌더링, TypeScript/JavaScript npm 설치와 MCP 서버 제공.

## 상세

핵심: Flint는 데이터와 의미 타입, 차트 유형, 인코딩을 입력받아 스케일·축·간격·레이아웃 같은 저수준 설정을 컴파일러가 채우는 구조임. 영향: 에이전트가 직접 복잡한 차트 코드를 생성하기보다 검증 가능한 IR을 만들고 결정적 렌더러가 처리하는 패턴 확산 가능성.

### 무슨 일이 있었나
- 핵심: Microsoft Research가 AI 에이전트용 시각화 중간 언어 Flint 공개
- 목표: 사람이 편집할 수 있는 짧은 명세에서 표현력 있는 차트를 생성하는 구조 제공
- 사용: TypeScript/JavaScript 환경 npm 설치와 에이전트 워크플로용 MCP 서버 제공

### 본문 핵심 포인트
- 명세: 데이터, 의미 타입, 차트 명세로 구성해 `YearMonth`, `Quantity`, `Category` 같은 의미를 표현
- 자동화: 컴파일러가 스케일, 축, 포매팅, 색상, 간격, 레이아웃 등 저수준 설정 추론
- 범위: 46개 차트 유형과 83개 갤러리 예제를 제공
- 렌더러: Vega-Lite, ECharts, Chart.js 백엔드를 통합 인터페이스 뒤에 숨김
- 변경: 차트 유형 전환과 인코딩 재바인딩으로 설계 변경 처리 가능
- 협업: Microsoft Research, IDEAS Lab, Renmin University of China 협력 프로젝트

### 왜 중요한가
- 패턴: LLM이 직접 최종 코드·SVG를 만들기보다 검증 가능한 중간 표현을 만들고 컴파일러가 렌더링하는 방식
- 안전성: 중간 언어는 에이전트 출력의 schema 검증, diff 리뷰, 권한 제한, 재현성 확보에 유리
- 운영성: 동일 명세에서 렌더러 전환과 차트 설계 변경이 가능해 장기 유지보수 비용 감소 가능성

### 시사점
- 팀 액션: 사내 데이터 에이전트는 SQL·차트·문서 생성 모두 IR 계층과 validator를 먼저 두는 설계 검토 필요
- 보안 과제: MCP 서버 연결 시 데이터 소스 접근권한, 렌더러 allowlist, 외부 링크·스크립트 삽입 차단 기준 필요

