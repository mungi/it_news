---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-cloudwatch-agent-journald/
title: Amazon CloudWatch agent adds support for journald logs
ingested: 2026-08-29
published: 2026-08-29 01:00 KST
sha256: fee712c18f91dae5f47e01e6a61783cba661d0c485dfacb7d460dcd856683312
tags: [aws, cloud, observability, logging, linux, devops]
---
AWS가 Amazon CloudWatch agent의 Linux systemd journal(`journald`) 직접 수집을 추가함. agent는 journal entry를 먼저 파일로 export하지 않고 CloudWatch Logs로 전송하며, Amazon Linux 2023처럼 `/var/log/messages`를 기본 생성하지 않는 systemd 기반 환경을 대상 범위로 제시함.

journald가 가진 systemd unit·priority·process metadata를 보존하고 systemd unit, journal priority, journal field match, publish 전 regular expression filter를 설정할 수 있음. 지원은 모든 AWS Commercial Region과 GovCloud(US)이며 CloudWatch Logs standard pricing이 적용됨.

공지에는 agent journal 접근 권한, structured field의 PII·secret 노출, filter 정확성·순서, cursor/restart 뒤 delivery completeness, cross-account·KMS·retention, ingestion/query 비용과 SLO가 보증되지 않음. representative instance에서 file-tail과 native journald의 event count·metadata completeness·filter drop·delivery lag·GB/day·rollback을 비교할 필요가 있음.
