---
source_url: https://thehackernews.com/2026/09/freeipa-flaw-chain-lets-anonymous.html
title: FreeIPA Flaw Chain Lets Anonymous Clients Create Reusable Administrator Credentials
ingested: 2026-09-08
published: 2026-09-08 20:22 KST # THN RSS timestamp: Tue, 08 Sep 2026 16:52:07 +0530
sha256: c81e2237b69c19c6efbbab878a49d3295120ce22b5568729debde7eaed69aa0c
tags: [it, cybersecurity, global, weekly-briefing]
---

# FreeIPA·389 Directory Server anonymous administrator credential chain

## 직접 확인한 본문 사실

- The Hacker News가 Red Hat·FreeIPA 자료를 바탕으로 `CVE-2026-76578`과 `CVE-2026-76560` flaw chain을 보도
- FreeIPA OTP self-service ACI와 389 DS owner check의 빈 값 처리 조합으로 anonymous client가 attacker-chosen Kerberos identity·password를 기록할 수 있다는 설명
- Red Hat이 stock FreeIPA container image `4.13.1`에서 chain을 재현했다는 보도 범위
- `CVE-2026-76578` preliminary CVSS `9.8` Critical, `CVE-2026-76560` CVSS `7.5` 표기
- 공개 advisory·bug report에서 실제 공격 악용은 확인되지 않았다는 보도 범위

## 증거 경계와 운영 메모

- directory write 가능성과 실제 Kerberos ticket·Dogtag/HTTP service access·endpoint authorization을 같은 사실로 취급하지 않음
- IdM/389 DS errata·anonymous LDAP ingress·OTP ACI·admin principal/keytab/certificate/CA audit를 함께 검토 필요
