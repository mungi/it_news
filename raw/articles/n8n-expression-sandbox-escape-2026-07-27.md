---
source_url: https://github.com/advisories/GHSA-gv7g-jm28-cr3m
title: n8n: Expression sandbox escape via arrow-function bodies enabling command execution
ingested: 2026-07-28
published: 2026-07-27 22:05 KST
sha256: c7f778088ed93d6348000460029d451a1d60606d848ff4dafb9106a2984e196d
tags: [security, devtools, n8n, nodejs, workflow, rce]
---

# n8n expression sandbox escape

- GitHub Reviewed advisory `GHSA-gv7g-jm28-cr3m`는 workflow 생성·수정 권한을 가진 인증 사용자가 crafted arrow-function expression으로 n8n expression sandbox를 우회해 host에서 의도하지 않은 system command를 실행할 수 있다고 설명함
- 영향 package range는 `<2.31.5` 및 `>=2.32.0,<2.32.1`이며 patched release는 `2.31.5`, `2.32.1`임
- CVSS v4 8.7 High, CVE 미할당 상태, network attack vector·low privileges·user interaction 없음으로 공개됨
- The Hacker News는 연구자가 `ArrowFunctionExpression` 처리 공백과 property check 우회 조합을 보고했으며 `process.getBuiltinModule`과 `child_process` 접근으로 host command를 실행하는 PoC를 `2.30.4`에서 시험했다고 보도함
- The Hacker News는 보고 준비 시점 active exploitation을 관측하지 못했다고 전함

## 검증 경계

- source_url의 GitHub advisory는 영향 조건·patch version·임시 workaround 불충분성을 직접 확인한 primary advisory임
- THN 보도의 정확한 RSS timestamp `2026-07-27 18:35:15 +05:30`을 KST로 변환해 카드 시각에 사용했으며, 기술 exploit-chain 세부와 active-exploitation 부재는 해당 보도 범위임
- n8n Cloud 영향, 모든 1.x deployment 상태, 실제 침해 사례와 credential/data access는 공개 자료로 확정하지 않음
