---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213408
title: Microsoft Copilot 보도: 악성 문서·sandbox 경로의 기업 데이터 유출 가능성
ingested: 2026-08-01
published: 2026-07-31 17:26
sha256: fc4e691f120bc2514dcb6fb31716acecfb7876f0333821440058811f380d715c
tags: [ai, cybersecurity, enterprise-ai, korea, weekly-briefing]
---

# Microsoft 365 Copilot 보안 취약점 보도

- 원문: AI타임스는 The Information 보도를 인용해 Microsoft 365 Copilot에서 기업 이메일·문서·클라우드 파일 외부 전송 가능성이 있는 복수 취약점이 발견됐다고 보도함
- 발행: 페이지 `article:published_time` `2026-07-31T17:26:29+09:00` 확인
- 첫 경로: Rubrik이 2026년 4월 보고한 악성 Word 문서 업로드·명령 실행 가능 경로이며, Microsoft는 수정했다고 기사에서 설명
- 두 번째 경로: 다른 보안업체가 발견했으나 구체적 내용과 patch 여부가 공개되지 않은 상태
- 증거 경계: 실제 악용, CVE, 피해 tenant, IoC, sandbox 내부 logging 범위는 기사에서 확인하지 못함

## 보도된 경로

- 사용자가 악성 코드 삽입 Word 문서를 Copilot에 업로드하도록 유도되는 social-engineering 전제
- 문서 분석 중 명령 실행과 sandbox internet access가 결합하면 내부 email·document·cloud file의 external transfer 가능성이라는 기사 설명
- sandbox가 AI 생성 코드의 외부 인터넷 격리 시험 환경으로 설계됐으나 결함이 egress path를 열 수 있었다는 연구진 설명

## 운영 확인 항목

- Copilot upload source, accessible data, connector/tool permission, external egress policy inventory
- Purview/DLP, proxy/DNS, data read event를 incident 단위로 correlation 가능한지 test
- Microsoft support에 patch scope, tenant impact, sandbox telemetry coverage, evidence retention 확인 요청
