---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213986
title: ChatGPT Mac Computer History local memory·endpoint 보안 경계
ingested: 2026-08-16
published: 2026-08-15 16:23
tags: [ai, enterprise-ai, cybersecurity, privacy, devtools, global]
sha256: d86a1f26dc6d06421191b290ffb4a34709233aea9dad96f2588ff49a1e7fabab
---
## 원문 메타데이터

- 제목: 오픈AI, 맥용 챗GPT '컴퓨터 히스토리' 출시...앱·웹 활동 기억한다
- 출처: AI타임스
- URL: https://www.aitimes.com/news/articleView.html?idxno=213986
- 기사 발행 시각: 2026-08-15 16:23 KST (`article:published_time` 2026-08-15T16:23:29+09:00)
- Open Graph image: https://cdn.aitimes.com/news/photo/202608/213986_217594_053.jpg

## 직접 확인한 본문 사실

- AI타임스는 OpenAI가 Mac용 ChatGPT에 Computer History를 도입했다고 보도
- 기사 설명: Chronicle의 screenshot 기반 맥락 파악과 달리 macOS accessibility system의 클릭·키 입력·shortcut·app switch interaction event를 기록
- 기사 설명: screenshot·screen recording·microphone·system audio·private browsing activity는 수집하지 않음
- 기사 설명: event를 주기적으로 text summary로 변환해 Mac에 Markdown local memory file 생성
- Business·Enterprise workspace는 admin 허용 후에도 user별 opt-in이 필요하며, memory 기능도 켜져 있어야 함
- 기사 설명: temporary event file은 app group 내부에 저장돼 48시간 뒤 삭제되고, generated memory file은 user가 삭제할 때까지 local filesystem에 plain Markdown으로 남음
- 기사 설명: Mac app의 Pro·Business·Enterprise 대상 제공, EEA·영국·스위스와 Windows app은 기사 시점에서 미제공 또는 제한 상태

## 증거 경계와 운영 메모

- 직접 확인한 출처는 AI타임스 기사이며 OpenAI 공식 문서, admin console, data-processing agreement, encryption·DLP·backup·search-indexing artifact는 이번 capture에서 직접 확인하지 않음
- 화면 미수집은 local metadata·summary·subsequent ChatGPT conversation context의 exposure 부재를 보장하지 않음
- 기사도 website·app content를 context로 활용할 때 prompt injection 위험을 언급하며 sensitive app의 pause 또는 exclusion을 권장
- 운영 action: managed Mac canary에서 local memory path·ACL·MDM backup·EDR collection·excluded-app policy·deletion·tool approval·offboarding purge를 직접 검증 필요
