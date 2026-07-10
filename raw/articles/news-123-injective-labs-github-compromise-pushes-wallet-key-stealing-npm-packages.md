---
source_url: https://thehackernews.com/2026/07/injective-labs-github-compromise-pushes.html
title: Injective Labs GitHub Compromise Pushes Wallet-Key-Stealing npm Packages
ingested: 2026-07-11
published: 2026-07-11 01:29
tags: [ai, cloud, infra, weekly-briefing]
---

# Injective Labs GitHub 침해, 지갑 키 탈취 npm 패키지 배포로 이어짐

- 출처: The Hacker News
- 원문: https://thehackernews.com/2026/07/injective-labs-github-compromise-pushes.html
- 발행(KST): 2026-07-11 01:29

## 요약
핵심: Injective Labs GitHub compromise가 wallet key를 훔치는 npm packages 배포로 이어졌다고 The Hacker News가 보도. 영향: 오픈소스·Web3·CI/CD 조직은 GitHub 계정 보안과 package publishing 권한을 하나의 공급망 경계로 관리해야 함.

## 상세
The Hacker News는 Injective Labs GitHub 침해가 wallet-key-stealing npm packages 배포로 이어진 사례를 보도함. 공격자는 신뢰된 조직/저장소 경로를 악용해 개발자 설치 경로에 악성 패키지를 밀어 넣을 수 있으며, GitHub 계정, npm publish token, package provenance, dependency review가 함께 통제돼야 함.

## 무슨 일이 있었나
- 핵심: Injective Labs GitHub compromise가 wallet key stealing npm packages 유포로 이어진 사례 공개
- 대상: Web3 개발자, npm 패키지 사용자, GitHub organization 운영팀
- 위험: 신뢰된 GitHub namespace와 package distribution path가 동시에 오염되면 dependency install 단계에서 credential theft 가능

## 본문 핵심 포인트
- 공급망 경로: GitHub 계정 침해, repository 신뢰, npm package publication이 연결된 공격 흐름
- 피해 유형: wallet key와 developer secret 탈취 가능성이 핵심 위험
- 탐지 포인트: 새 package version, maintainer 변경, publish token 사용 위치, postinstall script, obfuscated payload 확인 필요
- 대응 범위: GitHub access token rotation, npm token rotation, package yanking, dependency lockfile audit, endpoint scan 필요

## 왜 중요한가
- 개발자 위험: 패키지 설치는 CI runner와 로컬 노트북의 secret 접근권을 갖는 경우가 많아 단일 npm compromise가 조직 침해로 확대 가능
- Web3 위험: wallet private key 탈취는 코드 품질 문제가 아니라 직접 자산 손실로 연결
- 거버넌스 위험: GitHub organization 보안과 package registry 보안을 분리 운영하면 침해 후 배포 차단 시간이 길어짐

## 시사점
- 팀 액션: npm publish 권한은 hardware key MFA, provenance, least privilege, short-lived token 중심으로 재정비 필요
- 검토 항목: CI에서 npm install 시 lifecycle script 제한, dependency diff review, package signature/provenance verification 적용 필요
- 운영 과제: GitHub compromise 탐지와 registry package revocation을 하나의 incident runbook으로 연결 필요
