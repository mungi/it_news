---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/oauth-aws-mcp-server/
title: OAuth support for the AWS MCP Server
ingested: 2026-07-10
published: 2026-07-10
sha256: 26133c896c97c6950fb91e374f6a69e2e6d096ac022ce87f409a611fcd9dc06e
tags: [cloud, agent, security]
---

# AWS MCP Server, OAuth 지원으로 AI 에이전트와 AWS Sign-In 직접 연결

- 출처: https://aws.amazon.com/about-aws/whats-new/2026/07/oauth-aws-mcp-server/
- 발행(KST): 2026-07-10 08:03
- 분류: Cloud / Global

## 요약

핵심: AWS MCP Server가 AWS Sign-In 기반 OAuth를 지원해 AI 에이전트가 추가 인증 소프트웨어 없이 AWS 계정 권한으로 연결 가능. 관리: IAM 정책, global condition keys, token introspection/revocation API, dynamic client registration, CloudTrail audit events로 OAuth 접근 통제 가능.

## 상세

핵심: AWS는 개발자가 브라우저 상호작용 또는 headless 방식으로 에이전트를 승인할 수 있게 했고, 기존 AWS identity·sign-in·IAM permission·governance control을 유지한다고 설명. 영향: 클라우드 MCP 운영은 API key 배포 문제가 아니라 OAuth client lifecycle, token revoke, CloudTrail 감사, IAM 조건키 설계 문제가 됨.

### 무슨 일이 있었나
- 핵심: AWS MCP Server가 AWS Sign-In을 통한 OAuth 연결 지원 공개
- 대상: AI 에이전트가 별도 인증 소프트웨어 없이 AWS MCP Server에 직접 연결 가능
- 승인: 브라우저 기반 interactive authorization과 non-interactive headless authorization 지원

### 본문 핵심 포인트
- 연계: 기존 AWS identities, sign-in methods, IAM permissions, governance controls를 계속 적용
- 관리: IAM 정책과 OAuth 기능을 함께 사용해 에이전트 접근 통제 가능
- 기능: global condition keys, token introspection API, token revocation API, dynamic client registration 제공
- 감사: CloudTrail audit events를 통해 OAuth 기반 에이전트 접근 이력 추적 가능
- 문서: AWS Sign-In OAuth 2.0, AWS MCP Server blogpost, Agent Toolkit for AWS 설정 문서로 안내

### 왜 중요한가
- 변화: MCP가 로컬 개발 도구 연결을 넘어 클라우드 제어면 인증 체계와 직접 결합
- 리스크: 에이전트가 AWS 리소스 탐색·변경 권한을 얻으면 token 유출과 과도한 scope가 운영 사고로 연결 가능
- 기회: IAM 조건키와 CloudTrail을 활용하면 에이전트 권한을 기존 클라우드 governance 지표로 관리 가능

### 시사점
- 팀 액션: 에이전트용 IAM role과 OAuth client를 사람 사용자·CI/CD·서비스 계정과 분리 필요
- 운영 과제: 승인 방식, 토큰 폐기, 감사 로그 보존, 권한 검토 주기, emergency revoke 절차를 배포 전 정의 필요

