---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/
title: Amazon CloudFront now provides viewer ISP and post-quantum TLS details
ingested: 2026-10-31
published: 2026-10-31 03:15
sha256: 281da33df9c3e194f585d95793b07e3421a70ed7172829e32323118544d8dd6e
tags: [cloud, infra, cybersecurity, global]
---

# Amazon CloudFront viewer ISP and PQC TLS details

- 확인 시각: 2026-10-31 07:19 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/

## 확인한 사실
- `CloudFront-Viewer-ISP`가 viewer 인터넷 서비스 제공자 이름을 origin으로 전달
- `CloudFront-Viewer-TLS-Details`가 viewer TLS key exchange·signature scheme·signature public-key type을 전달
- origin request policy에 header를 추가하고 distribution에 연결해야 전달되는 optional 구성
- AWS가 ISP별 traffic/performance 분석, PQC를 실제 사용하는 viewer 비율과 미사용 client 식별을 사용 사례로 제시

## 운영 경계
- header는 viewer-to-CloudFront TLS connection telemetry이며 origin-to-upstream·internal TLS의 PQC 상태를 보장하지 않음
- ISP/TLS metadata의 retention·access·export와 missing/malformed header fallback을 별도 검증 필요
