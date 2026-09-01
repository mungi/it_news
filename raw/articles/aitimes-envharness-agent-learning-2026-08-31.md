---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214657
title: 구글, 벤치마크에 하네스를 씌웠더니 숨겨진 AI 실력 끌어낸다
ingested: 2026-09-01
published: 2026-08-31 17:45 KST
tags: [ai, agent, benchmark, research, devtools, global]
sha256: 7e8e6ebd764e3e0748fde1f58c16fa8245c1c4ef7c27d051634fd341dea051c6
---

## 원문 확인

- AI타임스 canonical URL·제목·`article:published_time` `2026-08-31T17:45:00+09:00`·Open Graph image 직접 확인
- 연결된 arXiv `2608.19880` 제목·abstract·v1 제출 시각 `2026-08-20 10:42:06 UTC` 직접 확인
- AI타임스는 timestamped secondary source로 유지하고, 논문은 distinct related link로 기록

## 핵심 요약

- EnvHarness: 기존 static environment의 backend logic와 original verifier를 수정하지 않고 standard interface 위 wrapper로 behavior를 재구성하는 programmable layer
- 구성: Stage·Contract·Chain plug-in과 trajectory 기반 component synthesis·fresh rollout validation을 수행하는 EnvRigger
- 논문 범위: 5개 benchmark·4개 domain에서 held-out instance 최대 9.0점 개선과 9.8% 적은 execution step 보고
- AI타임스 인용: SWE-bench Verified GPT-4o agent의 task 해결 49.88%→52.58%, 평균 step 55.01→49.61

## 증거 경계와 운영 검증

- 결과는 논문의 benchmark·policy·wrapper·verifier·seed·rollout 조건에 묶인 연구 결과이며 일반 production 성능·비용·latency·SLA 보증 아님
- wrapper가 observation·action·reward·tool surface를 바꿀 수 있으므로 original verifier parity, held-out split, leakage·overfitting, clean fresh rollout을 별도 검증 필요
- EnvRigger 생성 code는 sandbox·tool permission·network egress·secret access·code review·rollback이 필요한 execution artifact
