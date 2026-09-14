---
source_url: https://thehackernews.com/2026/09/red-heron-exploits-gitea-rce-to.html
title: Red Heron Exploits Gitea RCE to Compromise 13 Organizations Across Six Countries
ingested: 2026-09-15
published: 2026-09-15 01:56
sha256: f3266e2a3db2e485dcf56093a5a9a3ac2120ef4bcf778273c0bb566c42dccebf
tags: [security, devtools, gitea, cicd, linux, supply-chain]
---
## 원문 확인

- Canonical URL: https://thehackernews.com/2026/09/red-heron-exploits-gitea-rce-to.html
- Schema `datePublished`: `2026-09-14T22:26:00+05:30`, converted to KST `2026-09-15 01:56`
- Open Graph image: source article `gitea-hacked.jpg`

## Source-grounded facts

- The Hacker News cites Acronis TRU on Red Heron exploitation of Gitea `CVE-2026-60004` after its July 2026 disclosure
- Reported scan scope: 1,386 Gitea instances across seven countries and 477 Taiwan-based systems; reported confirmed compromises: 13 organizations across six countries
- Report says a public PoC became an automated Python framework for account registration, exploitation, repository theft, and selected trace removal
- Reported staging-server malware includes JITTERLY Linux implant and SIXZUT LD_PRELOAD rootkit; the report does not establish deployment on every victim
- One Taiwan environment is described as progressing from Gitea compromise to root-level access on a three-node Proxmox cluster

## Evidence boundary

- China-linked attribution is Acronis TRU moderate-confidence assessment based on labels, target classification, and targeting footprint
- Reported campaign facts do not prove compromise of every exposed Gitea instance or establish actor attribution in a local environment
- Local compromise scope requires server, repository, credential, runner, host, and virtualization evidence

## Korean briefing

- 변화: self-hosted forge RCE가 repository theft 뒤 CI secret·SSH key·host/virtualization lateral movement로 이어진 campaign report
- 볼 것: public ingress, clone/archive, token·deploy key·webhook, runner secret, `LD_PRELOAD`, outbound tunnel, Proxmox credential
- 팀 액션: patch receipt와 secret rotation·host hunt·backup restore validation을 하나의 incident closure로 운영
