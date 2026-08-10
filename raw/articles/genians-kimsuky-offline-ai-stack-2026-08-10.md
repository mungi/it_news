---
source_url: https://www.genians.co.kr/en/blog/threat_intelligence/kimsuky_ai_llm
title: Genians: Kimsuky AI/LLM infrastructure analysis
ingested: 2026-08-11
published: 2026-08-10
sha256: c0fb0c3c2382af35efcca611da6d16eafbbcc1573b9b9f3be94fe65e7e13dfda
tags: [ai, cybersecurity, korea, threat-intelligence]
---
Genians의 위협 인텔리전스와 이를 인용한 THN 보도는 Kimsuky 연계 인프라에서 offline AI application, local document retrieval, speech-to-text, coding component가 조립된 흔적을 설명함. localdocs_v3.db는 private document collection을 RAG에 연결하려는 구성 증거이나 문서의 탈취를 입증하지 않음. GitPower의 LNK→PowerShell·GitHub C2 계열과 결합해 endpoint behavior 중심 탐지가 필요함.
