---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216129
title: 얀 르쿤의 월드 모델 'H-제파', 단·장기 계획 분리로 로봇 경로 계획 성공률 73% 달성
created: 2026-10-12
ingested: 2026-10-12
published: 2026-10-11 17:34 KST
sha256: f671df9145ff336cf39c77c54ca578566b844a60a47685bd74fdb0bcb748ee8e
tags: [ai, robotics, world-model, research, global]
---
# H-JEPA 계층형 월드 모델과 visual planning 연구

- AI타임스 원문 `article:published_time`: `2026-10-11T17:34:43+09:00`, KST `2026-10-11 17:34`
- 1차 연구 원문: arXiv `2610.06805`, `H-JEPA: End-to-End Learning of Hierarchical World Models for Visual Planning`, 2026-10-05 공개
- 구조: action-conditioned JEPA 여러 개를 시간 범위·추상화 수준별 별도 latent space에서 end-to-end 학습하고, 상위 계층 예측을 하위 planner의 subgoal로 전달하는 top-down 계획
- 평가: 네 개 simulated navigation·manipulation 환경에서 flat JEPA와 비교했고, Visual AntMaze 3계층 구성은 성공률 `18%`에서 `73%`, 더 낮은 planner compute라는 원문 결과
- 분석: temporal decomposition과 higher-level goal representation의 ablation이 성능 개선에 기여했다는 원문 결론
- 확장 범위: inverse-dynamics supervision을 더한 DROID real-robot video의 offline planning fidelity 평가까지이며, 실제 hardware control의 안전성·latency·fleet reliability 보장은 아님
- 팀 액션: simulation/offline benchmark와 hardware canary를 분리하고 collision·near-miss·override·sensor coverage·planner p95·replan·safe-state·rollback을 deployment acceptance criteria로 관리 필요
