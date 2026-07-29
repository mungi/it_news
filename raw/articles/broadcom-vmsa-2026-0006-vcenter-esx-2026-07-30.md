---
source_url: https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/38017
title: "VMSA-2026-0006: VMware ESX, vCenter, Workstation, and Fusion updates address multiple vulnerabilities"
ingested: 2026-07-30
published: 2026-07-29 (Broadcom official advisory; card clock uses related THN RSS 2026-07-30 00:31 KST)
sha256: e08d035e0c65d09471a00f31509ec0558b4266023f9270d4efef9b2401372864
tags: [security, cloud, infra, vmware, virtualization]
---

# Broadcom VMSA-2026-0006: vCenter·ESX·Workstation·Fusion 취약점

- Broadcom은 2026-07-29 `VMSA-2026-0006`을 공개하고 VMware ESX, vCenter, Workstation, Fusion, Cloud Foundation, vSphere Foundation 등의 update를 공지함
- advisory는 `CVE-2026-59309` vCenter VMware Directory Service authentication bypass와 `CVE-2026-59310` vCenter directory traversal을 Critical, 최대 CVSSv3 9.8로 분류함
- network access가 있는 actor가 첫 CVE로 unauthorized access, 둘째 CVE로 arbitrary code execution을 시도할 수 있다는 official description
- `CVE-2026-47876`은 VMXNET3 adapter를 사용하는 VM의 local administrator가 ESX host code execution을 시도할 수 있는 out-of-bounds write이며 CVSSv3 9.3으로 공지됨
- 나머지 `CVE-2026-41703`은 ESX information disclosure/DoS 조건, `CVE-2026-41709`은 malicious administrator logging 부족 문제로 설명됨

## 수정·증거 경계

- official response matrix는 VCF/VVF 9.1.x.x `9.1.0.0300`, 9.0.x.x `9.0.2.0100`, vCenter 8.0 `8.0 U3k` 등 제품·release별 fixed version을 제공함
- patches는 cumulative이며 official advisory는 workaround가 없다고 명시함
- Broadcom은 이 advisory 대상 CVE가 in-the-wild에서 exploited됐다는 evidence를 찾지 못했다고 명시함
- 조직은 vCenter network exposure, SSO/Directory Service, VMXNET3 guest local-admin assignment, version/build matrix, backup/rollback evidence를 별도 inventory 필요
- The Hacker News RSS `2026-07-29 21:01:15 +05:30`은 `2026-07-30 00:31 KST`이며 card sorting clock으로만 사용함; Broadcom official page는 calendar date를 제공함
