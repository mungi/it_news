---
source_url: https://thehackernews.com/2026/07/new-agent-data-injection-attack-can.html
title: New Agent Data Injection Attack Can Make AI Agents Misclick or Run Attacker Commands
ingested: 2026-07-16
published: 2026-07-16 20:32 KST
sha256: 63fcee21baa750f6fbf0961a9ff70841f1ae22fd5bea1e926e33a8deacb06955
tags: [ai, cybersecurity, devtools, global, security]
---

# 에이전트 데이터 주입(ADI)과 agent tool-use 신뢰 경계

- The Hacker News가 2026-07-16 보도한 ADI는 agent가 신뢰하는 sender name·button ID·tool result 같은 데이터 필드를 위조하는 공격 기법임
- 원 논문은 2026-07-06 공개됐으며, 보도는 서울대·UIUC·Largosoft 연구진의 실증을 인용함
- web agent에서 review의 element ID를 재사용해 의도하지 않은 Buy Now 클릭으로 유도한 사례 제시
- Claude Code·Codex·Gemini CLI 계열 coding assistant에서 maintainer처럼 꾸민 GitHub comment가 승인 뒤 명령 실행을 유도한 사례 제시
- malicious PR의 실행 기록을 위조해 agent가 안전 판정·병합을 제안하도록 만든 사례 제시
- 공개 자료는 연구 실증 범위이며 특정 제품의 실제 침해·모든 버전의 취약성을 확정하지 않음

## 운영 메모

- author·element ID·tool result를 모델이 해석한 문자열만으로 권한·대상 증거로 취급하지 말 것
- command·merge·purchase 직전 repo ref·diff·target·권한을 strict parser와 독립 confirmation UI로 재검증 필요
- 외부 issue·PR·comment·웹 DOM·메일 metadata를 untrusted input으로 분류하고 sandbox·tool allowlist·network egress 경계 적용 필요
- raw input, normalized structure, tool call, human approval artifact를 trace로 연결해 사후 재현성 확보 필요

## 출처

- The Hacker News: https://thehackernews.com/2026/07/new-agent-data-injection-attack-can.html
- arXiv: https://arxiv.org/abs/2607.05120
