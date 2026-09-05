---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-servicenow-native-data-source-connector/
title: Amazon Bedrock Managed Knowledge Base adds ServiceNow connector, user-managed setup, and automatic sync scheduling
ingested: 2026-09-05
published: 2026-09-05 06:14
sha256: d08ac2f561d08d2749d0c5c304d34aa4d92332b751f910537b0e34563c65f07f
tags: [ai, cloud, aws, rag, servicenow, data-governance]
---

# Amazon Bedrock Managed Knowledge Base adds ServiceNow connector, user-managed setup, and automatic sync scheduling

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-servicenow-native-data-source-connector/
- 관련 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-user-managed-setup-sharepoint-onedrive-confluence/
- 관련 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-automatic-sync-scheduling-data-source-connectors/
- 발행: 2026-09-05 06:14 KST (`Fri, 04 Sep 2026 21:14:00 GMT` AWS RSS pubDate)
- 확인: AWS What’s New 3개 canonical announcement와 AWS RSS entry 직접 확인

## 원문 핵심

- ServiceNow native data source connector가 knowledge article·service catalog item·file attachment를 crawl하고 metadata extraction·incremental sync 처리
- sys ID inclusion list로 특정 knowledge base·article category·service catalog만 수집하는 공식 scope 설정
- SharePoint·OneDrive·Confluence는 기존 2LO service-account credential 외에 사용자 third-party sign-in 기반 3LO setup 제공
- 3LO setup은 admin-level credential을 만들기 어려운 prototype 사용자의 setup path이며, AWS는 production workload에 기존 enterprise-grade programmatic option을 병행한다고 설명
- 모든 native data source connector에서 daily·weekly·monthly sync schedule 설정 가능
- AWS 예시: rapidly changing Confluence daily, SharePoint policy weekly, Amazon S3 reference monthly sync

## 증거 경계

- 공지는 source ACL의 retrieval authorization 보존, attachment MIME·malware scan, deletion propagation, OAuth token retention·rotation, ServiceNow rate limit·crawl retry, embedding/index 비용·latency, region·data residency·SLA를 보증하지 않음
- connector scope·integration account/OAuth consent·ACL mapping·data classification·sync lag·failed crawl·citation·delete propagation을 corpus별 acceptance evidence로 관리 필요
- stale 또는 과도하게 넓은 corpus는 connector disable·index rollback·credential revoke로 복구하는 절차 검증 필요

## 출처

- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-servicenow-native-data-source-connector/
- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-user-managed-setup-sharepoint-onedrive-confluence/
- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-bedrock-managed-knowledge-base-automatic-sync-scheduling-data-source-connectors/
