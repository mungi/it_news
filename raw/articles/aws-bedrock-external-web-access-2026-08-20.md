---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-web-access-web-search/
title: "Launching External Web Access for Web Search on Amazon Bedrock"
ingested: 2026-08-20
published: 2026-08-20 08:00 KST
sha256: 4fab5c6201603d8286e5b8c851c56f5a776beb8e9f3b45934e646c21b2f75e9d
tags: [ai, cloud, infra, cloud-security, weekly-briefing]
---

# Bedrock Web Search 외부 웹 접근과 AWS 경계 선택

- AWS RSS `Wed, 19 Aug 2026 23:00:00 GMT`를 `2026-08-20 08:00 KST`로 환산
- AWS 페이지의 visible date는 `Posted on: Aug 19, 2026`이며, 정확한 시각은 RSS provenance로만 기록
- 요청 identity에 `bedrock-websearch:ExternalWebAccess` IAM permission을 부여하고 `external_web_access` 기본값 `true`를 유지하면 public web live fetch 사용 가능

---

## 외부 접근과 내부 index 경계

- 최신 문서·가격·스포츠 점수처럼 freshness가 필요한 use case에서 public web content를 live fetch하는 기능이라는 AWS 발표
- 민감 데이터 처리 시 `external_web_access: false`를 설정하면 Amazon의 AWS 내 web index·knowledge graph 결과만 사용하고 request data가 AWS boundary를 나가지 않는다는 설명
- IAM permission과 request parameter가 retrieval egress의 별도 control point라는 범위

## 제공 범위

- external web access 제공 리전: US East (N. Virginia), US East (Ohio), US West (Oregon)
- domain/published-date filtering과 Europe·Asia Pacific 확장 AgentCore Web Search 공지는 별도 source로 연계 가능
- 한국 리전, index coverage·freshness SLA, provider/subprocessor, retention, citation quality, quota와 가격은 이 공지에서 미확인

## 팀 액션

- query data classification별 `external_web_access` 허용 policy와 IAM least privilege를 분리
- live fetch와 in-AWS index mode의 citation·freshness·latency·cost·prompt-injection 결과를 동일 workload에서 비교
- request별 mode·IAM principal·domain filter·citation·egress decision을 audit log로 보존
