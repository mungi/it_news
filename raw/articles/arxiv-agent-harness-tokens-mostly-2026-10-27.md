---
source_url: https://arxiv.org/abs/2610.04433
title: What Does a Harness Buy? Tokens, Mostly
ingested: 2026-10-27
published: 2026-10-27 18:20 KST
sha256: 1db60821e36f821d1956bb96e68b7cf322983db71402c1fe77be09582ffb7bb2
tags: [ai, agent, devtools, inference, finops, research, global]
---

# What Does a Harness Buy? Tokens, Mostly

arXiv v1 원문과 AI타임스의 2026-10-27 18:20 KST 보도를 교차 확인함. 연구는 `Claude Code`·`mini-SWE-agent`·`OpenCode` 세 coding-agent harness와 다섯 모델을 SWE-bench Verified에서 비교함. 447개 과제의 두 모델 실험에서 가장 무거운 Claude Code와 가장 가벼운 mini-SWE-agent의 점수는 5 points 이내였고, 45개 고난도 과제에서는 harness 교체와 같은 harness 재실행이 각각 13%의 성공/실패 전환을 보였음. OpenCode는 큰 pool에서 최대 9 points 낮았으며 한 모델의 gap 절반은 output cap 중단과 연결됨. 같은 모델·과제·가격표에서 과제당 비용은 harness에 따라 최대 3배 차이였고, 반복 전송되는 system prompt·tool schema preamble과 step 수가 비용 차이를 키우는 요인으로 제시됨. 연구 결과를 모든 모델·online agent·production SLA의 일반 보장으로 확대하지 않으며, 조직별 실제 task·tool·retry·cache·human review 조건의 반복 실험이 필요함.
