---
source_url: https://arxiv.org/abs/2610.14224
title: Harness²: Recursive Agent Harnessing for an Open World
ingested: 2026-10-20
published: 2026-10-19 18:01 KST
sha256: 4bd9dcc9b544879e79cb2dff447abe4dd5258dc600399332cab533f5a2251587
tags: [ai, agent, evaluation, benchmark, safety, devtools, global]
---
# Harness²: Recursive Agent Harnessing for an Open World

arXiv 원문과 Google Research repository를 기준으로 Harness² 연구를 기록.

- 문제: open-world task는 harness 설계 시점에 unseen이고 test-time에 novel해 ground-truth verifier로 online edit를 안정적으로 유도하기 어려운 조건
- 방법: task-level recursion의 contrastive `Propose-Probe-Compose`와 harnessing-level recursion의 continual improvement harness 연결
- 측정: 세 professional benchmark와 네 model-harness configuration에서 GLM-5·Gemini 3.5 Flash base harness 대비 WorkBuddy-Bench 최대 11.5점, JobBench 4.5점, LAB 11.8 percentage point 개선 보고
- 경계: benchmark 결과는 production agent의 external write 정확성·security·latency·비용·general safety 보장이 아닌 연구 범위
- 팀 액션: harness diff·probe evidence·holdout outcome·tool/IAM scope·cost·approval·rollback을 같은 release record로 보존 필요
