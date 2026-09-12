---
source_url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
secondary_source_url: https://thehackernews.com/2026/09/cisa-adds-5-actively-exploited.html
title: CISA KEV additions for JFrog Artifactory, ConnectWise ScreenConnect, and MikroTik RouterOS
ingested: 2026-09-13
published: 2026-09-11
sha256: 6736482d1712625eb296744f9b59c15a2b74d315a4a33373539c638c993a69c2
tags: [cybersecurity, patch-management, devops, infra]
---

# CISA KEV의 Artifactory·ScreenConnect·RouterOS 5건 등록

- 원문: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- 보조 보도: https://thehackernews.com/2026/09/cisa-adds-5-actively-exploited.html
- 확인: CISA KEV catalog JSON의 각 CVE entry·vendor advisory 링크와 The Hacker News 본문·Open Graph metadata를 직접 대조
- source date: CISA `2026-09-10`~`2026-09-11`, THN RSS `2026-09-12 21:24:45 +0530`

## KEV 등록 항목과 기한

- `CVE-2026-42016`: JFrog Artifactory token signature·issuer만 검증하고 scope를 검증하지 않는 incorrect authorization, privilege escalation 범위. KEV `dateAdded` 2026-09-11, `dueDate` 2026-09-25
- `CVE-2026-42018`: anonymous access 비활성화 상태에서도 unauthenticated caller에게 internal anonymous-user token이 반환될 수 있는 Artifactory improper authentication, sensitive resource exposure 범위. `dueDate` 2026-09-25
- `CVE-2026-84869`: active remote session에서 authorization 또는 host confirmation 없이 file transfer·execution 가능 조건의 ConnectWise ScreenConnect improper privilege management·missing authorization. KEV `dueDate` 2026-09-14, forensic triage required
- `CVE-2026-67277`: MikroTik RouterOS `btest` service의 missing authentication, kernel memory disclosure·denial of service 범위. KEV `dueDate` 2026-09-13
- `CVE-2026-86060`: RouterOS policy mask 변경으로 privilege escalation 가능한 argument delimiter neutralization 결함. KEV `dateAdded` 2026-09-10, `dueDate` 2026-09-13, forensic triage required

## 증거와 운영 경계

- KEV 등록은 CISA가 active exploitation을 인지한 항목이라는 의미이며 개별 조직의 침해·ransomware 사용·동일 delivery chain을 자동 확정하지 않음
- THN은 Artifactory 두 취약점과 기존 `CVE-2026-82329` chain의 self-hosted administrator control·persistent admin account·malicious Groovy plugin·Rust backdoor 관측을 Wiz 분석으로 인용
- THN은 ScreenConnect `CVE-2026-84869`가 server가 아닌 client에 영향을 준다는 ConnectWise 설명과 version `26.6.5` update 권고를 인용
- RouterOS 두 항목은 CERT Polska가 `MikroTrick`으로 명명한 unauthenticated device takeover chain 관측 이후 KEV에 추가된 범위

## 대응 우선순위

- RouterOS `btest`와 management service internet exposure를 먼저 차단·inventory하고 2026-09-13 기한에 맞춰 fixed build·configuration evidence·forensic triage를 병행
- ScreenConnect server version만으로 closure하지 않고 managed client fleet의 `26.6.5` rollout, session·file-transfer·child-process telemetry, host confirmation 우회 흔적을 분리 확인
- Self-hosted Artifactory는 token scope·anonymous endpoint·administrator account·Groovy plugin·repository credential·CI integration을 patch 전후 로그와 함께 조사

## 출처

- CISA KEV catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- JFrog advisories: https://docs.jfrog.com/releases/docs/jfrog-security-advisories
- ConnectWise bulletin: https://www.connectwise.com/company/trust/security-bulletins/2026-09-08-screenconnect-bulletin
- MikroTik September 2026 advisory: https://mikrotik.com/supportsec/september-2026-vulnerability/
