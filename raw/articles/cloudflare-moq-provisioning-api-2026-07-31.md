---
source_url: https://blog.cloudflare.com/an-api-for-moq-provision-your-own-isolated-relays/
title: "An API for MoQ: provision your own isolated relays"
ingested: 2026-08-02
published: 2026-07-31 (source page date only)
sha256: cd33fa7feca86480fe512339d5dec8da337b816243ad4ff4348268133a607746
tags: [cloud, infra, networking, realtime, moq]
---

# Cloudflare MoQ provisioning API beta

- Cloudflare는 2026-07-31 `An API for MoQ: provision your own isolated relays`에서 application별 isolated relay와 publisher/subscriber 분리 credential을 만드는 provisioning API beta를 공개함
- MoQ는 IETF에서 개발 중인 QUIC 기반 publish/subscribe protocol이며 relay가 named stream을 fan-out하는 구조로 설명됨
- API·Dashboard 생성 relay는 기존 global network에서 수 초 내 제공되며 VM·container·dedicated process·load balancer 배치가 필요 없다는 vendor 설명
- source는 draft-14·draft-16 MoQ Transport authentication support와 beta 기간 무료 사용을 명시함
- 기존 global MoQ endpoint는 인증이 없어 protocol test와 client development에는 적합했으나 confidentiality·access control이 필요한 production에는 부족했다고 설명

## 운영 경계

- source page는 `JULY 31, 2026` 날짜만 표시하며 exact publication clock time은 확인되지 않음
- protocol finalization, quota, availability/SLO, regional residency, persistence, post-beta pricing·support는 source에서 확인되지 않아 계약·workload별 검증 대상
- production 도입 시 tenant·track namespace·publisher/subscriber principal, credential expiry·rotation·revocation, reconnect·surge·partition failure telemetry를 별도 evidence로 관리 필요
