---
source_url: https://blog.cloudflare.com/clef-faster-cheaper-multimodal/
title: Introducing Clef-omni with full multimodality, plus a faster Clef and a cheaper Clef-flash
created: 2026-10-10
ingested: 2026-10-10
published: 2026-10-10 03:27 KST
sha256: 442c6474b8a0c87f9d07cde37a983585ef8ed13d24982dd5ea01fe72ece35402
tags: [ai, multimodal, open-source, cloud, devtools, global]
---
# Cloudflare Clef-omni 멀티모달 decision model

- Cloudflare 공식 원문 `article:published_time`: `2026-10-09T18:27:34.129Z`, KST `2026-10-10 03:27`
- 제공: text·image·audio·video를 한 request에서 처리하는 Clef-omni open-weight decision model과 Workers AI API 경로
- 입력: `wav`·`mp3` audio, `mp4`·`webm` video, image·text를 `state`·`questions`와 함께 전달하는 원문 예시
- 구조: Qwen3-Omni-30B-A3B-Instruct MoE comprehension backbone 기반, text-to-speech output component 제외, complete payload prefill과 valid parameter option score라는 Cloudflare 설명
- 학습: frozen backbone·LoRA·label-smoothed cross-entropy·Brier score calibration이라는 원문 공개 범위
- 경계: task accuracy·latency·throughput·가격·리전·quota·media retention·schema별 calibration은 원문이 일반 보장하지 않음
- 팀 액션: 기존 cascade와 precision/recall·p95·payload cost를 같은 trace ID로 비교하고 low-confidence·corrupt media·schema failure를 human review/fallback queue로 분기 필요
