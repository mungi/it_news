---
source_url: https://www.cncf.io/blog/2026/07/15/hami-becomes-a-cncf-incubating-project/
title: HAMi becomes a CNCF incubating project
ingested: 2026-07-16
published: 2026-07-16 01:00 KST
sha256: 8dcde4f224f96d67bd4eb38e8888d58ae2c096d1f246db87288aec002f5cd587
tags: [ai, infra, kubernetes, gpu, open-source]
---

# HAMi becomes a CNCF incubating project

- CNCF TOC가 HAMi를 incubating project로 승인함
- HAMi는 Kubernetes에서 GPU·NPU·DCU·MLU 등 이기종 accelerator를 메모리·core·device count 단위로 분할하고 runtime isolation 및 topology-aware scheduling을 제공함
- 애플리케이션 코드나 기존 Kubernetes resource manifest 변경 없이 binpack·spread 정책을 적용하는 구조로 설명됨
- CNCF 게시물은 550개 이상 기여 조직, 10개 데이터센터의 10,000개 이상 GPU 배포 사례, 안정 버전 v2.9.0을 제시함

## 운영 검증 경계

- 기여 조직·배포 GPU 규모는 CNCF 프로젝트 게시물이 제시한 수치이며 조직별 utilisation 개선률·isolation overhead·vendor별 기능 동등성은 자체 workload benchmark로 재확인 필요
- GPU sharing 도입 전 MIG·time slicing·device plugin·quota·Kueue/Volcano/Koordinator 통합 경계와 failure domain을 별도 검증 필요
