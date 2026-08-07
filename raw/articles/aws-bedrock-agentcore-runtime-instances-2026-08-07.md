---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available/
title: AgentCore runtime instances are now generally available
ingested: 2026-08-07
published: 2026-08-07 05:00 KST  # AWS RSS-derived; page displays date only
sha256: cdcbe91a673b0f9853266e7d9be144a79ce5791dcc72b7e3ab7e30a49f2d3ab6
tags: [ai, cloud, aws, agent, ec2, finops, global]
---

## 원문 확인
- AWS What’s New 페이지를 2026-08-07 KST에 직접 확인
- AWS RSS `Thu, 06 Aug 2026 20:00:00 GMT`를 `2026-08-07 05:00 KST`로 변환; 페이지는 `Aug 6, 2026`만 표시
- AgentCore Runtime instances GA 공지: customer EC2에서 agent를 실행하고 AgentCore가 provisioning·patching·scaling·lifecycle을 처리하는 구성
- capacity provider에 GPU-accelerated·memory-optimized·compute-optimized EC2 instance type을 지정해 agent에 연결하는 방식
- Runtime instances session은 최대 14일, default microVM serverless runtime은 fast startup 용도 최대 8시간으로 공지
- 공지의 지원 리전은 미국 동부/서부, 뭄바이·싱가포르·시드니·도쿄, 프랑크푸르트·아일랜드이며 서울은 미포함
- provisioned compute management 비용과 Amazon EC2 비용이 함께 부과된다는 공지

## 운영 검증 경계
- session 상한은 application state durability, checkpoint/resume, tool transaction recovery, credential TTL을 보장하지 않음
- instance availability·quota, capacity interruption, VPC/network path, workload별 GPU/CPU 성능, 한국 리전 availability, 가격은 별도 확인 필요
