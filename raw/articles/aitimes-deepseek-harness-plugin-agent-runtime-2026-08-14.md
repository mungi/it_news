---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213938
title: 딥시크 하네스 v0.1 공개와 플러그인형 coding-agent runtime 운영 경계
ingested: 2026-08-14
published: 2026-08-14 12:40 KST
tags: [ai, devtools, open-source, agent, cybersecurity, global]
sha256: 59fd87c14f1c0be4e76c61e45665d37c7ffca914baf3d6afe05d37d36f102a1a
---
## 원문 확인

- AI타임스 기사 제목: 딥시크, 오픈소스 에이전트 '하네스' 공개…'V4-프로'는 기대 이하 평가
- 기사 입력 시각: 2026-08-14 12:40 KST (`article:published_time` 2026-08-14T12:40:19+09:00)
- 원문 URL: https://www.aitimes.com/news/articleView.html?idxno=213938
- 직접 확인한 Open Graph 이미지: https://cdn.aitimes.com/news/photo/202608/213938_217529_128.png
- 기사에서 링크한 공식 저장소: https://github.com/deepseek-ai/deepseek-harness

## GN⁺ 핵심 요약

- 공개: DeepSeek Harness v0.1을 Cordis 기반 모델 중립 agent runtime으로 공개, developer preview·MIT license 조건
- 구조: model·tool·skill·session·sandbox·filesystem·agent loop·orchestration·UI를 plugin으로 교체·조합하는 설계
- 기능: repository analysis·file edit·shell·search·planning·subagent·workflow·sensitive-action approval을 제공한다는 보도
- 경계: preview의 breaking change 가능성과 public GitHub repository 상태 확인, plugin isolation·signing·egress default·SLA는 직접 확인되지 않은 범위
- 팀 액션: allowlist·least privilege·test credential·egress audit·rollback을 포함한 isolated canary부터 적용 필요

---

## 원문과 공식 저장소에서 확인한 범위

- AI타임스는 DeepSeek가 13일 현지시간 Harness v0.1과 V4-Pro를 함께 공개했다고 보도
- 기사 링크를 통해 `deepseek-ai/deepseek-harness` public repository를 직접 확인
- GitHub 화면은 public repository, master branch, 0 tags와 변동 가능한 star·fork 수를 표시
- 기사 설명의 MIT license·developer preview·breaking change 가능성을 기록

## 기술 구성

- plugin 대상으로 model·tool·skill·session·sandbox·filesystem·execution loop·orchestration·UI를 열거
- 표준 모드 기능으로 file edit·shell·search·planning·subagent·workflow와 approval policy를 기사 범위에서 기록
- 구성요소의 교체 가능성은 runtime policy와 audit contract도 조립 대상이 되는 운영 경계

## 증거 경계와 운영 조치

- model benchmark·가격·star·fork는 Harness production safety·SLO·장기 채택의 보증이 아님
- sandbox isolation, plugin signing/provenance, egress default, credential retention, multi-tenant support, SLA는 직접 확인되지 않은 항목
- network-isolated repository와 synthetic secret으로 tool permission·file diff·egress·approval·rollback을 검증할 필요
