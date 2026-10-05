---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=42172
title: KAIST CONDA 동적 벡터 인덱스의 RAG retrieval freshness·연결성 운영 경계
ingested: 2026-10-05
published: 2026-10-05 12:00 KST
sha256: 9f327d7ffcc054d8855fa9070ecf0e26dbc9d0f037e03089d9797a589c96b488
tags: [ai, database, infrastructure, research, korea]
---
## 원문 확인

- 인공지능신문 기사 제목: "정보는 있는데 AI가 못 찾는다?...KAIST 김민수 교수팀, 데이터 추가·삭제에도 검색 정확도 유지하는 ‘CONDA’ 개발"
- 기사 입력 시각: KST `2026-10-05 12:00`
- 원문 URL: https://www.aitimes.kr/news/articleView.html?idxno=42172
- 직접 확인한 Open Graph 이미지: https://cdn.aitimes.kr/news/thumbnail/202610/42172_63420_826_v150.jpg
- 논문 제목: `CONDA: A Connectivity-Aware Dynamic Index for Approximate Nearest Neighbor Search over Evolving Data`, 기사 기준 VLDB 2026 발표

## GN⁺ 핵심 요약

- 문제: RAG corpus에서 문서가 insert·delete될 때 vector search graph의 연결이 끊기면 정답 항목이 남아 있어도 retrieval miss가 발생하는 구조
- 방식: `CONDA`는 vector 거리 외에 search path 연결 상태를 함께 고려해 update 뒤 필요한 항목이 graph에서 고립되는 문제를 완화함
- 결과: 기사 기준 기존 최신 기술 대비 검색 정확도 최대 `24.5%`, data processing speed 최대 `1.90배` 향상 수치
- 부하: 1억 건 데이터에서 6시간 동안 search와 data update를 동시에 수행한 실험 범위
- 적용: GraphAI `AkasicDB`에 올해 4분기 상용 적용 계획 언급, 제품 성능·support 조건은 별도 확인 필요

---

## 동적 retrieval의 실패 모드

- RAG는 최신 문서를 embedding한 뒤 query 시 top-k 후보에 안정적으로 도달해야 하는 구조
- 기존 graph index는 insert·delete 반복 뒤 이웃 연결이 단절돼 retrieval path가 닿지 않는 연결성 붕괴 가능성
- 문서 수·embedding job 성공률만으로 stale result·fresh-document miss·tail latency를 구분하기 어려운 운영 과제

## CONDA의 기사 명시 접근

- 데이터 간 거리와 필요한 정보까지 도달하는 search path의 연결 상태를 함께 고려하는 dynamic index
- 새 데이터 추가와 기존 데이터 삭제 뒤 중요한 연결을 유지해 특정 정보의 graph isolation을 방지하는 방식
- 기사 내 max improvement 수치와 대규모 실험 조건은 원 논문·동일 workload로 독립 재현 필요

## RAG 운영 검증

- `recall@k`, MRR, fresh-document hit rate, p95/p99 latency, deleted-vector visibility, orphan rate를 ingest revision과 연결 필요
- policy document update·delete·rollback을 섞은 replay query set으로 retrieval miss와 generation 오류를 분리 필요
- index update throughput·storage amplification·compaction/rebuild window·resource 사용량을 retrieval quality와 함께 기록 필요

## 팀 액션

- production corpus의 daily insert·update·delete 비율, query distribution, metadata filter와 embedding/chunking revision inventory화
- baseline index와 동일 hardware·concurrency·filter 조건에서 accuracy·tail latency·rebuild cost canary 비교
- 벤치마크 최대 개선치를 production SLA·capacity·freshness 보장으로 바로 전환하지 않는 검증 경계
