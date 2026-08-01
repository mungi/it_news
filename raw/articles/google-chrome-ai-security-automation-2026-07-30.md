---
source_url: https://blog.google/security/chrome-stronger-with-every-update/
title: "Stronger with every update: How we’re making Chrome and the web safer in the AI Era"
ingested: 2026-08-02
published: 2026-07-30 (source page date only)
sha256: 66b8748b0c3f0feb80d2120b9b6db400fa04ac7c92202ccc7194d5695f10e650
tags: [ai, security, devtools, chrome, secure-sdlc]
---

# Chrome AI 보안 자동화와 Gemini agent harness

- Google Chrome Security Team은 2026-07-30 `Stronger with every update: How we’re making Chrome and the web safer in the AI Era`에서 vulnerability discovery·triage·patching에 AI를 사용하는 방식을 공개함
- 2026년 초 Gemini 기반 harness로 broader Chrome codebase를 분석해 효율과 false positive를 개선했으며 13년 이상 남아 있던 sandbox escape를 찾았다고 설명
- harness는 open-weight/proprietary model interoperability, prior CVE와 entire git history knowledge base, `SECURITY.md`, separate-context critic agent, repeated runs를 결합함
- model은 source code at rest만 분석하고 general internet이 없는 locked-down machine에서 실행되며 network request interception과 application/destination strict allowlist를 사용한다고 명시
- subagent의 local-system modification과 designated source-code directory 밖 파일 접근을 제한하고 unrestricted mode를 사용하지 않는다고 설명

## 운영 경계

- source page는 `Jul 30, 2026` 날짜만 표시하며 exact publication clock time은 확인되지 않음
- AI discovery는 fuzzing과 external vulnerability research를 보완하는 구조이며 대체한다는 주장은 source에 없음
- finding volume은 patch quality·accepted-fix regression·release adoption·time-to-remediate를 보증하지 않으므로 read-only analysis, egress deny, human triage, code review, CI test, rollback을 분리 gate로 운영 필요
