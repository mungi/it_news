---
source_url: https://blog.cloudflare.com/turnstile-spin/
title: Agents can now set up your website’s security with Turnstile Spin
published: 2026-09-25 22:00 KST
ingested: 2026-09-25 23:05 KST
sha256: 96b24dcc67c98458a3ce662e512b2d3ef135f2272bd5afacc0ae6c3c1bc29ea4
tags: [cloud, cybersecurity, devtools, agent, global, product, weekly-briefing]
---

# Cloudflare Turnstile Spin: agent-mediated Turnstile 구현과 backend validation 경계

- Turnstile은 frontend widget의 token 발급과 backend `Siteverify` verification을 분리한 2단계 control임
- Spin은 dashboard·Wrangler·public skill URL에서 coding agent가 widget·backend verification·기존 CAPTCHA migration을 구현하는 공개 workflow임
- source는 backend validation 생략이 bot exposure를 남긴다고 명시하며, agent 생성 diff의 production correctness·framework coverage·abuse 감소는 보장하지 않음
- 운영 action: server-only secret·token expiry/replay·hostname/action·timeout 처리와 synthetic negative test를 release evidence로 보존 필요
