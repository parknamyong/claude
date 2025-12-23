/**
 * 학부모 대시보드용 Mock 데이터
 * - 수강 중 프로그램, 출석, 결제 내역 등
 */

import type { Payment, Attendance } from '@/types'

// 수강 정보 (학생별 수강 중인 프로그램)
export interface ParentEnrollmentInfo {
  id: string
  studentId: string
  studentName: string
  programId: string
  programName: string
  slotId: string
  slotName: string
  slotTime: string
  instructorId: string
  instructorName: string
  totalSessions: number
  completedSessions: number
  status: 'active' | 'completed' | 'paused'
  startDate: string
  endDate: string
}

// 다음 수업 일정
export interface UpcomingClass {
  id: string
  studentName: string
  programName: string
  slotName: string
  date: string // ISO date string
  time: string // "16:30-17:20"
  instructorName: string
}

// 학부모 대시보드 데이터 (김학부모 기준)
export const MOCK_PARENT_ENROLLMENTS: ParentEnrollmentInfo[] = [
  {
    id: 'enroll-1',
    studentId: 'student-1',
    studentName: '김음악',
    programId: 'prog-1',
    programName: '기초 음악',
    slotId: 'slot-1',
    slotName: '화목반',
    slotTime: '화, 목 16:30-17:20',
    instructorId: 'inst-1',
    instructorName: '김음악 선생님',
    totalSessions: 4,
    completedSessions: 2,
    status: 'active',
    startDate: '2025-01-07',
    endDate: '2025-01-30',
  },
  {
    id: 'enroll-2',
    studentId: 'student-2',
    studentName: '김노래',
    programId: 'prog-2',
    programName: '보컬 트레이닝',
    slotId: 'slot-3',
    slotName: '화목반',
    slotTime: '화, 목 16:30-17:20',
    instructorId: 'inst-2',
    instructorName: '이보컬 선생님',
    totalSessions: 6,
    completedSessions: 3,
    status: 'active',
    startDate: '2025-01-07',
    endDate: '2025-02-13',
  },
]

// 다음 수업 일정 (향후 7일)
export const MOCK_UPCOMING_CLASSES: UpcomingClass[] = [
  {
    id: 'class-1',
    studentName: '김음악',
    programName: '기초 음악',
    slotName: '화목반',
    date: '2025-01-23',
    time: '16:30-17:20',
    instructorName: '김음악 선생님',
  },
  {
    id: 'class-2',
    studentName: '김노래',
    programName: '보컬 트레이닝',
    slotName: '화목반',
    date: '2025-01-23',
    time: '16:30-17:20',
    instructorName: '이보컬 선생님',
  },
  {
    id: 'class-3',
    studentName: '김음악',
    programName: '기초 음악',
    slotName: '화목반',
    date: '2025-01-28',
    time: '16:30-17:20',
    instructorName: '김음악 선생님',
  },
  {
    id: 'class-4',
    studentName: '김노래',
    programName: '보컬 트레이닝',
    slotName: '화목반',
    date: '2025-01-28',
    time: '16:30-17:20',
    instructorName: '이보컬 선생님',
  },
]

// 출석 기록
export const MOCK_PARENT_ATTENDANCE: Attendance[] = [
  // 김음악 (student-1) - 기초 음악 2회 출석
  { id: 'att-1', studentId: 'student-1', classSlotId: 'slot-1', date: '2025-01-07', status: 'present' },
  { id: 'att-2', studentId: 'student-1', classSlotId: 'slot-1', date: '2025-01-09', status: 'present' },
  { id: 'att-3', studentId: 'student-1', classSlotId: 'slot-1', date: '2025-01-14', status: 'present' },
  { id: 'att-4', studentId: 'student-1', classSlotId: 'slot-1', date: '2025-01-16', status: 'late' },
  // 김노래 (student-2) - 보컬 트레이닝 3회 출석
  { id: 'att-5', studentId: 'student-2', classSlotId: 'slot-3', date: '2025-01-07', status: 'present' },
  { id: 'att-6', studentId: 'student-2', classSlotId: 'slot-3', date: '2025-01-09', status: 'present' },
  { id: 'att-7', studentId: 'student-2', classSlotId: 'slot-3', date: '2025-01-14', status: 'absent' },
  { id: 'att-8', studentId: 'student-2', classSlotId: 'slot-3', date: '2025-01-16', status: 'present' },
  { id: 'att-9', studentId: 'student-2', classSlotId: 'slot-3', date: '2025-01-21', status: 'present' },
  { id: 'att-10', studentId: 'student-2', classSlotId: 'slot-3', date: '2025-01-23', status: 'present' },
]

// 결제 내역
export const MOCK_PARENT_PAYMENTS: Payment[] = [
  {
    id: 'pay-1',
    enrollmentId: 'enroll-1',
    studentId: 'student-1',
    amount: 200000,
    status: 'completed',
    method: '카드',
    paidAt: '2025-01-05T10:30:00Z',
  },
  {
    id: 'pay-2',
    enrollmentId: 'enroll-2',
    studentId: 'student-2',
    amount: 280000,
    status: 'completed',
    method: '계좌이체',
    paidAt: '2025-01-05T11:00:00Z',
  },
]

// 공지사항 (최근 5개)
export interface ParentNotice {
  id: string
  title: string
  date: string
  isImportant: boolean
  excerpt: string
}

export const MOCK_PARENT_NOTICES: ParentNotice[] = [
  {
    id: 'notice-1',
    title: '[중요] 2025년 1학기 수강 신청 안내',
    date: '2025-01-20',
    isImportant: true,
    excerpt: '2025년 1학기 신규 프로그램 수강 신청이 2월 1일부터 시작됩니다.',
  },
  {
    id: 'notice-2',
    title: '설날 연휴 휴강 안내',
    date: '2025-01-18',
    isImportant: true,
    excerpt: '1월 28일(화) ~ 1월 30일(목)은 설날 연휴로 휴강합니다.',
  },
  {
    id: 'notice-3',
    title: '신규 악기 프로그램 오픈 예정',
    date: '2025-01-15',
    isImportant: false,
    excerpt: '드럼과 바이올린 프로그램이 3월부터 새롭게 오픈됩니다.',
  },
  {
    id: 'notice-4',
    title: '12월 발표회 영상 공유',
    date: '2025-01-10',
    isImportant: false,
    excerpt: '12월 발표회 영상이 갤러리에 업로드되었습니다.',
  },
  {
    id: 'notice-5',
    title: '겨울방학 특강 안내',
    date: '2025-01-05',
    isImportant: false,
    excerpt: '겨울방학 기간 특강 프로그램을 운영합니다.',
  },
]
