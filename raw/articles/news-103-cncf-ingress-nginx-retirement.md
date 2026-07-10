---
source_url: https://www.cncf.io/blog/2026/07/09/navigating-the-ingress-nginx-retirement/
title: Navigating the ingress-NGINX retirement
ingested: 2026-07-10
published: 2026-07-10
sha256: 5587d2ad3fa826702b211cb2c837dd67fc3da24652033f8f6ec28530d276344d
tags: [infra, kubernetes, networking]
---

# CNCF, ingress-NGINX 은퇴 전환 안내…Kubernetes Ingress API와 컨트롤러 수명주기 분리 필요

- 출처: https://www.cncf.io/blog/2026/07/09/navigating-the-ingress-nginx-retirement/
- 발행(KST): 2026-07-10 05:45
- 분류: Infra / Global

## 요약

핵심: CNCF는 Kubernetes Ingress API가 은퇴하는 것이 아니라 ingress-NGINX 컨트롤러 프로젝트 수명주기 전환이 이슈라고 설명. 영향: 운영팀은 Ingress 리소스 자체보다 컨트롤러 구현체, 보안 패치, Gateway API 전환 경로, vendor 지원 상태를 분리해 점검 필요.

## 상세

핵심: CNCF 글은 ingress-NGINX retirement와 Kubernetes Ingress API 지원을 혼동하지 말라고 정리함. 영향: 클러스터 표준 컴포넌트로 보이던 Ingress controller도 프로젝트 유지보수 상태에 따라 교체·마이그레이션·지원 계약 의사결정이 필요한 운영 자산임.

### 무슨 일이 있었나
- 핵심: CNCF가 ingress-NGINX retirement 관련 전환 안내 게시
- 정정: Kubernetes Ingress API 자체가 은퇴하는 것이 아니라 ingress-NGINX 컨트롤러 프로젝트 수명주기 이슈임을 설명
- 대상: Kubernetes 외부 트래픽 진입점으로 ingress-NGINX를 사용하는 클러스터 운영팀

### 본문 핵심 포인트
- 구분: Ingress API는 계속 지원되고 널리 사용되지만 특정 컨트롤러 구현체의 유지보수 상태는 별도 판단 필요
- 위치: ingress controller는 인터넷·내부 트래픽이 서비스로 들어오는 경계에 위치해 보안 패치 중요도 높음
- 마이그레이션: Gateway API나 다른 Ingress controller 전환은 annotation, rewrite, TLS, WAF, observability 설정 호환성 확인 필요
- 운영: managed Kubernetes 환경에서도 기본 ingress add-on 또는 Helm chart 버전과 지원 정책 확인 필요
- 리스크: 프로젝트 수명주기 종료 뒤 신규 취약점 대응과 호환성 업데이트가 지연될 가능성

### 왜 중요한가
- 보안: Ingress controller 취약점은 외부 노출면에서 즉시 exploitable path가 될 수 있음
- 플랫폼: 애플리케이션 팀이 annotation과 controller-specific behavior에 의존했다면 단순 교체가 어려움
- 거버넌스: CNCF 프로젝트라고 해서 모든 컴포넌트가 동일한 지원 기간과 운영 책임을 갖는 것은 아님

### 시사점
- 팀 액션: ingress-NGINX 버전, 배포 방식, annotation 사용량, TLS termination, auth/WAF 통합을 클러스터별로 점검 필요
- 전환 과제: Gateway API PoC, 대체 컨트롤러 성능·호환성 테스트, canary migration, rollback 절차를 분기 단위로 계획 필요

