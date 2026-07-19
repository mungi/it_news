---
source_url: https://thehackernews.com/2026/07/new-wp2shell-wordpress-core-flaw-lets.html
title: New wp2shell WordPress Core Flaw Lets Unauthenticated Attackers Run Code
ingested: 2026-07-19
published: 2026-07-18 06:20 KST
sha256: eeb55b4f27ff3a5f6308beb583799e23fa5de95970bf0d1c04e9ca6957739431
tags: [security, cloud, wordpress, rce, sql-injection]
---
# New wp2shell WordPress Core Flaw Lets Unauthenticated Attackers Run Code

- WordPress 6.9.5와 7.0.2가 기본 설치에서도 anonymous request가 code execution에 이를 수 있는 `wp2shell` 연쇄 결함을 수정한 범위로 보도됨
- 보도는 `CVE-2026-63030` REST API batch-route confusion과 `CVE-2026-60137` core SQL injection을 결합하는 경로로 설명함
- full mechanism과 GitHub proof-of-concept가 공개된 상태로 보도돼 patch window의 exploit 재현 위험이 높아진 조건
- Cloudflare WAF rule은 proxy되는 request 완화 범위이며 core patch·origin isolation·침해 조사 대체 수단 아님

## 공개 정보와 범위

- The Hacker News는 2026-07-18 02:50:10 +05:30에 기사를 게시했으며 KST 변환 시 2026-07-18 06:20임
- 원문은 plugin이 없는 default install도 영향 가능 범위로 설명하지만 개별 사이트 침해 또는 광범위한 실제 악용을 확인하지 않음
- 두 CVE와 수정 버전은 WordPress·Cloudflare 공개와 교차 확인되나 exploit 세부 구현은 THN 보도 범위로 한정

## 운영 대응

- `6.9.5` 또는 `7.0.2` 적용 여부와 실제 core file·running version을 asset별로 확인할 대상
- Cloudflare proxy bypass, direct origin, alternate hostname, REST batch endpoint access log를 함께 점검할 대상
- patch 전후 administrator 생성, plugin/theme file hash, scheduled task, database error를 증적 보존 뒤 조사할 대상
