---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-network-bandwidth/
title: AWS Lambda announces scalable network bandwidth up to 3,000 Mbps for functions outside a VPC
ingested: 2026-08-06
published: 2026-08-06 06:35 KST  # AWS RSS-derived; page displays date only
sha256: 3109a3501721a266cbe329776c7bf2b42b82e5775dd8e42516b43afd180fdd22
tags: [cloud, aws, serverless, networking, performance, global]
---

## 원문 확인
- AWS What’s New 페이지를 2026-08-06 KST에 직접 확인
- AWS RSS `Wed, 05 Aug 2026 21:35:00 GMT`를 `2026-08-06 06:35 KST`로 변환; 페이지는 `Aug 5, 2026`만 표시
- VPC 외 Lambda execution environment에서 2 GB memory의 625 Mbps부터 10 GB memory의 최대 3,000 Mbps까지 memory 비례 대역폭을 제공한다고 공지
- account별 `Network bandwidth per execution environment` Service Quotas 요청이 필요하며 all commercial AWS Regions에서 추가 요금 없이 제공 공지

## 운영 검증 경계
- VPC-attached function, NAT·PrivateLink·on-premises path, upstream/downstream endpoint capacity, concurrency aggregate bandwidth는 공지의 workload 성능 보장 범위 아님
- memory tier별 transfer throughput·duration·GB-second·retry·throttling과 quota 승인 상태를 representative payload·concurrency로 비교 필요
