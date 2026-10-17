---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216360
title: OpenAI Chrome용 ChatGPT 확장의 열린 탭 분석·직접 제어 보도
ingested: 2026-10-18
published: 2026-10-17 15:40 KST
sha256: 0c8bd8ba6310350f4160f139ed79186af0a4f033e86b77b9117a04baff425ea4
tags: [ai, agent, browser, computer-use, devtools, cybersecurity, global]
---

# OpenAI Chrome용 ChatGPT 확장의 열린 탭 분석·직접 제어 보도

- AI타임스 보도: OpenAI가 10월 15일(현지 시각) X를 통해 Chrome용 공식 ChatGPT 확장 개선을 공개한 범위
- 기능: 열린 여러 탭의 내용을 질문 context로 활용하고, ChatGPT 데스크톱 앱의 `컴퓨터 사용`에서 Chrome 연결 후 Work 모드로 브라우저 작업 수행
- 기사 사례: 페이지 비교, 등록 양식 입력 후 제출 전 정지, 이메일 초안·메시지 전송, 파일 다운로드, 탭 정리·그룹화
- 경계: 계정·플랜·지역별 제공 범위, site별 permission, action approval·rollback·audit log, prompt injection·download 검사 동작은 기사에서 공개되지 않음

## 운영 경계

- 열린 탭의 session·개인정보·사내 문서·관리 콘솔은 agent의 read scope와 external write scope를 분리해 관리할 대상
- 업무용 profile 분리, domain allowlist, 최소 권한, action 직전 human approval, tool trace, download/DLP 검사, kill switch를 같은 release evidence로 검증 필요
- 이 보도만으로 모든 Chrome tab·웹사이트에 대한 무제한 자동화 또는 enterprise security control 충족을 확정하지 않음
