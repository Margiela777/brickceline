// ============================================================
//  Brickceline 영어학원 데이터 파일
// ============================================================

const ACADEMY = {
  name: "브릭셀린 영어학원",
  nameEn: "Brickceline English Academy",
  tagline: "내신을 넘어 세상으로 나아가는 영어의 기준, 브릭셀린",
  adminPassword: "2548"
};

// 보강 테스트 학생 (에메랄드 그린)
const MAKEUP_STUDENTS = [
  { name: "김민준" },
  { name: "이서연" },
  { name: "박지호" },
  { name: "최수아" },
  { name: "정하은" }
];

// 재시험 테스트 학생 (코랄 오렌지)
const RETEST_STUDENTS = [
  { name: "강도현" }
];

// 공지사항
const NOTICES = [
  {
    id: 1,
    badge: "중요",
    title: "5월 가정의 달 휴무 계획 안내",
    date: "2026.05.05",
    content: "5월 5일(화) 어린이날, 5월 6일(수) 대체공휴일 휴강입니다. 수업 보강은 추후 개별 안내 드릴 예정이며, 문의사항은 원으로 연락 주세요.",
    isNew: true
  },
  {
    id: 2,
    badge: "일반",
    title: "5월 보강 일정 안내",
    date: "2026.05.08",
    content: "5월 결석 학생 보강 일정은 개별 안내 예정입니다.",
    isNew: false
  },
  {
    id: 3,
    badge: "일반",
    title: "5월 재테스트 일정 안내",
    date: "2026.05.07",
    content: "Unit 4 재테스트 대상자: 강도현. 일시: 5월 14일(목) 오후 3시. 범위: Unit 4 전체.",
    isNew: false
  },
  {
    id: 4,
    badge: "일반",
    title: "5월 교재비 및 수강료 납부 안내",
    date: "2026.05.01",
    content: "5월 수강료 및 교재비 납부 기한: 5월 10일(토)까지. 계좌: 국민은행 000-0000-0000 (브릭셀린학원).",
    isNew: false
  }
];

// 수업 스케줄 (현재 월 기준 샘플)
const now = new Date();
const y = now.getFullYear();
const m = now.getMonth() + 1;

const SCHEDULE = {
  [`${y}-${m}-12`]: [{name:"김민준",type:"makeup",time:"14:00"},{name:"이서연",type:"makeup",time:"15:00"}],
  [`${y}-${m}-13`]: [{name:"강도현",type:"retest",time:"14:00"},{name:"최수아",type:"makeup",time:"15:30"}],
  [`${y}-${m}-14`]: [{name:"김민준",type:"makeup",time:"14:00"},{name:"박지호",type:"makeup",time:"15:00"},{name:"강도현",type:"retest",time:"16:00"}],
  [`${y}-${m}-15`]: [{name:"이서연",type:"makeup",time:"14:00"},{name:"정하은",type:"makeup",time:"15:00"}],
  [`${y}-${m}-19`]: [{name:"최수아",type:"makeup",time:"14:00"},{name:"강도현",type:"retest",time:"15:30"}],
  [`${y}-${m}-20`]: [{name:"김민준",type:"makeup",time:"14:00"},{name:"이서연",type:"makeup",time:"15:00"},{name:"박지호",type:"makeup",time:"16:00"}],
  [`${y}-${m}-21`]: [{name:"정하은",type:"makeup",time:"14:00"},{name:"강도현",type:"retest",time:"16:00"}],
  [`${y}-${m}-26`]: [{name:"김민준",type:"makeup",time:"14:00"},{name:"최수아",type:"makeup",time:"15:30"}],
  [`${y}-${m}-27`]: [{name:"강도현",type:"retest",time:"14:00"},{name:"이서연",type:"makeup",time:"15:00"}],
  [`${y}-${m}-28`]: [{name:"박지호",type:"makeup",time:"14:30"},{name:"정하은",type:"makeup",time:"15:30"}]
};
