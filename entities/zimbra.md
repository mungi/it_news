---
title: Zimbra
type: entity
created: 2026-07-11
updated: 2026-07-11
tags: [email, collaboration, security]
confidence: high
---

# Zimbra

Zimbra Collaboration Suite는 자체 호스팅 이메일·협업 플랫폼이다. 기업·기관 환경에서 웹메일, 주소록, 캘린더, 계정 설정과 연결되기 때문에 Classic Web Client 취약점은 단순 UI 결함보다 계정·세션 보안 영향이 크다.

## 2026-07-11 보안 메모
- The Hacker News 보도: Classic Web Client 저장 XSS 취약점으로 crafted email 열람 시 사용자 세션에서 악성 스크립트가 실행될 수 있음.
- 위험: mailbox information, session data, account settings 접근.
- 권고: Zimbra Collaboration Suite 10.1.19 적용, 의심 이메일 격리, 세션 무효화, 계정 설정 변경 로그 점검.

## 관련 문서
- [[concepts/enterprise-email-security]]
- raw/articles/news-133-zimbra-classic-web-client-stored-xss.md
