---
source_url: https://blog.cloudflare.com/clairic-extraction-model/
title: Introducing Clairic, a new System One class of extraction models
ingested: 2026-10-20
published: 2026-10-20 02:48 KST
sha256: 15ac1249c28a8d78164865e71d04060083b2e202f7267a05e66f43240791f7d4
tags: [cloudflare, workers-ai, extraction-model, structured-output, calibration, ai, global]
---
# Cloudflare Clairic extraction model preview

Cloudflare 공식 원문을 기준으로 Workers AI의 Clairic preview와 typed output 계약을 기록.

- 제공: Workers AI `@cf/cloudflare/clairic` preview
- 기능: unstructured input에서 extracted·computed·estimated·forecasted value 반환
- extracted value: character offset와 confidence score 포함
- estimated·forecasted value: median과 80% interval 반환 범위
- 동작: single pass, token 비생성으로 typed output mismatch를 줄이려는 설계
- 경계: null 또는 오류 value 가능, accuracy·calibration·업무 성과 보장 아님
- 팀 액션: source provenance·validation·threshold·human review·fallback을 함께 운영
