---
source_url: https://www.aitimes.com/news/articleView.html?idxno=214774
title: 메타, '뮤즈 스파크 1.3' 출시...오픈AI 제치고 세계 3위 성능
ingested: 2026-09-03
published: 2026-09-03 06:45 KST
sha256: 4924d55f8dbc112f6d11c2f7a15300d78a15b6d7b5411cbd042a350e1c277b98
tags: [ai, foundation-model, agent, coding, benchmark, finops, safety, global]
---

AI타임스는 Meta가 Muse Spark 1.3을 발표하고 Muse Code·Meta Model API에 배포했다고 보도함. 기사 기준 Max mode는 일부 partner 제한 비공개 preview이고 xhigh는 일반 배포 version으로 구분됨.

기사에는 AAII Max 62점·xhigh 61점, DeepSWE v1.1 75.4점, Terminal-Bench 2.1 88.8점, MRCR 256K~512K 98.5점·512K~1M 98.1점, tool call 약 20%·생성 token 약 25% 감축이라는 Meta·benchmark 인용 수치가 포함됨. dataset·harness·seed·prompt·judge·tool permission·environment는 직접 확인하지 못했으므로 production 성능으로 확대하지 않음.

입력/출력 100만 token당 1.25/4.25달러와 xhigh task당 0.55달러도 기사 범위임. task definition·context·tool loop·cache·retry·concurrency·failure recovery·billing 조건이 미확인이라 TCO나 SLO 보증으로 기록하지 않음.

기사의 irreversible action user approval 언급은 approval API·audit·retention·tool policy 보증이 아님. Meta 원문·API availability·region·quota·support·contract·Max preview eligibility를 직접 확인하기 전, production credential과 분리된 feature flag·budget에서 task success·review·p95·unit cost·approval·rollback을 canary로 비교할 대상임.
