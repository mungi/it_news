---
source_url: https://www.aitimes.com/news/articleView.html?idxno=213392
title: 구글, 휴머노이드 전신 제어 AI '제미나이 로보틱스 2' 공개
ingested: 2026-07-31
published: 2026-07-31 18:03 KST
sha256: 23e3446432c5015acae02f7feedf02e10745d39ea8066202e1127ee6c7ef9728
tags: [ai, agent, multimodal, infrastructure, korea, product, release]
---

# 구글 Gemini Robotics 2 공개 보도

- 출처: AI타임스 기사 `idxno=213392`
- 발행 근거: 페이지 JSON-LD `datePublished` `2026-07-31T18:03:12+09:00`
- 이미지 근거: 페이지 `og:image` `https://cdn.aitimes.com/news/photo/202607/213392_216847_1356.jpg`
- 1차 발표 연결: 기사 본문의 Google DeepMind YouTube `Gemini Robotics 2 brings whole body intelligence to robots`; 직접 읽은 1차 발표 본문은 확보하지 못해 아래 성능·안전성 수치는 AI타임스가 전한 Google 설명 범위로 한정

## 확인한 보도 내용

- Google DeepMind가 카메라 영상과 자연어 명령을 받아 작업 계획과 실제 움직임을 연결하는 Gemini Robotics 2를 공개했다는 보도
- VLA 모델이 휴머노이드의 상체 조작을 넘어 걷기·이동·장애물 회피·손가락 정밀 조작을 포함한 전신 제어를 목표로 한다는 기사 설명
- 사전 학습하지 않은 환경에서의 agentic reasoning을 강화했고, Apptronik Apollo 시연에서 물뿌리개를 지정 위치로 옮기는 작업을 제시했다는 보도
- 22 자유도 humanoid hand 기반 매듭·지퍼백·전구 교체와 산업용 two-finger gripper 적용 가능성을 기사에서 언급
- Google 자체 테스트의 전구 풀기 성공률 92%는 기사 인용 수치이며, benchmark protocol·sample count·independent reproduction은 확인하지 못함
- ER 2가 고차원 planning을 맡고 VLA·navigation API에 action을 전달하며 Gemini Live API 양방향 streaming과 통합된다는 기사 설명
- 작업 진행률 5단계 분류 정확도 57.4%, moment finding 91.3%도 기사 인용 Google 평가 수치로만 취급
- On-Device 2는 cloud connection 없이 robot 내부 실행을 목표로 한 경량 모델이라는 기사 설명
- availability, API/SDK, hardware requirements, latency, safety-evaluation protocol, commercial terms, supported robot list, Korea availability는 원문에서 확인하지 못함

## 운영 해석 경계

- 실험 성공률은 현장 safety case, recovery behavior, teleoperation fallback, sensor/actuator compatibility, MTBF, maintenance cost를 보장하지 않음
- 도입 판단에는 task success뿐 아니라 human intervention rate, stop/restart false positive/negative, latency budget, incident replay, fleet rollback evidence 필요
