---
source_url: https://www.mixfont.com/ghost-font
title: Ghost Font
ingested: 2026-07-12
published: 2026-07-12 09:44
tags: [ai, security, multimodal, weekly-briefing]
sha256: c1fdd997d082fd575eaba1a999fb6b2ed01362a92e429b418c0abd2a29d4c4db
---

## 핵심 요약
- Ghost Font는 정적 글꼴이 아니라 점들의 시간축 움직임으로 사람에게만 읽히는 메시지를 만들려는 영상 기반 실험임.
- 단일 프레임·스크린샷에는 잡음과 미끼 문구만 남기며, Claude Fable·GPT Sol 5.6 Ultra·ChatGPT 5.5 Pro가 프롬프트 없이 어려움을 겪었다는 사례 포함.
- 로컬 코드 실행 에이전트나 optical flow·프레임 차분·OCR 조합으로 복원 가능하므로 실제 비밀 보호에는 암호화가 필요함.
- CAPTCHA·AI 시각 지각 벤치마크 후보지만 사람 가독성과 접근성, 비디오 네이티브 모델 대응이 제약임.

## 운영 메모
- CAPTCHA 또는 anti-scraping 통제로 쓰기 전 시간축 평균화, optical flow, 프레임 차분, OCR 우회 테스트 필요.
- 모델 업데이트마다 동일 영상 세트를 다시 돌리는 regression eval이 필요함.
