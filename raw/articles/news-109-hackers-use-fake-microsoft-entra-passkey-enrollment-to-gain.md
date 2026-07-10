---
source_url: https://thehackernews.com/2026/07/hackers-use-fake-microsoft-entra.html
title: Hackers Use Fake Microsoft Entra Passkey Enrollment to Gain Microsoft 365 Access
ingested: 2026-07-10
published: 2026-07-10 19:30
tags: [microsoft-entra, passkey, microsoft-365, vishing, identity-security]
sha256: 8bc689b10c4e81a0ea0996d38a246a57bab28d7dbf67db992a7aaee5fd4b6f5f
---

# Microsoft Entra passkey 등록 피싱, 공격자 소유 패스키로 Microsoft 365 접근 확보

원문: https://thehackernews.com/2026/07/hackers-use-fake-microsoft-entra.html
출처: The Hacker News
게시: 2026-07-10 19:30 KST

## 요약
핵심: 공격자는 passkey 단어가 포함된 도메인과 Microsoft 등록 화면을 닮은 피싱 키트를 사용
범위: 식음료, 기술, 의료, 자동차, 건설, 항공 등 여러 산업 대상
영향: 피싱 저항성을 높이려는 passkey 전환 과정 자체가 사용자 교육·등록 캠페인과 충돌 가능
시사점: passkey rollout은 등록 캠페인, helpdesk verification, 신규 credential 감사 로그, 위험 기반 승인 흐름을 함께 설계 필요

## 상세 내용
### 무슨 일이 있었나
- 핵심: Okta가 O-UNC-066으로 추적하는 threat actor가 Microsoft 365 사용자를 대상으로 가짜 Entra passkey 등록 캠페인 수행 확인
- 공격 방식: 공격자가 passkey 단어가 포함된 도메인을 등록하고 음성 기반 보안 요청으로 사용자를 피싱 사이트에 유도
- 피싱 키트: Microsoft passkey 등록 절차와 유사한 화면을 제공해 사용자가 Microsoft에 passkey를 추가한다고 오인하도록 구성
- 결과: 실제로는 공격자 소유 passkey가 피해자 Microsoft 계정에 등록되어 무단 접근 권한 확보 가능

### 본문 핵심 포인트
- 대상 산업: 식음료, 기술, 의료, 자동차, 건설, 항공 등 다수 업종 피해 대상
- 차이점: 기존 AiTM 피싱처럼 비밀번호·MFA 토큰 탈취가 아니라 신규 passkey 등록 과정을 악용
- 배경: Microsoft가 조직의 passkey adoption을 높이기 위해 sign-in 중 등록 캠페인을 제공하는 흐름과 사회공학 유인이 겹침
- 후속 위험: 계정 접근 후 데이터 탈취와 extortion 활동으로 이어질 수 있는 계정 장악 경로

### 왜 중요한가
- 영향: 피싱 저항 인증도 등록·복구·helpdesk 절차가 약하면 공격자 credential enrollment로 전환 가능
- 운영 리스크: 사용자는 보안 강화 안내와 공격자 음성 요청을 구분하기 어렵고, 조직 캠페인 시기에는 오탐·혼선 증가 가능
- 검토 대상: Entra ID, Microsoft 365, Okta, helpdesk, IAM governance, SIEM 탐지 규칙 전반

### 시사점
- 팀 액션: 신규 passkey 등록 이벤트, 등록 장치 fingerprint, 위치·ASN 변화, helpdesk ticket, 관리자 승인 로그를 하나의 탐지 시나리오로 묶을 필요
- 정책: 고권한 계정은 passkey 등록 전 별도 채널 확인, phishing-resistant MFA 재등록 제한, break-glass 계정 예외 검토 필요
- 발표 메모: 인증 기술 자체보다 credential lifecycle 통제가 공격면을 결정하는 사례로 설명

