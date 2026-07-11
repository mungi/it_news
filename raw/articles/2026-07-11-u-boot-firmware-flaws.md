---
source_url: https://www.bleepingcomputer.com/news/security/new-u-boot-flaws-could-enable-stealthy-firmware-attacks/
title: New U-Boot flaws could enable stealthy firmware attacks
ingested: 2026-07-11
published: 2026-07-11 06:59
tags: [security, infra]
sha256: bf78f448febc0212dc3d3dfe747d649644dca644fc2157ff08acf089fffda029
---

# New U-Boot flaws could enable stealthy firmware attacks

## Korean briefing

요약: 핵심: Binarly가 U-Boot bootloader에서 6개 결함을 공개, 이 중 2개는 악성 boot image가 서명 검증 전에 code execution으로 이어질 수 있음. 영향: 라우터, 카메라, 서버 관리 칩, 임베디드 장비의 secure boot 신뢰 체인을 firmware update와 공급망 검증 관점에서 재점검 필요.

상세:
- 핵심: Binarly가 널리 쓰이는 U-Boot bootloader에서 신규 결함 6건 공개
- 영향 범위: home router, smart camera, data-center server management chip 등 U-Boot 기반 장비가 잠재 대상
- 상태: BRLY-2026-037~042 advisory로 추적되며 CVE는 아직 미배정, 실제 공격 악용 보고 없음
- 공격 지점: U-Boot가 FIT(Flattened Image Tree) package를 읽고 digital signature를 확인하기 전 untrusted image 처리 단계에서 결함 도달
- 코드 실행: BRLY-2026-037과 BRLY-2026-038은 `fdt_get_name`이 malformed image에서 null pointer와 negative length를 반환하는 상황을 제대로 검사하지 않아 stack overflow 또는 return address overwrite 가능
- 장애 유발: BRLY-2026-039와 041은 attacker-controlled size/offset 신뢰로 out-of-bounds read, 040은 null dereference, 042는 깊게 중첩된 이미지로 stack exhaustion 유발
- 수명주기: 취약 코드가 U-Boot v2013.07부터 50개 이상 stable release와 여러 vendor firmware에 포함됐다는 Binarly 설명
- 부팅 체인: bootloader code execution은 OS와 EDR보다 먼저 실행돼 secure boot와 device trust를 우회할 수 있음
- 운영 영향: 부팅 불능 장비는 물리 접근과 flash 재기록이 필요할 수 있어 edge·OT·remote site 운영 비용 증가
- 공급망 리스크: vendor firmware가 U-Boot를 내장한 경우 upstream patch만으로는 실제 장비 패치 여부 확인 불가
- 팀 액션: U-Boot 기반 장비 목록, vendor firmware 버전, secure boot 설정, 원격 복구 경로를 asset inventory에 추가 필요
- 검토 항목: firmware update pipeline에서 image signature 검증, rollback protection, recovery partition, physical access 절차 점검 필요
- 운영 과제: CVE 미배정 상태라도 BRLY advisory 기준으로 vendor 대응과 maintenance window를 추적 필요

시사점: 인프라·보안팀은 OS 취약점 스캐너만으로는 부족하므로 firmware SBOM, bootloader 버전, vendor advisory, 원격 복구 절차를 asset 관리에 포함 필요.
