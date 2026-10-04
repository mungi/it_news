---
source_url: https://www.aitimes.com/news/articleView.html?idxno=215932
title: Claude Code Mods의 event handler·plugin 실행 경계
ingested: 2026-10-04
published: 2026-10-03 14:23 KST
sha256: 480123905aa1b9deaba3bf59bc8a6b432b82facdf7523050d8def0477d7ac59c
tags: [ai, devtools, agent, cybersecurity, global]
---
## 원문 확인

- AI타임스 기사 제목: '나만의 클로드 코드' 만든다...앤트로픽, 커스텀 확장 기능 '모드' 출시
- 기사 입력 시각: `article:published_time` `2026-10-03T14:23:12+09:00`, KST `2026-10-03 14:23`
- 원문 URL: https://www.aitimes.com/news/articleView.html?idxno=215932
- 직접 확인한 Open Graph 이미지: https://cdn.aitimes.com/news/photo/202610/215932_219895_2155.png
- 기사에 포함된 Anthropic ClaudeDevs 공지: https://x.com/ClaudeDevs/status/2105721434807083061
- 관련 공식 문서: https://code.claude.com/docs/en/plugins

## GN⁺ 핵심 요약

- 공개: AI타임스가 Anthropic의 Claude Code 사용자 맞춤 확장 `Mods` 공개와 `2.1.287+` 사용 조건을 보도
- 구조: JavaScript·TypeScript event handler가 prompt 입력·tool call·UI rendering을 감지해 CLI/Desktop Code 탭 동작을 확장하는 범위
- 배포: Mods는 plugin 안에 포함되며 CLI·Desktop의 `/plugin` 설치 경로와 공유 가능 범위를 기사와 공식 ClaudeDevs 공지가 설명
- 통제: 별도 sandbox 없이 user permission으로 실행될 수 있어 filesystem·program·network·environment variable·prompt/tool-call 정보 접근 경계 존재
- 팀 액션: `claude plugin validate`, `--safe-mode`, allowlist·review·least privilege·egress audit를 plugin onboarding의 필수 gate로 적용 필요

---

## 기능과 사용 범위

- 기사에 따르면 몇 줄의 JavaScript 또는 TypeScript로 event handler를 작성하거나 Claude에게 생성 지시 가능
- context usage panel, 위험 shell command 실행 전 approval 단계, reasoning 없이 실행하는 `/command`, `/diff`, `CLAUDE.md`·`AGENTS.md` load용 built-in Mods 사례 제시
- custom UI 출력은 Claude Code CLI terminal과 Claude Desktop의 Code 탭으로 제한된다고 보도
- full API schema, compatibility guarantee, enterprise policy semantics, telemetry retention, release/SLA는 확인 source에서 미확정

## 실행·공급망 경계

- 기사에 따르면 Mod는 별도 sandbox 없이 사용자 권한으로 실행될 수 있으며 file system·program execution·network·environment variable·prompt·tool-call 정보 접근 가능
- permission approval prompt는 Mod가 임의 수정할 수 없도록 제한했다고 보도
- 검증된 Mod 설치, `claude plugin validate` 검증, `--safe-mode`로 Mod 즉시 차단, 조직 관리자 제어 기능을 안내
- plugin origin·version·reviewer·permissions·command/file diff·outbound destination·disable/rollback 결과를 같은 change record에 보관할 운영 과제
