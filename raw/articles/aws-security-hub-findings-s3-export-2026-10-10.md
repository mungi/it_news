---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-exports-s3-csv-json/
title: AWS Security Hub now exports findings to S3 in CSV or JSON format
created: 2026-10-10
ingested: 2026-10-10
published: 2026-10-10 07:00 KST
sha256: 99b3e98c66a03a4919d46941a137d383ff4d6f51b8808017d17259ee8b3162ff
tags: [cloud, cybersecurity, aws, security-hub, ocsf, compliance, global]
---
# AWS Security Hub findings S3 내보내기

- AWS What’s New RSS: `Fri, 09 Oct 2026 22:00:00 GMT`, KST `2026-10-10 07:00`
- source boundary: Security Hub console의 Threats·Exposure·Vulnerabilities·Posture Management·Sensitive Data·All Findings 페이지에서 on-demand export를 시작하고 계정 내 S3 bucket으로 전달하는 기능임. CSV 또는 JSON(OCSF)을 고를 수 있으며, Security Hub 제공 모든 AWS Region에서 제공된다고 공지함
- unspecified: S3 bucket policy·KMS encryption·cross-account delivery·object naming·delivery latency·retention·overwrite 동작·export IAM action과 비용은 공지에서 확정하지 않음

## 핵심 요약

- 제공: 별도 extraction pipeline 없이 console finding page에서 S3 export 시작
- 형식: spreadsheet 검토·공유용 CSV 또는 downstream security analytics용 JSON `OCSF` 선택
- 범위: Threats·Exposure·Vulnerabilities·Posture Management·Sensitive Data·All Findings page 대상
- 리전: AWS Security Hub 제공 모든 AWS Region이라는 공지 범위
- 팀 액션: S3 destination을 새로운 security evidence export boundary로 분류하고 bucket policy·KMS·retention·access log·downstream schema validation을 canary로 검증
