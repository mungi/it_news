---
source_url: https://thehackernews.com/2026/09/attackers-use-malicious-terraform.html
title: Attackers Use Malicious Terraform Providers to Deliver Go Malware via HashiCorp Registry
ingested: 2026-09-24
published: 2026-09-24
sha256: 3b91a9f6cbb00aba4ec4298c7c4ef32162f613566b6f3d6f7cca23ca32c49e49
tags: [cybersecurity, terraform, supply-chain, devops, go, global]
---

# Attackers Use Malicious Terraform Providers to Deliver Go Malware via HashiCorp Registry

The Hacker News가 인용한 Aikido 조사는 HashiCorp Registry의 Terraform provider 2개와 Go module 2개가 Go 기반 malware 배포에 사용됐다고 설명한다. 공개 목록은 `gocommunity-io/dockerd`, `kreuzwenker/docker`, `gocommunity.io/orderedbtree`, `gogets.dev/btreex`임. source는 Graphalgo와 겹치는 blockchain dead drop·Slack C2, system 정보 수집, 암호화된 후속 payload 구조를 기술한다. 실행 성공, 피해 조직, 후속 command의 전체 기능은 공개 source에서 확인되지 않음. IaC provider source·version·lock checksum·private mirror와 CI runner egress·ephemeral credential을 함께 검증해야 함.
