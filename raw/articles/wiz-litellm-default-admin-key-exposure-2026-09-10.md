---
source_url: https://thehackernews.com/2026/09/nearly-1-in-10-exposed-litellm-gateways.html
title: Nearly 1 in 10 Exposed LiteLLM Gateways Accepted the Example "sk-1234" Admin Key
ingested: 2026-09-10
published: 2026-09-10 16:12
sha256: 76118d31e2f0ee61f9b8cfa0c8a398a3788604b7fc3465957504914f0a7f8fed
tags: [ai, cloud-security, cybersecurity, api-key, mcp]
---

# LiteLLM 예제 master key 노출

- 원문: https://thehackernews.com/2026/09/nearly-1-in-10-exposed-litellm-gateways.html
- 확인: The Hacker News RSS·본문·Open Graph image, Wiz Research canonical URL, LiteLLM Docker quick start·forwarded header documentation을 직접 확인
- 게시: The Hacker News RSS `Thu, 10 Sep 2026 12:42:55 +0530`, KST `2026-09-10 16:12`

## 원문 핵심

- Wiz가 2월 Shodan scan에서 확인한 internet-facing LiteLLM gateway 3,074개 중 294개가 setup guide 예제 master key `sk-1234`를 수용
- 294개 중 191개는 master key가 아예 설정되지 않아 어떤 key도 수용하는 상태라는 연구 범위
- 8월 scan의 8.5만여 instance는 honeypot·test system 비중 때문에 2월 수치와 직접 비교 불가, current exposure 수 미확정
- LiteLLM master key는 admin credential과 authentication enable switch 역할을 함께 수행
- admin access는 stored model-provider API key, prompt·response, MCP 연결과 workload cloud permission으로 이어질 수 있는 범위

## metadata 경로와 대응

- Wiz test는 arbitrary target pass-through route, metadata address allowlist 부재, `x-pass-` prefix를 제거해 header를 전달하는 documented behavior를 결합한 IAM credential read path를 제시
- IMDSv2 단독은 필요한 header를 forward할 수 있는 조건에서 metadata path를 닫지 못한다는 보도 범위
- source는 real deployment 악용을 보고하지 않았고, path는 먼저 gateway admin access를 얻는 post-authentication 조건
- LiteLLM security policy는 master key 미설정 같은 setup mistake를 explicit out-of-scope로 다루는 범위이며 CVE 여부가 exposure closure 기준은 아님
- public ingress isolate, unique master key·provider API key·cloud session rotation, metadata·localhost·RFC1918 egress deny, admin/prompt audit를 같은 incident runbook으로 실행 필요

## 출처

- The Hacker News: https://thehackernews.com/2026/09/nearly-1-in-10-exposed-litellm-gateways.html
- Wiz Research: https://www.wiz.io/blog/off-guard-breaking-litellm-from-authentication-bypass-to-cloud-compromise
- LiteLLM Docker quick start: https://docs.litellm.ai/docs/proxy/docker_quick_start
- LiteLLM forwarded client headers: https://docs.litellm.ai/docs/proxy/forward_client_headers
