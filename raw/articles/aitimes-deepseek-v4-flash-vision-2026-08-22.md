---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214238
title: DeepSeek-V4-Flash-Vision-Exp 멀티모달 에이전트 공개 보도
ingested: 2026-08-22
published: 2026-08-22 10:08
tags: [ai, multimodal, agent, inference, finops, global]
sha256: 72f0dee015bfb61757c3a1996012f593447b5c879b9ec9741118a44d43add5a9
---

## 출처 확인

- 원문: https://www.aitimes.com/news/articleView.html?idxno=214238
- 제목: 딥시크, 멀티모달 에이전트 'V4-플래시-비전' 공개...'오퍼스 4.8'에 도전
- 직접 확인 시각: 2026-08-22 22:33 KST
- 기사 `article:published_time`: 2026-08-22T10:08:55+09:00
- 기사 Open Graph image: https://cdn.aitimes.com/news/photo/202608/214238_217908_254.jpg

## GN⁺ 브리핑

- 공개: DeepSeek API platform의 `DeepSeek-V4-Flash-Vision-Exp` 실험 출시 보도
- 구조: 2,840억 parameter MoE, token당 130억 활성화·100만 token context라는 기사 수치
- 비용: image 1장 최대 384 token, off-peak input/output 0.22/0.66달러 per 1M token이라는 기사 수치
- 호환: OpenAI Chat Completions·Anthropic Messages·Responses API, Harness 0.1.1·Files API 기사 설명
- 경계: vendor 자체 Harness Minimal Mode benchmark이며 공식 model card·endpoint·retention·SLA·독립 재현 미확인

---

## 검증 경계

- ApexBench 36.5, Agents’ Last Exam 27.3, ZeroBench 35.0은 DeepSeek Harness Minimal Mode의 자체 평가 결과
- 실험 model identifier는 developer feedback에 따라 변경될 수 있다는 기사 설명
- image tokenization·cache·tool loop·latency·rate limit·지역·가격 조건은 workload별 canary 필요
- Files API의 object retention·deletion·access control·audit, public URL fetch의 egress 정책은 직접 확인하지 못함
