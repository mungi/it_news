---
title: Critical Zimbra Classic Web Client stored XSS
created: 2026-07-11
updated: 2026-07-11
source: The Hacker News
source_url: https://thehackernews.com/2026/07/critical-zimbra-flaw-could-let-crafted_0483473395.html
type: article
tags: [security, zimbra, email-security, xss, patch]
confidence: high
---

# Zimbra Classic Web Client 저장 XSS

The Hacker News는 Zimbra가 Classic Web Client의 critical 저장 XSS 취약점을 수정하라고 고객에게 권고했다고 보도했다.

## 확인한 사실
- 게시: 2026-07-11 15:45 KST로 RSS 후보에서 확인.
- 영향: 특수 제작 이메일을 열면 사용자 세션에서 악성 스크립트가 실행될 수 있음.
- 보도 시점 상태: CVE는 아직 배정되지 않았다고 설명됨.
- 잠재 영향: mailbox information, session data, account settings 접근 위험.
- 권고 버전: Zimbra Collaboration Suite 10.1.19 적용 권고.

## 엔지니어링 메모
- Classic Web Client 사용 여부와 Zimbra 10.1.19 적용 여부를 우선 확인한다.
- 패치 전후 forwarding rule, app password, recovery setting, 관리자 로그인 이력을 점검한다.
- 의심 HTML 이메일과 동일 sender/subject/body pattern을 조직 전체에서 검색한다.
- 웹메일 세션 무효화와 고위험 계정 재인증을 패치 절차에 포함한다.
