---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/07/ecs-service-connect-zone-aware/
title: Amazon ECS Service Connect now supports Zone-Aware routing
ingested: 2026-07-24
published: 2026-07-24 08:46 KST
sha256: 52d095ead937cb73f902c5ebe66ff6c6974a1dd8d95a0804dd6662e46bbf3446
tags: [cloud, aws, infra, networking]
---

# Amazon ECS Service Connect zone-aware routing

## Verified source facts
- AWS What’s New page date: 2026-07-23; RSS timestamp: 2026-07-23 23:46 UTC = 2026-07-24 08:46 KST
- ECS Service Connect prioritizes endpoints in the originating task’s AZ and dynamically adjusts traffic weights as endpoints scale
- When local endpoints are unhealthy or below capacity thresholds, traffic redistributes to healthy AZs
- Enabled by default for new and existing services; existing services require a one-time redeployment
- VPC Flow Logs with AZ metadata can validate cross-AZ traffic; available in supported commercial and AWS GovCloud (US) Regions at no additional cost

## Evidence boundary
- AWS does not state a workload-specific latency or cost reduction figure
- Cross-AZ fallback, capacity thresholds, and observed savings require service-specific measurement
