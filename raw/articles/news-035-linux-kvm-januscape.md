---
sha256: 5891136b1315fd644ad152bb313c91c7b561dc86ccec99305e474625abb5a3e8
source_url: https://thehackernews.com/2026/07/16-year-old-linux-kvm-flaw-lets-guest.html
title: 16-Year-Old Linux KVM Flaw Lets Guest VMs Escape to Host on Intel and AMD x86 Systems
ingested: 2026-07-07
published: 2026-07-07 02:37
tags: [security, linux, kvm, virtualization, cloud-security]
---

# 16-Year-Old Linux KVM Flaw Lets Guest VMs Escape to Host on Intel and AMD x86 Systems

## Source facts
- The Hacker News reported Januscape, a Linux KVM use-after-free vulnerability tracked as CVE-2026-53359.
- The bug affects the KVM shadow MMU path shared across Intel and AMD x86 systems.
- Public proof-of-concept code can panic the host from a guest VM; the researcher claims a separate unreleased exploit can reach host code execution.
- The vulnerable code has reportedly existed since August 2010 commit 2032a93d66fa and was fixed in mainline on 2026-06-19 by commit 81ccda30b4e8.
- The practical high-risk condition is an x86 host running untrusted guests with nested virtualization enabled; the article also notes /dev/kvm permissions as a local privilege-escalation concern on some distributions.

## Korean briefing note
KVM은 클라우드와 사내 가상화의 격리 계층이다. Januscape는 공개 PoC만으로도 host panic을 일으킬 수 있고, 비공개 exploit 주장까지 포함하면 멀티테넌트 호스트의 권한 경계 위험이 크다. 운영팀은 nested virtualization 노출 여부, 배포판 패치 반영, /dev/kvm 권한, live migration 후 재부팅 순서를 즉시 점검한다.
