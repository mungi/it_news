---
source_url: https://qwen.ai/blog?id=qwen3.8
title: "Qwen3.8-Max: A New Bar for Coding and Cowork"
ingested: 2026-08-04
published: 2026-08-03
sha256: 69ce811007fe2522fcf80f271ada6d7bc02cdc5155437c360508043e97a16300
tags: [ai, foundation-model, agent, devtools, open-source, global, release]
---

# Qwen3.8-Max: 코딩·협업용 Max급 모델 공개

- Qwen 공식 페이지에 `2026/08/03` 게시일과 `Qwen3.8-Max: A New Bar for Coding and Cowork` 제목 확인
- Qwen 3.5 기반 Qwen3.8-Max를 공식 공개하고 QwenCloud API 제공 및 Max급 Qwen 모델 최초의 open weights를 다음 주 공개할 계획 명시
- 공식 공개 수치: 총 2.4T parameters, active 95B parameters
- 공식 설명 범위: 코딩·업무·연구·long-horizon task의 포괄적 개선과 complex task의 end-to-end delivery 주장

---

## 장기 자율 코딩 공개 run

- `oh-my-cli` 프로젝트를 빈 폴더에서 시작해 10일 이상 long-horizon autonomous coding으로 self-evolving harness를 구축했다는 공식 사례
- 요구사항을 issue로 정규화하고 agent가 state machine에서 claim·execute하며 code·test·preview·log를 반복한다는 구현 설명
- issue state machine, dispatcher, monitor, watchdog를 한 execution loop로 연결했다는 설명
- 구현 완료 뒤 E2E test와 CI check를 트리거하고 pass 뒤 PR을 merge한다는 workflow 설명
- update 뒤 Build, Unit Test, E2E, Desktop Lifecycle validation을 실행하고 abnormal state를 issue/PR로 돌려 수정·재검증한다는 설명
- 2026-07-30 기준 약 16일 full autonomous operation 후 265 commits, 127 PRs, 151 issues라는 공식 수치

## 증거 경계

- 수치와 benchmark 비교는 Qwen 공식 발표의 vendor claim 범위
- 실험 harness version, task sampling, tool permission, retry policy, compute budget, human intervention 정의는 이 capture에서 독립 검증하지 못함
- commit·PR·issue 수는 조직의 merged quality, escaped defect, security posture, production SLA를 직접 보증하지 않음
- open weights의 정확한 release 시각, license, hardware requirement, serving recipe, model card와 independent benchmark 재현은 공개 후 별도 확인 필요

## 운영 해석

- 장기 agent는 model output이 아니라 durable task state·tool execution·CI artifact·approval·rollback을 가진 distributed workflow로 관리 필요
- source의 issue lifecycle·validation loop는 agent action을 trace와 gate로 닫는 scaffold 사례이며, broad credential·self-approval·unbounded retry를 허용하는 production policy의 근거가 아님
- 도입 평가는 task trace completeness, policy denial precision, test pass, rollback time, token/tool/CI/human-review cost를 분리해 실행 필요

## 관련 보도

- AI타임스는 같은 발표를 2026-08-03 17:32 KST에 보도: https://www.aitimes.com/news/articleView.html?idxno=213493
- AI타임스 보도는 공식 발표와 달리 2.4T parameter 및 long-horizon vendor claim을 한국어로 정리한 보조 출처이며, primary fact는 Qwen 공식 페이지를 우선함
