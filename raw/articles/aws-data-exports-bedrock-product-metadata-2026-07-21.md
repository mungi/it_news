---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/aws-data-exports-amazon-bedrock-product-metadata/
title: AWS Data Exports now provides standardized Amazon Bedrock product metadata
ingested: 2026-07-21
published: 2026-07-21 03:29
sha256: 82ce2deafa41873c368d831fa97ad8f548c87d6d1a6bc37e011d1504fea0a9c5
tags: [cloud, aws, finops, ai, foundation-model]
---
# AWS Data Exports now provides standardized Amazon Bedrock product metadata

## Source facts
- Published: 2026-07-21 03:29 KST (AWS What’s New RSS `pubDate`: 2026-07-20 18:29 UTC)
- AWS Data Exports(Cost and Usage Report)에 Amazon Bedrock 표준 product metadata를 추가함.
- 속성: model provider, model name, pricing unit, inference type(input/output tokens 등), feature(On-Demand/Batch 등 serving mode) 제공.
- CUR 2.0에서 model provider·model name·inference type·feature는 product map에, pricing unit은 별도 column에 제공됨.
- 모든 Bedrock 비용은 통합 `Amazon Bedrock` product family 이름으로 정리됨.
- AWS Data Exports를 사용하는 Bedrock 고객에게 기본 제공되며 해당 표준 필드에는 추가 요금이 없다고 발표함.

## Source boundary
- AWS는 조직별 비용 절감액, model routing 효과, chargeback 정확도, S3·Athena·warehouse query 비용을 보장하지 않음.
- account·application·tenant 기준 비용 귀속에는 조직의 tag, account structure, workload telemetry가 추가로 필요함.

## Related primary documentation
- Product columns: https://docs.aws.amazon.com/cur/latest/userguide/table-dictionary-cur2-product.html
- Amazon Bedrock: https://aws.amazon.com/bedrock/
