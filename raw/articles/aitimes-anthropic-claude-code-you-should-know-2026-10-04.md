---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215949
title: Claude Code You should know 내장 plugin의 보조 agent·사용자 제어 경계
ingested: 2026-10-04
published: 2026-10-04 17:48 KST
sha256: 0d2c15a4c0053697f056c954e05c629114f766ad6f3fe3a9eafafdb2e72d7382
tags: [ai, devtools, agent, cybersecurity, global]
---
## 원문 확인

- AI타임스 기사 제목: "클로드가 일하고, 클로드가 감시한다"... 앤트로픽, '알아두어야 할 사항' 플러그인 공개
- 기사 입력 시각: `article:published_time` `2026-10-04T17:48:41+09:00`, KST `2026-10-04 17:48`
- 원문 URL: https://www.aitimes.com/news/articleView.html?idxno=215949
- 직접 확인한 Open Graph 이미지: https://cdn.aitimes.com/news/photo/202610/215949_219925_4230.jpg
- 기사에 포함된 ClaudeDevs 공지: https://x.com/ClaudeDevs/status/2106118517447876618

## GN⁺ 핵심 요약

- 공개: Anthropic이 Claude Code에 built-in `You should know` plugin을 추가하고 별도 보조 agent가 main agent 출력을 살피는 구조를 안내
- 기능: 장시간 coding 작업에서 file 변경·중요 결정처럼 사용자가 놓칠 수 있는 정보를 prompt 위 note로 요약하는 범위
- 제어: 기본 disabled 상태이며 `/plugin enable cc-plugin-you-should-know@builtin`의 명시적 사용자 활성화와 opt-in data collection 조건을 기사에서 설명
- 한계: 보조 agent의 model·context scope·token 과금·telemetry retention·enterprise admin policy·SLA는 확인 source에서 확정하지 않음
- 팀 액션: long-running coding agent는 main output 외에 change digest·approval·token budget·plugin provenance·disable/rollback을 함께 기록할 운영 과제

---

## 동작 구조

- main agent는 code 작성·file 수정·문제 해결을 수행하고 보조 agent는 작업을 방해하지 않으면서 사용자가 알아야 할 내용을 탐색하는 구조
- 기사에 인용된 ClaudeDevs 공지는 Claude output에서 놓칠 수 있는 중요한 정보를 scan하는 plugin으로 설명
- 복잡한 작업의 전체 과정을 사람이 실시간으로 추적하기 어려운 경우의 summary·notification 보조 범위

## 제어·운영 경계

- plugin은 기본 disabled이며 `/plugin` 메뉴에서 `cc-plugin-you-should-know@builtin`을 명시적으로 활성화하는 경로
- 기사상 opt-in data collection 등 특정 조건을 충족한 환경에서 동작하는 제어 범위
- 보조 agent의 access permission·context retention·token usage·network egress·enterprise policy semantics는 source에서 확인되지 않은 항목
- long-running agent workflow에서는 summary note를 change approval이나 original tool trace의 대체물로 사용하지 않는 운영 원칙
