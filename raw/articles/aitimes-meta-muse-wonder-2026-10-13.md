---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216176
title: 메타, 자체 최고 모델 ‘뮤즈 원더’ 출시로 프런티어 경쟁 합류
ingested: 2026-10-13
published: 2026-10-13 06:27 KST
sha256: 853e4e167105b6e3796f4226353ce806051fc01e2f7fcafc90192c161d6be6fc
tags: [ai, foundation-model, agent, coding, benchmark, finops, global]
---
# Meta Muse Wonder / Muse Wonder Full

- AI타임스 canonical article `article:published_time`: `2026-10-13T05:53:35+09:00`; 기사 화면의 업데이트 표시는 `2026-10-13 06:27 KST`
- 공개 범위: `Muse Wonder`는 Meta Model API와 Muse Code에 제공, `Muse Wonder Full`은 Muse Code 구독자 전용이며 public API 미제공이라는 기사 보도 범위
- 모델 특성: text·image·video·audio 입력과 text 출력, 100만 token context, Active Memory와 Active Focus를 내세운 장기 작업 지속성 설명
- 학습 인프라: 두 모델을 Ohio Prometheus data center에서 학습했다는 기사 보도 범위
- 성능: Meta 공개 수치로 DeepSWE 1.1의 Full 79.0%·Wonder 78.8%, SWE-Marathon의 Full 57.5%·Wonder 53.1%를 인용. 평가별 도구와 Full 추론 설정이 달라 통제 비교가 아니라는 Meta 단서 포함
- 독립 평가 인용: Artificial Analysis AAII v4.3에서 최대 추론 설정 기준 Full 56점·Wonder 52점, Spark 1.3 대비 Full TerminalBench 점수 33%→57% 및 GDPval-AA 1681→1857 Elo라는 기사 범위
- 가격/접근: Wonder API는 입력·출력·cache input 100만 token당 $4·$20·$0.20으로 보도. Full의 token price는 비공개이며 Muse Code 월 $50 또는 $200 구독이 필요하다는 기사 범위
- 경계: 모델 가중치·API/region/quota/SLA·data retention·training data·tool permission·benchmark harness·production latency·failure recovery는 독립 1차 문서로 확인하지 못함
- 팀 액션: 독립 benchmark와 실제 업무 task success·human review·p95 latency·tool retry·token/cache·end-to-end task cost를 같은 evaluation sheet에서 canary 비교 필요
