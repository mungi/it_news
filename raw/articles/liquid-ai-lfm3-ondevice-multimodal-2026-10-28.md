---
source_url: https://www.aitimes.com/news/articleView.html?idxno=216761
title: 리퀴드 AI, 온디바이스 AI 모델 'LFM3' 공개...브라우저·음성·이미지 처리 지원
ingested: 2026-10-28
published: 2026-10-28 17:55
sha256: 8f3935aa13c31fc3c0c4026d2baea18240a24701f78ee0f2e00a322c027604a6
tags: [ai, inference, multimodal, agent, open-source, global, release]
---

# Liquid AI LFM3: 2B급 open-weight 멀티모달·의사결정 모델군

- 확인 시각: 2026-10-28 18:14 KST
- 보도 원문: https://www.aitimes.com/news/articleView.html?idxno=216761
- primary 발표: https://www.liquid.ai/blog/lfm3
- 발행: AI타임스 canonical `article:published_time` `2026-10-28T17:55:23+09:00` → 2026-10-28 17:55 KST
- 공식 발표: Liquid AI JSON-LD `datePublished` `2026-10-27` 확인, 시각 미공개

## 확인한 사실
- Liquid AI가 LFM3 text·vision·audio·omni·decision 6종을 open-weight model family로 공개
- `LFM3-1.7B`·`LFM3-VL-2B`·`LFM3-Audio-2B`·`LFM3-Omni-2B`·`d1-2B`·`d1-Omni-2B` 구성, 약 17억~22억 parameters 범위라는 보도
- 공식 발표가 model weight의 fine-tuning과 device·private server·cloud 배포 경로를 제시
- AI타임스 보도 기준 text 모델의 최대 256K context, 128K context KV cache 1.6GB라는 vendor 측정 수치
- AI타임스 보도 기준 WebArena-Verified·AutomationBench 비교와 18개 언어 음성 처리·최소 50ms first-token latency는 vendor-reported 평가·측정 범위
- 풍력 터빈 blade image 약 3,000장 fine-tuning 뒤 약 1,400장 평가에서 defect classification accuracy가 10% 미만에서 67%로 증가했다는 vendor 사례, detection F1 0.11 기록

## 운영 경계
- benchmark·throughput·KV cache 수치를 target device의 battery·thermal·memory·network·tail latency·agent task success 보장으로 확대하지 않음
- local model이라도 browser·OS·SaaS tool 권한, telemetry, model update, user input의 data path와 audit control은 별도 설계 필요
- industrial fine-tuning 사례의 classification result와 low detection F1을 현장 detection reliability·safety approval로 확대하지 않음
