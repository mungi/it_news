---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213450
title: EU, 8월부터 AI 챗봇·딥페이크 표기 의무화…'AI 라벨링' 규제 본격화
published: 2026-08-02 19:40 KST
published_source_metadata: 2026-08-02T19:40:18+09:00
source_name: AI타임스
image_url: https://cdn.aitimes.com/news/photo/202608/213450_216927_3553.png
ingested: 2026-08-02
sha256: 77bb13384317932fa389bbde917f65415d6272df8f5102078ef1e9d68105eada
tags: [ai, regulation, transparency, content-provenance, global, weekly-briefing]
confidence: medium
---

# EU AI Act 투명성 규정 적용 보도

- AI타임스 기사와 페이지 메타데이터를 직접 확인함: `article:published_time`은 `2026-08-02T19:40:18+09:00`, `og:image`는 기사 이미지 URL로 확인
- 기사 보도 범위: EU AI Act에 따른 소비자 대상 투명성 규정이 2026-08-02부터 적용되고, EU 내 기업은 사용자가 AI 시스템과 상호작용한다는 사실을 고지하며 AI 생성 이미지·오디오·비디오·마케팅 자료에 라벨을 부착해야 함
- 기사 인용 범위: 위반 시 전 세계 연간 매출의 최대 3% 또는 1,500만 유로 중 높은 금액의 벌금 가능성 제시
- 기사 내 EU 집행위원회 설명: 단순 사진 수정은 예외 처리해 라벨 남발을 줄인다는 범위
- 기사 내 업계 반응: 시행 수주 전 지침 공개로 적용 준비 시간이 부족하고 명확성이 부족하다는 우려 소개

---

## 증거 경계

- 이 캡처는 AI타임스의 정책 보도와 해당 페이지의 제목·본문·발행 메타데이터·이미지 메타데이터에 근거함
- 개별 모델, 기능, 국가, 배포 채널의 법적 적용 여부·예외·기술적 구현 방식은 이 기사만으로 판정 불가
- 기사 본문은 고위험 시스템 규제 시행일이 2027년 12월로 연기됐다고 전하나, 이 캡처는 그 법률 해석이나 일정의 독립 검증을 수행하지 않음

## 엔지니어링 확인 항목

- chatbot UI·생성 media job·CMS·export·partner API에서 `ai_generated`와 label state가 유지되는지 end-to-end 검증 필요
- model/version·transformation·human review·policy version·override reason을 asset provenance 및 release evidence로 연결 필요
- EU 대상 traffic·customer·campaign channel의 inventory, locale별 label rendering, exception rule owner, rollback 경로를 release gate로 관리 필요
