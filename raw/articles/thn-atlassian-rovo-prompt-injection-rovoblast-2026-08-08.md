---
source_url: https://thehackernews.com/2026/08/atlassian-rovo-can-be-tricked-into.html
title: Atlassian Rovo Can Be Tricked Into Sending Jira and Confluence Data to Attackers
ingested: 2026-08-08
published: 2026-08-08 17:54 KST (source article: 2026-08-08T14:24:00+05:30)
sha256: 2bfa7f9ae193d00d23e9400ca42386109b82f80a7c3b59e3b93d30fca076c99a
tags: [ai, cybersecurity, saas, agent, global]
---

- The Hacker News 보도: 인증된 Atlassian Rovo 사용자의 Jira·Confluence 접근 범위가 attacker-controlled instruction에 의해 수집되고 외부 server로 전송될 수 있는 두 연구 경로 설명
- PromptArmor 경로: 업로드 문서의 숨은 indirect prompt injection이 정상 요청 뒤 connector 검색 결과를 model-constructed URL request로 보낼 수 있다는 2026-08-05 공개 범위; web-search off 우회와 이후 remediation은 단일 출처·미확인 범위
- Varonis/Bugcrowd 경로: `rovoChatPrompt` URL parameter의 one-click prompt preload·Confluence API key exfiltration PoC를 보고했으며, Bugcrowd record는 Atlassian server-side fix와 reporter validation을 2026-07-08로 기록
- 운영 경계: source page `article:published_time` `2026-08-08T14:24:00+05:30` = `2026-08-08 17:54 KST`; 실제 조직 침해·credential theft·content-borne 경로의 현재 수정 상태는 확인하지 않음
- 대응: Rovo app/group·connector data scope·model-constructed URL/image fetch·egress log/DLP·approval과 audit correlation을 함께 검증 필요
