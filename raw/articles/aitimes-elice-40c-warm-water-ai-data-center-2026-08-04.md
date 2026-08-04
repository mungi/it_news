---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213501
title: "엘리스그룹, 국내 최초 40도 온수 냉각 'AI 데이터센터' 구축한다"
ingested: 2026-08-04
published: 2026-08-04 13:31 KST
sha256: d799c77b5ff317be67d112cdfa7fcf769cda9be512cc461c56169ce94e547f71
tags: [ai, infra, ai-chip, cloud, finops, korea, product]
---

# 엘리스그룹 40도 온수 냉각 AI 데이터센터 보도

- AI타임스 기사 제목·입력 시각 `2026-08-04 13:31 KST`와 `article:published_time` `2026-08-04T13:31:09+09:00` 확인
- 과기정통부·NIPA의 AI 컴퓨팅 자원 활용 기반 강화 사업 참여 기업 선정 보도
- NVIDIA B300 GPU **2,560장**을 4개 PMDC 동에 동별 640장씩 구축한다는 기사 설명
- 40도 이상 온수 액체 냉각과 외기 냉각, 폐쇄형 순환을 적용하고 PUE 1.1 유지를 목표로 한다는 기업 발표 범위

---

## 구축 범위

- B300 GPU 2,560장을 4개 모듈형 AI 데이터센터(PMDC)에 분산 배치한다는 기사 설명
- 고하중·고단열 모듈러 컨테이너와 냉각 배관 분리 설계로 장비 하중·누수 위험에 대응한다는 기업 설명
- GPU·클러스터·냉각·네트워크·전력 효율 최적화 계획은 발표 계획이며 실제 가동 성능은 미확정

## 냉각·용수 설계

- 40도 이상의 온수 액체 냉각과 외기 냉각을 적용한다는 보도
- 높은 냉각수 온도로 냉동기 가동을 줄여 전력 소비 절감을 목표로 한 설명
- 폐쇄형 순환으로 냉각수를 증발 없이 재순환해 용수 사용량 절감을 목표로 한 설명

## 수치와 증거 경계

- PUE 1.1은 운영 실측이 아닌 기업의 유지 목표
- 실제 IT load, 외기 조건, 랙 밀도, 냉각수 온도, 급수·전력·네트워크 이중화, 가동 일정, 고객 workload와 SLA는 기사에서 확인되지 않음
- 국내 최초 여부와 Rubin 방식 연계는 기업·기사 서술 범위이며 독립 비교 자료는 미확인

## 운영 해석

- AI 데이터센터 평가는 GPU 장수보다 facility PUE·WUE, rack-level thermal headroom, power train redundancy, maintenance window, workload utilization을 함께 계측할 운영 과제
- 온수 냉각 도입 전 B300/rack density별 inlet·outlet temperature, leak detection, water treatment, failover, emergency shutdown을 commissioning acceptance criteria로 정의 필요
- PUE 목표와 실제 운영값, 계절별 load, cooling energy, water consumption, availability를 월별 evidence로 분리 공개·검증 필요
