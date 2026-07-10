---
source_url: https://news.hada.io/topic?id=31274
title: Tenda firmware contains undocumented backdoor authentication mechanism
ingested: 2026-07-10
published: 2026-07-10 04:34
tags: [security, cve, network-security, edge-device, weekly-briefing]
---

# Tenda 펌웨어 여러 버전에서 문서화되지 않은 인증 백도어 발견

- 출처: GeekNews
- 게시: 2026-07-10 04:34 KST
- 원문: https://news.hada.io/topic?id=31274
- 관련 원 출처: https://kb.cert.org/vuls/id/213560

## 요약
핵심: CERT/CC VU#213560과 GeekNews 정리에 따르면 일부 Tenda 네트워크 장비 펌웨어의 웹 관리 인터페이스에 문서화되지 않은 인증 우회 경로 존재. 영향: 사용자명 검증 없이 `sys.rzadmin.password` 값 일치만으로 role=2 관리자 세션 생성 가능.

## 상세 메모
### 무슨 일이 있었나
- 핵심: 일부 Tenda 라우터·네트워크 장비 펌웨어에서 문서화되지 않은 인증 백도어 메커니즘 확인
- 식별자: 취약점은 CVE-2026-11405와 CERT/CC VU#213560으로 공개
- 상태: 공급업체 조율 실패로 고정 버전이 제공되지 않아 운영 완화책 의존 필요

### 본문 핵심 포인트
- 동작: `/bin/httpd`의 `login()` 함수가 일반 MD5 기반 비밀번호 검증 실패 뒤 `GetValue("sys.rzadmin.password")` 호출
- 우회: 입력 비밀번호가 설정 저장값과 일치하면 사용자명 검증 없이 role=2 관리자 세션 생성
- 영향: 관리자 권한 획득 뒤 장치 재구성, 네트워크 설정 변경, 보안 기능 비활성화 가능
- 대상: FH1201, W15E, AC10, AC5, AC6 계열의 특정 펌웨어 버전 영향
- 제약: 기본 LAN IP 변경은 자동 스캐너 노출만 줄이며 표적 스캔과 내부자 접근을 막지는 못함

### 왜 중요한가
- 영향: SOHO·지점 라우터의 웹 관리 인터페이스는 VPN, Wi-Fi, NAT, DNS 설정을 바꿀 수 있는 네트워크 경계 자산임
- 보안: 패치가 없으면 취약 장비 inventory와 관리 인터페이스 노출 차단이 취약점 대응의 실제 통제 수단임
- 운영: 원격 관리가 켜진 장비는 인터넷 스캔과 credential stuffing보다 낮은 비용으로 장악될 가능성 존재

### 시사점
- 팀 액션: 네트워크 운영팀은 Tenda 모델·펌웨어 inventory, WAN 관리 비활성화, 관리 UI 접근 ACL, 교체 우선순위 지정 필요
- 탐지: 방화벽·NDR에서 Tenda 관리 포트 외부 접근, 설정 변경 이벤트, DNS/NAT 변경 로그를 별도 점검 필요
