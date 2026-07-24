---
source_url: https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/
title: The case for a cooldown: Why Dependabot now waits before issuing version updates
ingested: 2026-07-24
published: 2026-07-24 01:00 KST
sha256: b82ef52140d5afda316800eed6babf87c5a3f4acc0870a6a23de6430e3df41e9
tags: [it, devtools, cybersecurity, open-source]
---

# Dependabot default three-day cooldown

## Verified source facts
- GitHub article: 2026-07-23 16:00 UTC = 2026-07-24 01:00 KST
- Dependabot now waits at least three days after a release before opening non-security version-update pull requests
- Security updates for known vulnerabilities continue without a delay
- Repository owners can set a different interval with the `cooldown` setting in `dependabot.yml`
- GitHub reports more than 6,500 npm malware advisories in its Advisory Database in the year ending May 2026

## Evidence boundary
- The advisory count and historical incidents are GitHub’s source claims; they do not quantify compromise probability or guaranteed protection for a repository
- Cooldown does not replace provenance, SBOM, artifact scanning, CI gates, or emergency-patch workflow
