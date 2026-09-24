---
source_url: https://blog.cloudflare.com/containers-cross-tenant-vulnerability/
title: How Cloudflare addressed a cross-tenant data exposure vulnerability in Containers
ingested: 2026-09-25
published: 2026-09-25 00:00 KST
sha256: 622dab3e36dd2fb1262bd688a0e83e59e5ea261b96a9cac562931548511af5a6
tags: [ai, cloud, infra]
---

# Cloudflare Containers·Sandboxes: dm-thin 잔존 블록으로 발생한 cross-tenant data exposure 수정 공개

## 핵심 요약

- Cloudflare Containers와 Sandboxes의 multi-tenant dm-thin storage pool에서 residual disk block data exposure 가능성을 공개·수정함.
- 영향 pool은 64 KiB thin-block과 `skip_block_zeroing`을 사용했으며, 4 KiB partial write 뒤 남은 60 KiB에 이전 block owner의 byte가 남을 수 있었음.
- 특정 tenant·host·data 표적화와 residual data 존재는 보장되지 않으며, Cloudflare는 fleet-wide remediation 및 malicious exploitation evidence 부재를 명시함.
- 운영 대응: ephemeral disk secret·dump·artifact cleanup과 provider security notice·credential lifecycle을 함께 점검 필요.

## 원문

https://blog.cloudflare.com/containers-cross-tenant-vulnerability/
