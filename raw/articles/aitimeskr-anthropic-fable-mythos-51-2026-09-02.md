---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41716
title: 앤트로픽, ‘클로드 페이블 5.1·미토스 5.1’ 공개…‘AI 연구원’으로 진화하는 에이전트
ingested: 2026-09-02
published: 2026-09-02 11:35 KST
sha256: 9ead8d68e0fabbed292deb7aa89f5ed20c74b800a26b6d4e51ccea9b373c9d7a
tags: [ai, foundation-model, agent, benchmark, finops, safety, global]
---

인공지능신문은 Anthropic이 Fable 5.1과 Mythos 5.1을 발표했다고 보도함. 기사 기준 Fable 5.1은 일반 이용자와 기업에 제공되고, Mythos 5.1은 사이버보안·생명과학의 고위험 연구를 위해 검증된 기관에 제한 제공되는 범위임.

기사에는 Terminal-Bench-Science 0.1 Fable 5.1 52.6%, Terminal-Bench 4.0 Fable 55.8%·Mythos 60.9%, GDPval-AA v2 1,853점, OSWorld 2.0 partial 77.9%·strict 41.7%, CursorBench 3.2.0 73.4%라는 Anthropic 공개 수치가 인용됨. benchmark harness·seed·prompt·tool permission·context·judge 조건은 직접 확인하지 못했으므로 production 성능·SLA·일반 비용으로 확대하지 않음.

기사상 cache read 가격은 100만 token당 0.25달러로 75% 인하됐고, Fable 5 대비 일반 작업 약 25%·context와 tool 사용량이 많은 agentic 작업 최대 45% 비용 감소가 언급됨. input/output token·cache-hit·tool loop·retry·region·contract·quota·availability 조건은 별도 확인 필요.

Mythos 5.1의 제한 access와 EFS 언급은 identity·workspace·tool·data egress·human approval·audit 운영 검토 신호임. Anthropic 원문 URL·access policy·저장·retention·encryption·key custody·SLA·계약은 직접 읽지 못했으므로 확정 사실로 기록하지 않음. 도입 전 task success·tool validity·TTFT/p95·token/cache-read 비용·safety intervention·denial·fallback recovery를 job ID로 연결한 canary 검증 필요.
