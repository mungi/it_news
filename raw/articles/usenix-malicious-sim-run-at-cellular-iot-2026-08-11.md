---
source_url: https://www.usenix.org/conference/woot26/presentation/lisowski
title: 악성 SIM RUN AT command와 cellular IoT modem execution 경계
ingested: 2026-08-12
published: 2026-08-11
sha256: af43dc6a73843045a05b18b36e42250395f09733b26f19e87f9975f8bf7e2b13
tags: [cybersecurity, infra, security, global]
---

University of Birmingham와 Fuzzware의 USENIX WOOT 2026 연구를 THN 보도와 함께 검토함. 보도된 시험에서 26개 phone·cellular module 중 9개가 SIM proactive RUN AT command를 수용했고 commercial EV charger에서 code execution을 재현함. 8개 module 중 6개와 18개 phone 중 3개가 command를 수용했으며, hostile SIM insertion 또는 operator·software·supply-chain compromise가 선행 조건임. 실제 악용은 source에서 보고되지 않음. fleet 운영은 module firmware, RUN AT enablement, SIM custody, modem telemetry를 함께 점검해야 함.
