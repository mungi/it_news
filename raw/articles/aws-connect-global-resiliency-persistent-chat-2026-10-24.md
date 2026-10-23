---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-connect-global-resiliency-persistent-chat
title: Amazon Connect Customer Global Resiliency now supports persistent chat across linked AWS Regions
ingested: 2026-10-24
published: 2026-10-24 02:00 KST
sha256: 4d0bc9be0a40cb4e622193bc8d4fb05e66ef124a057ab92851810bbc1c1277f8
tags: [aws, amazon-connect, multi-region, resiliency, contact-center, cloud, global]
---
# Amazon Connect linked Region persistent chat

AWS What’s New canonical announcement의 embedded `postDateTime` `2026-10-23T17:00:00Z`와 본문을 대조해 KST `2026-10-24 02:00` 기준으로 기록.

- 공개: Amazon Connect Customer Global Resiliency의 linked AWS Region 간 persistent chat 지원
- 전달: 다른 linked Region에서 이전 conversation을 재개할 때 context·metadata·transcript·chat attachment 전달
- 사례: US-East (N. Virginia)에서 시작한 chat을 linked US-West (Oregon)에서 history·attachment와 함께 재개
- 전제: Global routing onboarding 필요
- 제공: Amazon Connect Customer Global Resiliency 지원 AWS Region 범위
- 경계: 기능 공지가 모든 Region pair·channel·routing path의 자동 failover를 뜻하는 근거 아님
- 경계: conversation history·attachment 전달이 data residency·retention·access-control·CRM integration의 자동 충족을 뜻하는 근거 아님
- 팀 액션: Region switch canary에서 conversation ID·identity·agent assignment·CRM correlation·transcript/attachment access·audit log를 같은 trace로 검증
