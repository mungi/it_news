---
source_url: https://www.cncf.io/blog/2026/10/12/from-zero-to-agent-builder-running-kagent-on-your-laptop/
title: From zero to agent builder: Running kagent on your laptop
created: 2026-10-13
ingested: 2026-10-13
published: 2026-10-12 20:30 KST
sha256: 019ddaafafb7523c43d616953416cf1a6a184dc3d5c0a48ee5c72116938e974e
tags: [ai, infra, kubernetes, platform-engineering, devops, global]
---
# CNCF kagent agent-builder local lab

- CNCF 원문 `article:published_time`: `2026-10-12T11:30:00+00:00`, KST `2026-10-12 20:30`
- 구조: system prompt·model·tool list를 가진 `Agent` custom resource를 controller가 A2A running pod로 전환하는 설명
- 실습: Docker·kind·kubectl·Helm·jq·Ollama와 `qwen3-coder:30b-a3b-q4_K_M` example, 약 18GB disk 언급
- 권한 예시: tool server의 read-only role과 `agents.kagent.dev`의 get/list/watch/create/update/patch만 허용, sample integration agent 다수 비활성화
- 기본값 경고: chart의 tool server ServiceAccount가 기본 cluster-admin을 받을 수 있다는 설명
- 보안 경계: default unsecure auth mode에서 request가 같은 user로 동작, bundled PostgreSQL built-in password, `kubectl port-forward` localhost 노출은 laptop 조건이며 shared cluster 부적합 명시
- 팀 액션: generated manifest의 request·digest·policy verdict·human approval·apply·controller-created object·runtime tool trace를 연결하고 CR write와 workload privilege를 분리 필요
