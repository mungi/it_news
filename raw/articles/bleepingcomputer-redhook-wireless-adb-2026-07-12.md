---
source_url: https://www.bleepingcomputer.com/news/security/redhook-android-malware-now-uses-wireless-adb-for-shell-access/
title: RedHook Android malware now uses Wireless ADB for shell access
ingested: 2026-07-13
published: 2026-07-12 23:27 KST
tags: [security, android, malware, mobile]
confidence: high
---

# RedHook Android malware now uses Wireless ADB for shell access

- 핵심: RedHook 최신 변종은 Accessibility 권한으로 Android 설정을 자동 조작해 Developer Options와 Wireless Debugging을 켠 뒤 127.0.0.1 loopback ADB pairing으로 shell UID 2000 권한 확보.
- 권한: shell 권한은 root는 아니지만 일반 앱보다 강해 보호 설정 변경, 앱 설치·삭제, 권한 부여, UI 자동화 범위 확대.
- 기능: 화면 스트리밍, 스크린샷, 키 입력 가로채기, 탭·스와이프 자동화, 연락처·SMS·앱 목록 수집, overlay/fake verification dialog, camera activation, reboot 지원.
- 지속성: silent audio playback, WakeLock, 상호 재시작 서비스, 5분 watchdog alarm, boot 이후 자동 재시작, oom_score_adj 조정 사용.
- 유포: 정부기관·금융기관을 사칭한 메시지와 전화로 fake Google Play 설치 유도.
- 시사점: MDM/EDR 정책은 Wireless Debugging, Accessibility 신규 승인, Shizuku류 권한 브리지, fake Play download flow를 탐지·차단 대상으로 추가 필요.
