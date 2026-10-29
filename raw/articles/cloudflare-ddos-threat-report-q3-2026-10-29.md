---
source_url: https://blog.cloudflare.com/ddos-threat-report-2026-q3/
title: Cloudflare DDoS Threat Report 2026 Q3: More swarms, fewer giants
ingested: 2026-10-29
published: 2026-10-29 21:55 KST
sha256: eadfb500103bcc3f46a0417f962ae3ff69e76b08ab005aa8bda3da9afb7eab35
tags: [cloudflare, ddos, threat-intelligence, network-security, dns, udp, botnet, global]
---
# Cloudflare DDoS 위협 보고서 2026 Q3: short-burst 증가와 DNS·UDP 벡터 전환

Cloudflare 공식 Q3 threat report를 기준으로 network-layer·HTTP DDoS 집계, short-burst 공격 비중, CLDAP 감소와 DNS amplification·UDP flood 전환, 조직별 방어 검증 경계를 기록.

- 공개: 2026-10-29 12:55 UTC, KST 2026-10-29 21:55
- 표본: Cloudflare 네트워크에서 관측·자동 완화한 Q3 2026 traffic이며 전체 인터넷 또는 개별 서비스의 대표 표본은 아님
- 집계: network-layer DDoS 1,820만 건, HTTP DDoS 요청 14.4조 건, 시간당 network-layer 약 8,226건
- 규모: network-layer 272.6PB, HTTP layer 95.1PB의 완화 traffic 수치
- 변화: 10분 미만·1Gbps 미만 attack이 전년 동기 대비 208% 증가했고 각각 전체의 96%·98% 범위
- 대조: 1Tbps 초과 hyper-volumetric attack은 Q2 805건에서 Q3 251건으로 감소했으나 다른 환경의 위험 감소 증거는 아님
- botnet: Mirai 분류 완화 traffic이 network-layer bytes의 46.5%, 최장 sustained attack 49.7시간 범위
- vector: CLDAP 비중은 99.5% 감소해 0.05%가 됐고 DNS amplification은 215% 증가해 3.43%, 일반 UDP flood는 14.06%→31.31%로 확대
- 운영: 짧은 burst는 사람 triage 전에 끝날 수 있으므로 edge·L4·firewall·origin의 detection timestamp, connection saturation, mitigation result를 같은 incident timeline으로 보존 필요
- 경계: Cloudflare의 자동 완화·500Tbps capacity·330개 이상 도시 수치는 다른 CDN, transit, on-premise, 직접 origin 방어 보장 아님
- 팀 액션: public DNS resolver·UDP listener·direct-origin CIDR·upstream scrubbing contact·10분 미만 burst alert 및 log retention을 owner별로 점검
