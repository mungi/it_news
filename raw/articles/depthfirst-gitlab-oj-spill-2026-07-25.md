---
source_url: https://depthfirst.com/gitlab-rce-oj-spill
title: GitLab Oj Spill
ingested: 2026-07-26
published: 2026-07-25 19:14 KST
sha256: f1bb82969a981cae8f0ca245be443abd23876baa12bab1b30e88831d954cff3b
tags: [cybersecurity, gitlab, devsecops, rce, cicd]
---

# GitLab Oj Spill: authenticated contributor가 notebook diff renderer를 통해 Puma `git` 권한 RCE에 도달하는 공개 PoC

## Verified source facts
- depthfirst primary research: Oj native C parser의 out-of-bounds write와 heap-pointer disclosure 두 개를 chained exploit으로 설명
- 인증된 project contributor가 crafted `.ipynb`를 commit하고 commit diff를 열면 GitLab `ipynbdiff`가 Puma worker 안에서 `Oj::Parser.usual.parse`를 호출하는 경로
- 영향 범위: GitLab CE/EE `15.2.0`~`18.10.7`, `18.11.0`~`18.11.4`, `19.0.0`~`19.0.1`; Oj `3.13.0`~`3.17.1`
- 수정 release: GitLab `18.10.8`, `18.11.5`, `19.0.2`; 해당 release는 Oj `3.17.3` bundle, GitLab.com은 patched version 실행 상태
- GitLab official release note: 2026-06-10에 CE·EE patch release를 배포하고 self-managed installation의 즉시 업그레이드를 권고
- The Hacker News RSS `pubDate`: 2026-07-25 15:44:26 +05:30 = 2026-07-25 19:14 KST

## Evidence boundary
- 공개 연구·PoC는 default GitLab installation에서의 재현 경로를 설명하지만, 특정 조직의 compromise 또는 in-the-wild exploitation을 확인하지 않음
- 실제 노출은 running Webservice image의 GitLab/Oj version, notebook diff renderer 도달성, authenticated contributor 권한, Puma runtime과 secret mount에 따라 달라짐
- Helm chart 또는 Operator version만으로 patch level을 판정하지 않고 Puma를 실행하는 Webservice image의 GitLab application version을 확인 필요
