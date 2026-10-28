---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-gpu-sharing-nvidia-mps/
title: Amazon ECS GPU sharing with NVIDIA Multi-Process Service (MPS)
ingested: 2026-10-28
published: 2026-10-28 08:31
sha256: 24c9ec77f3bc6821a52dbef447211d4ae765c09bbc6b0d86129b7a4c7e934e5e
tags: [cloud, aws, infra, ai, gpu, containers, finops, global, release]
---

# Amazon ECS GPU sharing with NVIDIA Multi-Process Service (MPS)

- 확인 시각: 2026-10-28 10:05 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-gpu-sharing-nvidia-mps/

## 확인한 사실
- Amazon ECS가 NVIDIA MPS 기반 GPU sharing을 지원해 단일 NVIDIA GPU에서 여러 ECS task의 동시 실행 가능
- container별 GPU memory와 선택적 최대 GPU compute share를 정의하고, available capacity에 task를 배치하는 범위
- small-model inference·AV/ADAS simulation·embedding generation·multi-model serving을 부분 GPU 사용 사례로 제시
- ECS Managed Instances와 ECS on EC2에서 제공하며, Managed Instances는 MPS control daemon을 모니터링하고 비정상 시 instance 교체·task 이동 수행
- AWS commercial 및 GovCloud(US) 전체 리전에서 제공

## 운영 경계
- MPS sharing은 GPU memory isolation, noisy-neighbor 제거, workload별 latency/SLO 또는 GPU kernel crash 격리를 자동 보장하지 않음
- production 배치 전 memory ceiling·compute share·task admission·daemon restart·instance replacement·p95 latency·cost allocation을 workload 조합별로 canary 검증 필요
