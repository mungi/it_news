---
source_url: https://github.blog/ai-and-ml/github-copilot/secret-protection-must-scale-with-software/
title: Secret protection must scale with software
ingested: 2026-10-08
published: 2026-10-08 02:45
sha256: cac359656586a953927ee3828d7aad7213634c8033ae47ffa50081a60aacd166
tags: [ai, cybersecurity, devtools]
---

# GitHub, AI secret detection을 push protection에 확대: ModernBERT 분류기로 후보 묶음 2ms 미만 평가

GitHub는 코드 문맥에서 비정형 secret 후보를 판별하는 ModernBERT classifier를 push protection에 포함한다고 공개했다. GitHub 설명 기준 candidate secret batch는 2ms 미만에 평가되며, 예방 가능한 secret 수를 두 배 이상 늘릴 수 있다. Enterprise Cloud·GitHub Teams Secret Protection 조직의 private preview와 GHES 3.23 public preview 계획이 제시됐다.

## 운영 경계

시사점: push protection rollout은 block·override·false positive·scan latency·credential revoke lead time·AI credit을 repository와 secret class별로 비교하고, CI secret·service account·Kubernetes manifest의 예외 승인과 rotation runbook을 함께 고정 필요.
