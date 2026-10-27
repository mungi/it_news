---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/10/kms-ml-kem-post-quantum/
title: AWS Key Management Service now supports ML-KEM for post-quantum key encapsulation
ingested: 2026-10-27
published: 2026-10-26 17:00
sha256: 812a3ad347c129c011e6b9540c7e1f68f0f168e375a1ec40bb850e5840f7ee0e
tags: [cloud, cybersecurity, aws, cloud-security, global, release]
---

# AWS KMS ML-KEM post-quantum key encapsulation

- 확인 시각: 2026-10-27 17:41 KST
- 원문 발행: 2026-10-26T08:00:00Z / 2026-10-26 17:00 KST
- 원문: https://aws.amazon.com/about-aws/whats-new/2026/10/kms-ml-kem-post-quantum/

## 확인한 사실
- AWS KMS가 NIST FIPS 203 기반 ML-KEM을 지원하며 `ML-KEM-512`·`ML-KEM-768`·`ML-KEM-1024` 세 key spec 제공
- `Encapsulate`가 public key로 random 32-byte shared secret과 ciphertext를 생성하고, `Decapsulate`가 대응 private key로 shared secret을 복원
- private key는 FIPS 140-3 Level 3 validated HSM에 보관되며 `GetPublicKey`로 public key export 가능
- AWS-LC·OpenSSL·Bouncy Castle 같은 crypto library에서 local encapsulate 경로 언급
- KMS 제공 리전 중 Middle East UAE·Bahrain 및 China Regions 제외

## 운영 경계
- KMS API 지원은 TLS·VPN·service mesh·partner API의 protocol migration, peer compatibility, cipher-suite 협상, data retention 전환을 자동 보장하지 않음
- long-lived confidential data와 외부 trust boundary부터 library·ciphertext·rotation·audit canary 필요
