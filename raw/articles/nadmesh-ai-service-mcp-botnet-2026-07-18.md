---
source_url: https://blog.xlab.qianxin.com/nadmesh-botnet-analysis-a-product-grade-threat-for-the-ai-service-era-en/
title: NadMesh Botnet Analysis: A Product-Grade Threat for the AI Service Era
ingested: 2026-07-18
published: 2026-07-17 17:14 KST
sha256: c638e9255c0557c15273eaa9a0b1203f9e70542fa3957e4af2bd5e4b7190da0e
tags: [ai, cybersecurity, cloud, kubernetes, mcp]
---

# NadMesh 봇넷 AI 서비스·MCP 표적 분석

- QiAnXin XLab은 2026년 7월 초 관측한 Go 기반 NadMesh를 AI infrastructure·MCP ecosystem을 겨냥한 자율형 봇넷으로 분석함
- 스캔: **90개 이상** cloud provider address range와 Redis·Docker·MCP·Kubernetes를 포함한 20개 이상 공격 벡터를 원문이 제시함
- 우선 대상: Shodan으로 ComfyUI·Ollama·Gradio·n8n·Open WebUI·Langflow 같은 노출 AI 서비스를 수집해 높은 scan priority 부여
- 수집 범위: AWS·Bedrock credential, Kubernetes ServiceAccount token, Docker config, `.env`, SSH session, model access, MCP tool metadata가 분석된 profile에 포함
- 지속성: SSH public-key backdoor·agent process·cron watchdog을 결합한 중복 persistence 경로 분석
- 경계: 악성코드 기능 분석은 특정 조직의 감염 또는 실제 credential 탈취 규모를 확정하지 않음

## 운영 해석

- AI endpoint의 public exposure와 Docker socket·cluster-admin binding·MCP tool privilege를 하나의 external attack surface로 inventory 필요
- long-lived cloud credential·ServiceAccount token·SSH key·MCP token의 scope·rotation·사용 로그를 incident response 범위에 포함 필요
- private ingress·service authentication·NetworkPolicy egress allowlist·workload identity를 함께 적용해 host compromise의 control-plane 확대 차단 필요
