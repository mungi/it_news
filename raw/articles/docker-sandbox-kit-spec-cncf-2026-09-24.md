---
source_url: https://www.docker.com/blog/docker-sandbox-kit-spec-cncf/
title: Docker and CNCF partner on an open spec for agent permissions
ingested: 2026-09-25
published: 2026-09-25 01:00 KST
sha256: 4e307b6192e53c4539e790dc7f5ac30db4dd1484e9c80d9f72257e85a9fca189
tags: [ai, cloud, infra]
---

# Docker Sandbox Kit Spec: OCI image에 agent·tool·요청 권한을 함께 담는 CNCF 공개 명세 제안

## 핵심 요약

- Docker가 agent·tool·typed access request를 OCI image에 담는 Sandbox Kit Spec을 Apache 2.0으로 공개하고 CNCF에 제안함.
- Kit는 OCI extension point를 사용하며 일반 image처럼 build·push·pull·sign·scan 가능한 구조임.
- Docker Sandboxes는 first enforcing runtime이지만 cross-runtime enforcement semantics와 ecosystem adoption은 별도 검증 대상임.
- 운영 대응: image digest·SBOM·signature·capability manifest·credential grant와 runtime audit을 하나의 release evidence로 관리 필요.

## 원문

https://www.docker.com/blog/docker-sandbox-kit-spec-cncf/
