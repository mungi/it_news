---
source_url: https://bind9.readthedocs.io/en/stable/notes.html#notes-for-bind-9-20-29
title: ISC BIND 9 9.20.29·9.21.26의 DoH SIG(0) crash 포함 14개 보안 결함 수정
created: 2026-09-18
ingested: 2026-09-18
published: 2026-09-16
sha256: 6d3cb7ccae2448ec5355f12cc00951bf56e8853127a9f8abae792e6ab3980d27
tags: [cybersecurity, infra, networking, dns, open-source, global]
---
# ISC BIND 9 `9.20.29`·`9.21.26`: DoH SIG(0) crash 포함 14개 보안 결함 수정

- 원문: https://bind9.readthedocs.io/en/stable/notes.html#notes-for-bind-9-20-29
- 관련 분석: https://thehackernews.com/2026/09/bind-9-update-fixes-14-flaws-including.html
- 원문 release notes는 `9.20.29`의 security fixes를 제공하며, The Hacker News는 2026-09-17 13:30 +05:30에 14건의 consolidated disclosure를 보도

## 핵심 요약

- ISC가 `9.20.29`과 `9.21.26`을 공개해 BIND 9 보안 결함 14건 수정
- `CVE-2026-77692`는 DoH server에서 invalid `SIG(0)` request와 early connection close로 `named` crash 가능
- recursive resolver에서 crafted negative response·DNSSEC proof·DNS64 조건의 crash와 HTTPS/SVCB alias CPU·memory exhaustion 범위 수정
- `CVE-2026-19941`은 unrelated signed NSEC proof로 forged NXDOMAIN이 DNSSEC validation을 통과할 수 있는 조건 수정
- ISC는 active exploitation을 인지하지 못한다고 밝혔고, 보도 기준 workaround는 제시되지 않음

---

## release·지원 범위

- `9.20.29`: stable branch의 14개 결함 전체 수정
- `9.21.26`: development branch의 13개 결함 수정, `CVE-2026-19662`는 9.21 branch 비영향
- `9.18`: 2026년 6월 EOL이며 해당 14개를 고치는 9.18 release 미제공이라는 보도 범위

## 주요 crash·resource exhaustion 경로

- `CVE-2026-77692`: HTTPS DoH에서 invalid `SIG(0)` request를 처리 중 client가 조기 종료하면 `named` crash 가능
- `CVE-2026-76163`: global options block 부재 configuration의 TKEY query로 `named` termination 가능
- `CVE-2026-19667`: crafted oversized negative cache response로 default recursive resolver assertion failure 가능
- `CVE-2026-81563`: HTTPS/SVCB alias target record가 cache에서 release되지 않아 configured cache limit 초과 가능
- `CVE-2026-81736`: cached interlinked HTTPS/SVCB alias response assembly의 excessive CPU 사용 가능

## DNSSEC·운영 조치

- `CVE-2026-19941`: unrelated signed NSEC proof가 wildcard 존재 부정 proof로 받아들여져 forged NXDOMAIN acceptance 가능
- BIND 역할별 DoH listener·recursion ACL·DNSSEC validation·DNS64·SVCB/HTTPS path를 asset inventory에 연결 필요
- fixed build 또는 vendor backport 적용 뒤 `named` restart, query latency, SERVFAIL, cache memory, CPU, zone-transfer failure의 canary 비교 필요
