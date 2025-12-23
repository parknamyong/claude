import type { Program, ClassSlot } from '@/types'

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'prog-1',
    name: '기초 음악',
    slug: 'basic',
    shortDescription: '음악의 기본기를 탄탄하게! 리듬, 멜로디, 화음의 기초를 배웁니다.',
    description:
      'AI 기술을 활용하여 음악의 기본 요소인 리듬, 멜로디, 화음을 재미있게 학습합니다. 음악을 처음 접하는 초등학생에게 적합한 프로그램입니다.',
    curriculum: [
      '음악의 기본 요소 이해',
      '리듬 패턴 학습',
      '멜로디 만들기',
      '간단한 화음 익히기',
      'AI를 활용한 작곡 체험',
    ],
    targetGrade: '초등 저학년',
    duration: '50분',
    sessions: 4,
    price: 200000,
    image: '/images/program-basic.jpg',
    features: [
      'AI 기반 실시간 리듬 피드백',
      '게임형 음악 학습 콘텐츠',
      '개인별 학습 진도 리포트',
      '온라인 복습 자료 제공',
      '수료증 발급',
      '학부모 상담 1회 포함',
    ],
    weeklyPlan: [
      {
        week: 1,
        title: '음악과 친해지기',
        description: '음악의 기본 요소(리듬, 멜로디, 화음) 소개 및 다양한 장르 감상',
      },
      {
        week: 2,
        title: '리듬의 세계',
        description: 'AI 리듬 게임으로 박자 익히기, 4/4박자와 3/4박자 체험',
      },
      {
        week: 3,
        title: '멜로디 만들기',
        description: 'AI와 함께 간단한 멜로디 작곡, 음계(도레미파솔라시도) 학습',
      },
      {
        week: 4,
        title: '나만의 음악 완성',
        description: '4주간 배운 내용으로 나만의 짧은 곡 완성 및 발표',
      },
    ],
    highlights: [
      {
        icon: '🎮',
        title: '게임형 학습',
        description: '지루하지 않은 게임 방식으로 자연스럽게 음악 개념을 익힙니다.',
      },
      {
        icon: '🤖',
        title: 'AI 실시간 피드백',
        description: '박자와 리듬을 실시간으로 분석하여 즉각적인 피드백을 제공합니다.',
      },
      {
        icon: '🎵',
        title: '작곡 결과물',
        description: '수업 마지막에 아이가 직접 만든 음악을 가져갈 수 있습니다.',
      },
    ],
  },
  {
    id: 'prog-2',
    name: '보컬 트레이닝',
    slug: 'vocal',
    shortDescription: '나만의 목소리를 찾아요! 발성과 호흡법을 배우고 노래 실력을 키웁니다.',
    description:
      'AI 보컬 트레이닝 시스템을 통해 올바른 발성법과 호흡법을 배웁니다. 자신감 있게 노래할 수 있도록 개인별 맞춤 피드백을 제공합니다.',
    curriculum: [
      '올바른 발성법',
      '호흡 훈련',
      '음정과 박자 맞추기',
      '감정 표현하기',
      'AI 피드백을 통한 개인 연습',
    ],
    targetGrade: '초등 전학년',
    duration: '50분',
    sessions: 6,
    price: 280000,
    image: '/images/program-vocal.jpg',
    features: [
      'AI 음정/박자 분석 시스템',
      '개인 녹음 파일 제공',
      '발성 교정 리포트',
      '맞춤 연습곡 추천',
      '미니 발표회 참여 기회',
      '학부모 상담 2회 포함',
    ],
    weeklyPlan: [
      {
        week: 1,
        title: '내 목소리 알기',
        description: '목소리 특성 분석, 올바른 자세와 호흡법 기초',
      },
      {
        week: 2,
        title: '호흡과 발성',
        description: '복식호흡 연습, 성대 사용법, 두성과 흉성 이해',
      },
      {
        week: 3,
        title: '음정 잡기',
        description: 'AI 음정 분석으로 정확한 음정 찾기, 음역대 확인',
      },
      {
        week: 4,
        title: '박자와 리듬',
        description: '노래 박자 맞추기, 리듬 타기, 멜로디 라인 따라가기',
      },
      {
        week: 5,
        title: '감정 표현',
        description: '가사 해석하기, 감정을 담아 노래하기, 강약 조절',
      },
      {
        week: 6,
        title: '나만의 노래',
        description: '선택곡 완곡 연습 및 녹음, 미니 발표',
      },
    ],
    highlights: [
      {
        icon: '🎤',
        title: 'AI 음정 교정',
        description: '실시간 음정 분석으로 정확한 피치를 찾을 수 있도록 도와줍니다.',
      },
      {
        icon: '💿',
        title: '개인 녹음 제공',
        description: '매 수업 녹음 파일을 제공하여 성장 과정을 확인할 수 있습니다.',
      },
      {
        icon: '🎶',
        title: '맞춤 곡 선정',
        description: '아이의 음역대와 취향에 맞는 연습곡을 AI가 추천합니다.',
      },
    ],
  },
  {
    id: 'prog-3',
    name: '악기 연주',
    slug: 'instrument',
    shortDescription: '악기와 친해지기! 피아노, 기타 등 다양한 악기를 경험합니다.',
    description:
      'AI 연주 보조 시스템과 함께 다양한 악기를 체험하고 배웁니다. 악기별 기초부터 간단한 곡 연주까지 단계별로 학습합니다.',
    curriculum: [
      '악기 소개 및 선택',
      '기초 연주법',
      '악보 읽기',
      '간단한 곡 연습',
      'AI 합주 체험',
    ],
    targetGrade: '초등 중/고학년',
    duration: '60분',
    sessions: 6,
    price: 280000,
    image: '/images/program-instrument.jpg',
    features: [
      '피아노/기타/우쿨렐레 선택 가능',
      'AI 연주 자세 교정',
      '악보 읽기 학습 자료',
      '연습곡 MR 제공',
      '연주 영상 촬영',
      '학부모 상담 2회 포함',
    ],
    weeklyPlan: [
      {
        week: 1,
        title: '악기 탐색',
        description: '다양한 악기 체험, 내게 맞는 악기 선택하기',
      },
      {
        week: 2,
        title: '악기와 친해지기',
        description: '선택 악기의 구조 이해, 올바른 자세와 손 모양',
      },
      {
        week: 3,
        title: '첫 소리 내기',
        description: '기본 음 연주, 간단한 음계 연습',
      },
      {
        week: 4,
        title: '악보 읽기',
        description: '기초 악보 읽는 법, 리듬 기호 이해',
      },
      {
        week: 5,
        title: '곡 연습',
        description: '쉬운 동요 한 곡 완성하기, AI 반주에 맞춰 연주',
      },
      {
        week: 6,
        title: '합주와 발표',
        description: 'AI 합주 체험, 연주 영상 촬영 및 발표',
      },
    ],
    highlights: [
      {
        icon: '🎹',
        title: '다양한 악기 체험',
        description: '피아노, 기타, 우쿨렐레 중 원하는 악기를 선택할 수 있습니다.',
      },
      {
        icon: '🎼',
        title: 'AI 합주 시스템',
        description: '혼자 연습해도 AI가 반주를 맞춰줘 합주하는 기분을 느낄 수 있습니다.',
      },
      {
        icon: '📹',
        title: '연주 영상 제공',
        description: '마지막 수업에 촬영한 연주 영상을 소중한 추억으로 가져갑니다.',
      },
    ],
  },
]

// 브리프 기준 시간표: 화16:30, 목16:30, 토10:00, 토14:00
// 정원: 4명/타임
export const MOCK_CLASS_SLOTS: ClassSlot[] = [
  // 기초 음악 (4회)
  {
    id: 'slot-1',
    programId: 'prog-1',
    name: '화목반',
    dayOfWeek: ['화', '목'],
    time: '16:30-17:20',
    capacity: 4,
    enrolled: 3,
    waitlist: 0,
    status: 'open',
  },
  {
    id: 'slot-2',
    programId: 'prog-1',
    name: '토요 오전반',
    dayOfWeek: ['토'],
    time: '10:00-10:50',
    capacity: 4,
    enrolled: 4,
    waitlist: 1,
    status: 'closed',
  },
  // 보컬 트레이닝 (6회)
  {
    id: 'slot-3',
    programId: 'prog-2',
    name: '화목반',
    dayOfWeek: ['화', '목'],
    time: '16:30-17:20',
    capacity: 4,
    enrolled: 2,
    waitlist: 0,
    status: 'open',
  },
  {
    id: 'slot-4',
    programId: 'prog-2',
    name: '토요 오후반',
    dayOfWeek: ['토'],
    time: '14:00-14:50',
    capacity: 4,
    enrolled: 4,
    waitlist: 2,
    status: 'closed',
  },
  // 악기 연주 (6회)
  {
    id: 'slot-5',
    programId: 'prog-3',
    name: '화목반',
    dayOfWeek: ['화', '목'],
    time: '16:30-17:30',
    capacity: 4,
    enrolled: 4,
    waitlist: 0,
    status: 'closed',
  },
  {
    id: 'slot-6',
    programId: 'prog-3',
    name: '토요 오전반',
    dayOfWeek: ['토'],
    time: '10:00-11:00',
    capacity: 4,
    enrolled: 1,
    waitlist: 0,
    status: 'open',
  },
  {
    id: 'slot-7',
    programId: 'prog-3',
    name: '토요 오후반',
    dayOfWeek: ['토'],
    time: '14:00-15:00',
    capacity: 4,
    enrolled: 3,
    waitlist: 0,
    status: 'open',
  },
]
