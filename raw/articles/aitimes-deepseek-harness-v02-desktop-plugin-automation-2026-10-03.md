---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215933
title: DeepSeek Harness v0.2 desktop workspace·plugin·automation 운영 경계
ingested: 2026-10-03
published: 2026-10-03 13:58 KST
sha256: 96441b6e8ac8d3b35d44bdf88824d74c5e74deb9cede930f4cd64ede5cf6c457
tags: [ai, devtools, open-source, agent, cybersecurity, global]
---
## 원문 확인

- AI타임스 기사 제목: 딥시크, 슈퍼 앱 형태 데스크톱 앱 '딥시크 하네스' 출시..."챗·코딩·문서 통합"
- 기사 입력 시각: `article:published_time` `2026-10-03T13:58:48+09:00`, KST `2026-10-03 13:58`
- 원문 URL: https://www.aitimes.com/news/articleView.html?idxno=215933
- 직접 확인한 Open Graph 이미지: https://cdn.aitimes.com/news/photo/202610/215933_219898_1258.png
- 직접 확인한 공식 product page: https://deepseek.com/harness/

## GN⁺ 핵심 요약

- 공개: DeepSeek Harness v0.2 preview를 macOS와 Windows desktop app으로 공개, chat·coding·document 작업을 하나의 workspace로 결합
- 구조: official page가 global preview·open-source·Cordis 기반 `Everything is a plugin` architecture와 workspace modification을 표시
- 확장: plugin manager·creation mode·Automation Task가 plugin install·custom creation·반복 task의 실행 기록 확인 경로를 제공하는 범위
- 경계: plugin signing·isolation·registry trust·network default·credential retention·enterprise admin·SLA는 확인 source에서 미확정
- 팀 액션: isolated workspace에서 plugin origin·permission·file diff·command·egress·task disable·rollback을 검증한 뒤 repository scope 확대 필요

---

## 원문과 공식 페이지에서 확인한 범위

- AI타임스는 DeepSeek가 9월 29일 macOS·Windows용 Harness v0.2 preview를 공개했다고 보도
- chat·code·document/PDF/spreadsheet 작업, file preview, code-change review, local app open 기능을 설명
- 공식 page는 macOS Apple Silicon과 Windows 64-bit download, global preview, open-source Harness, Cordis 기반 architecture를 표시
- Linux package·plugin sandbox/signing·network/credential default·enterprise policy·retention·SLA는 직접 확인되지 않은 범위

## plugin·automation 운영 경계

- plugin manager는 package install·disable·delete·origin/description 확인을, creation mode는 대화 기반 plugin creation/configuration을 설명
- Automation Task는 반복 주기·instruction·execution record를 갖는 실험적 feature로 보도됨
- UI·tool·skill 확장이 local file write·command execution·network access와 결합할 조건을 사전 review로 다뤄야 하는 범위

## 팀 조치

- network-isolated test workspace와 synthetic secret에서 plugin install·generated plugin·terminal·background task의 file diff와 egress 검증
- registry allowlist, explicit permission, read-only default, task owner·expiry, rollback/disable, endpoint telemetry를 release gate로 고정
