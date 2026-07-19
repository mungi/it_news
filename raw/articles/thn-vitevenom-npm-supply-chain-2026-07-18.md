---
source_url: https://thehackernews.com/2026/07/seven-malicious-vite-npm-packages-use.html
title: Seven Malicious Vite npm Packages Use Blockchain C2 to Deliver a RAT
ingested: 2026-07-19
published: 2026-07-18 03:54 KST
sha256: 428614fce90fa28e30890b337d4815088d2dc17cc40d9edded6def0b63eb2a5a
tags: [security, devtools, npm, vite, supply-chain]
---
# ViteVenom: Vite 생태계를 사칭한 npm 패키지의 블록체인 C2 공급망 공격

- The Hacker News가 Checkmarx 분석을 인용해 Vite 개발자를 겨냥한 악성 npm 패키지 7개를 보도함
- 패키지는 2026-06-29~2026-07-03 게시됐으며 `@vitejs/*` namespace와 유사한 scoped name으로 신뢰를 가장하는 방식
- 악성 loader는 install이 아니라 import 시점에 실행되고 Tron·Aptos·BNB Smart Chain transaction data와 HTTP fallback에서 다음 단계 payload를 가져오는 구조로 설명됨
- 보도상 RAT는 reverse shell·credential harvesting·file exfiltration·persistence 기능을 가질 수 있으나, 특정 조직의 설치·피해 규모는 확인하지 않음

## 출처 사실과 경계

- The Hacker News RSS의 timezone-aware `Sat, 18 Jul 2026 00:24:51 +0530`를 2026-07-18 03:54 KST로 변환해 뉴스 공개 시각으로 사용
- Checkmarx 원문 링크는 제공됐으나 이번 실행의 직접 요청은 HTTP 403으로 본문 재검증 불가; 기술 세부사항은 THN이 인용한 Checkmarx 분석 범위로 한정
- 보도는 ChainVeil과 shared tier-2 infrastructure 및 SuccessKey attribution을 설명하지만, attribution·감염 범위를 독립적으로 확정하지 않음

## 운영 대응

- lockfile·npm cache·private registry log에서 package와 유사 scope 설치 이력을 확인할 대상
- import가 실행된 CI·developer endpoint에서 DNS·HTTP egress, shell profile 변경, credential use를 같이 조사할 대상
- package 제거 뒤 clean rebuild, release artifact 재검증, npm·Git·cloud credential 회전을 수행할 대상
