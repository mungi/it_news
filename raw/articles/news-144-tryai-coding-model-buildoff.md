---
source_url: https://www.tryai.dev/blog/gpt-5.6-build-off-12-models
title: I built the same app with GPT-5.6, Grok 4.5, Claude, Muse Spark, and more
ingested: 2026-07-12
published: 2026-07-12 09:42
tags: [ai, devtools, evaluation, weekly-briefing]
sha256: ca46084767e41d3d3f95e02f51d1e82a9ebde6117310e675ac090101356de827
---

## 핵심 요약
- tryai.dev는 12개 모델에 레이캐스터, 3D 루빅스 큐브, 계산기, Game of Life를 만들게 하고 과제별 5회 성공률·비용·시간·산출물을 공개함.
- GPT-5.6 Sol은 레이캐스터에서 5/5, Claude Fable 5는 3D 루빅스 큐브에서 5/5를 기록해 복잡 과제의 선두를 나눠 가짐.
- Qwen 3.7 Plus와 GLM-5.2는 Game of Life처럼 예제 코드가 풍부한 단순 과제에서 낮은 비용으로 좋은 결과를 냄.
- 작성자는 과학적 벤치마크가 아니라 주관적 build-off임을 명시했으며, 실제 엔터프라이즈 평가에는 기존 코드베이스·테스트·리뷰 비용 포함 필요.

## 운영 메모
- 모델 라우팅은 작업군별 pass rate, cost per accepted PR, review time, diff size, retry count를 함께 봐야 함.
- 원샷 앱 생성 비교는 내부 eval harness의 보조 자료로 쓰고, production workflow 평가는 별도 설계 필요.
