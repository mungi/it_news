---
source_url: https://blog.cloudflare.com/clef-decision-models/
title: Introducing Clef: our open-source decision models, and new RL fine-tuning platform
ingested: 2026-10-02
published: 2026-10-02 00:34 KST
sha256: f9c772d4c188df31d0f8f837049468c2fa27f61d5fea47f0e1ef85e4ef205ae2
tags: [ai, cloud, devtools, agent, classification, open-source, global]
---

# Cloudflare Clef: agent routing용 오픈소스 decision model·RL fine-tuning 공개

- 원문 발행: `2026-10-01T15:34:02.111Z`, KST 2026-10-02 00:34
- Open Graph image: https://blog.cloudflare.com/_emdash/api/media/file/01M3TJV43SPQCPKJ6GBXFCDKNE.01M3TJV53VYDMVNCZDPH1FBFYN.png
- SHA-256은 이 raw file의 frontmatter 뒤 본문 기준 값이며 source HTML 원문 보관값이 아님

## 핵심 요약

- 공개: Cloudflare가 Workers AI에서 호스팅하는 `Clef`·`Clef-flash` decision model과 고객 데이터 기반 RL fine-tuning platform을 공개함
- 출력 계약: customer-support message·domain 등 입력을 typed answer와 probability로 분류해 routing·escalation·human deferral에 연결하는 용도임
- 모델 범위: vision encoder와 `64K` context를 제공하며, Jev의 text-only·`32K` context와 비교한 vendor 설명 범위임
- 성능 경계: Cloudflare Threat Intelligence의 domain fetch·render·classification workflow에서 Clef `2.2s`, gpt-oss-120b `4.7s`를 제시했으나 단일 vendor workflow 수치임
- 배포: 모델은 Apache 2.0으로 Hugging Face에 공개됐으며 Workers AI hosted service·self-hosted artifact·RL training의 가격·quota·data retention·SLA는 도입 전 문서와 tenant에서 별도 확인 필요

## 원문

https://blog.cloudflare.com/clef-decision-models/
