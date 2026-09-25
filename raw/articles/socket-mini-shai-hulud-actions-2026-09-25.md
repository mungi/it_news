---
source_url: https://socket.dev/blog/mini-shai-hulud-actions
title: Re-Enabled GitHub Actions Expose Thousands of Repositories to Mini Shai-Hulud
published: 2026-09-24
ingested: 2026-09-26 03:07 KST
sha256: 311c9bfedba19e425cca35faf17d131e8daeda4e7576cab178e3af1763380f2c
tags: [cybersecurity, devops, cicd, supply-chain, global, weekly-briefing]
---

# Re-enabled `actions-cool` Actions와 mutable tag 재실행

- Socket은 `actions-cool/issues-helper`와 `actions-cool/maintain-one-comment`가 May 2026 compromise 뒤 disable됐다가 9월 16일 reachable 상태로 돌아왔다고 기록
- release tag가 May 18 악성 content를 계속 가리켜 tag reference workflow가 다음 실행에서 payload를 다시 download·execute할 수 있었던 경로
- `issues-helper` dependency graph 약 15,000 repository와 scheduled·issue/PR trigger의 재실행 조건을 source 범위로 기록
- re-enable 이유·실제 affected run·credential access는 source 미확정이며, full commit SHA pin·run history·secret/OIDC·egress forensic이 대응 범위
