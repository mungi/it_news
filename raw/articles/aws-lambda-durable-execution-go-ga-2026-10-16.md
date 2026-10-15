---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-go-sdk-support/
title: AWS Lambda Durable Execution SDK for Go is now generally available
created: 2026-10-16
ingested: 2026-10-16
published: 2026-10-16 03:23 KST
sha256: 82e056f6a0e9ef0b6de254c1792f2ee657c282f2570cdcb977fe8418e3d51041
tags: [aws, lambda, serverless, go, workflow, devtools, cloud, global]
---
# AWS Lambda Durable Execution SDK for Go GA

AWS 공식 공지와 Recent Announcements RSS의 Go용 Lambda Durable Execution SDK GA를 기록.

- 기능: 인프라 자동화·승인 gate가 있는 배포·AI model 호출 후 human review 같은 multi-step application용 durable function SDK
- 실행: step progress checkpoint, callback integration, durable invocation, efficient wait 제공; 외부 event 대기 시 최대 1년 pause 가능
- 개발: `go get`으로 module 추가, `provided.al2023`에서 단일 static binary 배포, `durabletest`로 network·AWS credential 없이 local workflow test, `durablelint`로 resume 시 workflow를 깨뜨릴 코드 검사
- 경계: 제공 리전·가격은 Lambda Durable Functions regional availability/pricing 확인 필요; timeout·retry·idempotency·callback authorization·human approval의 business control은 고객 구현 범위
- 팀 액션: durable boundary마다 idempotency key·state schema version·callback identity·compensation·deadline·replay test를 release gate에 포함
