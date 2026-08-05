---
source_url: https://www.fortinet.com/blog/threat-research/quickfox-supply-chain-attack-used-to-deploy-fdmtp-implant
title: QuickFox Windows installer 공급망 공격과 FDMTP implant
ingested: 2026-08-05
published: 2026-08-04 22:00
sha256: adff0bd29603e808297b139c8dd4cfb7b5d5110d02428bb54b57988a3234da87
tags: [cybersecurity, supply-chain, windows, endpoint-security, global]
---

## 원문 확인
- URL: https://www.fortinet.com/blog/threat-research/quickfox-supply-chain-attack-used-to-deploy-fdmtp-implant
- Fortinet `article:published_time` `2026-08-04T13:00:00Z` = 2026-08-04 22:00 KST 확인
- QuickFox Windows installer의 Electron renderer `index.html`에 JavaScript 두 줄이 삽입돼 loader를 내려받는 공급망 공격 확인
- 악성 domain `cdns3[.]51quickfox[.]cn`은 정상 `51quickfox[.]com`을 흉내 낸 domain이며 Fortinet은 공식 QuickFox domain이 아니라고 명시
- loader가 Windows·재감염·실행 process를 선별한 뒤 FDMTP implant 설치를 진행하는 분석 확인
- v3.0.51.0이 earliest affected Windows version이며 공개 version history가 완전하지 않아 표가 exhaustive list가 아니라는 경계 확인
- QuickFox가 Fortinet 통지 뒤 v3.59.6에서 악성 구성요소를 제거했다는 vendor response 확인
- Fortinet은 Mustang Panda와 tactical overlap을 언급하지만 특정 행위자 attribution은 확정하지 않음
- 영향·감염·데이터 유출은 개별 endpoint의 installer·network·persistence evidence 없이 단정 불가
