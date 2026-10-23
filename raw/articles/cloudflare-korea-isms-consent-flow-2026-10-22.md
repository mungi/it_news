---
source_url: https://blog.cloudflare.com/k-isms/
title: Localizing compliance at scale: achieving South Korea’s ISMS certification
ingested: 2026-10-23
published: 2026-10-22 22:00 KST
sha256: a072124f1c7be4551b02a4c5af3d45a82b923fa667b330f5c86beffbe2ca7ca5
tags: [cloudflare, isms, korea, privacy, identity, compliance, security]
---
# Cloudflare 한국 ISMS 인증·가입 동의 경로

Cloudflare 공식 원문과 `article:published_time` `2026-10-22T13:00:00Z`를 대조해 KST `2026-10-22 22:00` 기준으로 기록.

- 인증: KISA 지정 심사원과 10일간 80개 통제를 검토한 뒤 한국 ISMS 인증 획득 사실 공개
- 가입: 한국 국가 선택·IP 지리정보에 따라 4개 동의 항목을 분리 표시하고 3개 필수 항목 동의 전 가입 버튼 비활성화
- 국가 신호: origin `CF-IPCountry` header와 Worker `request.cf.country`에서 두 글자 국가 코드 사용 범위 설명
- 우회 차단: 자체 가입 화면을 건너뛰는 Google·Apple·GitHub 소셜 가입을 한국에서 제공하지 않는 구현 선택
- 선택 동의: 마케팅 동의는 선택 사항이며 미동의가 계정 생성 자체를 막지 않는 범위
- 경계: 공급자 인증과 가입 구현 사례이며 고객 워크로드의 규제 적합성·보관 위치·위탁 처리 범위 보장 아님
- 팀 액션: SSO·SCIM·초대·API provisioning·계정 복구까지 포함한 account creation path별 consent evidence와 bypass test 점검
