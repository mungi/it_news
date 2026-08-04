---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/7/aws-transform-continuous-general-available
title: "AWS Transform continuous modernization is now generally available"
ingested: 2026-08-05
published: 2026-08-04 06:15 KST
sha256: 20c7980cfe49efc6bf13889cd057dc2eccd25efc89e7c361a753c390fdc0b607
tags: [ai, cloud, devtools, agent, cicd, security, product]
---

# AWS Transform continuous modernization GA

- AWS What’s New `postDateTime` `2026-08-03T21:15:00Z`를 `2026-08-04 06:15 KST`로 변환
- AWS Transform continuous modernization이 지원 리전에서 일반 제공됨
- GitHub organization·GitLab group·Bitbucket workspace를 연결하고, 기술 부채·보안·agentic readiness·modernization readiness·사용자 기준으로 분석을 실행·예약 가능

---

## 검토·수정 흐름

- AWS Transform 웹 애플리케이션에서 소스 공급자 연결, 분석 실행·예약, finding 우선순위화, remediation 생성 경로 제공
- remediation이 연결된 finding은 검증된 코드 변경을 담은 branch와 pull request 또는 merge request를 생성한다는 AWS 설명
- 분석과 remediation은 고객 AWS account와 credential에서 실행되고 source code는 고객 통제 아래 남는다는 발표 범위

## 실행 경로와 경계

- Kiro Power·agent plugin·AWS Transform CLI로 IDE·terminal에서 local repository 분석 가능
- label로 repository를 조직화하고 Amazon EC2 또는 AWS Batch에서 local/remote 분석 실행 가능
- supported region, source-provider authorization scope, code validation 의미, generated change의 품질·보안·CI pass rate·비용·SLA는 조직별 검증 대상
