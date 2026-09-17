---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-corretto-27-generally-available/
title: Amazon Corretto 27 GA: OpenJDK feature release의 runtime·TLS·diagnostics 변경 범위
created: 2026-09-17
ingested: 2026-09-17
published: 2026-09-17 09:00
sha256: c502e299723592a9f5bccdc7ee2ae644c293cc1c5ac5e5d50ccd9702bc7a62d5
tags: [aws, devtools, security, operating-system, global]
---
# Amazon Corretto 27 GA: OpenJDK feature release의 runtime·TLS·diagnostics 변경 범위

- 원문: https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-corretto-27-generally-available/
- 원문 게시: 2026-09-17 09:00 KST, AWS RSS `Thu, 17 Sep 2026 00:00:31 GMT` 환산

## 핵심 요약

- Amazon Corretto 27 Feature Release를 Linux·Windows·macOS용 no-cost, production-ready OpenJDK distribution으로 제공
- 지원 종료 시점은 2027년 4월이며 LTS 지정이나 장기 support를 원문이 주장하지 않는 범위
- `JEP 523`으로 G1 GC가 모든 environment의 default가 되어 pause-time behavior 비교 필요
- `JEP 527` TLS 1.3 post-quantum hybrid key exchange와 `JEP 536` JFR in-process data redaction 추가
- `JEP 534` compact object header default와 continued preview/incubator API는 heap·agent·library compatibility canary 대상

---

## 원문 사실

- `JEP 523`: G1 garbage collector를 모든 environment의 default로 설정
- `JEP 527`: TLS 1.3에서 classical과 post-quantum key exchange를 결합하는 hybrid key exchange 추가
- `JEP 534`: compact object headers를 default로 적용해 object memory footprint와 cache utilization 개선 목표
- `JEP 536`: JVM 밖으로 나가기 전 Java Flight Recorder recording의 sensitive data redaction 지원

## 호환성 경계

- enhanced pattern matching은 continued preview, structured concurrency는 continued preview, Vector API는 continued incubator 상태
- 원문은 특정 JVM workload의 throughput, heap 절감률, TLS interoperability 또는 library compatibility를 수치로 보장하지 않음

## 운영 조치

- Java 27 adoption 전 GC log·p95/p99 latency·heap/RSS·JFR export redaction과 TLS peer interoperability를 pre/post canary로 비교
- preview/incubator API 사용 여부와 build plugin·native agent·APM compatibility를 runtime inventory에 포함
