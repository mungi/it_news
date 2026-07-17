---
source_url: https://huggingface.co/blog/nvidia/nemotron-3-embed-wins-rteb
title: NVIDIA Nemotron 3 Embed Ranks #1 Overall on RTEB, Advancing Agentic Retrieval
ingested: 2026-07-17
published: 2026-07-17 01:01 KST
sha256: 626c0eca1c9e3c1d1f83b3531d618427cf772306a133cfdcd788eba3c8cc7dd6
tags: [ai, inference, agent, benchmark]
---

## NVIDIA Nemotron 3 Embed 공개: 8B·1B 오픈 임베딩 모델과 Blackwell NVFP4 배포 경로

- NVIDIA가 Hugging Face에 Nemotron 3 Embed 모델군을 공개함: 8B BF16, 1B BF16, Blackwell 대상 1B NVFP4 구성
- NVIDIA 측정에서 8B는 RTEB 78.5%, 1B BF16은 RTEB 72.4%를 제시함; 실제 corpus·언어·index·reranker 조건의 재현성은 별도 검증 대상
- 1B NVFP4의 최대 2배 처리량과 BF16 정확도 99% 이상 유지도 NVIDIA의 선택한 하드웨어·시험 조건 결과임
- 운영은 embedding 버전·index build·chunking·권한 필터·fallback을 같은 evaluation·rollback 체계로 관리 필요
