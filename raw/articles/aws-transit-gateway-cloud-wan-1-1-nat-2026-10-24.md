---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/
title: AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT
ingested: 2026-10-24
published: 2026-10-24 00:43 KST
sha256: 665a0850db61b6e1ede0019aa91cf7286cbde75970c5061551edb5c5bdd7e33f
tags: [aws, transit-gateway, cloud-wan, nat, networking, cloud, global]
---
# AWS Transit Gateway·Cloud WAN 1:1 NAT

AWS What’s New canonical announcement의 embedded `postDateTime` `2026-10-23T15:43:00Z`와 본문을 대조해 KST `2026-10-24 00:43` 기준으로 기록.

- 공개: Transit Gateway·Cloud WAN attachment에 Regional Private NAT Gateway 기반 managed 1:1 NAT 제공
- 대상: overlapping CIDR을 쓰는 VPC, Site-to-Site VPN partner network, Direct Connect, Transit Gateway Connect SD-WAN appliance 연결
- 동작: attachment에서 source CIDR→private translated range rule을 정의하고 양방향 변환을 자동 적용
- 제거 범위: network renumbering, 별도 NAT appliance 배포, return-traffic rule 작성 부담 축소
- 사례: 인수 뒤 양쪽 VPC가 `10.0.0.0/16`을 쓰는 경우 한쪽 address를 non-overlapping range로 변환해 연결하는 방식
- 운영: Console·CLI·SDK·CloudFormation으로 설정하고 CloudWatch metric·EventBridge event로 translated traffic 관측
- 제공: 두 서비스가 동작하는 모든 AWS commercial Region 범위, 가격은 Amazon VPC pricing 참조
- 경계: 1:1 NAT가 application allowlist, DNS, security group, route asymmetry, MTU, stateful inspection 호환성을 자동 해결한다는 근거 아님
- 팀 액션: 대표 CIDR collision path에서 return path·flow log·NAT port/cost·failover와 IaC drift를 canary로 확인
