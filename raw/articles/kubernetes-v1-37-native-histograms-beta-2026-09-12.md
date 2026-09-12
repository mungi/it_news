---
source_url: https://kubernetes.io/blog/2026/09/11/kubernetes-v1-37-native-histograms-beta/
title: Kubernetes v1.37: Native Histograms Graduates to Beta
ingested: 2026-09-13
published: 2026-09-12 03:30
sha256: acf57900eba47d92460b0b2013c8252c022026e342500d6e9f39502555130d41
tags: [infra, kubernetes, observability, prometheus, sre, release]
---
# Kubernetes v1.37 Native Histograms Beta

- 원문: https://kubernetes.io/blog/2026/09/11/kubernetes-v1-37-native-histograms-beta/
- 발행: 2026-09-12 03:30 KST (`2026-09-11T10:30:00-08:00` `article:published_time`)
- 확인: Kubernetes Blog canonical article·발행 메타데이터·본문 직접 확인

## 원문 핵심

- `NativeHistograms`가 v1.36 Alpha 뒤 v1.37 Beta·default-on으로 전환
- `k8s.io/component-base/metrics`의 classic bucket과 native span을 함께 내보내는 dual exposition 경로
- `BucketFactor: 1.1`·`MaxBucketNumber: 160` default, source의 약 5% worst-case relative quantile error 설명
- static bucket 대비 histogram series 최대 90% 절감 가능성은 classic series 수집 중단 조건의 source 설명
- Prometheus 3.0 이상 job별 `scrape_native_histograms`, 전환기 `always_scrape_classic_histograms: true` 병행 경로
- collector native scrape disable은 restart 불필요, component gate disable은 restart 필요

## 증거 경계

- source의 capacity·error bound는 Kubernetes default configuration 설명이며 조직별 storage·query SLO 보증이 아님
- native-only 전환 전 dashboard·recording rule·SLO·remote write receiver의 query/payload compatibility 검증 필요
