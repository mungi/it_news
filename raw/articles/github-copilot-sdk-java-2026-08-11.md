---
source_url: https://github.blog/engineering/using-the-github-copilot-sdk-for-java/
title: Using the GitHub Copilot SDK for Java
ingested: 2026-08-11
published: 2026-08-10
sha256: d7429460522ac0b60170b4fb84a71b7142e2ee83d0b9b6663a6a7c8c574aaa8e
tags: [ai, devtools, agent]
---
GitHub는 Copilot SDK for Java preview가 server-side Java code에서 agent session 생성, tool 등록, prompt 전송, structured response 수신을 처리한다고 소개함. Maven artifact는 `com.github:copilot-sdk-java:1.0.7-preview.1`이며, JDK 17 또는 25·Maven 3.9+·Copilot CLI 1.0.71+를 사전 조건으로 제시함. BYOK configuration은 direct provider의 base URL과 API key 또는 bearer token을 받는 범위임.
