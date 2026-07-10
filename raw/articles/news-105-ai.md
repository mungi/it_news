---
source_url: https://www.aitimes.com/news/articleView.html?idxno=212644
title: 앤트로픽은 막았는데…오픈AI·구글, '블랙리스트' 중국 기업에 모델 우회 허용
ingested: 2026-07-10
published: 2026-07-10 16:47
sha256: 98b4543f818ae69bf5fa811faeab0fd6164d60bd6db2082e5301f0cf2d1e983c
tags: [ai-governance, export-control, openai, google, anthropic]
---

# OpenAI·Google, 해외 자회사 경로로 블랙리스트 중국 기업 AI 모델 접근 허용 논란

- 원제: 앤트로픽은 막았는데…오픈AI·구글, '블랙리스트' 중국 기업에 모델 우회 허용
- 출처: AI Times
- URL: https://www.aitimes.com/news/articleView.html?idxno=212644
- 발행: 2026-07-10 16:47 KST
- 분류: Security / Global / high

## 요약
- 핵심: FT 보도 기반으로 OpenAI와 Google이 알리바바·바이두·텐센트의 싱가포르 자회사에 AI 모델 API를 제공해 온 것으로 알려짐. 차이: Anthropic은 중국 기업과 중국 소유 외국 법인의 Claude 사용을 원천 금지해 공급자별 정책 격차 확인.
- 시사점: AI API 제공사와 기업 보안팀은 고객 법인 ownership, 해외 자회사, 대량 계정 생성, distillation pattern, 모델별 access tier를 감사 가능한 정책으로 관리 필요.

## 상세 내용
### 무슨 일이 있었나
- 핵심: FT 보도 인용 기사에서 OpenAI와 Google이 블랙리스트 중국 대기업의 싱가포르 자회사에 모델 서비스를 제공해 온 정황 공개
- 대상: 알리바바, 바이두, 텐센트 본사는 미국 국방부 1260H 블랙리스트 기업으로 언급
- 규정: 중국 본사 또는 군부 연관 의혹 기업이라도 해외 자회사 AI 사용을 전면 금지하는 규정은 부재
- 대비: Anthropic은 중국 기업 및 중국 소유 외국 법인의 Claude 사용을 원천 금지하는 정책 운영

### 본문 핵심 포인트
- OpenAI: 중국 내 모델 접근은 허용하지 않지만 안전장치와 증류 감시가 가능한 국가에서 일부 중국 소유 기업 사용 허용 입장
- Google: 홍콩·싱가포르 AI 서비스 이용 가능, 증류 금지 등 사용 정책 준수 요구 입장
- Anthropic: 알리바바가 2만5000개 가짜 계정과 2880만건 이상 대화로 Claude 데이터 추출을 시도했다고 의회 서한에서 주장
- 전문가 지적: 최첨단 AI 모델은 중국 본사 기업에 전 세계 어디에서도 제공되지 않아야 한다는 수출통제 강화 주장 제기

### 왜 중요한가
- 영향: 지역 기반 차단은 해외 자회사, 계정 재판매, 프록시, 파트너 계약 경로를 충분히 막기 어려움
- 운영 리스크: distillation abuse는 정상 API traffic과 섞여 나타나므로 사용량·프롬프트 분포·계정 군집 이상 탐지 필요
- 정책 리스크: 모델 제공사는 고객 법인 실사와 제품 access tier 정책을 기술 통제와 계약 통제로 동시에 운영 필요

### 시사점
- 팀 액션: AI API gateway는 customer ownership, jurisdiction, high-risk model access, batch query anomaly, synthetic account cluster를 risk signal로 수집 필요
- 발표 메모: 블랙리스트 우회 경로 → 공급자별 정책 차이 → 계정·증류 탐지 운영 과제 순서로 설명 가능
