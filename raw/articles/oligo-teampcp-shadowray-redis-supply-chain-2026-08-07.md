---
source_url: https://www.oligo.security/blog/new-intelligence-links-teampcp-to-shadowray-2-0-and-traces-activity-back-to-2020
title: New Intelligence Links TeamPCP to ShadowRay 2.0 and Traces Activity back to 2020
ingested: 2026-08-07
published: 2026-08-05
sha256: 0d9e131ee2764017190e01ae3aa814bfa12a81cd0b798adb3de333d4df938284
tags: [cybersecurity, cloud-security, devops, supply-chain, kubernetes, weekly-briefing]
---

## 확인한 원문

- Oligo Security의 `New Intelligence Links TeamPCP to ShadowRay 2.0 and Traces Activity back to 2020` 직접 페이지를 읽음
- 페이지 표기 발행일: `Aug 5, 2026`; exact clock은 페이지에서 확인되지 않음
- 대표 이미지: source `og:image`를 `docs/assets/images/news-297.jpg`로 저장함

## 핵심 요약

- Oligo가 TeamPCP, ShadowRay 2.0/IronErn, TA-NATALSTATUS 사이의 domain·staging·C2·malware deployment path·GitLab authentication log 중복을 분석함
- 연구진은 연계 activity가 2020년부터 Redis·Ray·Docker·React 공개 자산을 대상으로 알려진 취약점을 automated·wormable 방식으로 악용했다고 설명함
- 이후 GitHub Actions·GitLab·token theft·open-source project abuse를 통한 software supply-chain compromise로 확장됐다는 분석
- Kubernetes 침해 뒤 `kube.py` 새 variant에 destructive code path가 포함됐으며, Iran timezone 조건에서는 wipe DaemonSet, 그 외 Kubernetes node에서는 CanisterWorm backdoor를 배포했다는 관측
- 동일 operator·rebrand·협력의 관계는 100% 확정할 수 없다는 연구자의 명시적 경계

## 증거 경계와 운영 액션

- 이 capture는 Oligo threat-intelligence 분석을 보존하며, 개별 조직 침해·IoC 해당·credential theft·runtime execution을 확인하지 않음
- 카드의 `2026-08-07 15:50 KST`는 current The Hacker News RSS 보도 시각이며 Oligo primary page의 exact publication clock이 아님
- 외부 Redis·Ray·Docker·React asset, CI token·workflow, Kubernetes DaemonSet·privileged workload·service-account token, runner/network/artifact evidence를 하나의 hunt 범위로 연결 필요
