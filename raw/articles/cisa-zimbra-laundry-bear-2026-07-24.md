---
source_url: https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-204a
title: Russian State-Supported Cyber Actors Conduct Phishing Campaign Targeting Users of Zimbra Collaboration Suite
ingested: 2026-07-24
published: 2026-07-23 03:36 KST
sha256: 0c1525a2a15d4f64191bedfc2cf950c5debd896ae4c17c77d447befdc6d71e59
tags: [security, cybersecurity, governance]
---

# CISA Zimbra CVE-2025-66376 악용 경보

CISA AA26-204A는 러시아 연계 LAUNDRY BEAR가 2025년 7월부터 Zimbra Collaboration Suite 사용 조직을 표적으로 삼았다고 경고함. `CVE-2025-66376`은 Zimbra Classic UI의 stored XSS이며, 취약 client에서 악성 이메일을 열람하면 authenticated webmail session 안에서 작동하는 view-based exploit으로 설명됨.

## 핵심 사실

- CISA 공개일: 2026-07-23, advisory `AA26-204A`
- 영향 범위: Zimbra 10.0 `10.0.18` 미만, 10.1 `10.1.13` 미만
- 탈취 시도: 최근 90일 mail, GAL, 민감정보와 account persistence artifact 범위
- 대응: patch 후에도 app-specific password·forward/filter·session·DNS egress를 별도 조사 대상으로 유지
- 시간 경계: CISA는 날짜만 제시. 연결한 THN RSS 시각 2026-07-24 00:06:08 +05:30을 03:36 KST로 변환했으며, 해당 시각은 CISA 공개 시각 주장 아님
