---
source_url: https://thehackernews.com/2026/09/crowdsec-says-tanstack-npm-attack-led.html
title: TanStack npm 공급망 침해 뒤 전 직원 OAuth token으로 CrowdSec private repository 약 170개가 복사된 사건
created: 2026-09-21
ingested: 2026-09-21
published: 2026-09-19
sha256: 27b3242e76afcb98b6e96b7e0c96bfc7bd48e3adb366bda1728f8066ac6fba26
tags: [cybersecurity, devtools, supply-chain, identity-security, cloud-security, global]
---
# TanStack npm 공급망 침해 뒤 CrowdSec private repository 약 170개 복사

- 보도 원문: https://thehackernews.com/2026/09/crowdsec-says-tanstack-npm-attack-led.html
- CrowdSec incident report: https://www.crowdsec.net/blog/tanstack-supply-chain-attack-analysis
- TanStack advisory: https://github.com/TanStack/router/security/advisories/GHSA-g7cv-rxg3-hmpx
- 원문 보도 시각: 2026-09-19 12:44:54 +05:30, KST 2026-09-19 16:14
- evidence boundary: CrowdSec incident report와 The Hacker News 보도를 직접 확인한 범위임. CrowdSec은 infrastructure·database 접근과 code 변경을 확인하지 못했다고 설명하며, GitHub 자체 forensic finding·감염된 정확한 package와 시점은 공개하지 않음

## 핵심 요약

- 유출: CrowdSec 전 직원 계정의 GitHub OAuth token으로 2026-05-22 private repository 약 170개가 복사된 사실을 9월 18일 공개
- 선행: 2026-05-11 TanStack package 42개에 악성 version 84개가 게시됐고, 설치 뒤 GitHub token·SSH key·cloud credential 탈취 범위를 TanStack advisory가 설명
- 권한: 전 직원이 작업 마무리를 위해 GitHub organization access를 유지한 상태였으며 CrowdSec은 5월 25일 해당 account를 제거
- 범위: code archive에는 console·data science script/model·automation·blocklist consensus threshold가 포함됐고, user email 83개·2020년 투자 후보 51명의 정보가 노출
- 대응: 9월 16~17일 credential/token rotation, developer endpoint protection 도입, repository·offboarding·OAuth token incident response 재점검 필요

---

## 공개된 incident timeline

- 5월 11일: TanStack npm package supply-chain compromise 발생
- 5월 22일: 전 직원 GitHub OAuth token을 통한 private repository copy 발생
- 5월 25일: CrowdSec이 해당 GitHub organization account access 제거
- 8월 17일: 유출 archive의 제한된 AWS SNS credential 사용 시도 기록, 추가 접근 미확인
- 9월 16일: archive가 forum에 게시된 뒤 initial forensic과 key/token rotation 시작
- 9월 18일: CrowdSec final incident report 공개

## 영향과 증거 경계

- source: private repository 약 170개 복사와 archive 공개는 CrowdSec report·THN 보도 범위
- code: web console, data-science script/model, automation, blocklist consensus algorithm과 일부 threshold 노출 범위
- credential: usable 상태로 남은 AWS SNS token은 단일 topic publish 권한으로 제한됐다는 CrowdSec 설명
- boundary: CrowdSec은 infrastructure·database 접근, code modification, blocklist poisoning을 확인하지 못했다고 설명
- boundary: 공개 source는 GitHub의 독립 forensic finding, 감염 package identity, 모든 leaked credential의 사용 이력을 제공하지 않음

## 운영 대응

- offboarding: GitHub organization membership, OAuth authorization, deploy key, SSH certificate, PAT, cloud role session을 employment 종료와 같은 control plane에서 즉시 revoke
- dependency: lockfile·provenance·package version inventory에서 TanStack affected package 설치 기록과 CI artifact·developer endpoint exposure를 추적
- forensics: GitHub audit log, OAuth app/token history, clone·archive download, SSH key, cloud API와 SNS publish event를 동일 timeline으로 보존
- rotation: repository secret, CI OIDC/configuration, cloud credential, notification token을 scope·last use·replacement owner 기준으로 교체
- endpoint: code·system access 인력의 EDR 적용, package install telemetry, credential stealer hunt와 exception handling 정착
