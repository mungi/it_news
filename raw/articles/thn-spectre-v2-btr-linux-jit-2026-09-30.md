---
source_url: https://thehackernews.com/2026/09/new-spectre-v2-btr-attack-leaks-linux.html
title: Spectre-v2 BTR: Linux·browser·runtime JIT stale branch target 재사용 연구
created: 2026-09-30
ingested: 2026-09-30
published: 2026-09-29
sha256: b96f013428fe9bb6e8e7f9aa5a834cee6d4320592e634a1f91abd15d1eaadbc0
tags: [cybersecurity, infra, operating-system, cloud-security, global]
---
# Spectre-v2 BTR: Linux·browser·runtime JIT의 stale branch target 재사용과 patch·isolation 점검

- 보도 원문: https://thehackernews.com/2026/09/new-spectre-v2-btr-attack-leaks-linux.html
- 연구 원문: https://vusec.net/projects/btr/
- 원문 보도 시각: 2026-09-29 22:50:17 +05:30, KST 2026-09-30 02:20
- evidence boundary: 이번 capture는 직접 읽은 The Hacker News 보도와 연결된 VUSec 연구 URL의 범위임. 실제 악용, 원격 공격 성공, 개별 조직·배포판의 침해 또는 모든 JIT runtime의 동일 영향은 source가 확인하지 않음

## 핵심 요약

- 공개: VUSec·Scuola Superiore Sant'Anna가 self-modifying JIT code 뒤 stale indirect branch prediction target 재사용을 이용하는 Spectre-v2 `Branch Target Reuse(BTR)` 변형 공개
- 대상: Firefox SpiderMonkey·GraalVM·Linux `cBPF` JIT에서 영향 확인, component별 exploitability·leakage rate 차이 명시
- PoC: fully patched Intel system의 기본 protection에서 Linux `su` process root password hash를 수분 내 유출·복구한 end-to-end exploit 2개 제시
- 조건: JIT engine 내 unprivileged code 실행, stale BTB entry의 미무효화·미교체, 해당 prediction entry 선택 조건 필요
- 완화: Linux `CVE-2026-64507`·`CVE-2026-64508` upstream mitigation, GraalVM code-cache location randomization, Firefox site isolation 우선 배포 방침 확인

---

## 공격 구조

- stale indirect branch target은 JIT code cache의 기존 training chunk가 free된 뒤에도 남을 수 있는 prediction state
- cache repopulation 뒤 obsolete offset이 새 generated code와 맞물리면 transient execute-after-free primitive가 되는 경로
- architectural result는 폐기돼도 cache timing side channel로 transient access의 sensitive data를 추론하는 Spectre 계열 조건

## 영향·운영 경계

- browser: SpiderMonkey JIT build와 managed Firefox site isolation rollout 확인
- runtime: GraalVM build·code-cache randomization 적용 여부와 untrusted script/plugin 경로 점검
- kernel: `cBPF` JIT 사용 host의 vendor advisory backport, installed/running kernel, reboot 상태 확인
- multi-tenant 환경: shared CI runner·serverless·browser automation의 untrusted code 실행과 JIT exposure를 asset inventory에 연결

## 패치·검증 조치

- `CVE-2026-64507`·`CVE-2026-64508`: upstream fix 존재와 distro fixed package·backport를 별도 확인
- runtime/browser update: release channel·managed fleet rollout·rollback status를 kernel patch record와 연결
- exception: JIT disable 또는 stronger process/site isolation, owner·expiry·재검토 날짜를 compensating control로 기록
