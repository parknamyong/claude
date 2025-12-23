/**
 * 수강 신청 관련 타입 정의
 */

// ============================================================
// 기존 타입 (호환성 유지)
// ============================================================

export interface EnrollmentForm {
  // 프로그램 선택
  programId: string
  classSlotId: string

  // 학생 정보 (필수)
  studentName: string
  studentGrade: string
  studentBirthDate: string

  // 학부모 정보 (필수)
  parentName: string
  parentPhone: string
  parentEmail: string
  relationship: string

  // 추가 정보 (선택)
  previousExperience?: string
  healthNote?: string

  // 동의 항목 (필수)
  agreeTerms: boolean
  agreePrivacy: boolean
  agreeRefundPolicy: boolean

  // 결제 방식
  paymentMethod: 'immediate' | 'consultation'
}

export interface Enrollment {
  id: string
  form: EnrollmentForm
  status: 'pending' | 'paid' | 'confirmed' | 'cancelled'
  paymentStatus: 'pending' | 'completed' | 'refunded'
  createdAt: string
  isWaitlist: boolean
}

// ============================================================
// 수강 신청 플로우 타입 (PR #5)
// ============================================================

// 신청 단계
export type EnrollmentStep = 'select' | 'info' | 'payment' | 'complete'

// 신청 유형 (일반/대기자)
export type EnrollType = 'regular' | 'waitlist'

// 결제 방식
export type PaymentType = 'immediate' | 'consultation'

// 결제 상태
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed'

// 학생 정보 (필수)
export interface StudentInfo {
  name: string
  grade: string // "1" ~ "6"
  phone: string
}

// 학부모 정보 (필수)
export interface ParentInfo {
  name: string
  phone: string
  relation: string // "father", "mother", "grandparent", "other"
}

// 추가 정보 (선택)
export interface AdditionalInfo {
  experience: string // 음악 경험
  wishes: string // 희망 사항
}

// 동의 항목
export interface Consents {
  privacy: boolean // 개인정보 수집/이용 동의 (필수)
  terms: boolean // 이용약관 동의 (필수)
  marketing: boolean // 마케팅 수신 동의 (선택)
}

// 신청 결과
export interface EnrollmentResult {
  enrollmentId: string // 신청 번호 (EN-YYYYMMDD-XXXX)
  status: 'confirmed' | 'waitlist' | 'pending_payment'
  programName: string
  slotName: string
  slotTime: string
  studentName: string
  parentPhone: string
  totalPrice: number
  paymentType: PaymentType
  paymentStatus: PaymentStatus
  createdAt: Date
  waitlistPosition?: number // 대기 순번 (대기자인 경우)
}

// ============================================================
// 상수 및 초기값
// ============================================================

// 학년 옵션
export const GRADE_OPTIONS = [
  { value: '1', label: '1학년' },
  { value: '2', label: '2학년' },
  { value: '3', label: '3학년' },
  { value: '4', label: '4학년' },
  { value: '5', label: '5학년' },
  { value: '6', label: '6학년' },
]

// 관계 옵션
export const RELATION_OPTIONS = [
  { value: 'father', label: '부' },
  { value: 'mother', label: '모' },
  { value: 'grandparent', label: '조부모' },
  { value: 'other', label: '기타' },
]

// 초기 폼 상태
export const INITIAL_STUDENT_INFO: StudentInfo = {
  name: '',
  grade: '',
  phone: '',
}

export const INITIAL_PARENT_INFO: ParentInfo = {
  name: '',
  phone: '',
  relation: '',
}

export const INITIAL_ADDITIONAL_INFO: AdditionalInfo = {
  experience: '',
  wishes: '',
}

export const INITIAL_CONSENTS: Consents = {
  privacy: false,
  terms: false,
  marketing: false,
}
