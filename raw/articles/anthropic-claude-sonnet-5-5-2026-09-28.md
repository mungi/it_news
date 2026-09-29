---
source_url: https://www.anthropic.com/claude-sonnet-5-5
title: Introducing Claude Sonnet 5.5
ingested: 2026-09-29
published: 2026-09-28
sha256: c73d24472d6f20028726c53d690ce1ef91075a29396859a89fc85cb21803f69f
tags: [ai, foundation-model, agent, benchmark, safety, release, global]
---
# Claude Sonnet 5.5 공식 발표

## 출처 메타데이터
- 원문: https://www.anthropic.com/claude-sonnet-5-5
- 원문 제목: Introducing Claude Sonnet 5.5
- Newsroom 표시일: 2026-09-28
- 공개 시각: 원문은 일자만 표시하며 정확한 시각 미공개
- 이미지: https://www-cdn.anthropic.com/images/4zrzovbb/website/eaa6046f4ae8c88e368c3c530c4c1312f7ff6f2e-1200x630.jpg
- 수집 시각: 2026-09-29 12:23 KST

## 핵심 요약
- `Claude Sonnet 5.5`를 Sonnet 5 대비 **30% 이상 빠르고 작업당 최대 30% 저비용**인 Claude 5.5 계열 두 번째 모델로 공개
- `Terminal-Bench 4.0`에서 70.6%, Sonnet 5의 10.3%, Opus 5.5의 66.4%와 비교한 vendor 평가 수치 공개
- 입력·출력·cache-read 가격을 Sonnet 5와 동일하게 각각 백만 token당 $2·$10·$0.20으로 유지하되 동일 작업의 token·tool call 감소를 비용 절감 근거로 제시
- 사이버 capability가 Opus 5와 유사해 Sonnet 계열 최초로 cyber safeguard·fallback을 기본 적용하고 biology safeguard는 Sonnet 5와 동일 범위로 유지
- Claude Platform의 `claude-sonnet-5-5`와 AWS·Google Cloud·Microsoft Azure에서 제공하며 thinking-off 사용자는 `between_tools` 설정으로 migration 필요

---

## 원문에서 확인한 기능·평가 범위
- well-scoped 일상 작업, bug fix, 문서·슬라이드·스프레드시트 작성에 적합하다는 vendor 포지셔닝
- complex하고 open-ended한 지속 판단 작업에는 Opus 5.5가 더 강하다는 원문 경계
- `CursorBench 4.0` 55.5%, `FrontierCode 1.1` Max 46.2%, Xhigh 52.1%를 원문 table에서 확인
- benchmark는 capability의 한 측면이며 production 품질·지연·비용 보장은 아니라는 원문 설명

## 비용·속도·안전성 경계
- 최대 30% 작업당 비용 절감과 30% 이상 출력 속도는 Anthropic 자체 testing 결과
- cache warmness, prompt/tool pattern, retry, concurrency, region, provider routing은 원문이 보장하지 않은 production 변수
- automated behavioral audit에서 Sonnet 5 대비 alignment 대부분의 measure 개선 또는 동등이라는 vendor 설명
- safeguard는 고위험 request의 좁은 범위를 대상으로 하며 routine software development와 대부분 life-sciences 작업은 영향 범위 밖이라는 원문 설명

## 개발자 migration·운영 항목
- Claude Platform model ID는 `claude-sonnet-5-5`로 확인
- thinking-off 사용자는 migration 전 `between_tools` 설정 전환 필요
- account 간 conversation 이동 또는 Claude Code 중간 account switch에서 preserved thinking 동작을 문서로 확인 필요
- 기존 Sonnet workload는 task class·token/tool call·p95/p99·error/retry·quality·cache hit·guardrail false positive를 기준으로 canary 비교 필요
