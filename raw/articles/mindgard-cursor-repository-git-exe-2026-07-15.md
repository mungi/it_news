---
source_url: https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left
title: Cursor Flaw Lets Malicious Cloned Repositories Trigger Windows Code Execution
ingested: 2026-07-15
published: 2026-07-15 19:55 KST
sha256: ad1d858c71103ad0be5c75c24249c7f4fee2006ff87b0ce97b985626a3d504e9
tags: [security, devtools, cursor, windows, supply-chain]
---

# Cursor Windows repository-root `git.exe` 실행 경로

- Mindgard가 Windows용 Cursor가 project root의 `git.exe`를 Git 탐색 중 경고 없이 실행할 수 있다고 공개함
- 최초 보고: 2025-12-15, 원문의 마지막 날짜 명시 재현: 2026-04-30 Cursor 3.2.16
- 안전 PoC: Windows Calculator를 `git.exe`로 변경해 repository root에 두고 Cursor로 열어 자동 실행 관찰
- 영향: 로그인 사용자 권한의 코드 실행으로 source·SSH key·cloud token 접근 범위를 상속 가능한 조건

## 검증 경계와 완화

- 이후 Cursor 버전 전체의 재현 여부와 수정 릴리스 존재는 vendor 공지·조직별 sandbox 시험으로 별도 확인 필요
- 패치 전에는 untrusted repository를 Windows Sandbox·VM에서 열고, workspace 경로의 지정 실행 파일을 AppLocker·Windows App Control·EDR로 차단 필요
