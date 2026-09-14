---
source_url: https://thehackernews.com/2026/09/new-ddrop-attack-breaks-intel-tdx-and.html
title: New DDRop Attack Breaks Intel TDX and AMD SEV-SNP Confidential Computing
ingested: 2026-09-15
published: 2026-09-15 03:02
sha256: 8d259fe3598ba107a2c2644aa550b50203717d4153688f7dc29302c3e1d5fa52
tags: [security, cloud, confidential-computing, hardware-security, vulnerability]
---
## 원문 확인

- Canonical URL: https://thehackernews.com/2026/09/new-ddrop-attack-breaks-intel-tdx-and.html
- Schema `datePublished`: `2026-09-14T23:32:00+05:30`, converted to KST `2026-09-15 03:02`
- Open Graph image: source article `DDRop.gif`

## Source-grounded facts

- DDRop uses server software control and a DDR5 interposer to silently drop writes so stale encrypted memory is read as current
- Reported affected technologies: Intel TDX, Intel Scalable SGX, and AMD SEV-SNP; the stated design gap is memory freshness, not encryption confidentiality alone
- Researchers demonstrated Intel TDX protected-VM memory read, debug-mode switch, and launch-measurement overwrite in the described research environment
- AMD SEV-SNP result is limited in the report to copying one victim page into another during page relocation
- Reported preconditions: server software control and brief physical access; researchers report no evidence of use outside a laboratory

## Evidence boundary

- This report is not evidence that any cloud provider or tenant has been compromised
- TDX cryptographic-integrity-mode results were not directly tested by the researchers because their system did not support that mode
- A hardware-design issue does not establish a software patch, CVE, or mitigation timeline

## Korean briefing

- 변화: confidential computing의 memory encryption과 data freshness·physical custody를 분리해 검토해야 하는 research result
- 볼 것: host physical access, DIMM/maintenance supply chain, integrity-mode availability, attestation verifier policy
- 팀 액션: high-value confidential VM의 hardware threat assumption과 provider access evidence를 risk register에 반영
