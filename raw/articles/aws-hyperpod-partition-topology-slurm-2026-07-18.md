---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/hyperpod-partition-topology-slurm/
title: Amazon SageMaker HyperPod now supports partition-level topology for Slurm orchestrated clusters
ingested: 2026-07-18
published: 2026-07-18 00:16 KST
sha256: 6125097b375dc37b69edeec2977ea17055d7375c221fc1c06202289f36a17c41
tags: [aws, sagemaker-hyperpod, slurm, gpu, infra, distributed-training]
---

# Amazon SageMaker HyperPod: Slurm partition별 topology-aware scheduling

- Slurm orchestrated HyperPod cluster에서 partition-level network topology configuration 지원
- 하나의 cluster에서 instance type별로 tree topology와 block topology 병행 가능
- `ml.p6e-gb200.36xlarge` UltraServer partition에는 block topology, `ml.p5.48xlarge`·`ml.p5e.48xlarge`·`ml.p5en.48xlarge` partition에는 tree topology 적용
- HyperPod가 scale-up·scale-down·node replacement 뒤 topology 구성을 자동 유지
- Slurm 25.11 이상과 지원 GPU instance type 필요, topology-aware scheduling은 기본 활성화

## 확인한 범위와 운영 경계

- AWS 발표는 GPU-to-GPU communication과 NCCL collective 효율 개선 목적을 설명하지만 workload별 처리량·queue wait·비용 절감 수치는 제공하지 않음
- topology 정보가 없는 instance type partition은 AWS 설명상 fully schedulable 상태 유지
- production 전 동일 모델·batch·sequence length로 NCCL 시간, step time, GPU idle, node replacement recovery를 partition별로 비교 필요
