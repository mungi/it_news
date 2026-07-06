---
sha256: 21b5680efbd7b6937464a714673315c434d71e0b5989a7cad4710c559b3419f5
source_url: https://thehackernews.com/2026/07/unpatched-argo-cd-repo-server-flaw.html
title: Unpatched Argo CD Repo-Server Flaw Could Let Attackers Take Over Kubernetes Clusters
ingested: 2026-07-07
published: 2026-07-02 04:40
tags: [security, kubernetes, gitops, argo-cd, cloud-security]
---

# Unpatched Argo CD Repo-Server Flaw Could Let Attackers Take Over Kubernetes Clusters

## Source facts
- The Hacker News reported an unpatched Argo CD repo-server flaw disclosed by Synacktiv.
- The repo-server internal gRPC service has no authentication; an attacker that can reach it can send crafted requests to execute commands.
- Synacktiv demonstrated the issue against Argo CD v2.13.3 and stated there was no patched release or CVE at publication time.
- The attack abuses Kustomize `--helm-command` through `GenerateManifest`, then can read the Redis password and poison Argo CD deployment cache.
- Helm chart installs may leave NetworkPolicy disabled by default with `networkPolicy.create=false`; Argo CD provides NetworkPolicy files that restrict repo-server and Redis access.

## Korean briefing note
Argo CD는 배포 권한을 가진 GitOps 제어 평면이다. repo-server와 Redis가 클러스터 내부에서 넓게 열려 있으면 단일 pod 침해가 manifest 변조와 자동 sync 악용으로 이어질 수 있다. 즉시 `kubectl get networkpolicy -A`로 Argo CD 컴포넌트별 NetworkPolicy를 확인하고, repo-server/Redis 포트 접근을 Argo CD 내부 컴포넌트로 제한한다.
