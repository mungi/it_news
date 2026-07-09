---
source_url: https://cloud.google.com/blog/topics/developers-practitioners/google-cloud-run-sandboxes-are-in-public-preview/
title: Safely run AI-generated code in Cloud Run sandboxes
ingested: 2026-07-10
published: 2026-07-10 01:30
tags: [ai, cloud, infra, security, weekly-briefing]
---

# Google Cloud Run Sandboxes 공개 preview, AI 생성 코드·비신뢰 바이너리 격리 실행 지원

- 출처: Google Cloud Blog
- 게시: 2026-07-10 01:30 KST
- 원문: https://cloud.google.com/blog/topics/developers-practitioners/google-cloud-run-sandboxes-are-in-public-preview/

## 요약
핵심: Google Cloud가 Cloud Run Sandboxes public preview 공개. 기능: AI 생성 Python/R/SQL 코드, headless browser, 사용자 제출 script를 Cloud Run 안에서 millisecond 단위로 격리 실행.

## 상세 메모
### 무슨 일이 있었나
- 핵심: Google Cloud가 WeAreDevelopers World Congress에서 Cloud Run Sandboxes public preview 발표
- 대상: AI agent code interpreter, headless browser automation, 사용자 제출 code/plugin/webhook 실행 workload
- 성능: 예시에서 Cloud Run service가 1,000개 sandbox를 시작·실행·종료하며 평균 500ms latency로 동작

### 본문 핵심 포인트
- 실행: `--sandbox-launcher` flag 또는 YAML 구성으로 Cloud Run service에 sandbox launcher 활성화
- 개발: container 안에 mounted된 `sandbox` CLI를 `subprocess`로 호출해 비신뢰 Python script 실행 가능
- 격리: sandbox는 Cloud Run service 환경변수와 Google Cloud metadata server에 접근하지 못함
- 네트워크: outbound egress는 기본 deny이며 필요 시 `--allow-egress`로 명시 허용
- 파일시스템: container filesystem은 read-only로 보이고 쓰기는 격리된 임시 memory overlay에 기록 후 종료 시 폐기
- 통합: Agent Development Kit의 `CloudRunSandboxCodeExecutor`와 ComputeSDK 지원 예고

### 왜 중요한가
- 영향: AI agent가 코드를 직접 작성·실행하는 제품에서 별도 Kubernetes cluster나 third-party microVM runtime 없이 serverless 격리 경계 제공
- 리스크: agent prompt injection이 shell, browser, network, credential 접근으로 이어지는 경로를 기본 deny 구조로 줄일 수 있음

### 시사점
- 팀 액션: Cloud Run 기반 agent 서비스는 sandbox timeout, egress allowlist, file import/export, audit log를 정책으로 정의 필요
- 검증: 실제 workload에서 startup latency, memory overlay 크기, network deny 오탐, ADK executor 호환성 측정 필요
