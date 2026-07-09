# AI / Cloud / Infra Weekly News

AI, Cloud, Infra, and selected IT news를 매주 발표하기 위한 LLM Wiki 기반 정적 뉴스 사이트 프로젝트입니다.

이 저장소는 다음 두 가지를 동시에 목표로 합니다.

1. 주간 뉴스 발표용 Static Website
2. 뉴스 원문과 분석이 누적되는 LLM Wiki 지식베이스

## 핵심 목적

- 매주 월요일 발표할 AI / Cloud / Infra / IT 주요 뉴스를 정리합니다.
- 발표 대상은 개발자, 엔지니어, 기술 리더입니다.
- 발표자는 30분 안에 한 주의 핵심 뉴스를 빠르게 소개할 수 있어야 합니다.
- 사이트는 GitHub Pages 같은 정적 웹사이트로 노출할 수 있어야 합니다.

## 확정된 운영 스펙

- 사이트 루트: `docs/`
- 배포 방식: GitHub Static Website / GitHub Pages
- 업데이트 방식: 자동 업데이트
- 업데이트 주기: 4시간마다
- 주간 범위: 직전 월요일 17:00 KST부터 이번 월요일 13:00 KST까지
- 뉴스 개수: 최대 50개, 충분한 고품질 소스가 있을 때 40-50개
- Deep Dive: 기본 1개, 꼭 필요한 경우 최대 2개
- 주요 주제: AI, Cloud, Infra
- 보조 주제: Security, Developer Tools, Data/Database, Open Source, Korea, General IT
- UI/요약 언어: 한국어
- 뉴스 제목: 한국어 제목과 원문 제목을 함께 보존
- 자동 업데이트 결과: GitHub에 자동 commit/push하는 방향

## 사용자가 보게 될 사이트

`docs/` 아래에 정적 사이트를 구성합니다.

예상 구조:

```text
docs/
├── index.html
├── styles.css
├── app.js
├── data/
│   └── weekly-news.json
└── assets/
    └── images/
```

사이트 기능:

- 주간 뉴스 카드 리스트
- 카드 클릭 시 상세 내용 표시
- 주요 이미지 표시
- 카테고리/태그 필터
- 검색
- 중요 소식 / 중요도 표시
- Deep Dive 1-2개
- 원문 링크와 관련 링크
- 마지막 업데이트 시각 표시, KST 기준

## 발표 흐름 예시

30분 발표 기준:

1. 0-3분: Executive Summary
2. 3-8분: 중요 소식 Top 5
3. 8-20분: 카테고리별 주요 카드 소개
4. 20-27분: Deep Dive 1개
5. 27-30분: 다음 주 관찰 포인트 / Q&A

## LLM Wiki 구조

정적 사이트와 별도로 자료 축적을 위한 LLM Wiki 구조를 유지합니다.

```text
.
├── SCHEMA.md       # 위키 운영 규칙, 태그, 데이터 스키마
├── index.md        # 전체 지식 페이지 색인
├── log.md          # 업데이트 로그
├── raw/            # 원본 자료 보관
├── entities/       # 기업, 제품, 모델, 조직 등
├── concepts/       # AI agent, Kubernetes, inference 등 개념
├── comparisons/    # 비교 분석
├── queries/        # 보존할 만한 질의/분석 결과
├── weekly/         # 주간 브리핑 원고
└── docs/           # GitHub Pages용 정적 사이트
```

## 뉴스 선별 기준

사용자가 개별 뉴스 URL을 예시로 제공하면 반복 소스가 아니라 후보 뉴스/편집 방향 예시로 분석합니다. 현재 주간 범위에 맞고 발표 가치가 있으면 주요 뉴스에 포함합니다.


뉴스 후보는 다음 기준으로 선별합니다.

- 업계 영향도
- 개발자/엔지니어 관련성
- 새로움
- 출처 신뢰도
- 한국 시장/조직 관련성
- 기술적 깊이
- 발표에서 설명할 가치

제외 대상:

- 단순 홍보성 기사
- 영향이 작은 제품 업데이트
- 중복 기사
- 출처가 불명확한 루머
- 최근 1주일 범위를 벗어난 기사
- AI/Cloud/Infra/IT 관련성이 약한 일반 비즈니스 뉴스

## 주요 소스 방향

글로벌 공식 소스와 한국 주요 IT 소스를 함께 봅니다.

예시:

- OpenAI, Anthropic, Google DeepMind, Meta AI, Microsoft AI, NVIDIA, Hugging Face
- GeekNews: `https://news.hada.io/`, `https://news.hada.io/plus`
- AWS, Azure, Google Cloud, Cloudflare, Kubernetes, CNCF, Docker, HashiCorp, Datadog
- GitHub, GitLab, JetBrains, Stack Overflow, CISA, Google Security, Microsoft Security
- Naver Cloud, Kakao Enterprise, Samsung Newsroom, SK Telecom, KT Cloud, KISA, 전자신문, ZDNet Korea, ITWorld Korea, Bloter, Byline Network

## 자동 업데이트 정책

자동 업데이트 작업은 다음 원칙을 따릅니다.

1. 현재 시간을 KST로 확인해 업데이트 시각에 반영합니다.
2. 최근 7일 이내 자료를 조사합니다.
3. 중복 뉴스를 제거합니다.
4. 중요도 기준으로 점수화합니다.
5. 최종 뉴스는 최대 50개로 유지합니다.
6. Deep Dive는 1개, 필요 시 최대 2개로 제한하되, 일반 요약보다 훨씬 자세히 작성합니다. AI/Infra 전문가 및 컨설턴트 관점에서 원문 사실, 아키텍처·운영 영향, 비용/보안 관점, 도입 로드맵, 개발팀/인프라팀 체크리스트, 발표 메시지를 포함합니다.
7. `docs/data/weekly-news.json`을 업데이트합니다.
8. LLM Wiki와 주간 브리핑 파일도 함께 업데이트합니다.
9. GitHub 원격 저장소 설정과 인증이 준비되어 있으면 자동 commit/push합니다.

## 현재 상태

- 생성일: 2026-07-05 KST
- 스펙: `SPEC.md`, `SCHEMA.md`, `AGENTS.md` 기준으로 운영 중
- 사이트: `docs/index.html`에서 `docs/data/weekly-news.json`을 읽는 정적 GitHub Pages 구조
- 데이터: 주간 뉴스 최대 50개, Deep Dive 최대 2개 기준으로 검증
- 자동화: 뉴스 업데이트는 4시간마다, 코드/문서 개선 검토는 별도 작업으로 운영
- 운영 정책: 현재 프로젝트는 월요일 13:00-17:00 KST 업데이트 freeze guard를 사용하지 않음

## 로컬 검증

변경 후 커밋 전 최소 검증:

```bash
node --check docs/app.js
python3 scripts/validate_weekly_news.py
python3 -m py_compile scripts/validate_weekly_news.py
python3 -m http.server 8765 --directory docs
```

`http.server`는 정적 사이트가 열리는지만 확인하고 중지합니다. `py_compile` 뒤에는 `__pycache__/`가 커밋되지 않도록 `git status --short`를 확인합니다.
