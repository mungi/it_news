---
source_url: https://research.jfrog.com/post/lucide-proxy-npm-malware-campaign/
title: Lucide Proxy: Turning Student Web Proxies into DDoS Bots
ingested: 2026-07-14
published: 2026-07-13 KST
sha256: 546a4bd90eb2bb09a24d9f9c98e1bb4155fd8c73199384259786f75461417956
tags: [cybersecurity, devtools, npm, supply-chain, ddos, browser-security]
---

# Lucide Proxy npm campaign: 브라우저 기반 DDoS 동원

- JFrog가 148개 npm package에서 학생용 web proxy로 위장한 원격 script loader와 Wisp-compatible WebSocket traffic generator를 분석함
- package는 installation lifecycle hook 없이 npm registry를 정적 browser app hosting으로 악용하며, 피해는 package consumer가 아닌 proxy 방문자 browser에서 발생하는 구조
- 분석된 loader는 mutable GitHub `main` branch의 JavaScript를 jsDelivr로 가져오고 SRI 없이 동일 origin 권한으로 실행하는 조건

## 운영 확인 항목

- package allowlist·SBOM뿐 아니라 mutable script URL, SRI 누락, 비정상 WebSocket fan-out을 CSP·CI·egress telemetry에서 점검 필요
- 사내 artifact proxy의 package 차단·retention·lockfile 조사 절차와 browser edge의 DDoS rate-limit 신호를 함께 준비 필요
