---
source_url: https://blog.cloudflare.com/post-quantum-authentication-to-origins/
title: Post-quantum authentication to origins is now supported
ingested: 2026-07-30
published: 2026-07-29 22:00 KST
sha256: 5188fd49927782fdd4272590d54b2da6303b0556c30db95731865cae059c8c16
tags: [cloud, cybersecurity, post-quantum, tls, global]
---

# Cloudflare origin 연결의 post-quantum 인증 지원

- 발행·정렬 시각: 원문 `article:published_time` 및 Cloudflare RSS `Wed, 29 Jul 2026 13:00:00 GMT`를 `2026-07-29 22:00 KST`로 변환
- 원문: Cloudflare Authenticated Origin Pulls와 Custom Origin Trust Store가 ML-DSA 기반 post-quantum 인증을 지원한다고 공지
- 이미지: 원문 `og:image` `https://blog.cloudflare.com/_emdash/api/media/file/01KYN5V56B8HHHZ71NTH17JJVV.png` 확인

## 원문 핵심

- Cloudflare–origin 구간은 방문자–Cloudflare 구간과 별도 TLS 연결이며, cache/WAF에서 처리되지 않은 요청은 origin fetch를 위해 두 번째 연결을 사용함
- Authenticated Origin Pulls와 Custom Origin Trust Store가 **ML-DSA** 서명 기반 post-quantum 인증을 지원함
- Cloudflare는 방문자–Cloudflare와 Cloudflare–origin 구간의 post-quantum encryption을 각각 2022년과 2023년에 지원했다고 설명함
- origin 연결에서는 Cloudflare가 client 역할을 하며 connection pooling으로 setup 비용을 여러 요청에 분산할 수 있다고 설명함
- Cloudflare Tunnel은 legacy origin upgrade 없이 post-quantum encryption으로 origin 연결을 보호하는 선택지이며, Tunnel의 post-quantum authentication은 작업 중이라고 명시함
- 공개 WebPKI와 달리 고객 account라는 기존 trust relationship을 활용해 custom PKI를 사용할 수 있다고 설명함

## 증거 경계와 운영 메모

- 원문은 지원 발표와 설계 근거를 제공하지만 모든 origin, certificate chain, client, region의 자동 적용·성능·SLA·가격을 보장하지 않음
- Cloudflare의 2029 full post-quantum security 목표와 2027 visitor-facing MTC initial deployment target은 roadmap이며 현재 제공 범위와 분리 필요
- 배포 전 origin TLS library·certificate/key format·Authenticated Origin Pulls 또는 Custom Origin Trust Store 설정·rollback·handshake failure telemetry를 환경별로 검증 필요

## 출처

- https://blog.cloudflare.com/post-quantum-authentication-to-origins/
- https://blog.cloudflare.com/rss/
