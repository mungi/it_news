---
source_url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
title: CISA KEV: Cisco FMC, Citrix NetScaler, and Fortinet vulnerabilities
ingested: 2026-09-11
published: 2026-09-09
sha256: 85f1813a23330c68422fcdfaf6c8c83132d96cb2a067ea9c7e9a1f3a386cd964
tags: [cybersecurity, patch-management, infra]
---

# CISA KEV의 Cisco·Citrix·Fortinet perimeter 취약점 추가

- 원문: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- 확인: CISA KEV catalog JSON entry와 linked vendor advisory URL을 직접 확인
- source date: `2026-09-09`

## KEV 등록 항목

- `CVE-2026-20079`: Cisco Secure Firewall Management Center Software와 Security Cloud Control Firewall Management의 alternate-path authentication bypass, unauthenticated remote attacker의 script file execution과 underlying OS root access 가능 범위
- `CVE-2026-19490`: AAA virtual server 또는 SSL VPN·ICA Proxy·CVPN·RDP Proxy Gateway로 구성된 Citrix NetScaler ADC/Gateway의 authentication bypass 범위
- `CVE-2025-25249`: FortiOS·FortiSwitchManager·FortiSASE의 heap-based buffer overflow, specially crafted packet을 통한 unauthorized code or command execution 범위

## CISA catalog의 조치 범위

- 세 항목의 `dateAdded`: `2026-09-09`, federal civilian executive branch `dueDate`: `2026-09-12`
- CISA required action은 vendor instructions 적용, asset internet exposure 평가, BOD 26-04 및 Forensics Triage Requirements 참고를 명시
- KEV inclusion은 개별 조직의 breach, ransomware use, identical exploit delivery, local compromise 상태를 자동 확정하지 않는 경계

## 운영 대응

- Cisco FMC/SCC, NetScaler AAA/Gateway, Fortinet product별 owner·public endpoint·version·fixed build·HA state를 분리 inventory
- patch 전 configuration snapshot·privileged admin/API·VPN/AAA login·policy/NAT change·outbound telemetry 보존
- vendor fixed build 적용 뒤 service/cluster health, session·credential review, post-patch synthetic test까지 incident closure evidence로 기록

## 출처

- Cisco advisory: https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-onprem-fmc-authbypass-5JPp45V2
- Citrix advisory: https://support.citrix.com/external/article/CTX696939/netscaler-adc-and-netscaler-gateway-secu.html
- Fortinet advisory: https://fortiguard.fortinet.com/psirt/FG-IR-25-084
