import type { Review } from '@/types'

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'review-1',
    programId: 'prog-1',
    parentName: '김**',
    studentGrade: '초등 2학년',
    content:
      '아이가 음악에 흥미를 갖게 되었어요. AI가 아이 수준에 맞춰 가르쳐줘서 좋았습니다. 특히 리듬 게임이 재미있다고 하네요!',
    rating: 5,
    createdAt: '2025-01-10T10:00:00Z',
  },
  {
    id: 'review-2',
    programId: 'prog-2',
    parentName: '이**',
    studentGrade: '초등 4학년',
    content:
      '보컬 수업을 통해 아이의 자신감이 많이 올라갔어요. 발표회에서 노래를 부르는 모습이 정말 뿌듯했습니다.',
    rating: 5,
    createdAt: '2025-01-08T15:30:00Z',
  },
  {
    id: 'review-3',
    programId: 'prog-3',
    parentName: '박**',
    studentGrade: '초등 5학년',
    content:
      '피아노를 배우고 싶어했는데 AI 연주 시스템 덕분에 빠르게 실력이 늘었어요. 개인 피드백이 특히 도움이 됩니다.',
    rating: 4,
    createdAt: '2025-01-05T11:00:00Z',
  },
  {
    id: 'review-4',
    programId: 'prog-1',
    parentName: '최**',
    studentGrade: '초등 1학년',
    content:
      '처음 음악을 배우는 아이도 쉽게 따라할 수 있어서 좋아요. 선생님도 친절하시고 아이가 수업 가는 날을 기다려요.',
    rating: 5,
    createdAt: '2024-12-28T09:00:00Z',
  },
  {
    id: 'review-5',
    programId: 'prog-2',
    parentName: '정**',
    studentGrade: '초등 3학년',
    content: '노래 부르는 것을 부끄러워했는데 이제는 집에서도 자신있게 노래해요. 감사합니다!',
    rating: 5,
    createdAt: '2024-12-20T14:00:00Z',
  },
]
