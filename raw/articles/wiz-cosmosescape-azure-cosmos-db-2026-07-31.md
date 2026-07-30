---
source_url: https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db
title: CosmosEscape: Taking Over Every Database in Azure Cosmos DB
ingested: 2026-07-31
published: 2026-07-30 22:34 KST (THN RSS publication evidence; Wiz page date-only)
sha256: dce67da6108e722e65e33af922f8f4c9aafba54c0a4622d51be9d49e19125ade
tags: [cloud, cybersecurity, azure, database, multi-tenancy, global]
---

# Wiz CosmosEscape Azure Cosmos DB research

- 발행·정렬 시각: Wiz 원문은 `July 30, 2026` 날짜만 표시. 정확한 시각은 THN RSS `Thu, 30 Jul 2026 19:04:09 +05:30`를 `2026-07-30 22:34 KST`로 변환해 보도 시각으로만 사용
- 원문: own Gremlin database의 crafted query가 .NET reflection restriction을 우회해 DB Gateway code execution으로 이어질 수 있었고, platform-wide key·Config Store 접근을 통해 cross-tenant database access가 가능했을 수 있다는 Wiz research

## 원문 핵심

- Cosmos DB custom Gremlin engine이 query를 .NET code로 변환해 restricted environment에서 실행한다는 Wiz 분석
- .NET reflection restriction gap으로 file read/write primitive와 arbitrary code execution을 만들었다는 연구 결과
- DB Gateway는 multi-tenant Service Fabric cluster에서 customer query를 대행하며 target account primary key를 사용한다는 설명
- platform-wide signing key가 tenant·region·SQL/MongoDB/Cassandra/Gremlin API를 가로질러 account primary key를 얻을 수 있었다는 Wiz 주장
- regional Config Store에서 account name·subscription/tenant ID·network settings·tags를 찾을 수 있었다는 Wiz 주장
- private/network-isolated account도 provider-side gateway boundary 때문에 impact path에 포함될 수 있었다는 Wiz 설명

## remediation·증거 경계

- Microsoft vendor statement: 2025-11-20 disclosure 뒤 48시간 내 Gremlin entry point mitigation, 2026-07 all-region long-term fix와 Cosmos Master Key 제거 완료
- Microsoft vendor statement: research 외 unauthorized activity와 customer data access 증거 없음, customer action 불필요
- 공개 자료는 CVE/CVSS, vulnerable architecture 최초 배포 시점, full exploit query, log review 전체 기간을 제공하지 않음
- potential access architecture와 actual victim data access를 동일 주장으로 취급하지 않음

## 출처

- https://www.wiz.io/blog/cosmosescape-taking-over-every-database-in-azure-cosmos-db
- https://thehackernews.com/2026/07/azure-cosmos-db-flaw-exposed-platform.html
