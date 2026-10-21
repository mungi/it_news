---
source_url: https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching
title: Critical Vulnerabilities in PHP Require Immediate Patching
ingested: 2026-10-22
published: 2026-10-21 KST
sha256: 04d1deeb78f854515dad85cc8fcabcc2ce21c45e9718ac2d23adffba1d4e5497
tags: [php, cybersecurity, web-security, vulnerability, incident-response, cloud, global]
---

# CISA php2shell 긴급 패치 권고

CISA alert 원문을 기준으로 PHP `CVE-2026-109618`·`CVE-2026-109619` 대응 범위를 기록. CISA는 공개 시점 exploitation을 관측하지 않았다고 했으나, web request를 처리하는 PHP installation에 영향을 주는 unauthenticated RCE risk로 즉시 patch를 권고함.

- fixed release: PHP 8.5.12·8.4.27·8.3.36·8.2.35
- 우선순위: internet-facing system을 먼저 식별·patch
- 예외: 즉시 update 불가 또는 PHP 8.1 이하 unsupported system은 patch/update 전 offline 전환 권고
- 임시 통제: WAF는 update 또는 patch 전 일부 protection 가능
- hunt: PHP worker process의 shell launch·tool download suspicious activity 점검
- 경계: CISA는 publication 시점 exploitation을 관측하지 않은 범위, WAF는 patch 완료 증명이 아님
