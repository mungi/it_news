---
source_url: https://github.blog/security/how-we-found-24-android-vulnerabilities-using-our-open-source-ai-security-agent/
title: How we found 24 Android vulnerabilities using our open source AI security agent
ingested: 2026-09-29
published: 2026-09-29 04:00 KST
sha256: b6cbe680609c15c9989f9d239ff8ff35b7f31ee9dca4ca78af9c19eb1c961e83
tags: [ai, cybersecurity, devtools, open-source]
---
# GitHub Security Lab Taskflow Agent: Android 앱 취약점 24건을 찾은 AI 감사 workflow 공개

## 핵심 요약

- GitHub Security Lab이 오픈소스 `seclab-taskflows` Android audit workflow로 현재까지 24건의 취약점을 보고했다고 공개함.
- `gather_mobile_entry_point_info.yaml`로 mobile/non-mobile entry point를 분리하고, `classify_application_local.yaml`에서 intent·component별 취약점 class를 반복 검토함.
- 실행에는 GitHub Copilot license·premium model request가 필요하며, medium-sized repository 기준 1~2시간과 다수 tool call이 들 수 있음.
- 결과의 `has_vulnerability` 표시는 triage 시작점이며 reproducer·영향 조건·human review·responsible disclosure를 별도 evidence로 운영 필요.

## 원문

- 발표일: 2026-09-29 04:00 KST (원문 `2026-09-28T19:00:00+00:00`)
- 원문은 OsmAnd exported `MapActivity`의 attacker-controlled intent extra와 settings import·tile URL 변경 사례를 설명함.
- 24건은 GitHub Security Lab의 reported disclosure 수이며, 자동 탐지율·false-positive rate·자동 수정 품질을 보장하는 benchmark는 아님.
