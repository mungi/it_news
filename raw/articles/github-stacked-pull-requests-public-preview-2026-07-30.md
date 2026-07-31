---
source_url: https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/
title: Stacked pull requests are now in public preview
ingested: 2026-07-31
published: 2026-07-30 00:00 KST
sha256: 674b30017c45f18a68cb25bd51de40cf8f49f29c09660bf93bebee6a7c113c66
tags: [it, devtools, cicd, github, global]
---

# GitHub Stacked Pull Requests 공개 미리보기

- 발행·정렬 시각: GitHub Changelog 원문은 `JULY 30, 2026` 날짜만 표시. 정확한 시각·timezone은 원문에서 확인되지 않아 `2026-07-30 00:00 KST`로 정렬값 기록
- 원문: 큰 변경을 작은 reviewable pull request 계층으로 나누는 Stacked pull requests를 public preview로 발표

## 원문 핵심

- stack은 각 PR이 바로 아래 layer를 target으로 하는 ordered series 구조
- 개별 layer의 diff를 독립 review하고 PR 상단 stack map으로 전체 변경 안의 위치를 확인 가능
- 준비된 상위 PR 병합 시 그 아래 미병합 layer를 한 operation으로 병합 가능
- lower layer만 병합하면 상위 PR은 열린 상태로 남고 자동 rebase·retarget 수행
- 기존 branch protection·required check는 `main`에 도달하는 변경에 계속 적용
- github.com·GitHub CLI·모바일 앱·GitHub Copilot의 `gh-stack` skill을 사용 경로로 제시
- CLI extension 설치 명령: `gh extension install github/gh-stack`
- 모든 저장소에는 며칠에 걸쳐 public preview rollout, merge queue 지원은 이후 몇 주에 걸쳐 rollout한다는 GitHub 안내

## 증거 경계와 운영 메모

- GitHub 원문은 public preview의 구조·사용 경로·rollout 계획을 확인하지만 저장소별 enablement 시점, enterprise 정책, runner 비용, queue latency, rebase conflict 빈도, CI 중복 실행량은 보장하지 않음
- 도입 평가는 PR 크기뿐 아니라 base/layer dependency, required check, merge order, queue wait, rollback scope를 포함한 release workflow 측정 필요

## 출처

- https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/
- https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-stacked-pull-requests
- https://github.com/github/gh-stack
