---
source_url: https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html
title: npm 12 Disables Install Scripts by Default to Reduce Supply Chain Risk
ingested: 2026-07-10
published: 2026-07-10 01:49
tags: [ai, cloud, infra, security, weekly-briefing]
---

# npm 12, 공급망 위험 줄이기 위해 install script 기본 비활성화

- 출처: The Hacker News
- 게시: 2026-07-10 01:49 KST
- 원문: https://thehackernews.com/2026/07/npm-12-disables-install-scripts-by.html

## 요약
핵심: GitHub가 npm 12에서 dependency lifecycle script, git dependency, remote URL dependency 실행·해결을 기본 opt-in으로 변경. 변화: 2FA 우회 granular access token의 민감 작업과 직접 publish 권한도 단계적으로 축소.

## 상세 메모
### 무슨 일이 있었나
- 핵심: GitHub가 npm 12에서 install script 자동 실행을 기본 비활성화한 공급망 보안 변경 공개
- 범위: dependency lifecycle script, implicit node-gyp build, git dependency, remote URL dependency가 명시 허용 전까지 실행·해결되지 않음
- 운영: 신뢰한 script는 `npm approve-scripts --allow-scripts-pending`로 검토 후 `package.json` allowlist에 기록 필요

### 본문 핵심 포인트
- 설정: `allowScripts` 기본값 off로 변경되어 `preinstall`, `install`, `postinstall` 자동 실행 차단
- 설정: `--allow-git` 기본값 none으로 변경되어 direct/transitive Git dependency 해석 제한
- 설정: `--allow-remote` 기본값 none으로 변경되어 https tarball 같은 remote URL dependency 제한
- 토큰: 2FA 우회 GAT는 계정·패키지·조직 관리 등 민감 작업 권한이 2026년 8월부터 축소 예정
- 배포: GAT 직접 publish 권한은 2027년 1월 제한 예정이며 trusted publishing 또는 staged publishing 권장

### 왜 중요한가
- 영향: npm 생태계의 대표 공격면인 install-time code execution과 장기 token 탈취 피해를 기본값에서 줄이는 변경임
- 마찰: 기존 빌드가 lifecycle script나 git dependency에 의존하면 CI 실패 가능성이 있어 사전 allowlist와 lockfile 검토 필요

### 시사점
- 팀 액션: Node.js 프로젝트는 npm 12 전환 전 CI에서 script warning, native addon build, git dependency, remote tarball 사용 여부 점검 필요
- 보안: publish 자동화는 장기 npm token 대신 OIDC trusted publishing과 human approval stage로 전환 필요
