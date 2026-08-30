---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214610
title: 오픈AI, 스페이스X 인수 '커서'에 모델 제공 중단...머스크와 갈등 격화
ingested: 2026-08-30
published: 2026-08-30 08:37 KST
sha256: 76110bd9447104289160a03ed4987a3dfdded6da5bfac2d77042f048b388b0a4
tags: [ai, devtools, coding-agent, model-routing, vendor-risk, global]
---

AI타임스는 `article:published_time` `2026-08-30T08:37:25+09:00`로, OpenAI가 SpaceX에 Cursor 모델 공급 계약을 단계적으로 끝내겠다고 통보했으며 기사상 차단 예정일은 2026-11-12라고 보도함. 같은 기사에 따르면 신규 Astra 모델은 Cursor에 제공하지 않으며, Cursor CEO는 OpenAI 모델이 전체 사용자 트래픽의 약 5%라고 언급함.

이번 실행에서 직접 확인한 것은 AI타임스 기사 자체의 제목·본문·발행 시각·Open Graph image임. OpenAI의 원문 발표, SpaceX와 Cursor의 계약 전문, 공급 종료 조건, 모델별 API availability·가격·quota·SLA, 실제 트래픽 비율은 독립적으로 확인하지 못했음. 따라서 공급 종료 확정·Astra 출시·다른 모델 사업자의 용량 확대를 확정 사실로 기록하지 않고, timestamped secondary report의 주장과 인용 범위로 한정함.

Cursor 또는 multi-provider coding-agent 사용 팀은 모델 provider별 요청량·fallback·rate limit·context/tool-call 호환성·quality regression·token 비용·audit/data retention을 inventory해야 함. 한 provider의 계약 또는 정책 변경에 대비해 routing policy, provider health signal, read-only canary, rollback threshold, 고객 안내와 billing 영향 검토를 release 절차로 고정할 필요가 있음.
