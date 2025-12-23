/**
 * 어드민 대시보드용 Mock 데이터
 */

// ============================================================
// 어드민 통계
// ============================================================
export interface AdminStats {
  totalStudents: number
  activePrograms: number
  monthlyAttendanceRate: number
  pendingPayments: number
  pendingEnrollments: number
  todayClasses: number
  monthlyRevenue: number
}

export const MOCK_ADMIN_STATS: AdminStats = {
  totalStudents: 48,
  activePrograms: 3,
  monthlyAttendanceRate: 94,
  pendingPayments: 5,
  pendingEnrollments: 3,
  todayClasses: 4,
  monthlyRevenue: 12800000,
}

// ============================================================
// 학생 관리
// ============================================================
export interface AdminStudent {
  id: string
  name: string
  grade: string
  parentName: string
  parentPhone: string
  programId: string
  programName: string
  slotName: string
  status: 'active' | 'pending' | 'completed' | 'paused'
  enrolledAt: string
  totalSessions: number
  completedSessions: number
  attendanceRate: number
}

export const MOCK_ADMIN_STUDENTS: AdminStudent[] = [
  {
    id: 'student-1',
    name: '김음악',
    grade: '2학년',
    parentName: '김학부모',
    parentPhone: '010-1234-5678',
    programId: 'prog-1',
    programName: '기초 음악',
    slotName: '화목반',
    status: 'active',
    enrolledAt: '2025-01-07',
    totalSessions: 4,
    completedSessions: 2,
    attendanceRate: 100,
  },
  {
    id: 'student-2',
    name: '김노래',
    grade: '4학년',
    parentName: '김학부모',
    parentPhone: '010-1234-5678',
    programId: 'prog-2',
    programName: '보컬 트레이닝',
    slotName: '화목반',
    status: 'active',
    enrolledAt: '2025-01-07',
    totalSessions: 6,
    completedSessions: 3,
    attendanceRate: 83,
  },
  {
    id: 'student-3',
    name: '이멜로디',
    grade: '1학년',
    parentName: '이부모',
    parentPhone: '010-2345-6789',
    programId: 'prog-1',
    programName: '기초 음악',
    slotName: '토요 오전반',
    status: 'active',
    enrolledAt: '2025-01-11',
    totalSessions: 4,
    completedSessions: 2,
    attendanceRate: 100,
  },
  {
    id: 'student-4',
    name: '박리듬',
    grade: '5학년',
    parentName: '박부모',
    parentPhone: '010-3456-7890',
    programId: 'prog-3',
    programName: '악기 연주',
    slotName: '토요 오후반',
    status: 'active',
    enrolledAt: '2025-01-11',
    totalSessions: 6,
    completedSessions: 2,
    attendanceRate: 100,
  },
  {
    id: 'student-5',
    name: '최하모니',
    grade: '3학년',
    parentName: '최부모',
    parentPhone: '010-4567-8901',
    programId: 'prog-2',
    programName: '보컬 트레이닝',
    slotName: '토요 오후반',
    status: 'pending',
    enrolledAt: '2025-01-20',
    totalSessions: 6,
    completedSessions: 0,
    attendanceRate: 0,
  },
  {
    id: 'student-6',
    name: '정도레미',
    grade: '2학년',
    parentName: '정부모',
    parentPhone: '010-5678-9012',
    programId: 'prog-1',
    programName: '기초 음악',
    slotName: '화목반',
    status: 'completed',
    enrolledAt: '2024-12-01',
    totalSessions: 4,
    completedSessions: 4,
    attendanceRate: 100,
  },
]

// ============================================================
// 수강 신청 관리
// ============================================================
export interface AdminEnrollment {
  id: string
  studentName: string
  parentName: string
  parentPhone: string
  programName: string
  slotName: string
  status: 'pending' | 'approved' | 'rejected' | 'waitlist'
  paymentStatus: 'pending' | 'completed' | 'refunded'
  amount: number
  appliedAt: string
  paymentType: 'immediate' | 'consultation'
}

export const MOCK_ADMIN_ENROLLMENTS: AdminEnrollment[] = [
  {
    id: 'enroll-new-1',
    studentName: '신지원',
    parentName: '신부모',
    parentPhone: '010-6789-0123',
    programName: '기초 음악',
    slotName: '화목반',
    status: 'pending',
    paymentStatus: 'pending',
    amount: 200000,
    appliedAt: '2025-01-22',
    paymentType: 'consultation',
  },
  {
    id: 'enroll-new-2',
    studentName: '임새싹',
    parentName: '임부모',
    parentPhone: '010-7890-1234',
    programName: '보컬 트레이닝',
    slotName: '토요 오후반',
    status: 'pending',
    paymentStatus: 'pending',
    amount: 280000,
    appliedAt: '2025-01-21',
    paymentType: 'immediate',
  },
  {
    id: 'enroll-new-3',
    studentName: '오선율',
    parentName: '오부모',
    parentPhone: '010-8901-2345',
    programName: '악기 연주',
    slotName: '토요 오전반',
    status: 'waitlist',
    paymentStatus: 'pending',
    amount: 280000,
    appliedAt: '2025-01-20',
    paymentType: 'immediate',
  },
]

// ============================================================
// 오늘 수업
// ============================================================
export interface TodayClass {
  id: string
  time: string
  programName: string
  slotName: string
  instructorName: string
  studentCount: number
  status: 'upcoming' | 'ongoing' | 'completed'
}

export const MOCK_TODAY_CLASSES: TodayClass[] = [
  {
    id: 'class-today-1',
    time: '16:30-17:20',
    programName: '기초 음악',
    slotName: '화목반',
    instructorName: '김음악 선생님',
    studentCount: 3,
    status: 'upcoming',
  },
  {
    id: 'class-today-2',
    time: '16:30-17:20',
    programName: '보컬 트레이닝',
    slotName: '화목반',
    instructorName: '이보컬 선생님',
    studentCount: 2,
    status: 'upcoming',
  },
  {
    id: 'class-today-3',
    time: '16:30-17:30',
    programName: '악기 연주',
    slotName: '화목반',
    instructorName: '박연주 선생님',
    studentCount: 4,
    status: 'completed',
  },
]

// ============================================================
// 결제 관리
// ============================================================
export interface AdminPayment {
  id: string
  studentName: string
  parentName: string
  programName: string
  amount: number
  status: 'pending' | 'completed' | 'refunded' | 'failed'
  method: string
  paidAt?: string
  refundedAt?: string
  enrollmentId: string
}

export const MOCK_ADMIN_PAYMENTS: AdminPayment[] = [
  {
    id: 'pay-admin-1',
    studentName: '김음악',
    parentName: '김학부모',
    programName: '기초 음악',
    amount: 200000,
    status: 'completed',
    method: '카드',
    paidAt: '2025-01-05',
    enrollmentId: 'enroll-1',
  },
  {
    id: 'pay-admin-2',
    studentName: '김노래',
    parentName: '김학부모',
    programName: '보컬 트레이닝',
    amount: 280000,
    status: 'completed',
    method: '계좌이체',
    paidAt: '2025-01-05',
    enrollmentId: 'enroll-2',
  },
  {
    id: 'pay-admin-3',
    studentName: '이멜로디',
    parentName: '이부모',
    programName: '기초 음악',
    amount: 200000,
    status: 'completed',
    method: '카드',
    paidAt: '2025-01-10',
    enrollmentId: 'enroll-3',
  },
  {
    id: 'pay-admin-4',
    studentName: '박리듬',
    parentName: '박부모',
    programName: '악기 연주',
    amount: 280000,
    status: 'pending',
    method: '-',
    enrollmentId: 'enroll-4',
  },
  {
    id: 'pay-admin-5',
    studentName: '최하모니',
    parentName: '최부모',
    programName: '보컬 트레이닝',
    amount: 280000,
    status: 'pending',
    method: '-',
    enrollmentId: 'enroll-5',
  },
]

// ============================================================
// 출석 관리
// ============================================================
export interface AdminAttendanceRecord {
  id: string
  date: string
  programName: string
  slotName: string
  students: {
    studentId: string
    studentName: string
    status: 'present' | 'absent' | 'late' | 'none'
  }[]
}

export const MOCK_ADMIN_ATTENDANCE: AdminAttendanceRecord[] = [
  {
    id: 'att-record-1',
    date: '2025-01-23',
    programName: '기초 음악',
    slotName: '화목반',
    students: [
      { studentId: 'student-1', studentName: '김음악', status: 'none' },
      { studentId: 'student-6', studentName: '정도레미', status: 'none' },
    ],
  },
  {
    id: 'att-record-2',
    date: '2025-01-21',
    programName: '기초 음악',
    slotName: '화목반',
    students: [
      { studentId: 'student-1', studentName: '김음악', status: 'present' },
      { studentId: 'student-6', studentName: '정도레미', status: 'present' },
    ],
  },
  {
    id: 'att-record-3',
    date: '2025-01-23',
    programName: '보컬 트레이닝',
    slotName: '화목반',
    students: [
      { studentId: 'student-2', studentName: '김노래', status: 'none' },
    ],
  },
]

// ============================================================
// 알림/알럿
// ============================================================
export interface AdminAlert {
  id: string
  type: 'warning' | 'info' | 'success' | 'error'
  icon: string
  message: string
  link?: string
  createdAt: string
}

export const MOCK_ADMIN_ALERTS: AdminAlert[] = [
  {
    id: 'alert-1',
    type: 'warning',
    icon: '💳',
    message: '미결제 학생 5명',
    link: '/admin/payments',
    createdAt: '2025-01-23',
  },
  {
    id: 'alert-2',
    type: 'info',
    icon: '📋',
    message: '신규 수강 신청 3건 대기 중',
    link: '/admin/enrollments',
    createdAt: '2025-01-23',
  },
  {
    id: 'alert-3',
    type: 'info',
    icon: '⏰',
    message: '오늘 수업 4건',
    createdAt: '2025-01-23',
  },
  {
    id: 'alert-4',
    type: 'success',
    icon: '✅',
    message: '이번 주 출석률 94%',
    createdAt: '2025-01-23',
  },
]

// ============================================================
// 공지사항 관리
// ============================================================
export interface AdminNotice {
  id: string
  title: string
  content: string
  isImportant: boolean
  isPublished: boolean
  createdAt: string
  updatedAt: string
  views: number
}

export const MOCK_ADMIN_NOTICES: AdminNotice[] = [
  {
    id: 'notice-admin-1',
    title: '[중요] 2025년 1학기 수강 신청 안내',
    content: '2025년 1학기 신규 프로그램 수강 신청이 2월 1일부터 시작됩니다.',
    isImportant: true,
    isPublished: true,
    createdAt: '2025-01-20',
    updatedAt: '2025-01-20',
    views: 156,
  },
  {
    id: 'notice-admin-2',
    title: '설날 연휴 휴강 안내',
    content: '1월 28일(화) ~ 1월 30일(목)은 설날 연휴로 휴강합니다.',
    isImportant: true,
    isPublished: true,
    createdAt: '2025-01-18',
    updatedAt: '2025-01-18',
    views: 89,
  },
  {
    id: 'notice-admin-3',
    title: '신규 악기 프로그램 오픈 예정',
    content: '드럼과 바이올린 프로그램이 3월부터 새롭게 오픈됩니다.',
    isImportant: false,
    isPublished: true,
    createdAt: '2025-01-15',
    updatedAt: '2025-01-15',
    views: 45,
  },
  {
    id: 'notice-admin-4',
    title: '[초안] 3월 발표회 안내',
    content: '3월 발표회 일정 및 장소를 안내드립니다.',
    isImportant: false,
    isPublished: false,
    createdAt: '2025-01-22',
    updatedAt: '2025-01-22',
    views: 0,
  },
]

// ============================================================
// 갤러리 관리
// ============================================================
export interface AdminGalleryItem {
  id: string
  title: string
  description: string
  imageCount: number
  category: string
  isPublished: boolean
  createdAt: string
  views: number
}

export const MOCK_ADMIN_GALLERY: AdminGalleryItem[] = [
  {
    id: 'gallery-admin-1',
    title: '12월 겨울 발표회',
    description: '2024년 겨울 발표회 현장 사진입니다.',
    imageCount: 24,
    category: '발표회',
    isPublished: true,
    createdAt: '2024-12-20',
    views: 234,
  },
  {
    id: 'gallery-admin-2',
    title: '기초 음악 수업 현장',
    description: '1월 기초 음악 수업 모습입니다.',
    imageCount: 12,
    category: '수업',
    isPublished: true,
    createdAt: '2025-01-15',
    views: 89,
  },
  {
    id: 'gallery-admin-3',
    title: '보컬 트레이닝 연습',
    description: '보컬 트레이닝 수업 연습 현장',
    imageCount: 8,
    category: '수업',
    isPublished: true,
    createdAt: '2025-01-10',
    views: 67,
  },
]
