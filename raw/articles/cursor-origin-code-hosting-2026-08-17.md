---
source_url: https://cursor.com/changelog/origin-code-hosting
title: Cursor Origin Code Hosting 얼리 베타
ingested: 2026-08-19
published: 2026-08-17 09:00
tags: [devtools, cicd, agent, github, global]
sha256: 20845cb224ae5264e7bd1ca9eca3bb7f5fab70c95846bae5deb4a9ca2a00a728
---

## 원문 메타데이터

- 제목: Origin Code Hosting
- 출처: Cursor Changelog
- URL: https://cursor.com/changelog/origin-code-hosting
- 발행 시각: 2026-08-17 09:00 KST (`<time>` `2026-08-17T00:00:00.000Z`)
- Open Graph image: https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/og/og-origin-code-hosting-08-17-26-iibBEcxTigpnjXaBULY8Du327sx4P1.png

## 직접 확인한 본문 사실

- Origin Code Hosting을 유료 플랜 전체에 얼리 베타로 순차 제공
- 초기 기능은 Cursor-hosted repository·pull request·code browsing·GitHub sync이며 agent-native 기능은 후속 제공 예정
- GitHub repository는 선택 동기화·연결 해제가 가능하고 GitHub가 push의 source of truth로 유지
- synced repository의 PR comment·reaction·reply가 Cursor와 GitHub에서 양방향 동기화
- Cursor repository에서 agent의 코드 질의·변경·PR 업데이트·branch push 지원 설명
- Vercel PR preview deployment, Depot GitHub Actions, Buildkite native pipeline 연동 설명

## 증거 경계와 운영 메모

- 직접 확인한 출처는 Cursor 공식 changelog이며 RBAC·OAuth/OIDC scope·secret lifecycle·audit export·data residency·retention·merge/deploy approval·SLA는 확인하지 않음
- 운영 action: repository host·sync·agent write·PR merge·CI·preview deployment를 별도 permission tier로 분리하고 protected branch·short-lived credential·audit·disconnect/rollback canary 적용
