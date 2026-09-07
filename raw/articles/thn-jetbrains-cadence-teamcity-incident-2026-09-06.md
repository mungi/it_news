---
source_url: https://thehackernews.com/2026/09/attackers-breached-jetbrains-cadence.html
title: Attackers Breached JetBrains Cadence via Unpatched TeamCity, Extracting AWS Credentials
ingested: 2026-09-07
published: 2026-09-06 01:52 KST # THN RSS timestamp: Sat, 05 Sep 2026 22:22:33 +0530
sha256: b3da1f8bd9b73de73a8033fbdd7ae319ef67872f90b1d66b4b00708b328350b0
tags: [it, cybersecurity, devtools, cloud, global, weekly-briefing]
---
## 한국어 브리핑

- 침해: JetBrains Cadence environment가 TeamCity `CVE-2026-63077` 악용으로 침해됐으며 execution에 사용된 credential·secret revoke·rotation 안내
- 범위: 2024년 server backup·Cadence AWS IAM user/credential·S3 data·PyCharm project sync source code가 potential exposure 범위
- 기간: JetBrains가 intrusion activity를 2026-08-08~24 범위로 제시
- 조치: `api.cadence.jetbrains.com` offline 처리와 PyCharm Cadence plugin access token invalidation
- 조사: unexpected auth·repository clone/commit·secret/webhook·PAT/SSH key·cloud IAM/S3·package/release 변경을 connected-system hunt 대상으로 지정

---

## 원문 사실

- The Hacker News는 JetBrains incident notice를 인용해 unauthenticated TeamCity command execution이 Cadence environment 침해 경로였다고 보도
- JetBrains는 Cadence server에 저장됐거나 backup·execution에서 사용된 credential·secret을 potential compromise로 취급하라고 안내
- JetBrains가 확인한 접근 또는 potential access 범위에는 2024년 backup, Cadence AWS account S3 data, PyCharm project sync source code가 포함

## 대응 우선순위

- Cadence project·2026-08-08~24 execution·secret injection·AWS IAM·repository·registry·deployment linkage를 incident inventory로 확정
- credential revoke·reissue 뒤 auth, S3, repository, IAM, package/release, deployment audit log를 execution ID와 대조
- historical execution input/output·artifact를 untrusted로 표시하고 provenance 재검증 전 build/deploy 재사용 금지

## 증거 경계

- 보도·공지는 실제 모든 사용자 source-code exfiltration·AWS credential use·lateral movement·individual tenant compromise를 확정하지 않음
- TeamCity patch와 Cadence service offline만으로 downstream credential·artifact trust·cloud control-plane 영향 해소를 보장하지 않음
