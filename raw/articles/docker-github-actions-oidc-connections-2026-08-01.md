---
source_url: https://www.docker.com/blog/docker-oidc-connections-for-github-actions-available-for-docker-orgs/
title: Docker OIDC connections for GitHub Actions available for Docker Orgs
ingested: 2026-08-03
published: 2026-08-01 01:30 KST
sha256: 77ad775fe033045b0ec81f6e86664cca709671c369a5c845b7900fa8ad6b4aa9
tags: [devtools, cicd, cybersecurity, cloud, global, release]
---

# Docker 조직용 GitHub Actions OIDC 연결

## 확인한 원문 사실

- Docker 공식 블로그 제목: `Docker OIDC connections for GitHub Actions available for Docker Orgs`
- Docker RSS `pubDate`: `Thu, 31 Jul 2026 16:30:00 +0000`, KST 변환 `2026-08-01 01:30`
- Docker는 GitHub Actions에서 Docker Hub 인증에 OIDC를 지원한다고 공개
- GitHub가 repository·branch·environment 등 workflow-run metadata를 담은 signed JWT identity token을 발급한다고 설명
- `docker/login-action`이 JWT를 Docker에 제시하고, Docker가 GitHub public-key registry 기반 signature와 Admin Console ruleset을 검증한다고 설명
- ruleset 일치 시 Docker가 지정 resource scope의 short-lived access token을 반환하며 token은 수 분 안에 만료되고 재사용할 수 없다고 설명
- 지원 범위는 Docker Team, Docker Business, Docker Hardened Images 구독 조직 및 Docker Sponsored Open Source Program 조직으로 명시
- Docker는 기존 PAT·OAT가 당장 제거되는 것은 아니며 legacy workflow와 personal project는 기존 인증 방식을 계속 쓸 수 있다고 설명

## 출처 경계와 운영 메모

- 원문은 GitHub Actions에서 Docker Hub push·pull·build workflow의 secretless authentication 흐름을 설명하며, 모든 Docker 제품·registry·CI provider·enterprise identity 조건의 동일 지원을 보장하지 않음
- Docker의 OIDC connection은 GitHub issuer·repository·branch·environment claim을 ruleset과 맞추는 방식이므로, broad repository pattern·unprotected branch·environment bypass가 있으면 long-lived PAT 제거만으로 write 권한 과다 문제가 해결되지 않음
- rollout 전 `id-token: write` 권한, workflow trigger, reusable workflow caller, fork PR, protected environment, Docker resource scope, token exchange 및 denial audit event를 같은 permission matrix로 검증 필요
- 기존 PAT/OAT를 비활성화하기 전 canary workflow에서 pull·build·push·denied-claim·key rotation·rollback을 확인하고, secret removal과 ruleset enforcement evidence를 change record로 보존 필요
