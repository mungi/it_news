---
source_url: https://www.aitimes.com/news/articleView.html?idxno=212969
title: MS, 애저 클라우드에 AMD Helios AI 가속기 도입
published: 2026-07-21 13:07
ingested: 2026-07-22
sha256: 910b308f4113c6cdbbe2d4ee58459f775843ef10108f214e2842d9cc0e493db6
tags: [infra, cloud, ai-chip, azure, amd, global, release]
---

# MS Azure, AMD Helios 랙 스케일 AI 시스템 도입 계획

- 발행: 2026-07-21 13:07 KST
- 원문: https://www.aitimes.com/news/articleView.html?idxno=212969
- 이미지: https://cdn.aitimes.com/news/photo/202607/212969_216341_3357.png

## 확인한 사실

- AI타임스는 AMD와 Microsoft의 협력 확대 발표를 인용해 Azure 데이터센터·Azure AI 서비스·Azure 고객용 인프라에 AMD Helios 랙 스케일 AI 가속기를 도입한다고 보도함.
- 기사 기준 Helios는 Instinct MI455X GPU, 6세대 EPYC Venice CPU, Pensando 네트워킹, ROCm 소프트웨어를 통합한 플랫폼임.
- AMD는 2026년 하반기부터 Microsoft를 포함한 주요 고객에게 Helios를 공급할 계획을 제시함.
- Azure Foundry Managed Compute 활용과 HDv2·HXv2 VM 계획이 함께 언급됐으나, 실제 Azure SKU·리전·quota·가격·SLA는 기사에서 확인되지 않음.

## 증거 경계

- Helios의 성능·전력 효율·공급 효과는 보도에 인용된 AMD·Microsoft 발표 범위임.
- 특정 모델, 리전, tenant workload의 throughput·cost·availability 보장으로 일반화하지 않음.
- 운영 판단에는 ROCm 호환성, VM availability, quota, network topology, maintenance·failure recovery를 별도 검증 필요.
