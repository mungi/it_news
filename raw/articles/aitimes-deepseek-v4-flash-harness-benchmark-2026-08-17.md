---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214019
title: DeepSeek-V4 Flash agent harness benchmark 보도
ingested: 2026-08-17
published: 2026-08-17 10:17
tags: [ai, agent, devtools, benchmark, finops, global]
sha256: 989e456cc3bce688a13d6b4b20ca483cc9e6f7c279894c020693614313e75370
---

## 원문 메타데이터

- 제목: "하네스 따라 성과 10% 차"…'딥시크-V4 플래시' 테스트 결과 공개
- 출처: AI타임스
- URL: https://www.aitimes.com/news/articleView.html?idxno=214019
- 기사 발행 시각: 2026-08-17 10:17 KST (`article:published_time` 2026-08-17T10:17:15+09:00)
- Open Graph image: https://cdn.aitimes.com/news/photo/202608/214019_217636_114.png

## 직접 확인한 본문 사실

- Composio가 Gmail·GitHub·Slack·Google Sheets를 활용하는 30개 다단계 업무로 DeepSeek-V4 Flash를 평가했다는 기사 설명
- Claude Code·Codex·OpenCode·Oh My Pi 네 가지 agent harness에서 총 240회 workflow를 실행했다는 기사 설명
- 하네스별 과제 완료율 46.7~56.7%, 네 환경 모두 성공한 과제 6/30이라는 기사 수치
- Oh My Pi 17/30 완료, OpenCode 14/30 완료라는 기사 수치
- 성공 1회당 평균 실행 비용 Oh My Pi 0.073달러, Claude Code 0.195달러라는 기사 수치
- 평균 수행 시간 Claude Code 122.7초, Oh My Pi 272.4초라는 기사 수치

## 증거 경계와 운영 메모

- 직접 확인한 출처는 AI타임스 기사이며 Composio 원 실험 artefact·task definition·prompt·model revision·connector 권한·tool schema·retry/timeout·통계 방법은 이번 capture에서 확인하지 않음
- 기사 수치는 조직별 task success·SLO·비용·보안성·한국어 workload 품질·data handling·egress 통제를 보증하지 않음
- 운영 action: 고정 model revision과 동일 tool permission에서 harness별 task success·partial failure·retry·token·성공당 비용·p95 latency·approval·egress를 correlation ID로 수집 필요
