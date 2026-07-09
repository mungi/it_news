---
source_url: https://thehackernews.com/2026/07/friendly-fire-ai-agents-built-to-catch.html
title: Top AI Agents Built to Catch Malicious Code Can Be Tricked Into Running It
ingested: 2026-07-09
published: 2026-07-09 14:15
tags: [ai, agent, cybersecurity, devtools]
sha256: dfc9bd5d2b5f9459977a9662b7b5f99c675ce12649f4b6f463f89d5505fb44c9
---

# Friendly Fire: AI 코딩 에이전트 보안 검사 실행 경계

- AI Now Institute가 Claude Code와 OpenAI Codex의 자율 명령 승인 모드에서 README 기반 payload 실행 가능성을 Friendly Fire PoC로 공개함.
- 테스트 대상은 Claude Code CLI 2.1.116/2.1.196/2.1.198/2.1.199와 OpenAI Codex CLI 0.142.4이며, Claude Sonnet 4.6·Sonnet 5·Opus 4.8·GPT-5.5 조합 포함.
- 공격은 geopy 형태의 미끼 프로젝트 README에 security.sh 실행을 권고하고, 숨겨진 바이너리를 harmless Go build artifact처럼 위장하는 방식임.
- 연구진은 공개 PoC에서 payload를 제거했고 야생 악용·권한 상승·횡적 이동은 보고하지 않음.
- 운영 시사점은 untrusted repository 분석을 sandbox/read-only/egress-limited 환경으로 제한하고 autonomous approval mode를 신뢰 저장소 내부에만 적용하는 것임.
