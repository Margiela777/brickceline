// ============================================================
//  Brickceline 영어학원 데이터 파일
//  ✅ 이 파일만 수정하면 사이트 전체에 반영됩니다.
// ============================================================

const ACADEMY = {
  name: "브릭셀린 영어학원",
  nameEn: "Brickceline English Academy",
  tagline: "내신을 넘어 세상으로 나아가는 영어의 기준, 브릭셀린",
  adminPassword: "2548"
};

// 보강 테스트 학생 목록 (파란색)
const MAKEUP_STUDENTS = [
  { name: "김민준" },
  { name: "이서연" },
  { name: "박지호" },
  { name: "최수아" },
  { name: "정하은" }
];

// 재시험 테스트 학생 목록 (빨간색)
const RETEST_STUDENTS = [
  { name: "강도현" }
];

// 공지사항
const NOTICES = [
  {
    id: 1,
    badge: "중요",
    title: "5월 가정의 달 휴무 계획 안내",
    date: "2026.04.25",
    content: "5월 5일(화) 어린이날, 5월 6일(수) 대체공휴일 휴강입니다. 수업 보강은 추후 개별 안내 드릴 예정이며, 문의사항은 원으로 연락 주세요.",
    isNew: true
  },
  {
    id: 2,
    badge: "일반",
    title: "4월 보강 일정 안내",
    date: "2026.04.20",
    content: "4월 결석 학생 보강 일정: 김민준 4/28(월) 14:00, 이서연 4/29(화) 15:00, 박지호 4/30(수) 16:00.",
    isNew: false
  },
  {
    id: 3,
    badge: "일반",
    title: "4월 재테스트 일정 안내",
    date: "2026.04.18",
    content: "Unit 3 재테스트 대상자: 강도현. 일시: 4월 29일(화) 오후 3시. 범위: Unit 3 전체 (교재 p.44~67).",
    isNew: false
  },
  {
    id: 4,
    badge: "일반",
    title: "5월 교재비 및 수강료 납부 안내",
    date: "2026.04.15",
    content: "5월 수강료 및 교재비 납부 기한: 4월 30일(수)까지. 계좌: 국민은행 000-0000-0000 (브릭셀린학원).",
    isNew: false
  }
];

// 수업 스케줄
// type: "makeup"(보강-파란색) | "retest"(재시험-빨간색)
const SCHEDULE = {
  "2026-4-7":  [{name:"김민준",type:"makeup",time:"14:00"},{name:"이서연",type:"makeup",time:"15:00"}],
  "2026-4-8":  [{name:"강도현",type:"retest",time:"14:00"},{name:"최수아",type:"makeup",time:"15:30"}],
  "2026-4-9":  [{name:"김민준",type:"makeup",time:"14:00"},{name:"박지호",type:"makeup",time:"15:00"}],
  "2026-4-10": [{name:"이서연",type:"makeup",time:"14:00"},{name:"강도현",type:"retest",time:"15:00"},{name:"최수아",type:"makeup",time:"16:00"}],
  "2026-4-14": [{name:"정하은",type:"makeup",time:"14:00"},{name:"김민준",type:"makeup",time:"16:00"}],
  "2026-4-15": [{name:"박지호",type:"makeup",time:"15:00"},{name:"이서연",type:"makeup",time:"16:00"}],
  "2026-4-16": [{name:"강도현",type:"retest",time:"14:30"},{name:"최수아",type:"makeup",time:"15:30"}],
  "2026-4-17": [{name:"김민준",type:"makeup",time:"14:00"},{name:"정하은",type:"makeup",time:"15:00"},{name:"강도현",type:"retest",time:"16:30"}],
  "2026-4-21": [{name:"이서연",type:"makeup",time:"14:00"},{name:"박지호",type:"makeup",time:"15:00"}],
  "2026-4-22": [{name:"강도현",type:"retest",time:"14:00"},{name:"김민준",type:"makeup",time:"16:00"}],
  "2026-4-23": [{name:"정하은",type:"makeup",time:"14:00"},{name:"강도현",type:"retest",time:"15:30"}],
  "2026-4-24": [{name:"김민준",type:"makeup",time:"14:00"},{name:"이서연",type:"makeup",time:"15:00"},{name:"최수아",type:"makeup",time:"16:00"}],
  "2026-4-25": [{name:"박지호",type:"makeup",time:"14:00"}],
  "2026-4-28": [{name:"강도현",type:"retest",time:"15:00"},{name:"정하은",type:"makeup",time:"16:00"}],
  "2026-4-29": [{name:"김민준",type:"makeup",time:"14:00"},{name:"이서연",type:"makeup",time:"15:00"}],
  "2026-4-30": [{name:"박지호",type:"makeup",time:"14:30"},{name:"최수아",type:"makeup",time:"15:30"},{name:"강도현",type:"retest",time:"16:30"}]
};
