---
source_url: https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/
title: Disrupting supply chain attacks on npm and GitHub Actions
ingested: 2026-07-29
published: 2026-07-29 01:00 KST
sha256: 5237d8f14d4560dfca9b949475fd0211e69b20cb9589c1d8c6749f220a84651b
tags: [github, npm, github-actions, supply-chain, cybersecurity, devops]
---

# npm·GitHub Actions 공급망 공격 완화 변경

- GitHub가 npm registry와 GitHub Actions를 겨냥하는 공급망 공격의 초기 침투·credential 유출·전파·대응 단계별 완화 변경을 정리함
- high-impact npm account는 email 변경 또는 2FA recovery code 사용 뒤 72시간 read-only mode로 전환됨
- `actions/checkout`은 흔히 악용되는 trigger에서 fork의 untrusted code checkout을 기본 차단하며, 위험 검토 뒤에만 opt-out 가능함
- enterprise·organization·repository 수준 workflow execution policy로 누가 어떤 trigger로 Actions workflow를 실행하는지 제한 가능함
- untrusted trigger의 Actions cache write를 제한해 낮은 신뢰 workflow의 cache poisoning이 privileged release workflow credential 탈취로 이어지는 경로를 차단함
- Actions network firewall technical preview는 workflow run의 outbound traffic을 기록하며, egress restriction·policy는 후속 계획으로 설명됨
- npm staged publishing은 CI/CD credential과 package publish 권한을 분리하고 별도 approval·2FA를 요구하는 opt-in control임
- npm v12은 install script를 기본 비활성화하고 승인한 script만 재활성화하는 breaking change를 rollout 중이며 git·remote URL dependency도 기본 차단함
- Dependabot version update는 기본 3일 cooldown을 사용하되 security update는 즉시 열림
- enterprise credential 즉시 revoke 도구와 GitHub OAuth·App token까지 확장된 credential revocation API를 incident response 수단으로 제공함

## 검증 경계

- GitHub 원문은 2026-07-28 날짜만 표시함
- 카드 시각 `2026-07-29 01:00 KST`는 GitHub Blog RSS `pubDate` `Tue, 28 Jul 2026 16:00:00 +0000`을 KST로 변환한 값이며, 원문이 clock time을 직접 주장한 값은 아님
- Actions network firewall은 technical preview이며 원문은 현재 outbound traffic logging을 설명하고, egress restriction·policy는 future work로 구분함
- 각 control은 특정 attack-chain link를 줄이는 변경이며, maintainer account compromise·malicious dependency·self-hosted runner·third-party action·organization policy misconfiguration을 단독으로 제거한다는 보장은 아님
