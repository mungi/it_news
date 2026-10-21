---
source_url: https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/
title: The bridge to agent-scale Git infrastructure
ingested: 2026-10-22
published: 2026-10-22 01:00 KST
sha256: 471e34ea0030177209cbc4c92e48c488f7e7fdf18391b0a502d2bd9437ecd1d0
tags: [github, git, azure, infra, distributed-systems, devtools, global]
---

# GitHub agent-scale Git 인프라: Azure 이관과 reference 단위 quorum

GitHub 공식 Engineering 원문을 기준으로 agentic shift 이후 Git traffic 증가, Azure 이중 배치, per-reference quorum 전환의 사실 범위를 기록.

- 저장소 사본 **99.99999%**가 자체 데이터센터와 Azure 양쪽에 존재하는 상태
- 대부분 repository는 5개 replica 중 2개가 Azure에 있으며 Azure가 Git traffic 약 절반 제공
- 남은 최고 트래픽 repository는 약 25ms 왕복 지연과 serialized write가 이관 병목인 조건
- 기존 healthy replica 대기 구조 대신 Git reference별 quorum으로 write 직렬화 범위 축소 방향
- object storage 기반 read 확장과 persistent state 없는 replica 경로 제시
- 경계: GitHub 내부 architecture 사례이며 일반 Git hosting 성능·가용성 보장 아님
