---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/ec2-images-supported-instances/
title: Amazon EC2 now supports specifying compatible instance types on AMIs
ingested: 2026-09-06
published: 2026-09-05 04:26
sha256: 1aef81aaf53e09d02107a759fc46eb307ead4818655d84e705844ba4ceaffae9
tags: [cloud, aws, infra, ec2, ami, autoscaling, platform-engineering]
---

# Amazon EC2 now supports specifying compatible instance types on AMIs

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/ec2-images-supported-instances/
- 원문 제목: Amazon EC2 now supports specifying compatible instance types on AMIs
- 발행: 2026-09-05 04:26 KST (`Fri, 04 Sep 2026 19:26:00 GMT` AWS RSS)
- 확인: AWS What’s New canonical announcement·AWS RSS entry·EC2 User Guide 직접 확인

## 원문 핵심

- AMI owner가 supported instance type·unsupported instance type 또는 두 목록을 지정 가능
- EC2가 새 launch 때 AMI specification을 확인하고 비허용 instance type은 hard block
- 비허용 조합의 `RunInstances`는 `InvalidParameterCombination` error 반환
- 기본값은 specification 미설정이며 기존 AMI는 모든 instance type 허용 상태 유지
- existing instance에는 영향이 없고 new launch에만 적용
- AMI owner만 specification 설정·변경 가능
- `CopyImage`가 instance type specification을 복사본에도 보존
- `ReplaceImageInstanceTypeSpecification`은 전체 specification 교체 방식
- launch template·Auto Scaling group이 비허용 type을 설정하면 launch 실패 가능

## 증거 경계

- 기능은 AMI와 instance type 조합의 사전 차단이며 application boot·device discovery·driver 호환·capacity·quota·ASG recovery·SLO를 보증하지 않음
- shared AMI restriction 변경 전 launch template·ASG·node group·fleet의 consumer inventory와 canary launch 검증 필요
- build manifest·policy-as-code·ASG activity·launch error·replacement p95·health check·rollback을 같은 change record로 관리 필요

## 출처

- AWS What’s New: https://aws.amazon.com/about-aws/whats-new/2026/09/ec2-images-supported-instances/
- EC2 User Guide: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-allowed-instance-types.html
