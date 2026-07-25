---
source_url: https://github.com/andrewyng/openworker
title: OpenWorker
ingested: 2026-07-25
published: 2026-07-25 10:33 KST
sha256: f45379be4a5acb92d39458b5e725d57e3eccc746a8cf5d2d04fd8235be771704
tags: [ai, agent, open-source, devtools, privacy]
---

# OpenWorker: 로컬 desktop agent의 모델 독립 실행·권한 경계

## Verified source facts
- AI타임스 기사 입력 시각: 2026-07-25 10:33 KST
- Andrew Ng의 `andrewyng/openworker` GitHub repository는 2026-07-20 생성된 MIT-licensed public repository이며, OpenWorker를 open beta로 표기함
- README는 macOS 12+ Apple Silicon용 signed/notarized 다운로드와 Windows 10/11 x64용 unsigned build를 제공한다고 명시함
- 앱은 사용자 desktop에서 실행되고 OpenAI·Anthropic·Google·open-weight provider API key 또는 Ollama local model을 선택할 수 있다고 설명함
- README는 데이터가 사용자가 선택한 model provider와 integration을 통해서만 기기를 떠난다고 설명하며, 모델·connector·파일 접근 권한의 실제 적용 범위는 배포 전 검증 대상임

## Evidence boundary
- GitHub README의 privacy·local execution·지원 플랫폼 설명은 프로젝트 self-description 범위임
- enterprise SSO, audit logging, permission isolation, sandboxing, data retention, security review, SLA, production support는 확인된 자료에 없음
