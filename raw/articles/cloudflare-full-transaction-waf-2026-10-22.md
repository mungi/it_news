---
source_url: https://blog.cloudflare.com/full-transaction-waf/
title: Introducing full transaction detection for Cloudflare WAF
ingested: 2026-10-22
published: 2026-10-22 23:10 KST
sha256: 3ab8b74d1b3d74bf27d3f983e73d08a32aabd98d63c89e5bca54af0b8db0ecd2
tags: [cloudflare, waf, web-security, response-rules, vulnerability-management, security, global]
---
# Cloudflare WAF full transaction detection·response rule

Cloudflare 공식 원문을 기준으로 request·origin response 상관 분석과 response 차단 기능의 제공 범위·운영 경계를 기록.

- 공개: 2026-10-21 14:10:42 UTC, KST 2026-10-22 23:10
- 제공: full transaction detection·response rule을 Cloudflare 모든 요금제에 GA로 제공
- 방식: HTTP request와 origin response를 같은 transaction으로 상관 분석하고 detection metadata를 request·response에 부착
- 예시: path traversal 입력 뒤 private configuration file 형식의 `200 OK` 응답을 결합해 sensitive data exposure evidence를 강화
- 완화: response rule이 origin response를 WAF block page와 HTTP `403`으로 교체해 requester 전달 전 차단 가능
- 정책: Cloudflare managed protection 또는 request·response property를 결합한 custom policy 구성 범위
- 적용: 첫 managed protection이 php2shell vulnerability를 대상으로 사용된 범위
- 경계: response masking은 origin PHP patch, compromised origin 조사, direct-origin exposure 제거를 대체하지 않음
- 팀 액션: detection-only canary에서 false positive·blocked response·origin error를 측정하고 patch·secret rotation·로그 redaction과 함께 release gate로 관리
