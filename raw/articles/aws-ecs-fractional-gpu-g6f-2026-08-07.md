---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-fractional-gpu/
title: Amazon ECS now supports fractional GPU scheduling with Amazon EC2 G6f instances
ingested: 2026-08-07
published: 2026-08-07 07:00 KST  # AWS RSS-derived; page displays date only
sha256: b74ddf2c2c1677747d97cbdea614ea4ed33dd293de12b1c63e685b567899251b
tags: [cloud, aws, ecs, gpu, containers, finops, global]
---

## 원문 확인
- AWS What’s New 페이지를 2026-08-07 KST에 직접 확인
- AWS RSS `Thu, 06 Aug 2026 22:00:00 GMT`를 `2026-08-07 07:00 KST`로 변환; 페이지는 `Aug 6, 2026`만 표시
- EC2 G6f instance를 사용하는 Amazon ECS fractional GPU scheduling 지원 공지
- G6f instances로 capacity provider를 구성하고 ECS task definition container definition에 fractional GPU value를 지정하는 방식
- CloudWatch Container Insights와 GPU hardware failure 탐지·unhealthy instance 자동 교체를 함께 언급
- 기능은 EC2 G6f instance 제공 AWS Region에서 사용 가능하다는 공지

## 운영 검증 경계
- GPU fraction별 memory/compute isolation, noisy-neighbor 영향, CUDA/driver/framework compatibility, workload latency·throughput, scheduler fragmentation, quota·가격은 공지에서 확인되지 않음
- whole-GPU baseline과 fraction별 memory·utilization·tail latency·OOM/Xid·reschedule·idle share를 representative model workload로 비교 필요
