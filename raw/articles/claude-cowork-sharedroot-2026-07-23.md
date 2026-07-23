---
source_url: https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html
title: Claude Cowork Flaw Could Let AI Agent Escape Its VM and Access Mac Files
ingested: 2026-07-24
published: 2026-07-23 22:27 KST
sha256: 9624f5d269e3392e907497bc0d272e87b68f6ea731cb4d6ad023477cf97019e9
tags: [ai, security, governance]
---

# Claude Cowork 로컬 VM 탈출 보고: guest root 획득 뒤 Mac 전체 파일시스템 접근 경로

SharedRoot 보도와 직접 검증한 THN 기사 본문을 바탕으로 작성. Accomplish AI 연구가 제시한 chain은 local Cowork session, guest kernel CVE-2026-46331, guest-root, read-write host filesystem mount라는 조건을 함께 요구함. Anthropic이 최신 Cowork에서 cloud execution을 기본값으로 둔다고 보도됐지만, local opt-in 사용자의 실제 mount·kernel·daemon 설정은 별도 확인 대상임.

## 핵심 사실

- 발행: The Hacker News RSS `pubDate` 2026-07-23 18:57:59 +05:30을 **2026-07-23 22:27 KST**로 변환
- 영향 주장: 연구진은 patch 이전 local Cowork macOS 사용 약 50만 명을 영향 가능 범위로 제시
- 경계: 보도·연구는 local session 경로를 다루며 모든 Claude 제품·모든 macOS endpoint의 침해 사실을 뜻하지 않음
- 전제: guest의 unprivileged user namespace에서 `CAP_NET_ADMIN`을 얻는 namespace 구성
- 권한 상승: Linux `tc/act_pedit` 경로의 `CVE-2026-46331`을 악용해 guest-root를 얻는 연구 chain
- 전이: guest-root가 `/mnt/.virtiofs-root`의 read-write host `/` mount에 도달하는 구조
- 포함 가능 자산: user home의 source tree·SSH key·cloud credential·application config
- 미확정: 공개 보도만으로 특정 기업의 악용·침해 계정·공격 campaign 확인 불가
