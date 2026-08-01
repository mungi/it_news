---
source_url: https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html
title: "Hackers Poison Adform Script to Swap Crypto Wallet Addresses Across Customer Sites"
ingested: 2026-08-02
published: 2026-08-01 18:03 KST (The Hacker News RSS `Sat, 01 Aug 2026 14:33:07 +0530`)
sha256: e70b9e2903edff48132ac8cd87f69eca333d6e800d9b5e04583161b1a23a1fa5
tags: [security, cloud, infra, javascript, supply-chain, cybersecurity]
---
# Adform 공유 JavaScript 변조 공급망 침해

- The Hacker News는 Adform이 제공한 `trackpoint-async.js`가 변조돼 downstream 고객 사이트에서 Bitcoin·Ethereum·Tron 지갑 주소를 교체하는 browser-side code가 실행됐다고 보도함
- Adform의 2026-07-31 공식 company update는 2026-07-27 incident를 확인하고 악성 코드 제거·영향 고객 통지·관계 당국 신고를 공개함
- 변조 sample은 copy/cut/paste/input event, `input`·`textarea` value setter, text node와 `contenteditable` 값을 가로채며 clipboard 외 직접 입력도 바꿀 수 있는 범위
- 공개 정보상 영향 사이트·방문자 수·최초 침입 경로·실제 자금 전용·attacker identity·IoC는 확인되지 않음
- browser cache에 altered file이 남을 수 있으므로 cache purge, asset hash 확인, CSP/SRI·third-party script inventory·emergency disable을 incident response에 결합 필요

## 출처와 증거 경계

- 카드 source는 본문과 technical sample을 직접 확인한 The Hacker News 기사이며, exact time은 THN RSS `Sat, 01 Aug 2026 14:33:07 +0530` = `2026-08-01 18:03 KST`에서 변환함
- Adform의 공식 incident notice는 `July 31, 2026` company update와 affected date `July 27, 2026`을 확인했으나 이 browser rendering에서는 본문을 노출하지 않아, 상세 technical claim은 THN 보도와 연결된 public notice 범위로 한정함
- THN은 Adform이 visitor IP 또는 visited-site information 전송 증거를 찾지 못했다고 보도하되, technical analysis상 가능성은 있었다고 구분함; sample의 external request가 실제 attacker에게 도달했는지는 확정하지 않음

## 기술 관찰

- compromised resource: `s2.adform.net`에서 제공된 `trackpoint-async.js`
- sample: 정상 library 뒤에 two malicious blocks를 추가하고 address replacement string을 obfuscation 처리한 형태로 분석됨
- interception: copy event를 감시하고 clipboard를 주기적으로 읽으려 시도하며, input·textarea setter와 paste/input event를 hook하는 동작으로 보도됨
- DOM path: text node, input, textarea, `contenteditable`의 address pattern을 Bitcoin·Ethereum·Tron replacement string으로 바꿀 수 있는 구조로 보도됨
- network path: page load 때 hostname·path를 포함하는 request를 `84.32.102[.]230:7744`에 구성한 sample이 언급됐으나 delivery·collection 성공은 미확정

## 운영 대응

- inventory: external JavaScript URL·owner·business purpose·SRI hash·CSP source·cache TTL·rollback path를 asset register에 기록 필요
- contain: CDN/WAF·tag manager·CSP policy에서 affected asset의 rapid block 및 cache purge owner를 change/incident runbook에 지정 필요
- validate: page-level asset hash, DNS/CDN access log, CSP violation, browser telemetry와 payment/address confirmation trace 보존 필요
- prevent: wallet·payment·계정 식별자 입력에 client-side DOM만 신뢰하지 않고 server-side confirmation·final-display integrity check 적용 필요
