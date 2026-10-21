---
source_url: https://blog.cloudflare.com/emudhra-certificate-compromise/
title: 8 eMudhra certificates are compromised. Here's what you need to know
ingested: 2026-10-21
published: 2026-10-21 07:20 KST
sha256: be110b50786d3fb40c7538eb24a2095a2b1bdacbec2ac810a3e052dbc4634525
tags: [cloudflare, emudhra, certificate-authority, tls, trust-store, security, global]
---
# Cloudflare eMudhra intermediate certificate compromise 대응

Cloudflare 공식 원문을 기준으로 eMudhra intermediate certificate private key compromise의 영향과 Cloudflare·사용자 조치 범위를 기록.

- 공개: 2026-10-20 22:20:16 UTC, KST 2026-10-21 07:20
- 원문 사실: weak key를 사용하는 eMudhra intermediate certificate 8건의 private key compromise를 Cloudflare가 2026-10-19 약 17:00 UTC에 인지
- 영향 조건: 취약 key로 공격자가 임의 domain의 forged certificate를 만들어 server impersonation, traffic interception 또는 modification을 시도할 수 있는 범위
- Cloudflare 조치: CDN·Developer·Zero Trust mitigation, shared trust store·base image update, Cloudflare Tunnel과 Cloudflare One/WARP client update 배포
- 고객 조치: application 실제 TLS verification path의 trust store·indirect dependency·container image를 점검하고 update 뒤 rebuild·reload·restart 또는 redeploy 수행
- 금지: certificate error를 없애기 위해 TLS certificate verification을 비활성화하지 말 것
- 경계: Cloudflare는 자사 서비스에서 active exploitation을 식별하지 못했다고 밝혔으며, 이는 다른 서비스·application stack의 보호 또는 미침해 증명이 아님
- 팀 액션: public endpoint와 outbound API client의 CA bundle·runtime·base image·restart state를 inventory로 만들고, 대표 production path에서 certificate validation을 재시험
