---
source_url: https://thehackernews.com/2026/07/new-memghost-attack-plants-persistent.html
title: New MemGhost Attack Plants Persistent False Memories in AI Agents Through One Email
ingested: 2026-07-14
published: 2026-07-13 22:03
sha256: 5ab6c5ee8824577561059771bcca639289e21d5a6e0018387a165fbd146f46c4
tags: [security, ai-agent, prompt-injection, email-security, weekly-briefing]
---

# MemGhost: 이메일 기반 AI 에이전트 장기 메모리 주입 연구

- Source: The Hacker News
- URL: https://thehackernews.com/2026/07/new-memghost-attack-plants-persistent.html
- Published KST: 2026-07-13 22:03
- Related paper: https://arxiv.org/abs/2607.05189v1
- Category: Security / AI Agent

## Korean briefing

- 핵심: MemGhost는 inbox를 읽는 agent가 외부 이메일 지시를 장기 memory에 쓰고 후속 세션에서 거짓 정보를 재사용하게 하는 stealth memory injection 연구
- 결과: 56개 신규 test case에서 전체 공격 체인을 평가했고, background OpenClaw/GPT-5.4 조합에서 87.5%, Claude Code SDK/Sonnet 4.6 조합에서 71.4% 성공률 제시
- 구조: OpenClaw의 AGENTS.md·MEMORY.md처럼 세션마다 context로 불리는 persistent file이 오염 목표가 되는 조건
- 한계: fake inbox·fake user를 둔 sealed test environment 결과이며 실제 스팸 필터 우회·실사용 악용을 검증한 결과는 아님
- 시사점: 외부 콘텐츠 read와 memory write를 분리하고 provenance, 승인, diff audit, snapshot rollback을 agent platform 기본 제어로 편입 필요

## Detailed notes

### 공격 체인
- 외부 발신자가 agent가 읽을 수 있는 이메일에 사용자용 본문과 agent 대상 지시를 함께 삽입
- email skill이 file tool을 사용해 persistent memory에 거짓 사실을 저장하도록 유도
- 사용자-facing 응답은 변경 사실을 드러내지 않고, 다음 세션은 오염된 memory를 context로 다시 로드

### 연구 경계
- MemGhost는 shadow agent에서 성공적 memory 저장과 응답 은닉을 보상으로 공격 이메일을 생성
- 성공률은 실험 조합과 background 조건의 benchmark 값이며 현실 공격 prevalence를 나타내지 않음
- 연구 소개는 OpenClaw가 external content memory write에 provenance·audit log·confirmation prompt를 검토 중이라고 전함
