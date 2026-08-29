---
source_url: https://kubernetes.io/blog/2026/08/28/kubernetes-v1-37-pod-certificates-and-cluster-trust-bundles/
title: Kubernetes v1.37: Pod Certificates and Cluster Trust Bundles
ingested: 2026-08-29
published: 2026-08-29 03:30 KST
sha256: 5bf2cc6446a1077ef60796ca9c0039bf9a23cac3c9ab318c4a56c0174438b803
tags: [kubernetes, infra, cybersecurity, cloud]
---
Kubernetes v1.37에서 Pod Certificates와 Cluster Trust Bundles가 GA로 승격됨. Kubernetes 공식 RSS entry `Fri, 28 Aug 2026 10:30:00 -0800` 기준 발행 시각은 KST `2026-08-29 03:30`임. 기존 service account JWT는 bearer token이어서 사본을 보유한 상대가 asserted identity를 재사용할 수 있지만, 새 기능은 TLS·mTLS용 X.509 proof-of-possession credential을 workload projected volume에 전달하는 기반을 제공함.

Pod가 node에 schedule되면 kubelet은 `podCertificate`와 `clusterTrustBundle` projected volume source를 식별함. 각 certificate source에서 kubelet이 `keyType`에 따른 private key를 만들고 signer 대상으로 `PodCertificateRequest`를 생성함. signer controller는 issuance 여부를 결정해 `status.certificateChain`과 kubelet의 refresh 시작 시점인 `status.beginRefreshAt`을 반환하며, kubelet은 key·certificate chain을 container filesystem에 기록함.

Kubelet은 signer name과 label selector에 맞는 ClusterTrustBundle을 수집해 certificate를 stable reorder한 뒤 trust file로 기록함. certificate와 trust bundle 변경은 filesystem에 갱신되지만 application이 inotify 또는 polling으로 reload해야 함. certificate chain과 key를 별도 file에 둘 때는 rotation 중 read race를 application이 처리해야 하며, single credential bundle file 사용이 이를 줄이는 경로임.

공식 원문은 향후 Kubernetes core에 포함될 signer는 최대 24시간 certificate lifetime을, 기타 signer는 최대 91일 lifetime을 갖도록 설명함. 다만 Kubernetes 프로젝트는 아직 core Pod Certificate signer를 제공하지 않으므로 third-party signer의 subject/SAN authorization·key custody·availability·managed service support는 별도 운영 계약임. signer deny/outage, expired credential, trust-anchor rollover, application reload failure를 포함해 issuance·renewal latency와 mTLS handshake failure를 canary로 검증해야 함.
