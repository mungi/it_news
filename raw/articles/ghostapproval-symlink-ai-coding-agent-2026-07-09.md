---
source_url: https://thehackernews.com/2026/07/ghostapproval-symlink-flaws-could-let.html
title: GhostApproval Symlink Flaws Could Let Malicious Repos Run Code in AI Coding Agents
ingested: 2026-07-09
published: 2026-07-09 13:27
tags: [ai, agent, cybersecurity, devtools]
sha256: c4547ebe26c9a26c1321f84538e319232296a200e792099cb9b52c42aa9ca16a
---

# GhostApproval: symlink 기반 AI 코딩 에이전트 파일 쓰기 위험

- Wiz가 symbolic link를 악용해 AI coding assistant가 harmless project file을 수정한다고 표시하면서 실제로 SSH key나 shell startup file을 덮어쓸 수 있는 GhostApproval 패턴을 공개함.
- 대상 도구는 Amazon Q Developer, Anthropic Claude Code, Augment, Cursor, Google Antigravity, Windsurf 등 6종임.
- 보도 시점 기준 3개 도구는 수정, 2개는 미수정, Anthropic은 threat model 밖이라는 입장 제시.
- 공격 예시는 project_settings.json symlink가 ~/.ssh/authorized_keys 또는 ~/.zshrc를 가리키고 README가 harmless setting 추가를 유도하는 구조임.
- 운영 시사점은 에이전트 write 승인 전 canonical path, symlink resolution, workspace escape, sensitive path denylist를 검증하는 것임.
