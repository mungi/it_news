---
source_url: https://blog.cloudflare.com/introducing-precursor/
title: Introducing Precursor: detecting agentic behavior with continuous client-side signals
ingested: 2026-07-13
published: 2026-07-13 22:00
sha256: 2d7e07fc2318128ff3b0e9e8ceed01374f68922bb917f9b92b749e63910a57ca
tags: [security, ai-agent, cloud, web, bot-management, weekly-briefing]
---

# Cloudflare Precursor: 세션 전체 행동 신호로 에이전트형 자동화를 판별

- Source: Cloudflare Blog
- URL: https://blog.cloudflare.com/introducing-precursor/
- Published KST: 2026-07-13 22:00
- Category: Security

## Korean briefing

- 핵심: Cloudflare가 Enterprise Bot Management용 `Precursor`를 공개하고, 동적으로 주입한 경량 JavaScript가 세션 전체의 pointer·keyboard·focus·visibility 신호를 수집해 자동화·에이전트 트래픽을 실시간 판별함
- 규모: Cloudflare는 네트워크에서 하루 1조 건 이상 요청과 웹의 20% 이상을 관측하며, Turnstile은 민감 endpoint에서 하루 약 30억 회 실행 중이라고 설명함
- 변화: 개별 CAPTCHA 통과 여부가 아니라 세션 단위 행동 일관성을 bot score·challenge 결정·security rule에 결합함
- 프라이버시: 키보드 입력 내용 대신 타이밍·리듬을 수집하고, 신호를 계정·로그인 ID·지속 프로필과 연결하지 않는다고 설명함
- 시사점: 로그인·가입·결제 외 일반 앱 경로에서도 AI 브라우저 자동화 abuse를 다루려면 세션 telemetry, CSP 검토, false positive 관측, 단계적 enforcement가 필요

## Detailed notes

### 무슨 일이 있었나
- 기능: `Precursor`가 HTML 응답에 동적·난독화된 경량 bundle을 주입하고 방문자 세션의 행동 신호를 연속 수집
- 대상: Cloudflare Enterprise Bot Management의 선택 기능이며 Turnstile을 보완하는 형태
- 배포: zone별 dashboard에서 활성화하고 background 관측 모드 또는 검증 세션 미존재 시 challenge 강제 모드 선택 가능
- 제공: GA 전까지 무료 사용 계획과 함께 2026년 하반기 GA 예정이라고 안내

### 본문 핵심 포인트
- 수집: pointer 이동, keyboard 활동, focus 변경, visibility 이벤트를 compact format으로 serialize하고 메모리에 buffer한 뒤 주기적으로 평가 계층으로 전송
- 평가: edge dispatcher의 evaluator가 pointer 활동과 페이지 visibility, text field focus와 keyboard 이벤트 같은 교차 조건을 검사하고 shared detection registry에 신호 등록
- 세션성: refresh나 새 challenge로 행동 서명을 초기화하기 어렵도록 신호를 site session 범위에 누적
- 연계: 결과를 bot score, challenge 결정, security rule, predicted-versus-actual completion, session delinquency 분석에 반영
- 분석: Security Analytics에 요청 단위가 아닌 visitor journey 기준 session view를 추가

### 왜 중요한가
- 위협 변화: bot이 JavaScript 실행, 실제 browser 환경, 단일 CAPTCHA 통과를 흉내 낼 수 있어 checkpoint 기반 방어만으로는 탐지 신호 부족
- 탐지 원리: 직선·일정 속도 mouse 이동, 비현실적인 click 정확도, focus 없는 keyboard 이벤트처럼 세션 전반에서 드러나는 자동화 패턴 활용
- 사용자 영향: 세션 맥락을 늘려 정상 사용자에 대한 과도한 challenge를 줄이고 자동화 운영 비용을 높이는 목적
- 개인정보 경계: 입력 키 자체가 아니라 timing·rhythm을 처리하고 고객 dashboard에 개별 행동 원시 데이터를 노출하지 않는다고 설명

### 시사점
- 팀 액션: Bot Management 도입 조직은 로그인·가입·결제뿐 아니라 agent가 접근하는 검색·예약·재고·가격 API 앞단의 세션별 abuse 지표를 분리 관측 필요
- 배포 순서: background 모드에서 bot score 변화, challenge rate, conversion, accessibility complaint를 기준선과 비교한 뒤 enforcement 확대 필요
- 웹 플랫폼 검토: HTML 변환·CSP·서드파티 script 정책·SPA route 전환이 주입 bundle 및 telemetry와 충돌하는지 staging에서 검증 필요
- 운영 지표: session 단위 false positive, challenge completion, suspicious-session 재발률, endpoint별 automation 비용을 WAF 대시보드와 SRE 지표에 함께 편입 필요
