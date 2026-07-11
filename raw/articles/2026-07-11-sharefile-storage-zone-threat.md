---
source_url: https://thehackernews.com/2026/07/urgent-progress-tells-sharefile.html
title: Progress tells ShareFile customers to shut down Storage Zone Controllers
ingested: 2026-07-11
published: 2026-07-11 01:30
tags: [security, cloud]
sha256: 0c7259a34b7b433e5337be81c33b84135eea8b690a2dbd49655972bbbd4048f4
---

# Progress tells ShareFile customers to shut down Storage Zone Controllers

## Korean briefing

요약: 핵심: Progress가 ShareFile Storage Zone Controller 고객에게 Windows 서버를 오프라인으로 전환하라고 권고, ‘credible external security threat’ 대응 중임을 확인. 영향: 인터넷에 노출된 파일 공유 edge component는 패치 공지 전에도 격리·로그 보존·침해 조사 절차가 필요함.

상세:
- 핵심: Progress Software가 ShareFile Storage Zone Controller를 운영하는 고객에게 해당 Windows server shutdown 권고
- 사유: 회사가 ‘credible external security threat’에 대응 중이며 내부·외부 보안 전문가와 조사 진행
- 범위: standard cloud-only ShareFile account가 아니라 고객이 직접 운영하는 Storage Zone Controller가 영향 대상
- 운영 상태: Progress status page는 Storage Zone Controller 고객을 not operational로 표시하고 조사 진행 상태 공지
- 노출 구조: controller는 고객 파일을 자체 storage에 두면서 ShareFile cloud로 공유·관리하는 edge server이며 일반적으로 internet reachable 구성
- 조치 의미: 패치가 아니라 완전 오프라인 전환을 요구한 점은 아직 공개된 수정책이 없거나 패치만으로 해소되지 않는 위협 가능성
- 권고 사항: controller를 offline 유지, 버전 5.12.4 이상 또는 6.x 확인, web folder의 낯선 `.aspx` 파일과 의도하지 않은 storage path 점검, 로그 보존 필요
- 파일 전송 리스크: ShareFile류 edge file-sharing component는 MOVEit, Citrix/ShareFile 과거 사례처럼 대량 데이터 탈취 공격의 표적이 될 수 있음
- 사고 대응: 공급사가 세부 취약점을 공개하기 전에도 고객은 외부 노출 서버를 침해 가능 자산으로 취급해야 함
- 가용성 영향: 오프라인 전환은 파일 공유 업무 중단을 만들지만 데이터 유출 가능성을 낮추는 containment 조치
- 팀 액션: ShareFile Storage Zone Controller 사용 조직은 서버를 오프라인 유지하고 Progress의 재가동 지시 전까지 우회 업무 흐름 준비 필요
- 검토 항목: internet exposure, WAF/log retention, web shell 흔적, storage path 변경, service account credential 회전 여부 확인 필요
- 운영 과제: managed file transfer·file sharing edge 제품은 patch SLA 외에 emergency isolation runbook과 business continuity plan 필요

시사점: 보안팀은 ShareFile Storage Zone Controller를 인터넷 노출 edge asset으로 분류하고 로그 보존, 웹셸 점검, 자격증명 회전, 재가동 승인 절차를 즉시 실행 필요.
