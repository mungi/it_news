---
source_url: https://kubernetes.io/blog/2026/09/01/kubernetes-v1-37-etcd-range-stream/
title: Kubernetes v1.37: etcd RangeStream Cuts Memory Use on Large List Reads
ingested: 2026-09-02
published: 2026-09-02 03:30 KST
sha256: 44dbd74a4ea0c4b7104d4922db198ff2e96ff23c1e1e1dd5d2696683ab871361
tags: [kubernetes, etcd, infra, cloud, devops]
---
Kubernetes 공식 블로그는 etcd RangeStream이 Kubernetes v1.37에서 beta로 승격됐다고 발표함. etcd v3.7의 `RangeStream` RPC는 기존 `RangeRequest`와 같은 결과 집합을 반환하되 전체 response를 먼저 조립하지 않고 value 크기에 맞춰 조정된 chunk로 stream함.

API server는 watch cache 초기화와 cache에서 처리할 수 없는 list request에서 각 chunk를 도착 즉시 decode·release함. 기존 key count 기반 pagination은 object byte size를 알지 못해 큰 Pod·CRD object와 concurrent read 조합에서 page memory가 커질 수 있으며, unary `Range` response는 etcd와 API server 양쪽에서 동시에 보관될 수 있음.

`EtcdRangeStream` feature gate는 v1.37에서 beta·default-on임. 실제 RangeStream 사용에는 etcd v3.7 이상이 필요하며, API server는 startup capability 확인과 runtime `Unimplemented` fallback으로 older etcd에서 기존 paginated `Range` path를 유지함. 필요 시 `--feature-gates=EtcdRangeStream=false`로 비활성화 가능함.

실제 사용은 `etcd_request_duration_seconds_count{operation="listStream"}`의 non-zero count로 확인함. 공식 원문은 memory footprint 감소와 peak usage 예측성 개선을 설명하지만 cluster별 절감량·latency·managed Kubernetes 지원·etcd upgrade 결과를 보증하지 않음. 대형 collection 조직은 apiserver/etcd RSS·GC·list latency·watch-cache 재초기화·OOM·fallback과 etcd v3.7 compatibility를 canary change evidence로 관리할 필요.
