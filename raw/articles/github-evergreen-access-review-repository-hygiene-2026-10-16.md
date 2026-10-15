---
source_url: https://github.blog/engineering/platform-security/staying-evergreen-how-we-automated-secure-access-and-repo-hygiene-in-a-shared-org/
title: Staying Evergreen: How we automated secure access and repo hygiene in a shared org
created: 2026-10-16
ingested: 2026-10-16
published: 2026-10-16 03:00 KST
sha256: e3a19e8cb9fc5191af63dfe2493b4e2721516ea703018efa4057ce3bd9243676
tags: [github, github-actions, devsecops, access-review, repository, automation, security, global]
---
# GitHub Evergreen access review·repository hygiene

GitHub Engineering의 shared organization 운영 사례를 기록.

- 범위: GitHub App `Evergreen`으로 outside collaborator quarterly access review와 human activity가 없는 stale repository archival을 자동화한 구현 사례
- 원칙: access review 무응답은 revoke하는 fail-secure default, repository는 delete하지 않고 archive만 수행
- 일정: controller repository의 GitHub Actions가 quarterly `repository_dispatch`를 보내 stale review·access review·stale cleanup·access cleanup을 각각 1·8·16·23일 실행
- 보호: review는 cleanup 2주 전에 열고 hard grace period를 적용, 각 단계는 `workflow_dispatch` 지원
- 경계: GitHub 내부 shared organization 사례이며 조직별 legal hold·retention·repository owner·break-glass access·external collaborator 업무 연속성은 별도 정책 필요
- 팀 액션: auto-revoke 전에 inventory authority·approval evidence·exception expiry·archive restore owner를 확정하고 dry-run 결과를 검토
