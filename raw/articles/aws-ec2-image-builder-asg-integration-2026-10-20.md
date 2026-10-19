---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-image-builder-asg-faster-builds/
title: EC2 Image Builder now integrates with ASG for faster image builds
ingested: 2026-10-20
published: 2026-10-20 02:30 KST
sha256: deeabcc9262a7344cfe7ead502cefe11a0ca3bebccc37ab31cc8b6155dda3747
tags: [aws, ec2, image-builder, autoscaling, ami, cicd, platform-engineering, global]
---
# EC2 Image Builder ASG 통합

AWS What’s New RSS 원문을 기준으로 EC2 Image Builder의 ASG 실행 인스턴스 활용 기능을 기록.

- 기능: infrastructure configuration에 ASG를 지정해 새 instance launch 대신 실행 중 instance를 image build에 사용
- 동작: 선택된 instance에 build component를 적용해 image를 만들고, 사용된 instance는 ASG가 다음 pipeline용 pool로 보충
- 호환성: opt-in 기능이며 ASG 미설정 pipeline은 기존 default launch path 유지
- 제공: 모든 AWS Region, 기능 자체의 추가 비용 없음이라는 공지 범위
- 경계: AMI·patch level·instance profile·workspace cleanup·credential 수명·concurrent build·artifact provenance는 자동 보장 범위 밖
- 팀 액션: build 전용 ASG 격리와 build manifest·cleanup evidence·default path 대비 canary 필요
