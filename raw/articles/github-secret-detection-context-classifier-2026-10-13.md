---
source_url: https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/
title: GitHub’s model for secret detection: Finding more secrets with less noise
created: 2026-10-14
ingested: 2026-10-14
published: 2026-10-14 02:56 KST
sha256: 38ba8b1c7656b7ad4f170eaa59098929dcf8710db01925fac37583a73dfb6cb4
tags: [cybersecurity, devtools, ai, open-source, global]
---
# GitHub secret detection context classifier

GitHub 공식 글의 문맥 인식 secret classifier를 기록.
- weighted acceptance 11.5% 향상, median scan execution time 86% 감소라는 GitHub 공개 평가 범위
- pattern match 이후 source context를 반영해 secret 후보의 signal quality를 개선하는 경로
- self-hosted scanner·custom rule·repository 언어·secret taxonomy별 성능은 원문에서 일반 보장하지 않은 범위
- 팀 액션: push protection·bypass·rotation·false-negative sampling을 하나의 detection-to-remediation control로 계측 필요
