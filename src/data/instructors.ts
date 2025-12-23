import type { Instructor } from '@/types'

export const MOCK_INSTRUCTORS: Instructor[] = [
  {
    id: 'inst-1',
    name: '김음악',
    role: '기초 음악 담당',
    bio: '10년간 초등학생 음악 교육에 헌신해온 음악 교육 전문가입니다. 아이들의 눈높이에 맞춘 재미있는 수업으로 음악의 즐거움을 전합니다.',
    experience: [
      '서울대학교 음악교육과 졸업',
      '초등 음악 교사 경력 10년',
      'AI 음악교육 연구 참여',
    ],
    image: '/images/instructor-1.jpg',
  },
  {
    id: 'inst-2',
    name: '이보컬',
    role: '보컬 트레이닝 담당',
    bio: '현직 뮤지컬 배우 출신으로 정확한 발성법과 호흡법을 가르칩니다. 아이들이 자신감 있게 노래할 수 있도록 세심하게 지도합니다.',
    experience: [
      '한국예술종합학교 성악과 졸업',
      '뮤지컬 배우 활동 8년',
      '아동 보컬 트레이닝 전문',
    ],
    image: '/images/instructor-2.jpg',
  },
  {
    id: 'inst-3',
    name: '박연주',
    role: '악기 연주 담당',
    bio: '클래식 피아노와 기타를 전공하고 다양한 악기 교육 경험을 보유하고 있습니다. 악기와 친해지는 첫 걸음을 함께합니다.',
    experience: [
      '연세대학교 음악대학 피아노과 졸업',
      '개인 레슨 경력 12년',
      '아동 악기 교육 커리큘럼 개발',
    ],
    image: '/images/instructor-3.jpg',
  },
]
