---
source_url: https://aws.amazon.com/blogs/aws/automate-public-tls-certificate-issuance-with-acme-support-in-aws-certificate-manager/
title: Automate public TLS certificate issuance with ACME support in AWS Certificate Manager
ingested: 2026-07-06
published: 2026-07-01 05:15
sha256: a206bba0c8b0ddec43bd85911c9cf4e8f32eeee71d6fc30456221feac2bb2e9f
tags: [aws, tls, acme, certificate, security]
---

# Automate public TLS certificate issuance with ACME support in AWS Certificate Manager

## Source
- Source: AWS News Blog
- URL: https://aws.amazon.com/blogs/aws/automate-public-tls-certificate-issuance-with-acme-support-in-aws-certificate-manager/
- Published KST: 2026-07-01 05:15
- Ingested KST: 2026-07-06 10:02

## Korean briefing summary
AWS News Blog는 AWS Certificate Manager가 공인 TLS 인증서에 대해 ACME 프로토콜을 지원한다고 발표했습니다. ACMEv2 호환 클라이언트를 통해 다양한 워크로드에서 발급과 갱신을 자동화할 수 있습니다.

## Detail
ACME는 Let's Encrypt 생태계에서 널리 쓰이는 자동화 표준입니다. ACM 지원은 중앙 거버넌스와 기존 ACME 자동화 도구를 결합하려는 조직에 유용합니다.

## Why it matters
TLS 인증서 갱신 실패는 반복적으로 큰 장애를 만들기 때문에 표준 자동화 지원의 운영 가치가 큽니다.

## Engineering implication
인증서 수명주기, 도메인 검증, 비AWS 워크로드 연동, 만료 알림을 ACM 중심으로 재설계할 수 있습니다.
