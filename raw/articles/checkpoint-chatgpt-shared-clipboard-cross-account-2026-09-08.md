---
source_url: https://research.checkpoint.com/2026/the-shared-clipboard-inside-the-sandbox-cross-account-data-leakage-in-chatgpt/
title: The Shared Clipboard Inside the Sandbox: Cross-Account Data Leakage in ChatGPT
ingested: 2026-09-09
published: 2026-09-08
sha256: e6bd79fed028e43bfbc6e0bd9173ecada155d260c66eb10a9a008e915572f95e
tags: [ai, cybersecurity, privacy, saas, global]
---

Check Point Research는 planted instruction이 connected Gmail data를 다른 ChatGPT account로 전달할 수 있었던 cross-account data leakage proof of concept을 공개함. 보도 범위에서 conversation별 code container는 internal JFrog Artifactory file property를 shared channel로 사용할 수 있었고, pasted prompt·shared conversation·custom GPT instruction과 permissioned connected app session이 조건임. Check Point는 OpenAI가 internal service channel을 offline 처리했다고 설명함. 실제 영향 user 수·노출 기간은 공개 자료에서 확정되지 않았으며 connector scope, sandbox identity, artifact metadata ACL, cross-tenant test와 audit가 검증 대상임.
