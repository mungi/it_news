---
source_url: https://blog.cloudflare.com/cloudflare-computer/
title: "Your agent needs a computer, not a container — introducing @cloudflare/computer"
ingested: 2026-08-04
published: 2026-08-03 22:15 KST
sha256: 04ae9da4ddf0295ce281bd8f2054101777400330b76d8f06b26645344fce13db
tags: [ai, infra, agent, cloudflare, cloud-security, devtools, global, release]
---

# Cloudflare `@cloudflare/computer` early preview: agent workspace와 다중 실행 backend

- Cloudflare 공식 블로그의 `Your agent needs a computer, not a container — introducing @cloudflare/computer` 제목과 `2026-08-03` 게시일 확인
- Cloudflare RSS `2026-08-03T13:15:24Z`를 `2026-08-03 22:15 KST`로 변환해 카드 발행 시각에 사용
- `@cloudflare/computer`를 agent별 virtual filesystem·runtime abstraction을 제공하는 open-source early preview로 공식 공개
- Durable Object에 workspace를 인스턴스화하고 SQLite-backed virtual filesystem을 source control·storage bucket·사용자 파일로 채울 수 있다는 공식 설명

---

## 실행 backend

- file manipulation·data processing·git repository 관리 작업은 isolate에서 실행 가능하다는 공식 설명
- Linux·`npm`·native binary가 필요한 command는 Cloudflare Containers backend에서 실행한다는 공식 설명
- isolate backend는 `just-bash`가 shell code를 JavaScript로 변환해 dynamic worker에서 실행하는 방식
- container backend는 FUSE mount로 workspace filesystem을 제공하고 변경을 동기화하는 방식
- 모든 runtime이 `exec(string, options)` interface를 공유하고 custom backend도 작성 가능

## workspace와 agent tool

- `Workspace`가 filesystem 직접 API와 node:fs-compatible wrapper를 제공한다는 공식 설명
- AI SDK-compatible `read`·`write`·`edit`·`ls`·`exec` tool을 제공한다는 공식 설명
- Cloudflare는 operation이 gate·audit·observe된다고 설명하나, 실제 tenant별 tool permission·egress·secret scope는 별도 검증 필요
- 공개 예시는 bug-triage agent가 issue 내용을 workspace에 기록하고 git repository를 clone한 뒤 verification을 수행하는 구조

## 증거 경계

- early preview이며 production SLA, quota, price, supported region, browser runtime 조건, data retention, tenant isolation의 상세 contract는 source page에서 확인되지 않음
- frontier model이 적절한 backend를 고른다는 설명은 Cloudflare testing 결과 범위이며, 조직 workload의 completion rate·selection error·filesystem consistency·cost 보증이 아님
- FUSE sync, concurrent workspace access, retry·cancel, partial side effect, prompt injection 대응은 구현과 canary에서 별도 검증 필요

## 운영 해석

- isolate와 container의 공통 workspace는 model feature가 아니라 stateful execution control plane으로 관리 필요
- source revision·workspace digest·backend·tool request·command exit·artifact·policy decision·비용을 correlation ID로 연결해 audit과 rollback evidence로 보존 필요
- read-only canary에서 시작해 isolate write·container exec·external publish를 각각 independent approval gate로 확장 필요
