---
source_url: https://www.air.security/blog-posts/plugin4shell
title: Plugin4Shell의 coding-agent plugin SHA pin 우회·zero-click RCE 연구
created: 2026-09-18
ingested: 2026-09-18
published: 2026-09-17
sha256: 8792ae6b19e472291244db37c09c2c504b70d1910b1b91d53eb316acf829cb9b
tags: [cybersecurity, ai, devtools, open-source, global]
---
# Plugin4Shell: coding-agent plugin의 checkout 결과 SHA 미검증 경로

- 원문: https://www.air.security/blog-posts/plugin4shell
- 관련 보도: https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html
- AIR 원문 게시일: 2026-09-17, clock time 미제공
- THN 보도 시각: 2026-09-18 16:31:01 +05:30, KST 2026-09-18 20:01

## 핵심 요약

- AIR Security가 Claude Code·OpenAI Codex·GitHub Copilot·Gemini CLI plugin install 경로의 SHA pin bypass 연구 공개
- plugin repository controller가 pinned SHA와 같은 40-hex default branch를 만들면 Git ref가 object ID보다 우선 해석되는 조건 악용 가능
- agent가 checkout 후 resolved `HEAD`를 pin과 대조하지 않아 reviewed commit과 다른 malicious working tree가 설치될 수 있는 연구 범위
- Claude Code·Codex의 background auto-update는 이미 설치된 plugin에도 user interaction 없이 checkout 경로를 재실행하는 조건
- AIR 원문 기준 Claude Code `2.1.179`·Codex `0.146.0` 수정 확인, Copilot fix 미출시·deprecated Gemini CLI 미수정 계획 기술

---

## 영향을 받는 trust boundary

- plugin은 agent가 가진 repository·shell·credential·internal system 권한을 상속할 수 있어 malicious code 실행이 host RCE와 같은 권한 범위로 이어질 수 있음
- marketplace review와 pinned commit review는 checkout 결과가 pinned object와 동일하다는 assertion이 있을 때만 provenance control로 작동
- 연구 원문은 four-agent design flaw를 주장하지만 특정 조직의 plugin 설치 수, in-the-wild exploitation, 개별 compromise는 확인하지 않음

## SHA와 같은 branch 이름을 이용하는 변형

- Claude Code·Codex·Copilot 변형은 plugin repository clone 뒤 pinned SHA를 `git checkout`하는 흐름을 대상으로 설명
- attacker가 40-hex pinned SHA와 동일한 branch name을 만들고 default branch로 설정하면 ambiguous name에서 ref가 object ID보다 우선 선택될 수 있는 조건
- branch가 default여야 local branch로 fetch되는 조건이며, GitHub는 SHA-shaped branch name을 거부하지만 Bitbucket·self-hosted Git 등은 host policy가 다를 수 있다는 원문 설명
- install client는 requested ref가 아닌 working tree `HEAD`를 resolve해 pin과 비교해야 한다는 완화 제시

## Gemini CLI와 자동 업데이트 경로

- Gemini CLI 변형은 shallow clone 뒤 pinned SHA fetch와 `FETCH_HEAD` checkout을 수행해도 default branch name 충돌 시 branch를 선택할 수 있다는 연구 설명
- Claude Code와 Codex는 background auto-update가 default라서 marketplace pin 변경 뒤 existing plugin이 user click 없이 갱신될 수 있는 원문 범위
- attacker path는 benign plugin publish 뒤 update 또는 existing author repository takeover를 전제로 하며 marketplace를 직접 장악할 필요는 없다는 설명

## 수정·운영 대응

- AIR 원문은 Claude Code `2.1.179`, Codex `0.146.0`의 fix를 확인했다고 기술
- GitHub Copilot은 disclosure 뒤 fix가 아직 출시되지 않았고, Google은 deprecated Gemini CLI를 patch하지 않으며 Antigravity migration을 안내했다는 원문 범위
- endpoint·CI image별 agent version, installed plugin, source repository, pinned SHA, resolved `HEAD`, auto-update setting, execution permission을 inventory 필요
- vendor fix가 없는 plugin runtime은 third-party plugin execution·auto-update를 중단하거나 allowlist와 repository host/ref-name policy를 적용하고, checkout result assertion을 change gate로 관리 필요
