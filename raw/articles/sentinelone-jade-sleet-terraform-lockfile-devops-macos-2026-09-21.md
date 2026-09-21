---
source_url: https://www.sentinelone.com/labs/dont-call-us-well-call-your-apis-tradertraitor-backdoors-resurface-on-victim-with-no-crypto-ties/
title: Jade Sleet의 DevOps 채용 미끼와 조작된 Terraform lockfile 기반 macOS endpoint 침해
created: 2026-09-21
ingested: 2026-09-21
published: 2026-09-18
sha256: 1857752198a61e0becd7675c9c46787482476101f6c906392d4387f4ff4983e8
tags: [cybersecurity, devops, cloud-security, supply-chain, terraform, macos, global]
---
# Jade Sleet의 DevOps 채용 미끼: 조작된 Terraform lockfile과 macOS cloud credential endpoint 침해

- primary research: https://www.sentinelone.com/labs/dont-call-us-well-call-your-apis-tradertraitor-backdoors-resurface-on-victim-with-no-crypto-ties/
- related report: https://thehackernews.com/2026/09/jade-sleet-linked-to-indian-it-provider.html
- 원문 게시일: 2026-09-18, 시간 미확인
- evidence boundary: SentinelOne 원문과 The Hacker News 보도를 직접 확인한 범위임. 인도 IT 서비스사 Apple Silicon MacBook의 최초 전달 방식, cloud/source-control 접근 결과, 추가 피해 범위는 공개 source로 확정되지 않음

## 핵심 요약

- 공개: SentinelOne이 TraderTraitor/Jade Sleet의 macOS `FLATROOF`·`ROOFDECK` backdoor가 인도 IT 서비스사 DevOps engineer endpoint에서 발견된 사례를 기술
- 경로: fake job interview repository의 weaponized `.terraform.lock.hcl`이 attacker-controlled custom provider를 지정하고 `terraform init`이 module download·execution으로 이어지는 설명
- 대상: AWS·OVH·OpenStack에 Terraform·Ansible을 사용하고 cloud credential·source-control access를 가진 Apple Silicon MacBook 범위
- 시점: 두 backdoor가 2026-03-18부터 disk에서 관측되고 3월 29일부터 beaconing·host activity가 시작된 telemetry
- 경계: SentinelOne은 최초 delivery method를 증명하지 못했으며, 단일 endpoint 관측을 전체 조직·클라우드 침해로 확장할 근거 없음

---

## 채용 과제 repository의 provider 신뢰 경계

- repository theme: infrastructure engineering project를 가장한 job interview lure
- lockfile: `.terraform.lock.hcl`의 custom provider가 공격자 제어 domain을 가리키는 구조
- 실행: Terraform이 lockfile의 provider를 source of truth로 처리해 `terraform init` 시 provider artifact를 내려받고 실행하는 범위
- 운영: external POC·채용 과제는 production identity·backend·VPN·organization network와 분리 필요

## endpoint·cloud incident 범위

- macOS: `FLATROOF`·`ROOFDECK` presence, process/Launch Agent, browser·keychain access, C2 egress를 endpoint telemetry로 검토
- IaC: provider download URL·checksum·CLI cache·registry mirror를 code review와 EDR detection에 포함
- identity: cloud credential·Git access·Terraform backend token의 사용 기록을 host activity와 시간축 대조
- 경계: public source에 특정 cloud account action·repository data access·lateral movement 결과 확인 없음
