---
source_url: https://www.aitimes.com/news/articleView.html?idxno=212614
title: 메타, 9월 자체 AI 칩 '아이리스' 양산...내년 컴퓨팅 용량 14GW로 2배 확대
ingested: 2026-07-10
published: 2026-07-10 15:55
sha256: 3381b91da9499ae521f9607849476422cc2e50865bb24a361de225d334f192c1
tags: [meta, ai-chip, mtia, data-center, semiconductor]
---

# Meta, 9월 자체 AI 칩 Iris 양산 계획…2026년 AI 컴퓨팅 14GW 목표

- 원제: 메타, 9월 자체 AI 칩 '아이리스' 양산...내년 컴퓨팅 용량 14GW로 2배 확대
- 출처: AI Times
- URL: https://www.aitimes.com/news/articleView.html?idxno=212614
- 발행: 2026-07-10 15:55 KST
- 분류: Infra / Global / high

## 요약
- 핵심: Reuters 입수 문건 기반 보도에 따르면 Meta는 9월 MTIA 4세대 계열 자체 AI 칩 **Iris** 생산을 시작하고 2026년 AI 컴퓨팅 인프라 14GW 목표 제시. 공급망: Broadcom 설계 지원, TSMC 생산, Samsung 메모리·SanDisk 플래시·Sumitomo 광통신 장기 공급 계약 병행.
- 시사점: 대규모 AI 플랫폼은 GPU-only capacity 계획에서 벗어나 custom accelerator 적합 워크로드, compiler/runtime 성숙도, memory/storage/network 병목, 공급망 lock-in을 함께 평가 필요.

## 상세 내용
### 무슨 일이 있었나
- 핵심: Meta가 자체 개발 AI 데이터센터용 칩 코드명 Iris 생산을 9월 시작할 계획이라는 Reuters 기반 보도
- 계열: Iris는 MTIA 4세대 로드맵에 포함된 학습·추론용 custom silicon으로 설명
- 목표: Meta는 올해 말 7GW, 2026년 **14GW** 규모 AI 컴퓨팅 인프라 구축 목표 제시
- 투자: 올해 AI 인프라 투자 규모 최대 1450억달러, 빅테크 AI 투자 예상액 7000억달러 중 큰 비중

### 본문 핵심 포인트
- 기술: MTIA는 AI 발전 속도에 맞춰 설계를 빠르게 개선하기 위한 모듈형 chiplet 구조 채택
- 검증: 6주 테스트에서 심각한 결함이 발견되지 않았다는 내부 문건 내용 보도
- 공급망: Broadcom이 설계를 지원하고 TSMC가 생산 담당, Samsung·SanDisk·Sumitomo 장기 공급 계약 병행
- 역할: Meta는 자체 칩이 최신 GPU를 완전히 대체하기보다 내부 워크로드에 맞춘 보완 역할이라고 설명

### 왜 중요한가
- 영향: hyperscaler는 범용 GPU 조달만으로 AI 서비스 원가와 공급 안정성을 통제하기 어려워 custom silicon 비중 확대
- 병목: AI 데이터센터 설계는 accelerator, HBM/DRAM, SSD, optical interconnect, 전력·냉각 capacity를 하나의 throughput chain으로 관리 필요
- 리스크: custom chip은 workload fit과 compiler/runtime 성숙도가 낮으면 설비 투자 대비 활용률이 낮아질 가능성

### 시사점
- 팀 액션: AI 인프라 전략은 GPU 단가 비교와 함께 custom accelerator 적용 대상, 모델 serving runtime, 메모리·스토리지 I/O, 공급망 계약 리스크를 통합 평가 필요
- 발표 메모: Iris 양산 → 14GW capacity → 장기 부품 공급 계약 → AI 원가 구조 변화 순서로 설명 가능
