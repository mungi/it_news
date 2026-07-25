---
source_url: https://github.com/alibaba/fastjson2/wiki/Security-Advisory:-Remote-Code-Execution-in-fastjson-1.2.68%E2%80%931.2.83
title: "Security Advisory: Remote Code Execution in fastjson 1.2.68–1.2.83"
ingested: 2026-07-25
published: 2026-07-21
sha256: 9c3aa77bb6a2bd050cceed3895f76af70f043bab73656669cc37706f1d1b60c4
tags: [it, cybersecurity, security, release]
---

# fastjson 1.x 1.2.68–1.2.83 원격 코드 실행 보안 공지

## 확인한 원문 사실

- Alibaba `fastjson2` GitHub Wiki 보안 공지는 2026-07-21에 fastjson 1.x `1.2.68`~`1.2.83`의 원격 코드 실행 결함을 Critical로 분류함
- 기본 구성에서 AutoType 활성화와 classpath gadget 없이 악용 가능하다고 명시함
- 확인된 전제는 `java -jar`로 구동하는 Spring Boot executable fat-JAR이며, Spring Boot 2.x·3.x·4.x와 JDK 8·11·17·21에서 end-to-end 검증했다고 명시함
- `JSON.parse`, `JSON.parseObject(String)`, `JSON.parseObject(String, Class)` 진입점이 도달 가능하다고 설명하며, DTO에 Object/Map 형식 필드가 있으면 target class 고정만으로 완화되지 않는다고 경고함
- fastjson2 전체 버전, SafeMode 활성화, `noneautotype` build, plain non-fat JAR·generic uber-JAR·Tomcat/Jetty WAR, fastjson 1.2.60 이하는 영향 없음으로 열거함
- SafeMode 활성화 또는 `noneautotype` build를 즉시 완화로, fastjson2 이관을 장기 조치로 제시함

## 관련 보도와 증거 경계

- The Hacker News는 2026-07-25 보도에서 ThreatBook·Imperva가 공격 관측을 보고했다고 전함. RSS `pubDate` 2026-07-25 18:22:43 +05:30은 2026-07-25 21:52 KST임
- 해당 보도는 7월 25일 기준 patched fastjson 1.x artifact가 없다고 설명하지만, 원 공지는 fastjson2 이관을 장기 조치로 제시함
- 보도는 CISA ADP exploitation 평가와 KEV 부재 사이의 차이를 설명하지 못한다고 명시함
- 보도에 인용된 관측은 exploit activity 증거이며, 공격 횟수·원시 요청·실행 성공 증거·피해 조직·침해 확정 증거가 공개되지 않았으므로 모든 공격이 RCE 또는 침해로 성공했다는 뜻은 아님

## 운영 메모

- 직접·전이 fastjson dependency, Spring Boot executable fat-JAR 배포, network-reachable JSON parser, SafeMode 상태를 우선 inventory 필요
- 즉시 이관이 불가능한 서비스는 SafeMode 또는 `noneautotype` 적용 전 호환성 검증, egress·webshell·child process·unexpected nested JAR URL hunt 병행 필요

## 관련 URL

- https://thehackernews.com/2026/07/fastjson-1x-rce-vulnerability-targeted.html
- https://threatbook.io/blog/fastjson-rce-1.2.83-active-exploitation-detected-detection-mitigation
- https://fearsoff.org/research/fastjson-1-2-83-rce
