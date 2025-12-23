import type { Notice } from '@/types'

export const MOCK_NOTICES: Notice[] = [
  {
    id: 'notice-1',
    title: '2025년 1학기 수강 신청 안내',
    content:
      '2025년 1학기 수강 신청이 시작되었습니다. 프로그램별 정원이 제한되어 있으니 서둘러 신청해 주세요.',
    isImportant: true,
    createdAt: '2025-01-15T09:00:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
  },
  {
    id: 'notice-2',
    title: '설날 연휴 휴강 안내',
    content: '설날 연휴(1/28~1/30) 기간 동안 모든 수업이 휴강됩니다. 보강 일정은 추후 공지됩니다.',
    isImportant: true,
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z',
  },
  {
    id: 'notice-3',
    title: '신규 프로그램 "AI 작곡" 오픈 예정',
    content:
      '2025년 2학기부터 AI를 활용한 작곡 프로그램이 새롭게 오픈될 예정입니다. 많은 관심 부탁드립니다.',
    isImportant: false,
    createdAt: '2025-01-05T14:00:00Z',
    updatedAt: '2025-01-05T14:00:00Z',
  },
  {
    id: 'notice-4',
    title: '12월 발표회 사진 업로드 완료',
    content: '12월에 진행된 발표회 사진이 갤러리에 업로드되었습니다. 확인해 주세요!',
    isImportant: false,
    createdAt: '2024-12-20T11:00:00Z',
    updatedAt: '2024-12-20T11:00:00Z',
  },
  {
    id: 'notice-5',
    title: '겨울방학 특강 안내',
    content: '겨울방학을 맞아 특별 집중 과정을 운영합니다. 상세 내용은 본문을 확인해 주세요.',
    isImportant: false,
    createdAt: '2024-12-15T09:00:00Z',
    updatedAt: '2024-12-15T09:00:00Z',
  },
]
