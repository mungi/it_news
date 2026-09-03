---
source_url: https://kubernetes.io/blog/2026/09/02/kubernetes-v1-37-hpa-scale-to-zero-beta/
title: Kubernetes v1.37: Scale Workloads to Zero with HorizontalPodAutoscaler
ingested: 2026-09-03
published: 2026-09-03 03:30 KST
sha256: 5c8a951bbb7be84858d5c91c854d18dbe7dd3f2fd053e24aacbc6e8936b194d2
tags: [kubernetes, autoscaling, infra, cloud, devops]
---
Kubernetes 공식 블로그는 v1.37에서 HorizontalPodAutoscaler(HPA)의 workload scale-to-zero API 지원이 beta·default-on이 됐다고 발표함. 적합한 object 또는 external metric을 쓰는 HPA는 `minReplicas: 0`으로 workload를 0까지 내리고 metric 변화 시 다시 기동 가능함.

CPU·memory resource metric은 실행 중인 Pod에서 나오므로 replica가 0이면 scale-up 신호가 사라짐. queue length 같은 object·external metric은 worker와 독립적으로 존재하므로 0 replica 상태에서도 HPA가 읽을 수 있음. 예시는 Prometheus Adapter가 `queue_consumer_lag`를 External Metrics API로 노출하고, Deployment `queue-worker`를 0~10 replica와 task 30개당 1 replica로 설정함.

0 replica는 HPA가 내린 상태와 운영자가 수동 pause한 상태를 구분해야 함. HPA가 1 이상에서 0으로 낮추면 `ScaledToZero=True` condition을 기록하고, 이후 reconciliation이 object/external metric을 계속 평가함. 수동으로 Deployment를 0으로 설정한 경우에는 기존처럼 autoscaling이 pause되며 HPA가 깨우지 않음. metric adapter가 값을 반환하지 못하면 `ScalingActive=False` 및 `FailedGetExternalMetric` 같은 reason이 보고됨.

v1.37에서 `HPAScaleToZero` feature gate는 kube-apiserver와 kube-controller-manager 모두 default-on임. version-skew upgrade 중에는 두 control-plane component가 기능을 지원·enable한 뒤 `minReplicas: 0` HPA를 생성해야 하며, 구버전으로 rollback 또는 gate disable 전에는 대상 HPA를 `minReplicas: 1` 이상으로 바꾸고 0인 workload를 최소 1로 올려야 함. resource metric만 있는 HPA의 `minReplicas: 0`은 API server가 거부함.

공식 원문은 dedicated CPU·GPU Pod가 idle일 때 비용 절감 효과가 크다고 설명하지만 workload별 cold-start, queue durability, metric freshness, adapter availability, scheduling latency, HTTP request buffer, managed Kubernetes 제공 상태를 보증하지 않음. queue consumer부터 canary로 시작해 wake-up latency·backlog age·metric error·ScaledToZero condition·Pod scheduling·SLO·cost를 함께 검증할 필요.
