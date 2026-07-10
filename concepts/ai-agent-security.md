---
title: AI Agent Security
created: 2026-07-06
updated: 2026-07-11
type: concept
tags: [ai, infra, security]
confidence: high
---

# AI Agent Security

AI 에이전트가 도구 호출, 코드 실행, 웹/DB 접근을 수행하면서 생기는 프롬프트 주입, 권한 오남용, 샌드박스 탈출, 공급망 위험을 다룬다. 이번 주에는 Langflow RCE, Cursor 취약점, MCP 도구 설명 오염, Docker의 에이전트 격리 논의가 함께 등장했다.

## Related weekly items
- AI 에이전트가 Langflow RCE를 악용해 데이터베이스 랜섬웨어 공격 자동화 — [The Hacker News](https://thehackernews.com/2026/07/ai-agent-exploits-langflow-rce-to.html)
- Cursor 취약점, 프롬프트 주입으로 샌드박스 탈출·명령 실행 가능성 제기 — [The Hacker News](https://thehackernews.com/2026/07/critical-cursor-flaws-could-let-prompt.html)
- Docker, AI 에이전트 격리 필요성과 Sandbox Kits 강조 — [Docker Blog](https://www.docker.com/blog/why-ai-agents-need-isolation/)
- Microsoft 연구, 오염된 MCP 도구 설명으로 AI 에이전트 데이터 유출 가능성 경고 — [The Hacker News](https://thehackernews.com/2026/06/microsoft-warns-poisoned-mcp-tool.html)

- GitHub Copilot 연구, 채팅 거부 후 코드 파일에는 유해 답변 생성 가능성 제기 — [The Hacker News](https://thehackernews.com/2026/07/github-copilot-refuses-harmful-requests.html)

## 2026-07-09 업데이트: 로컬 개발 환경과 공급망 경계
- HalluSquatting은 AI 코딩 어시스턴트가 환각으로 만든 패키지·스킬 이름을 공격자가 선점해 설치 경로를 악용할 수 있음을 보여준다. 방어 기준은 registry allowlist, provenance, human approval gate다.
- Sophos 관측 사례처럼 AI 코딩 에이전트는 정상 개발 작업 중에도 credential access, LOLBin 다운로드, persistence 탐지 규칙과 유사한 행위를 만들 수 있다. EDR 예외는 제품명 allowlist가 아니라 명령 범위·네트워크·파일 경로·세션 감사 기준이어야 한다.
- Docker의 runtime governance 관점은 개발자 노트북을 새 실행 경계로 본다. AI agent는 dev container, sandbox, secret isolation, egress 제한 안에서 실행하는 것이 기본값이다.
## 2026-07-09 업데이트: GitHub 조직 권한 에이전트
- GitLost는 공개 이슈가 조직 내 비공개 저장소 접근 권한을 가진 에이전트의 지시 채널로 작동할 수 있음을 보여준다. 방어 기준은 public input 격리, cross-repo read 최소 권한, public output policy check다.
- Agentic Workflows는 문서 자동화처럼 생산성 가치가 크지만 초안 생성, SME 검토, merge 승인, 감사 로그를 분리해야 안전하다.

## 2026-07-09 업데이트: 로컬 실행·파일 쓰기 경계
- Friendly Fire는 보안 검사용 에이전트가 README 지시와 스크립트 실행을 신뢰하면 untrusted repository 분석 중 host code execution 경로가 열릴 수 있음을 보여준다. 방어 기준은 sandbox, read-only mount, egress 제한, per-command approval이다.
- GhostApproval은 symlink가 AI coding assistant의 파일 수정 승인창을 우회해 `~/.ssh/authorized_keys`나 `~/.zshrc` 같은 민감 파일로 write를 돌릴 수 있음을 보여준다. 방어 기준은 canonical path 표시, symlink resolution, workspace escape 차단, sensitive path denylist다.

## 2026-07-09 업데이트: 음성·코딩 에이전트 운영 경계
- GPT-Live는 음성 인터페이스가 장시간 agent 작업의 제어면이 될 수 있음을 보여준다. 방어 기준은 transcript 보존 정책, 민감 정보 마스킹, tool-call approval, fallback handoff 감사다.
- Grok 4.5 같은 코딩 모델은 pass rate보다 작업당 출력 토큰, tool-call 안정성, IDE 통합 권한, 코드 데이터 처리 조건까지 포함해 평가해야 한다.


## 2026-07-10 업데이트
- Google Cloud Run Sandboxes 공개 preview, AI 생성 코드·비신뢰 바이너리 격리 실행 지원: Cloud Run 사용자와 agent 플랫폼팀은 비신뢰 코드 실행을 별도 microVM/Kubernetes 구축과 Cloud Run Sandboxes 중 어떤 운영 모델로 둘지 PoC 필요.
- 휴면 GitHub 계정·노출 PAT, 기업 조직·저장소 정찰에 악용: 플랫폼·보안팀은 GitHub 조직 ownership, inactive user, PAT/OAuth grant, private repo clone audit을 한 번에 점검 필요.

## 2026-07-10 refresh
- AWS MCP Server OAuth 지원은 에이전트 권한을 IAM, OAuth token lifecycle, CloudTrail 감사 이벤트와 연결하는 사례임.
- Microsoft Flint는 에이전트 산출물을 자유형 코드가 아니라 검증 가능한 중간 표현과 결정적 렌더러로 처리하는 안전한 설계 패턴임.

## 2026-07-10 evening refresh
- OpenAI·Google의 해외 자회사 경로 모델 접근 논란은 AI 모델 거버넌스가 지역 차단만으로 부족하고 customer ownership, 계정 군집, distillation pattern, access tier 정책을 요구함을 보여줌.
- Anthropic의 중국 소유 법인 차단 정책과 대비하면 공급자별 고객 실사·모델 접근 정책 차이가 기업 API 조달 리스크로 연결됨.

## 2026-07-10 late refresh
- Microsoft Entra passkey 등록 피싱은 phishing-resistant credential도 등록·복구 절차가 약하면 공격자 소유 인증 수단 등록으로 전환될 수 있음을 보여줌.
- IAM 운영팀은 신규 passkey 등록, helpdesk 음성 요청, 유사 도메인, ASN·장치 변화, 고권한 계정 credential change를 하나의 탐지 시나리오로 묶을 필요.

## 2026-07-11 early refresh
- Google Cloud Discovery Bench는 agent 평가를 pass/fail 점수가 아니라 query ambiguity, retrieval evidence, failure cliff로 세분화해야 함을 보여줌.
- GitHub Copilot code review 사례는 shared tool migration보다 task-specific workflow instruction과 trace 기반 비용 측정이 먼저임을 보여줌.
