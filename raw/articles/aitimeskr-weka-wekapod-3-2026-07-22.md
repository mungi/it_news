---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41094
title: 웨카, AI 스토리지 플랫폼 WEKApod 3 공개
source_name: 인공지능신문
published: 2026-07-22 21:30 KST
ingested: 2026-07-22
sha256: 9097559ab449a710b2ef2ef0476830c0a81fd572c11eb5bda2ed662e87a4b734
tags: [infra, ai, storage, inference, rag, long-context]
---

# WEKApod 3 공개: AI 추론·RAG·장기 컨텍스트용 스토리지 집적도 주장과 검증 경계

- 인공지능신문은 WEKA가 2026-07-22에 `WEKApod 3`와 `NeuralMesh 6`를 공개했다고 보도함
- 제품군: `WEKApod Nitro`, `WEKApod Prime`, `WEKApod Prime Max` 구성 제시
- 대상: 에이전틱 AI, RAG, 장기 컨텍스트, 대규모 추론과 AI 데이터센터·AI 클라우드 workload
- 공급사 수치: 단일 랙 최대 1.1엑사바이트 저장·메모리 집적도라는 설명
- 검증 경계: media 구성, compression, resilience, network topology, workload별 latency·throughput·power·recovery 수치는 원문 보도만으로 확정 불가
- 운영 판단: model cache, vector retrieval, checkpoint restore, GPU idle, rack/node/media failure recovery를 같은 acceptance test로 측정 필요
