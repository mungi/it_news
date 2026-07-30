---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-transit-gateway-policy-based-routing/
title: AWS announces general availability of Policy-Based Routing on AWS Transit Gateway
ingested: 2026-07-31
published: 2026-07-31 00:39 KST
sha256: b74d8746267ceeaf58ac86a397a9ea74799a86c034cd49f55509f7a36fdf7e9c
tags: [cloud, aws, networking, transit-gateway, global]
---

# AWS Transit Gateway Policy-Based Routing GA

- 발행·정렬 시각: AWS RSS `Thu, 30 Jul 2026 15:39:00 GMT`를 `2026-07-31 00:39 KST`로 변환. 원문은 `Jul 30, 2026` 날짜만 표시
- 원문: Transit Gateway PBR이 source/destination IP, port, protocol 조합으로 forwarding을 정하고 attachment별 policy table과 first-match-wins rule을 사용한다고 발표

## 원문 핵심

- 기존 destination IP 중심 route lookup과 달리 packet attribute 조합으로 forwarding 가능
- sensitive workload를 AWS Network Firewall 또는 third-party inspection appliance로 보내는 use case 제시
- source·port·protocol 조건으로 Direct Connect 또는 AWS VPN path를 선택하는 use case 제시
- production·development를 다른 routing domain으로 보내 lateral movement를 제한하는 use case 제시
- Transit Gateway가 제공되는 모든 commercial AWS Region에서 Console·CLI·SDK로 설정 가능
- PBR 자체 별도 추가 요금은 없으며 standard Transit Gateway fee는 별도 고려 대상

## 증거 경계와 운영 메모

- source는 appliance session symmetry, failover, throughput, cross-region/on-premises topology와 migration downtime을 보장하지 않음
- ordered rule은 broad condition이 specific condition을 shadow할 수 있으므로 IaC diff·flow log·rollback을 함께 검증 필요

## 출처

- https://aws.amazon.com/about-aws/whats-new/2026/07/aws-transit-gateway-policy-based-routing/
- https://aws.amazon.com/about-aws/whats-new/recent/feed/
