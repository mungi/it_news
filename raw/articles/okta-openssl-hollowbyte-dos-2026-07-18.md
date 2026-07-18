---
source_url: https://sec.okta.com/articles/2026/06/openssl-hollowbtye-a-dos-hiding-in-11-bytes/
title: OpenSSL HollowByte: A DoS Hiding in 11 Bytes
ingested: 2026-07-19
published: 2026-07-18 05:20 KST
sha256: d366b95ce47ce7c5a39ee78a4798f1f3c42afb90fbb2bc1aec5bb19ee82e8c27
tags: [security, infra, openssl, tls, dos]
---
# OpenSSL HollowByte: 11바이트 TLS 입력으로 메모리 고갈을 유발할 수 있는 DoS 분석

- Okta Red Team이 OpenSSL TLS handshake의 untrusted length 기반 사전 allocation 경로를 HollowByte DoS로 분석함
- 11바이트 입력의 3바이트 length 선언으로 최대 131KB buffer allocation이 발생할 수 있으며, glibc allocator reuse가 연결별 누적 효과를 키우는 조건으로 설명됨
- Okta 실험에서는 16GB 시스템에서 connection ceiling 아래 상태로 전체 메모리의 25% 잠김을 관측했으며, 이는 단일 실험 조건 결과임
- 수정이 포함된 release는 OpenSSL 4.0.1·3.6.3·3.5.7·3.4.6·3.0.21이며, The Hacker News의 2026-07-18 05:20 KST 보도로 공개 범위 확인

## 출처 사실과 경계

- Okta 원문은 2026-07-16 공개됐으며 CVE·공식 security advisory·명시적 changelog 항목 없이 6월 9일 release에 fix가 포함됐다고 설명함
- 영향은 TLS peer가 handshake message의 길이를 제어하는 server memory pressure 조건이며, 취약 library를 실제 로드하는 process 재시작이 update 완료 조건임
- 원문은 16GB 환경에서 25% memory lockup을 관측했으나 모든 OS·allocator·TLS deployment에서 동일한 메모리 고갈이나 원격 코드 실행을 주장하지 않음

## 운영 검증 경계

- internet-facing TLS termination, reverse proxy, API gateway, service mesh sidecar의 OpenSSL linkage와 loaded version inventory 대상
- package update 뒤 process restart, connection·RSS memory·allocator telemetry, connection cap·rate limit의 DoS 완화 한계를 함께 검증할 대상
- EOL·extended-support branch 적용 여부와 vendor backport 상태는 OpenSSL 최신 release만으로 추정하지 말고 공급자 advisory로 대조할 대상
