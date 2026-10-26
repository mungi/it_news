---
source_url: https://www.cncf.io/blog/2026/10/26/isolation-security-scale/
title: Isolation. Security. Scale.
created: 2026-10-26
ingested: 2026-10-26
published: 2026-10-26 20:30 KST
sha256: 6efff13f6d3186d8b76001c59f9999d09ff9ad3d6816c16319c501618241ee0f
tags: [ai, infra, kubernetes, agent, cloud-security, open-source, global]
---
# kagent·Agent Substrate의 agent sandboxing 구현 경계

- CNCF Ambassador post의 canonical `article:published_time` `2026-10-26T11:30:00+00:00`을 KST `2026-10-26 20:30`으로 변환하고 OG image·본문을 직접 대조
- 범위: kagent runtime과 Agent Substrate를 결합해 declarative/BYO agent를 sandbox에서 실행하는 구현 안내이며, CNCF 프로젝트 release·보안 인증·production SLA 공지가 아님
- 격리: Agent Substrate Worker는 Pod로 실행되고 Actor는 `ateapi` control plane이 관리하며, gVisor Sentry의 user-space system-call handling과 microVM의 hardware virtualization을 설명
- 네트워크: 일반 container만으로는 ingress·egress·policy enforcement가 평면적일 수 있으므로 network policy·segmentation·routing과 AI Gateway policy를 별도 설계 대상으로 제시
- 상태: agent state를 snapshot으로 이어가고 multi-tenant traffic routing의 isolation boundary를 둘 필요를 제시하며, 실제 snapshot durability·encryption·retention·tenant separation은 배포 검증 대상
- 설치: `kubectl-ate`, Agent Substrate, kagent 순서와 Helm 기본 `WorkerPool` 1개·Worker Pod 2개 구성을 안내
- CRD: `kagent.dev/v1alpha3`의 `Harness`와 `AgentTemplate`, `workerPoolRef`, `snapshotPolicy.location`, `allowedAgentTemplates.selector` 예시를 제공
- 세션: 새 session이 새 Actor를 만들고 같은 session은 기존 Actor를 쓴다는 UI 예시를 제시하며, 숫자 예시는 특정 workload capacity·autoscaling·비용 보장이 아님
- 팀 액션: runtime isolation, egress policy, model/tool credential, snapshot bucket, control-plane RBAC, tenant routing, audit·rollback을 분리해 canary 검증 필요

## 핵심 요약

- 변화: agent runtime·sandbox platform·declarative CRD를 연결한 kagent/Agent Substrate 구현 경로 공개
- 볼 것: gVisor·microVM 설명과 실제 kernel escape, host access, network egress, secret path의 cluster별 policy evidence 분리
- 피할 것: Ambassador tutorial의 architecture를 CNCF 공식 보안 보증 또는 모든 agent workload의 production-ready 판단으로 확대하는 해석
- 팀 액션: `Harness` 하나를 dedicated namespace·scoped service account·egress deny·ephemeral snapshot test로 먼저 배포하고 session lifecycle·cleanup을 계측
