---
source_url: https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug
title: Wiz Red Agent Snowflake GitHub Actions injection 연구
ingested: 2026-08-18
published: 2026-08-17 23:00
tags: [cybersecurity, cicd, devops, agent, global]
sha256: e63063866e5f64d5fa4cccda425011295b6eff6657f8459c23a9b7b04b7e546e
---

## 원문 메타데이터

- 제목: Wiz Red Agent Finds Its Way Into Snowflake’s Internal Jira Through a Flaw in a GitHub Copilot–Assisted PR
- 출처: Wiz Research
- URL: https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug
- 발행 시각: 2026-08-17 23:00 KST (`article:published_time` 2026-08-17T10:00:00-04:00)
- 본문 정정: 2026-08-18 04:57 KST (`2026-08-17 19:57 UTC`)에 Copilot attribution 해석 보완
- Open Graph image: https://www.datocms-assets.com/75231/1786964856-image.png?fm=webp

## 직접 확인한 본문 사실

- Wiz Red Agent가 `snowflakedb/snowflake-connector-net`의 `jira_issue.yml`에서 issue title의 `run:` shell interpolation을 발견
- `issues: opened` trigger와 null `pull_request` guard로 GitHub user가 workflow를 실행할 수 있었다는 source 설명
- single quote로 shell context를 이탈해 GitHub Actions runner 명령 실행과 out-of-band callback을 검증했다는 Wiz proof-of-concept
- 6월 18일 취약 코드 merge, 6월 23일 disclosure·same-day patch, 6월 24일 Jira token rotation이라는 disclosure timeline
- Wiz와 Snowflake 모두 5일 노출 기간의 external unauthorized access 증거가 없다는 audit-log 조사 결과를 공개

## 증거 경계와 운영 메모

- 직접 확인한 출처는 Wiz Research 공개 연구와 페이지 내 Snowflake response이며 독립 forensic artifact·전체 runner secret scope·downstream 영향은 확인하지 않음
- 8월 18일 KST 정정은 Copilot이 공동 작성자이자 all-clear 검토자였다고 좁혔으며, 코드 변경 자체가 AI-assisted였는지는 불명확하다는 source 표현 유지
- 운영 action: untrusted GitHub context의 `run:` 직접 보간 차단, `env`·structured parser 사용, public trigger 최소 권한·OIDC·egress allowlist·audit correlation 적용
