---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-node-js-python-public-preview/
title: AWS Lambda introduces managed runtimes in public preview for Node.js 26 and Python 3.15
ingested: 2026-08-26
published: 2026-08-25 22:00 KST
sha256: bc61f4251b3b0c7b9978f9f4024140b1ff8d05b6d7063e43373734765b6c27da
tags: [aws, lambda, nodejs, python, serverless, devtools]
---
AWS Lambda가 Node.js 26과 Python 3.15 managed runtime을 public preview로 제공함. GA 전에 customer·partner·upstream language community가 workload와 runtime compatibility를 시험하고 feedback을 제공하는 경로임. 기존에는 managed runtime이 바로 GA로 출시돼 production workload에 영향을 줄 breaking change를 이후 적용하기 어려웠다는 배경을 AWS가 설명함.

preview 기간에는 breaking change가 가능하며, third-party observability provider·infrastructure-as-code tool·deployment framework도 GA 전에 compatibility를 검증할 수 있음. preview runtime은 Lambda SLA와 AWS Technical Support plans 대상이 아니므로 production workload 사용 비권장 범위임. preview와 GA runtime은 같은 identifier를 사용해 GA 시 function이 별도 조작 없이 자동 승격됨.

Console에서 `Node.js 26 (Preview)` 또는 `Python 3.15 (Preview)`를 선택하거나 AWS CLI·CloudFormation·AWS SAM·AWS CDK에서 `nodejs26.x` 또는 `python3.15`를 지정해 시작할 수 있음. AWS commercial Regions·AWS GovCloud (US) Regions·China Regions에서 제공하며 preview function은 standard Lambda rate로 과금된다는 공식 공지. dependency·native extension·layer·handler·event source·cold start·SLO·supportability는 customer workload별 검증 대상임.
