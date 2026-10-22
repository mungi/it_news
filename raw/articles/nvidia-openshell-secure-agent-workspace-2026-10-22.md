---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=42387
title: NVIDIA OpenShell Reference Architecture 공개 보도와 secure agent workspace 원문
ingested: 2026-10-22
published: 2026-10-22 10:32 KST
sha256: 59a7a179cc97cd55478ca93c19972c8b72ae4ca0cba06aebb4f0ea1fb8b52eb6
tags: [nvidia, ai, agent, cybersecurity, devops, open-source, global]
---

# NVIDIA OpenShell Secure Agent Workspace 레퍼런스 아키텍처

인공지능신문의 2026-10-22 10:32 KST 보도와 NVIDIA OpenShell GitHub repository·NVIDIA Secure Agent Workspace reference architecture를 대조해 기록.

- NVIDIA가 autonomous AI agent용 safe, private runtime을 표방하는 `NVIDIA/OpenShell` 공개 repository 제공
- NVIDIA reference architecture가 Secure Agent Workspace, logical plane, network architecture, trusted access broker, credential proxy, enterprise tool access, security·governance model을 설계 주제로 제시
- inference serving은 workspace feature가 아니라 별도 hard dependency로 구분
- Red Hat OpenShift·Microsoft Azure reference implementation과 Phase I managed VM control·Phase II runtime-enforced agent policy 문서화
- 경계: reference architecture·repository 공개는 조직별 agent의 침해 방지, runtime enforcement 성능, 규제 준수, 위험 행동 차단 시간을 보장하지 않음
- 운영 검증: identity scope·credential lifetime·tool authorization·network egress·telemetry·revoke·workspace cleanup을 실제 task와 incident drill로 대조 필요
