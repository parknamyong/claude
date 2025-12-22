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
