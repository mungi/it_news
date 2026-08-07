---
source_url: https://www.githubstatus.com/incidents/qcvjkzcs7j74
title: Incident with Actions
ingested: 2026-08-07
published: 2026-08-07 00:22 KST  # GitHub Status incident created_at-derived
sha256: ebbf923f84f220528989fc57e552119a6cada9d1a8a426598eef62b795336464
tags: [it, devtools, cicd, github, incident, global]
---

## 원문 확인
- GitHub Status incident page와 Statuspage API를 2026-08-07 KST에 직접 확인
- incident 생성 `2026-08-06T15:22:49.029Z` = `2026-08-07 00:22 KST`, resolved `2026-08-07T02:04:44.460Z` = `2026-08-07 11:04 KST`
- Actions와 Pages major outage, workflow 시작/완료 실패·지연, Actions REST API 오류, queued job timeout, webhook trigger throttling 기록
- GitHub-hosted·self-hosted runner, Copilot code review·coding agent, GitHub Enterprise Importer migration, Pages의 영향 또는 지연 기록
- invalid job retry runner와 self-hosted runner job pickup 문제의 fix rollout, system-wide queue drain 및 full webhook throughput recovery 기록
- 일부 push·pull request trigger는 처리되지 않아 자동 replay 불가; new commit push, PR update 또는 manual rerun 필요라는 GitHub 안내

## 운영 검증 경계
- GitHub는 detailed root-cause analysis를 추후 공유한다고 밝혀 root cause와 재발 방지 효과는 원문에서 미확정
- 조직별 누락 workflow, artifact publish, deployment, security scan, approval 영향은 event·run·webhook·artifact audit evidence로 별도 대조 필요
- ARC idle pod의 삭제/redeploy와 replacement runner 생성은 GitHub 안내 범위이며, rerun 전 idempotency·duplicate side effect·environment lock 확인 필요
