---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/new-agentcore-runtime-generally-available
title: Amazon Bedrock AgentCore Runtime V2
ingested: 2026-09-19
published: 2026-09-18
sha256: abd54d90277fb428b9bcad9abc4e04e03ff79b3de05a50d652a48a4fedf622a3
tags: [ai, cloud, agent, serverless, release, global]
---

# Amazon Bedrock AgentCore Runtime V2

AWS는 2026-09-18 차세대 AgentCore Runtime을 공개했다. V2는 session 중 미사용 memory를 회수하고, agent environment를 한 번 준비해 snapshot에서 instance를 복원하는 방식을 설명한다. AWS test에서 200MB~2GB image의 P75 cold start는 1.9~2.0초, V1은 5.4~30초로 제시됐다. 제공 리전은 미국 동·서부와 아일랜드, 도쿄를 포함한 5곳이다. 이 수치는 AWS 환경의 결과이므로 agent tool chain, long session, secret refresh, network bootstrap, tenant audit가 같은 workload에서 유지되는지 검증해야 함.
