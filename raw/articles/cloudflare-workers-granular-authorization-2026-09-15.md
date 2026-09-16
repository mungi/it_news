---
source_url: https://blog.cloudflare.com/workers-granular-authorization/
title: Cloudflare Workers 세분화 권한·Worker별 CI/agent token 운영 경계
created: 2026-09-16
ingested: 2026-09-16
published: 2026-09-15 22:00
sha256: cf2089a8c01d6af4b8711ebe4f7fba606cf0fb1da05a4d8e59710f2078c55ac9
tags: [cloudflare, cloud, security, iam, cicd, agent, global]
---

# Cloudflare Workers 세분화 권한·Worker별 CI/agent token 운영 경계

- 원문: https://blog.cloudflare.com/workers-granular-authorization/
- 원문 게시: 2026-09-15 22:00 KST

## 핵심 요약

- individual Worker scope와 Metadata Read-Only·Content Read-Only·Editor·Admin 4개 역할을 모든 customer에 제공
- user policy 또는 Worker-scoped API token으로 teammate·CI/CD·agent access를 특정 application에 제한
- Metadata Read-Only는 metrics·logs·traces를 보되 source code/product content를 읽지 못하며, Editor는 변경 가능·create/delete 불가
- route·Custom Domain 변경에는 Worker Editor 외 zone의 Workers Routes permission이 추가로 필요
- dashboard·API·Terraform에서 설정 가능하며 legacy role은 deprecation date 없이 당분간 계속 동작

---

## 증거 경계

- source가 밝힌 Cloudflare Workers 권한 모델·사용 예와 availability만 기록함
- 조직별 token exposure, route policy, Terraform/provider behavior는 local account configuration과 audit evidence로 별도 검증 필요
