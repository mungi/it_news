---
source_url: https://thehackernews.com/2026/09/a-leaked-gitlab-issue-email-address.html
title: A Leaked GitLab Issue Email Address Lets Anyone Push Code and Run CI Jobs as You
ingested: 2026-09-24
published: 2026-09-24
sha256: 047e2944a5e47ff3355211120f280ddcb8a803da4bac26ffe6c94249a5407457
tags: [cybersecurity, gitlab, cicd, identity, devops, global]
---

# A Leaked GitLab Issue Email Address Lets Anyone Push Code and Run CI Jobs as You

The Hacker News가 인용한 Aikido 연구는 GitLab work item email address의 만료되지 않는 token이 account 권한과 연결된다고 설명한다. source 기준 project별 주소는 같은 account token을 공유하며, token 보유자는 merge-request-by-email flow의 patch attachment로 권한이 있는 branch에 commit하고 조건에 따라 CI/CD job을 실행할 수 있음. sender verification·IP restriction·2FA가 incoming email flow에 적용되지 않는다는 설명도 포함됨. 영향은 token owner role과 target project path·numeric ID에 제한되며, GitLab의 owner-verified sender 방안은 검토 상태로 보도됨. token rotation, email/log exposure, protected branch, CI secret·runner authorization을 하나의 incident scope로 검토 필요.
