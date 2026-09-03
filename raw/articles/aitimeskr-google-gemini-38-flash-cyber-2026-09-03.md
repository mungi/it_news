---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41728
title: 구글, 역대 최고 수준의 추론 및 코딩 모델 ‘제미나이 3.8 플래시’ 공개…‘제미나이 3.8 플래시 사이버’도 출시
ingested: 2026-09-03
published: 2026-09-03 09:25 KST
sha256: 815b9daecbd8bf99a129086fb5ad3c31ee37b011750722c8de4b70c8ec65b9af
tags: [ai, foundation-model, agent, coding, cybersecurity, benchmark, finops, global]
---

인공지능신문은 Google이 장기 코딩·자율형 agent용 Gemini 3.8 Flash와 방어 조직 제한 제공 Gemini 3.8 Flash Cyber를 공개했다고 보도함. 기사 기준 Flash는 effort 조절, 반복 tool call, 결과 평가·개선을 수행하는 long-running agentic loop를 사용함.

기사에는 API 입력 100만 token당 0.75달러·출력 3.75달러, CyberGym 탐지 성공률 70% 이상, CWE-Bench pass@1 47.2%, Chrome 취약점 정확 patch 2.6배, Wiz 내부 침투 테스트 recall 7.5~9.7% 향상·비용 2.3~5.2배 낮음이라는 Google 인용 수치가 포함됨. benchmark harness·seed·prompt·tool permission·patch acceptance·environment는 직접 확인하지 못했으므로 production 성능·SLO·자동 patch 권한으로 확대하지 않음.

기사상 Flash Cyber는 Fairwind Program을 통해 정부·주요 인프라 운영자·소프트웨어 유지관리자 등 신뢰 조직에 우선 제공됨. Google 원문, model card, API endpoint·region·quota·pricing applicability, Fairwind eligibility·contract·SLA·logging·retention은 직접 읽지 못했으므로 확정 사실로 기록하지 않음.

도입 전 representative coding·security cohort에서 task success·tool failure·TTFT/p95·token/retry 비용·patch test pass·rollback·safety denial·human approval을 request/job ID로 연결한 canary 검증 필요. cyber route는 sandbox·asset allowlist·credential scope·egress·evidence retention·kill switch를 일반 coding route와 분리할 대상임.
