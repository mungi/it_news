---
source_url: https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/
title: Rust arrayref 공급망 공격 — 악성 build script·Cargo cache·CI artifact 조사
ingested: 2026-08-21
published: 2026-08-20 09:00 KST
sha256: 16b41075ce04c11bbb3ed1e4de816ec232efc866ac553d8ea0deb48b52b13210
tags: [it, cybersecurity, devtools, rust, cargo, supply-chain, cicd, global, weekly-briefing]
---
# Rust arrayref 공급망 공격 공식 공지

- 공식 제목: `Supply chain attack on arrayref`
- 발행: Rust Blog RSS `2026-08-20T00:00:00+00:00`, KST `2026-08-20 09:00`
- 사건 report: 원문 기준 `2026-08-20 07:15 UTC`
- Open Graph image: https://www.rust-lang.org/static/images/rust-social-wide.jpg
- 직접 확인: 2026-08-21 KST

## 직접 확인한 본문 사실

- Rust Security Response Team이 `proc-macro1` crate build script가 악성 payload를 내려받는 사실을 확인
- `arrayref@0.3.10` 재배포가 `proc-macro1`에 의존하도록 변경됐고, `internment`·`append-only-vec`도 동일 작성자 계정 영향 범위
- Rust 팀이 악성 release를 삭제하고 maliciously-yanked version을 복구했으며 해당 account를 precaution으로 잠금
- `arrayref@0.3.10`은 86분, `internment@0.8.7`은 90분, `append-only-vec@0.1.9`는 107분 공개된 상태
- `proc-macro1`·`proc-macro-en`·`aovine`·`arone`·`aronenao`·`tinymember` 모든 version을 cache 확인 대상으로 제시

## 증거 경계와 운영 메모

- Rust 공지는 package 삭제·복구와 local cache 확인 방법을 제공하지만 기존 CI runner·artifact·credential·endpoint가 무해하다는 보증은 아님
- `Cargo.lock`·registry cache·CI cache·SBOM·artifact digest·build egress를 같은 build ID로 대조해 영향 범위 설정 필요
- 발견 시 cache 격리·credential review/rotation·clean rebuild·artifact/deployment reconciliation과 provenance 재발행 필요
