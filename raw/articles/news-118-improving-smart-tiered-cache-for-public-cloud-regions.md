---
source_url: https://blog.cloudflare.com/smart-tiered-cache-for-public-clouds/
title: Improving Smart Tiered Cache for Public Cloud Regions
ingested: 2026-07-11
published: 2026-07-10 22:00
sha256: 9cd866f42c383f0581fda3cdd461c618611b6d6f1a4b93cc215620a6776c3ec5
tags: [ai, cloud, infra, weekly-briefing]
---

# Cloudflare, public cloud anycast origin용 Smart Tiered Cache region hint 공개

- Source: Cloudflare Blog
- URL: https://blog.cloudflare.com/smart-tiered-cache-for-public-clouds/
- Published KST: 2026-07-10 22:00
- Category: Cloud

## Korean briefing
핵심: Cloudflare가 AWS·GCP·Azure·Oracle Cloud origin에 region hint를 입력해 anycast IP 뒤의 실제 cloud region에 가까운 upper tier를 고르는 Smart Tiered Cache 개선 공개

핵심: public cloud anycast·regional unicast origin은 latency probe만으로 위치 식별이 어려워 cache miss가 여러 upper tier로 분산
변화: 고객이 `aws:us-east-1`, `gcp:europe-west1` 같은 region hint를 제공하면 Cloudflare가 primary/fallback upper tier를 region 기준으로 선택
영향: Singapore origin을 Chicago upper tier로 우회하는 hairpin traffic 같은 대륙 횡단 round trip을 줄일 수 있음
시사점: CDN·origin 운영팀은 cloud LB IP가 anycast인지 확인하고 IaC로 region hint를 관리 필요

## Detailed notes
### 무슨 일이 있었나
- 핵심: Cloudflare가 public cloud region용 Smart Tiered Cache 개선 공개
- 대상: AWS, GCP, Azure, Oracle Cloud에 origin을 둔 고객의 anycast·regional unicast front end 대상
- 기능: Origin Configuration에서 region hint를 설정하면 Cloudflare가 해당 region에 맞는 primary·fallback upper tier 선택
- 관리: dashboard뿐 아니라 API와 Terraform을 통한 region hint 설정 지원

### 본문 핵심 포인트
- 기존 방식: Cloudflare data center별 origin IP latency probe로 가장 가까운 upper tier를 선택하고 cache miss를 한 지점에 집중
- 문제: public cloud anycast IP는 여러 Cloudflare data center에서 동시에 가깝게 보여 실제 origin region 판단이 어려움
- 결과: Cloudflare가 확실한 단일 upper tier를 고르지 못하면 여러 upper tier로 fallback해 cache efficiency가 낮아질 수 있음
- 예시: Singapore origin이 cloud anycast IP 때문에 Chicago upper tier로 선택되면 Asia user 요청이 대륙 횡단 hairpin route를 탈 수 있음
- 탐지: 여러 checkpoint latency가 물리적 광섬유 전파 시간보다 빠른 조합이면 단일 origin이 아니라 anycast 응답으로 판단

### 왜 중요한가
- 성능 영향: cache miss 경로가 불필요하게 길어지면 origin pull latency, connection 수, egress 경로가 동시에 악화
- 비용 영향: CDN hit ratio가 낮아지면 cloud origin egress와 backend connection load가 증가 가능
- 운영 영향: cloud provider IP range가 계속 변하므로 자동 prefix 갱신, latency probe, fallback PoP 선택이 CDN 측 제어면으로 이동

### 시사점
- 팀 액션: Cloudflare 사용 조직은 origin IP별 provider·region inventory를 만들고 anycast 감지 origin에 region hint 적용 검토 필요
- IaC 항목: Terraform/API로 region hint를 관리하고 cloud region 변경, DR 전환, multi-region load balancing 시 cache topology 변경을 함께 배포 필요
