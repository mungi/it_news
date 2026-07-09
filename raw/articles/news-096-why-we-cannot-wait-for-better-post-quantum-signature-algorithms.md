---
source_url: https://blog.cloudflare.com/ml-dsa-will-have-to-do/
title: Why we cannot wait for better post-quantum signature algorithms
ingested: 2026-07-10
published: 2026-07-09 23:00
tags: [ai, cloud, infra, security, weekly-briefing]
---

# Cloudflare, 양자내성 서명은 더 나은 알고리즘을 기다리지 말고 ML-DSA로 먼저 이전해야 한다고 주장

- 출처: Cloudflare Blog
- 게시: 2026-07-09 23:00 KST
- 원문: https://blog.cloudflare.com/ml-dsa-will-have-to-do/

## 요약
핵심: Cloudflare가 NIST의 신규 양자내성 서명 후보 9개 진전을 분석하면서 첫 전환은 현재 표준화된 ML-DSA로 진행해야 한다고 주장. 배경: Cloudflare traffic 다수는 이미 ML-KEM 암호화를 사용하지만 인증 보호에는 post-quantum signature 전환이 남아 있음.

## 상세 메모
### 무슨 일이 있었나
- 핵심: Cloudflare가 NIST signatures on-ramp 후보 9개와 현행 post-quantum signature 전환 전략 분석 공개
- 판단: 더 나은 후보가 나오더라도 첫 PQ signature migration은 표준화된 ML-DSA로 진행해야 한다는 입장
- 현황: Cloudflare traffic 다수는 이미 ML-KEM encryption을 사용하지만 authentication system 보호에는 PQ signature 적용 필요

### 본문 핵심 포인트
- 위협: RSA와 ECC는 충분히 발전한 양자컴퓨터가 등장하면 깨질 수 있는 classical cryptography임
- 현재안: ML-DSA는 wire size가 크고 RSA/ECC에서 쓰던 일부 최적화가 어렵지만 현재 쓸 수 있는 균형형 표준 알고리즘임
- 후보: NIST는 2026년 6월 9개 post-quantum signature scheme을 3라운드로 진전시켰음
- 비교: SQIsign은 작은 signature/public key가 장점이지만 signing·verification 속도와 구현 복잡성이 제약임
- 비교: UOV는 작은 signature 대신 큰 public key가 trade-off로, TLS server certificate에는 부담 가능성 있음

### 왜 중요한가
- 영향: harvest-now-decrypt-later는 encryption 문제이고, certificate·code signing·DNSSEC 같은 인증 체계는 signature 전환을 별도로 요구함
- 운영: WebPKI, TLS, DNSSEC, internal PKI는 algorithm size, handshake latency, certificate chain 크기, hardware support를 함께 검증해야 함

### 시사점
- 팀 액션: 보안 아키텍트는 ML-KEM 적용 여부와 별개로 ML-DSA 기반 certificate/signing migration inventory를 준비 필요
- 검증: TLS handshake size, certificate transparency, HSM/PKI vendor 지원, rollback plan을 2026년 로드맵에 포함 필요
