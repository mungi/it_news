---
source_url: https://www.ox.security/blog/asyncapi-npm-organization-compromised-2m-weekly-downloads-affected/
title: AsyncAPI npm organization compromised — affected packages and CI/CD publishing path
ingested: 2026-07-15
published: 2026-07-15 18:16 KST
sha256: 0a4915bd8bff43d600dc53f27c445bc5c3ea8e013f13e30ac1828fe3fa7617c1
tags: [security, npm, github-actions, oidc, supply-chain]
---

# AsyncAPI npm package 침해와 Miasma loader

- OX Security·SafeDep·Socket·StepSecurity 분석을 인용한 보도가 @asyncapi namespace의 침해 package를 확인함
- 악성 implant는 install hook이 아니라 Node.js의 감염 module load 시 실행되고 IPFS 후속 payload를 내려받는 구조로 설명됨
- 분석은 HTTP·Nostr·IPFS·BitTorrent DHT·libp2p·Ethereum contract 기반 C2와 OS별 persistence 기능을 제시함

## CI/CD provenance 경계

- StepSecurity 분석은 npm token 탈취가 아니라 repository push access 뒤 정상 GitHub Actions OIDC trusted-publisher workflow로 publish된 경로를 설명함
- 유효 SLSA/OIDC provenance는 authorized workflow 생성 사실을 입증하지만 triggering commit의 정당성은 보장하지 않음
- 영향 version은 lockfile·SBOM·CI runner와 developer endpoint의 module load·IPFS egress·autostart artifact로 별도 조사 필요
