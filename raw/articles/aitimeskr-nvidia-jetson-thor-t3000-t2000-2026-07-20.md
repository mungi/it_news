---
source_url: https://www.aitimes.kr/news/articleView.html?idxno=41044
title: 엔비디아, 차세대 Jetson Thor T3000·T2000 공개
ingested: 2026-07-20
published: 2026-07-20 11:23 KST
sha256: 01c311f1aacee7cc1e4c50ab4890ab97d5b72af9089c850d536a93d41508cf4f
tags: [ai, infra, edge, inference, semiconductor, global]
---

# 엔비디아 Jetson Thor T3000·T2000 공개

- 인공지능신문은 엔비디아가 7월 16일 Blackwell 기반 `T3000`·`T2000`과 Jetson Agent Skills, Cosmos 3 Edge를 공개했다고 보도함
- `T3000`: 8코어 Neoverse Arm CPU, 32GB LPDDR5X, 273GB/s, 25GbE, 최대 **865 FP4 TFLOPS**로 기사에 제시됨
- `T2000`: 16GB 메모리와 400 FP4 TFLOPS를 edge visual AI·AMR·산업용 manipulator 대상 SKU로 제시함
- 기사 내 T5000 대비 크기·전력 절반 및 유사 추론 성능은 엔비디아 주장 범위이며, workload별 latency·thermal·power·safety 검증 필요

## 운영 경계

- peak 성능보다 model context·batch·sensor buffer·network QoS·thermal throttling·OTA rollback을 fleet acceptance test로 검증 필요
- Jetson Agent Skills 자동 최적화 output은 reproducible build, SBOM, source control, rollback artifact로 관리 필요
- FP4 성능 수치와 채택 사례는 독립 현장 성능·가용성 보장이 아님
