---
source_url: https://thehackernews.com/2026/07/grok-build-uploads-entire-git.html
title: Grok Build Uploaded Entire Git Repositories to xAI Storage, Not Just Files It Read
ingested: 2026-07-14
published: 2026-07-14 18:02 KST
sha256: edaad5bb5129dd421d4eee363cd9f131b555dddbd96e2c0ff2af2b3da9d3e88b
tags: [ai, devtools, cybersecurity, privacy, source-code]
---

# Grok Build의 저장소 전체 업로드 정황

- cereblab의 네트워크 관찰을 인용한 The Hacker News 보도: Grok Build 0.2.93이 작업에 필요하지 않은 tracked 파일과 전체 Git 이력을 xAI 관리 storage 채널로 보낸 정황
- 12GB 저장소 시험에서 모델 요청 약 192KB와 별도 storage 전송 5.10GiB가 관찰됐으며, 이는 전송·수락·저장을 뒷받침하되 학습·사람 열람을 입증하지는 않음
- `Improve the model` opt-out은 trace upload 설정과 별개로 관찰됐고, 7월 13일 서버 설정에서 codebase upload 비활성화 응답이 확인됐으나 전체 적용·영구성은 공식 공지로 확인되지 않음

## 운영 확인 항목

- coding agent별 파일 선택 범위, Git history 포함 여부, trace endpoint, 보존·삭제 정책을 별도 egress inventory로 관리 필요
- canary secret가 든 sandbox repository로 네트워크 전송·DLP·server-side deletion을 검증한 뒤 production 저장소 접근 허용 필요
