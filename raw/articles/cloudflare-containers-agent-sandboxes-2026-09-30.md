---
source_url: https://blog.cloudflare.com/faster-agent-sandboxes/
title: Cloudflare Containers, rebuilt to scale agent sandboxes
ingested: 2026-10-01
published: 2026-09-30 21:58 KST
sha256: 2cbdfe496990d98ad1944e552ba8573ec61ca4520d0434e678e4f24e70f1b1fc
tags: [ai, cloud, infra, devtools, agent, container, serverless, global]
---

# Cloudflare Containers: agent sandbox 확장을 위한 runtime·scheduling 재구성

- 원문 발행: `2026-09-30T12:58:00Z`, KST 2026-09-30 21:58
- Open Graph image: https://blog.cloudflare.com/_emdash/api/media/file/01M3S8R4W0018F4ABEE2X1ZH4G.01M3S8R5VDFQC24Z3Q4E6RBE3E.png
- SHA-256은 이 raw file의 frontmatter 뒤 본문 기준 값이며 source HTML 원문 보관값이 아님

## 핵심 요약

- 공개: Cloudflare Containers의 agent workload용 runtime·scheduling을 재구성하고 `durable_object` policy·filesystem snapshot public beta를 공개함
- 시작 지연: ComputeSDK 독립 benchmark에서 median startup이 4초 이상에서 `648ms`로 단축됐으며 Cloudflare는 6배 이상 빠른 start를 제시함
- 구성: application code가 sandbox별 image와 instance type을 runtime에 선택하며 Durable Object가 lifecycle·outbound traffic을 제어하는 구조임
- 상태: filesystem snapshot으로 작업공간 저장·복원이 가능하나 API·limits·pricing·isolation 수준은 workload별 문서와 canary로 검증 필요
- 운영: image provenance·resource quota·snapshot retention·egress·cold-start p95·container cleanup을 agent execution control plane에 연결 필요

## 원문

https://blog.cloudflare.com/faster-agent-sandboxes/
