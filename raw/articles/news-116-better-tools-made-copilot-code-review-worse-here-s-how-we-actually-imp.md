---
source_url: https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/
title: Better tools made Copilot code review worse. Here’s how we actually improved it.
ingested: 2026-07-11
published: 2026-07-11 00:57
sha256: 4205b2f8d2349338796078b8887e5dd4eb12eb557b91fed9d7af92a04c68f32c
tags: [ai, cloud, infra, weekly-briefing]
---

# GitHub, Copilot 코드 리뷰 도구 교체 후 비용 증가·탐지 감소를 workflow 재설계로 반전

- Source: GitHub Blog
- URL: https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/
- Published KST: 2026-07-11 00:57
- Category: DevTools

## Korean briefing
핵심: GitHub가 Copilot code review를 grep·glob·view 공유 도구로 옮긴 뒤 초기 benchmark에서 비용 증가와 유용 comment 감소를 확인, PR diff 중심 지시 재작성 후 평균 review cost 약 20% 절감

핵심: 좋은 도구를 붙여도 agent workflow가 task에 맞지 않으면 성능·비용이 악화
변화: broad repository exploration 대신 diff에서 시작해 grep/glob로 좁히고 view로 정확한 evidence만 읽는 리뷰 지시로 전환
영향: agent tool result는 context window에 남는 token 비용이므로 최소 근거 수집 설계가 필요
시사점: 코드 리뷰 agent는 tool swap보다 trace 기반 prompt·workflow tuning이 먼저 필요

## Detailed notes
### 무슨 일이 있었나
- 핵심: GitHub가 Copilot code review의 자체 code exploration tool을 Copilot CLI 계열 공유 도구 `grep`, `glob`, `view`로 교체 실험
- 초기 결과: 더 잘 유지되는 공유 도구로 바꿨지만 offline benchmark에서 평균 비용 증가와 유용 comment 감소 확인
- 원인: 도구 자체가 아니라 지시문이 일반 coding assistant식 repository 탐색을 유도한 점으로 분석
- 개선: PR diff에서 시작해 필요한 근거만 좁혀 읽는 code review 전용 workflow로 지시 재작성

### 본문 핵심 포인트
- 도구 매핑: 기존 `list_dir`, `search_file/search_dir`, `read_code`를 공유 `glob`, `grep`, `view`로 대응
- 문제 행동: agent가 repository 전체를 이해하려는 것처럼 넓게 검색하고, 추측 path를 열고, 관련 없는 context를 계속 carry-forward
- 비용 구조: tool result는 disposable output이 아니라 context window에 남는 token이므로 불필요한 파일 내용이 후속 reasoning 비용으로 누적
- 수정 지침: diff에서 시작, `grep`·`glob`로 후보 축소, `view`로 정확한 evidence 확인, 실패 시 단순 검색어 재시도와 path 추측 금지
- 결과: workflow 재설계 후 같은 review quality를 유지하면서 평균 review cost 약 **20%** 절감

### 왜 중요한가
- 제품 영향: AI code review는 정확도뿐 아니라 review당 비용, latency, 불필요한 comment 감소가 adoption 조건
- 운영 리스크: 범용 agent harness를 task-specific agent에 그대로 붙이면 도구 개선이 오히려 regression으로 나타날 수 있음
- 평가 필요: 최종 점수보다 trace에서 tool call sequence, context growth, evidence narrowing 여부를 봐야 원인 분석 가능

### 시사점
- 팀 액션: AI 리뷰 agent 도입 시 repository browsing agent와 PR reviewer agent의 system prompt·tool instruction을 분리 필요
- 측정 항목: useful comment rate, false positive, tool output tokens, review cost, evidence path length를 release gate에 포함 필요
