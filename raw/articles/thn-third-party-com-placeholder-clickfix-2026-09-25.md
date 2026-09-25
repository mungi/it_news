---
source_url: https://thehackernews.com/2026/09/placeholder-third-partycom-referenced.html
title: Placeholder third-party[.]com Referenced Across 1,700+ Repositories Now Serves Malicious Content
ingested: 2026-09-25
published: 2026-09-25 00:27 KST
sha256: 6fa194a32b7b89f5d4081b10d6c17e370e983e69759dc881d0caea0b8c4b7696
tags: [ai, cloud, infra]
---

# 문서 placeholder `third-party[.]com`의 ClickFix 악용: 1,700개 이상 공개 저장소·agent skill endpoint를 reserved domain으로 교체 필요

## 핵심 요약

- The Hacker News는 IANA reserved domain이 아닌 `third-party[.]com`이 Windows browser에 ClickFix lure를 제공한다고 보도함.
- Manifold Security 관측 인용 범위에서 적어도 2026년 6월부터 clipboard poisoning·Windows Run dialog paste·remote PowerShell payload 경로가 작동한 것으로 설명됨.
- GitHub search 기준 1,700개 이상 public repository와 AI agent skill·MCP-server docs가 해당 domain을 예시 endpoint로 reference한 범위.
- 운영 대응: code·wiki·skill·MCP config·test fixture의 non-reserved placeholder를 `example.com` 계열 또는 조직 소유 test zone으로 교체 필요.

## 원문

https://thehackernews.com/2026/09/placeholder-third-partycom-referenced.html
