---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214166
title: 세레브라스 CS-4 wafer-scale 추론 시스템의 benchmark·전력·fabric 검증 경계
ingested: 2026-08-21
published: 2026-08-20 17:43 KST
tags: [ai, ai-chip, inference, infra, networking, finops, global, weekly-briefing]
sha256: 54b2a54d290ced4346846607493460422e52bd15a8521adbffc40279ecbb0615
---

## 번역 제목

세레브라스 CS-4 공개: WSE-3 Turbo 3개·RoCE v2 기반 추론 시스템의 성능·전력 주장 검증

- AI타임스가 WSE-3 Turbo 웨이퍼 스케일 프로세서 3개를 결합한 CS-4를 보도
- 최대 30배 GPU 대비 추론, 10조 파라미터 이상 모델 1,000 token/s, CS-3 대비 와트당 처리량 최대 10배는 vendor가 제시한 수치
- 약 2μs wafer 간 통신·2배 I/O·RoCE v2·직접 액체 냉각을 기사에서 설명
- 3분기 초기 공급과 2027년 말 600MW 목표는 roadmap 범위
- benchmark 조건·가격·rack power·냉각·software compatibility·SLA는 미확인

---

## 확인한 원문 사실

- AI타임스 canonical URL·headline·본문·`article:published_time` `2026-08-20T17:43:14+09:00`·Open Graph image 직접 확인
- 기사에서 세레브라스가 19일 현지시간 CS-4를 공개했다고 설명
- WSE-3 Turbo는 TSMC 5nm 공정 기반이며 시스템당 3개 사용이라는 기사 설명

## 아키텍처와 연결

- wafer 간 통신 지연 약 2μs, I/O 대역폭 기존 대비 2배라는 기사 설명
- 표준 `RoCE v2` 기반 network와 Cerebras 시스템 직접 연결을 지원한다는 기사 설명
- 전력 변환·직접 액체 냉각·고속 I/O·제어 전자장치를 wafer-scale backpack에 통합했다는 기사 설명

## 성능·공급 증거 경계

- 상용 GPU 대비 최대 30배, 10조 파라미터 이상 모델 1,000 token/s 이상, CS-3 대비 watt당 처리량 최대 10배는 vendor benchmark/claim 범위
- model·precision·batch·concurrency·GPU SKU·cluster 규모·전력/냉각 조건·가격·가용성·software stack은 기사에서 미확인
- 3분기 초기 공급 및 2027년 말 600MW 목표를 실제 계약 용량·SLO·국내 공급 보증으로 확대하지 않음
