---
title: Ghostcommit hides prompt injection in images to fool AI agents
created: 2026-07-11
updated: 2026-07-11
source: BleepingComputer
source_url: https://www.bleepingcomputer.com/news/security/ghostcommit-hides-prompt-injection-in-images-to-fool-ai-agents-steal-secrets/
type: article
tags: [ai-agent, security, prompt-injection, devtools, supply-chain]
confidence: medium
---

# Ghostcommit 이미지 프롬프트 주입

BleepingComputer는 연구진이 PNG 이미지 안에 프롬프트 주입을 숨겨 AI 코드 리뷰 도구와 코딩 에이전트를 속이는 `Ghostcommit` 기법을 시연했다고 보도했다.

## 확인한 사실
- 게시: 2026-07-11 18:03 KST로 RSS 후보에서 확인.
- 보도 요지: PNG에 숨긴 prompt injection이 CodeRabbit·Bugbot 같은 AI code review 흐름에서 보이지 않을 수 있고, 이후 coding agent가 저장소의 `.env`를 읽어 비밀 값을 파일에 쓰도록 유도될 수 있음.
- 성격: 야생 악용이 아니라 연구 시연으로 보도됨.

## 엔지니어링 메모
- 이미지·문서·압축 파일도 에이전트 입력 경계에 포함한다.
- AI 리뷰 도구가 분석하지 못한 파일 유형은 자동 승인 조건에서 제외한다.
- 코딩 에이전트에는 `.env`, SSH key, cloud credential, package token 등 민감 경로 denylist와 output secret scanning이 필요하다.
- PR workflow에 이미지 OCR/metadata 검사 또는 파일 유형별 수동 승인 게이트를 둔다.
