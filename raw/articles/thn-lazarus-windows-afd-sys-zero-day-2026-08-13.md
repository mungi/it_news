---
source_url: https://thehackernews.com/2026/08/lazarus-exploits-windows-zero-day-to.html
title: Lazarus Exploits Windows Zero-Day to Gain SYSTEM Access and Deploy Backdoor
ingested: 2026-08-13
published: 2026-08-13 02:39 KST
sha256: 5d3eb30cc723c62de402430503b0adbf6e134d11724183121fe4650bf023c35b
tags: [cybersecurity, operating-system, cloud-security, global]
---

## 원문 확인

- The Hacker News 원문 제목·본문·Open Graph image를 직접 확인함
- 기사 화면은 `Aug 12, 2026` calendar date만 표시함
- 카드 시각 `2026-08-13 02:39 KST`는 The Hacker News RSS `Wed, 12 Aug 2026 23:09:27 +0530` 변환값이며, 원문이 주장한 정확한 공개 시각 아님

## 확인된 사실

- THN은 Check Point Research 분석을 인용해 Lazarus Group이 Windows `afd.sys` `CVE-2026-68820` zero-day를 악용했다고 보도함
- 보도 대상은 프랑스·독일·브라질·인도의 방산·항공우주 조직이며, Operation Dream Job recruiter lure와 악성 PDF 또는 trojanized PDF viewer의 초기 실행 흐름을 설명함
- 두 감염 흐름에서 encrypted archive·DLL side-loading·`libmupdf.dll`·MISTPEN, 또는 Enveil 사칭 SecurityPDF·Troy payload를 설명함
- MISTPEN은 Microsoft Graph API·OneDrive를 통한 module retrieval, AFD.sys exploit, ForestTiger 배포 흐름으로 보도됨
- Troy는 파일 열거·업로드/다운로드·archive/exfiltration·interactive shell·process termination·in-memory DLL injection·configuration update를 포함한 17개 operator command를 지원한다고 보도됨

## 증거 경계

- Lazarus 귀속, Operation Dream Job 연계, 표적 국가·산업, payload chain은 THN이 Check Point Research를 인용한 분석 범위임
- 개별 조직 침해, 실제 피해 수, 모든 indicator의 악성성, data/credential theft, 모든 Windows host 영향은 확인하지 않음
- `CVE-2026-68820`은 local privilege escalation이므로 initial access를 스스로 제공하는 remote exploit로 해석하지 않음

## 운영 경계

- patch와 함께 recruiter lure, PDF viewer 신규 설치, DLL side-loading, archive extraction, Graph/OneDrive egress, SYSTEM-level persistence를 endpoint timeline에서 상관분석 필요
- IOC 하나만으로 감염을 확정하지 않고 execution chain·EDR·proxy·identity telemetry로 격리와 credential review를 결정 필요
