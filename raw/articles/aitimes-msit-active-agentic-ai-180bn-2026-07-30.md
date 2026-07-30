---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213357
title: 과기부, '능동형 에이전틱 AI' 개발에 180억원 투입
ingested: 2026-07-30
published: 2026-07-30 16:17 KST
sha256: 3d2b133aee7c7383afe11fa800a306ffd294de4f47642b9667e329c63d013850
tags: [ai, agent, korea, policy]
---

# 과기부, '능동형 에이전틱 AI' 개발에 180억원 투입

- 발행 시각: 2026-07-30 16:17 KST (`article:published_time` 2026-07-30T16:17:42+09:00)
- 원문 이미지: `og:image` https://cdn.aitimes.com/news/photo/202607/213357_216804_1531.jpeg

## 확인된 사실

- 과학기술정보통신부와 정보통신기획평가원이 ‘실세계 능동 행동형 에이전틱 AI 기술 개발 사업’ 착수보고회를 개최했다는 AI타임스 보도
- NC AI·메디컬파크·심심이·브이이엔지를 주관기관으로 총 26개 산학연 연구기관 참여
- 의료 검사와 기업 업무 등 현실 작업 수행을 목표로 하며, 사람 개입을 10% 이하로 줄인 제품·서비스 개발 목표
- 환경 상호작용, tool 생성·활용, 단계별 계획, 장기 기억, 맥락 이해, multi-agent 협업 기술 적용 예정
- 2026년부터 1년 6개월간 총 180억원 투입, 2027년 말 단계평가로 1개 과제 선정 뒤 1년 추가 지원 계획
- 최종 결과물 목표는 TRL 7의 실제 작동 가능 시제품
- 세부 과제는 에이전틱 AI 유방 초음파, 디지털 업무 동료, AI 컴패니언, MCP 기반 물리해석 자동화 multi-agent simulator로 열거

## 증거 경계

- 사업비·기간·참여기관·목표 TRL·세부 과제는 AI타임스 기사 본문 기준
- 각 과제의 모델, 데이터, MCP server 권한, 안전성 평가, 개인정보 처리, benchmark, service SLA, 상용 배포 일정은 원문에서 확인 불가
- 기존 2026-07-23 에이전틱 AI 이니셔티브 정책 발표와 동일한 정책 축의 후속 착수이므로 별도 카드가 아닌 기존 카드의 source enrichment 및 material update로 처리

## 엔지니어링 확인 항목

- 사람 개입 10% 이하 목표를 업무별 승인율·자동 실행률·중단율·rollback 성공률로 분해 필요
- tool 생성·MCP 연동은 identity, scoped credential, allowlist, input/output egress, trace retention을 acceptance criteria로 설정 필요
- TRL 7 시제품을 production SLA·privacy compliance·incident response 충족으로 오인하지 않는 운영 경계 필요
