---
source_url: https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/
title: Introducing MAI-Cyber-1-Flash inside MDASH
ingested: 2026-07-29
published: 2026-07-27 (official page; card timestamp uses related THN RSS 2026-07-28 15:07 KST)
sha256: d88c131a57f7cb16ec664b759d62e22c5306391a2eb3253ebcdd78e10cd1ab57
tags: [security, ai, agent, vulnerability-management, microsoft, weekly-briefing]
---

# Microsoft MAI-Cyber-1-Flash inside MDASH

## 확인한 원문

- Microsoft AI 공식 발표: 2026-07-27, `MAI-Cyber-1-Flash`를 multi-agent vulnerability identification and remediation harness `MDASH` 안에 공개
- 공식 발표: MAI-Cyber-1-Flash가 최대 90% task를 처리하고 GPT-5.4가 어려운 10%를 처리하는 routing 구조 설명
- 공식 발표: MDASH 조합의 CyberGym 95.95% 또는 반올림 96%, 기존 최고 MDASH 구성 대비 50% cost saving을 표기
- 공식 링크: `Project Perception`을 지속 모니터링·patch·threat-vector closure용 agent system으로 소개
- 모델 카드 PDF: 137B total·5B active MoE, 256K-token context라는 THN 인용 모델 카드 필드
- 관련 보도: The Hacker News RSS `2026-07-28 11:37:22 +05:30`은 `2026-07-28 15:07 KST`로 변환

## 증거 경계

- CyberGym 점수는 MAI-Cyber-1-Flash 단독이 아니라 GPT-5.4를 결합한 MDASH system 결과
- CyberGym Level 1은 known vulnerability description과 unpatched source를 주고 working PoC를 확인하는 과제이며 blind discovery·patch correctness·production safety 측정이 아님
- THN이 7월 28일 확인한 public leaderboard에는 Microsoft 95.95% 결과가 표시되지 않았고, 공개 자료는 submission 여부를 설명하지 않음
- token use, call volume, latency, task mix, compute allocation이 공개되지 않아 50% cost saving을 조직 workload의 비용·SLA로 환산할 수 없음

## 운영 판단

- vulnerability triage, exploit reproduction, patch proposal, CI test, human approval, production deployment을 독립 privilege state로 운영
- disposable isolated runner, read-only source scope, default-deny egress, short-lived credential, artifact cleanup을 harness contract에 포함
- route별 pass rate·false positive·retry·p95·token·human correction·rollback·successful remediation cost를 함께 수집
