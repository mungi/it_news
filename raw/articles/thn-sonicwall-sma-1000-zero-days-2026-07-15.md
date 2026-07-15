---
source_url: https://thehackernews.com/2026/07/two-sonicwall-sma-1000-zero-days.html
title: Two SonicWall SMA 1000 Zero-Days Exploited, One Could Enable Admin Commands
ingested: 2026-07-15
published: 2026-07-15 14:30 KST
sha256: 3b837534bcc75b9e8c0f4f29eefe529084788bb98fd5be18e4c8a7ecb132d691
tags: [security, sonicwall, vpn, zero-day, ssrf, remote-access]
---

# SonicWall SMA 1000 제로데이 2건 활성 악용

- SonicWall이 SMA 1000 계열의 두 취약점이 실제 악용된 사례를 조사했다고 경고함
- `CVE-2026-15409`: 원격 비인증 공격자가 의도하지 않은 위치로 appliance 요청을 유도할 수 있는 **CVSS 10.0 SSRF** 결함
- `CVE-2026-15410`: Appliance Management Console의 인증 후 code injection으로 특정 조건에서 관리자 권한 OS 명령 실행 가능
- 패치: `12.4.3-03453` 또는 `12.5.0-02835` 이상의 platform-hotfix 제공

## 침해 조사 조건

- `extraweb_access.log`의 `/__api__/login`·`/__api__/logout` HTTP 200, 의심스러운 `/wsproxy` host·101 응답을 IoC로 제시
- `ctrl-service.log`의 path traversal 이름 hotfix rollback과 `/var/lib/unit/conf.json`의 비정상 API route를 확인 대상으로 제시
- IoC가 있으면 물리 appliance 재이미징 또는 가상 appliance 재배포, 사용자·관리자 비밀번호와 TOTP token 재설정을 권고함

## 검증 경계

- SonicWall의 활성 악용 경고와 The Hacker News 보도는 취약점·조치 범위를 뒷받침함
- 조직별 침해 범위와 공격자 활동은 자사 로그·forensic 조사로 별도 확인 필요
