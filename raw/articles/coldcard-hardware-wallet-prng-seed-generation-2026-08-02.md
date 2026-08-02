---
source_url: https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html
title: "Coldcard Hardware Wallet Flaw Linked to $70 Million Bitcoin Theft in 41 Minutes"
ingested: 2026-08-02
published: 2026-08-02 02:17 KST (The Hacker News RSS `Sat, 01 Aug 2026 22:47:22 +0530`)
sha256: a91cf777de1c4a6f3d27881297878c54e5ab05b25bae4f8e5d53e428d70507cb
tags: [security, infra, cryptocurrency, prng, key-management]
---
# Coldcard 하드웨어 지갑 seed 생성 결함과 자산 이전 대응

- The Hacker News는 Coldcard seed generation의 2021년 3월 firmware integration error가 STM32 hardware RNG 대신 deterministic software PRNG를 연결했을 수 있다고 보도함
- Galaxy Research 분석은 2026-07-30 41분 동안 1,196개 Bitcoin 주소에서 1,082.65 BTC가 이동한 sweep을 이 결함과 연관 지음; sweep pattern은 operator 식별 단서일 뿐 theft 원인·공격자·피해 seed 일치의 독립 증명은 아님
- Block 분석은 device UID·timer state·prior RNG-call history를 알거나 충분히 제한할 수 있으면 candidate output stream을 offline에서 재현하고 public address와 대조할 수 있다고 설명함
- Coinkite는 2026-07-31 영향 모델과 release track용 emergency firmware를 배포했다고 보도됨; firmware update는 이미 생성한 seed의 entropy를 복구하지 않음
- 영향 firmware에서 생성한 seed는 patched firmware에서 새 seed를 생성하고 자산을 이전해야 함; 기존 seed restore는 결함을 계속 가져가는 경로

## 기술적 경계

- 보도된 Block 분석에서 `MICROPY_HW_ENABLE_RNG`는 enabled 여부가 아닌 macro 존재 여부로 검사돼 disabled config에서도 MicroPython Yasmarang fallback이 binding된 조건
- fallback은 chip unique ID와 timer register로 초기화되고 이후 fresh entropy를 수집하지 않았다는 분석
- Coinkite 추정 entropy와 실용 brute-force 비용은 device model·UID 정보·boot timing·prior RNG calls·derivation cost에 의존하므로 단일 공격 난이도로 일반화하지 않음

## 운영 대응

- seed 생성 시점의 firmware, device model, entropy ceremony, BIP-39 passphrase, signer quorum을 inventory하여 exposure 판단 필요
- 최소 50회의 fair·independent·private dice roll로 생성한 seed는 이 결함만으로 위험하지 않다는 Coinkite 설명 범위
- multisig는 quorum 전체가 영향 device로 구성되지 않은 경우에만 exposure를 낮출 수 있으므로 codebase·entropy source 다양성 검토 필요
- migration에서는 새 seed generation, address ownership, on-chain transfer confirmation, backup/restore, 고객 통지를 하나의 custody change record로 보존 필요
