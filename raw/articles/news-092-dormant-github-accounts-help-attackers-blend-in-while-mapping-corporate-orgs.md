---
source_url: https://thehackernews.com/2026/07/dormant-github-accounts-help-attackers.html
title: Dormant GitHub Accounts Help Attackers Blend In While Mapping Corporate Orgs
ingested: 2026-07-10
published: 2026-07-10 03:38
tags: [ai, cloud, infra, security, weekly-briefing]
---

# 휴면 GitHub 계정·노출 PAT, 기업 조직·저장소 정찰에 악용

- 출처: The Hacker News
- 게시: 2026-07-10 03:38 KST
- 원문: https://thehackernews.com/2026/07/dormant-github-accounts-help-attackers.html

## 요약
핵심: Datadog Security Labs가 휴면 GitHub 계정과 노출된 PAT를 이용한 조직·저장소 API 정찰 캠페인 경고. 영향: 일부 사례는 공개 정보 열람을 넘어 private repository clone 시도까지 확인.

## 상세 메모
### 무슨 일이 있었나
- 핵심: Datadog Security Labs가 기업 GitHub 조직·저장소·사용자 계정을 체계적으로 열람하는 복수 캠페인 경고
- 방식: 자동화 스캐너, 합법적으로 보이는 user agent, 휴면 GitHub ghost account, 노출된 OAuth token/PAT 조합 사용
- 범위: 대부분은 공개 API 기반 정찰이지만 일부 사례에서 private repository clone 시도 확인

### 본문 핵심 포인트
- 계정: 공격에 쓰인 ghost account는 생성 후 2~5년간 비활성 상태로 남아 있다가 API traffic에 사용됨
- 규모: 50개 이상 휴면 계정과 다수의 정상 계정 token이 조직·repository enumeration에 동원됨
- 정보: public repository, 조직 구성원, 팔로우 관계, 수정 프로젝트 같은 개발 활동 그래프가 자동 수집 대상임
- 위험: 개별 요청은 정상 API 호출처럼 보이지만 여러 계정이 동기화된 패턴으로 움직일 때 조직 단위 정찰 신호가 됨

### 왜 중요한가
- 영향: GitHub 정찰은 소스코드 탈취 전 단계뿐 아니라 secret 위치, maintainer 관계, CI/CD 진입점을 찾는 기반 데이터가 됨
- 운영: 오래된 외부 collaborator, 미사용 계정, 장기 PAT, OAuth app 권한이 repository 접근면으로 남을 가능성 큼

### 시사점
- 팀 액션: GitHub Enterprise/조직은 inactive user, fine-grained PAT, OAuth app grant, repository clone audit log를 주기 점검 필요
- 탐지: 단일 API 호출보다 여러 계정·user agent·조직을 가로지르는 enumeration sequence를 SIEM 규칙으로 묶는 방식 필요
