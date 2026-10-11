---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216107
title: MS, 에이전트 의사결정 특화 모델 ‘디시전-1’ 공개
created: 2026-10-11
ingested: 2026-10-11
published: 2026-10-10 18:53 KST
sha256: aa46bf7f0d7942a15a541cd44ba19bcdab546c90824a805c44fdcac6f1686120
tags: [ai, agent, inference, observability, safety, global]
---
# Microsoft Decision-1 보도

- AI타임스 원문 `article:published_time`: `2026-10-10T18:53:43+09:00`, KST `2026-10-10 18:53`
- 공개 범위: Microsoft가 구조화된 의사결정 작업용 `Microsoft-Decision-1`을 공개했다는 보도이며, 모델 선택·요청 분류·우선순위·결과 검증·agent control을 사용 사례로 제시함
- 입력·출력: 고정된 선택지의 calibrated probability를 한 번의 inference로 산출하고 yes/no·객관식·등급 평가·rubric 기반 행동 평가를 지원한다는 기사 범위
- context·평가: 최대 32K token input, 8가지 입력 변형에서 평균 1.3% 판단 변경, held-out 약 15만 질문·36 benchmark와 safety 11 benchmark·5,250 request라는 vendor-reported 결과
- 성능·비용: 2위 모델 대비 4.5배, GPT-6 Sol 대비 최대 35배 빠르다는 vendor-reported 비교와 Foundry·OpenRouter 제공, input 1M token당 $0.042·output 무료라는 기사 범위
- 운영 경계: 정확도·속도·비용·safety benchmark는 Microsoft 주장으로, tenant별 availability·SLA·rate limit·data retention·calibration·action authorization은 독립 문서와 workload canary 확인 필요
- 팀 액션: read-only routing·triage에서 choice set·policy version·input provenance·decision·confidence·fallback·human override를 trace로 연결하고, write action은 deterministic policy·least-privilege tool scope 뒤에서 별도 승인 필요
