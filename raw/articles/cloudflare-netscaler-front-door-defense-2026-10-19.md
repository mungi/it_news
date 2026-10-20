---
source_url: https://blog.cloudflare.com/protect-your-netscaler-gateway/
title: There's always a patient zero: Defending the NetScaler front door before the patch
ingested: 2026-10-20
published: 2026-10-19 22:00 KST
sha256: 4048cb33bb920460e9f687600bf9f738e248cb9f6dec26862d233819f16f0f20
tags: [cloudflare, netscaler, cve-2026-88771, remote-access, waf, zero-trust, security, global]
---
# Cloudflare NetScaler Gateway 전면 방어 가이드

Cloudflare 공식 원문을 기준으로 Citrix NetScaler Gateway의 patch 전·후 layered mitigation과 적용 경계를 기록.

- 공개: 2026-10-19 13:00 UTC, KST 2026-10-19 22:00
- 인용 사실: Citrix 2026-09-27 bulletin은 `CVE-2026-88771`·`CVE-2026-88772` 악용 관측을 보고
- `CVE-2026-88771`: 영향을 받는 appliance에서 인증 전 command execution으로 이어질 수 있는 조건
- `CVE-2026-88772`: DTLS 사용 구성에 영향을 주는 취약점 범위
- 제안 계층: identity-aware access control, WAF inspection, origin restriction
- 경계: edge mitigation은 fixed build 적용, compromise 조사, credential/session rotation, forensic evidence 보존을 대체하지 않음
- 팀 액션: hostname·origin·admin path·firmware·WAF·Access policy·bypass route를 exposure record로 연결
