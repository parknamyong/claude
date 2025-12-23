import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageHeader, Card } from '@/components/common'
import { MOCK_PROGRAMS } from '@/data'
import type {
  Program,
  ClassSlot,
  EnrollmentStep,
  EnrollType,
  PaymentType,
  PaymentStatus,
  StudentInfo,
  ParentInfo,
  AdditionalInfo,
  Consents,
  EnrollmentResult,
} from '@/types'
import {
  INITIAL_STUDENT_INFO,
  INITIAL_PARENT_INFO,
  INITIAL_ADDITIONAL_INFO,
  INITIAL_CONSENTS,
} from '@/types'
import {
  StepIndicator,
  ProgramSelect,
  InfoForm,
  PaymentSelect,
  CompletePage,
} from './components'
import styles from './EnrollmentPage.module.css'

export function EnrollmentPage() {
  const [searchParams] = useSearchParams()

  // 단계 상태
  const [currentStep, setCurrentStep] = useState<EnrollmentStep>('select')

  // 선택 상태
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<ClassSlot | null>(null)
  const [enrollType, setEnrollType] = useState<EnrollType>('regular')

  // 폼 상태
  const [studentInfo, setStudentInfo] = useState<StudentInfo>(INITIAL_STUDENT_INFO)
  const [parentInfo, setParentInfo] = useState<ParentInfo>(INITIAL_PARENT_INFO)
  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo>(INITIAL_ADDITIONAL_INFO)
  const [consents, setConsents] = useState<Consents>(INITIAL_CONSENTS)

  // 결제 상태
  const [paymentType, setPaymentType] = useState<PaymentType>('immediate')
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('pending')

  // 완료 상태
  const [enrollmentResult, setEnrollmentResult] = useState<EnrollmentResult | null>(null)

  // URL 파라미터로 프로그램 자동 선택
  useEffect(() => {
    const programSlug = searchParams.get('program')
    if (programSlug) {
      const program = MOCK_PROGRAMS.find((p) => p.slug === programSlug)
      if (program) {
        setSelectedProgram(program)
      }
    }
  }, [searchParams])

  // 프로그램 선택 핸들러
  const handleProgramSelect = (program: Program) => {
    setSelectedProgram(program)
    setSelectedSlot(null)
    setEnrollType('regular')
  }

  // 시간대 선택 핸들러
  const handleSlotSelect = (slot: ClassSlot, type: EnrollType) => {
    setSelectedSlot(slot)
    setEnrollType(type)
  }

  // 신청 완료 처리
  const handleComplete = () => {
    if (!selectedProgram || !selectedSlot) return

    // 신청 번호 생성
    const now = new Date()
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
    const randomNum = Math.floor(1000 + Math.random() * 9000)
    const enrollmentId = `EN-${dateStr}-${randomNum}`

    // 대기 순번 (대기자인 경우)
    const waitlistPosition = enrollType === 'waitlist' ? selectedSlot.waitlist + 1 : undefined

    const result: EnrollmentResult = {
      enrollmentId,
      status:
        enrollType === 'waitlist'
          ? 'waitlist'
          : paymentType === 'consultation'
            ? 'pending_payment'
            : 'confirmed',
      programName: selectedProgram.name,
      slotName: selectedSlot.name,
      slotTime: `${selectedSlot.dayOfWeek.join(', ')} ${selectedSlot.time}`,
      studentName: studentInfo.name,
      parentPhone: parentInfo.phone,
      totalPrice: selectedProgram.price,
      paymentType,
      paymentStatus: paymentType === 'immediate' ? 'completed' : 'pending',
      createdAt: now,
      waitlistPosition,
    }

    setEnrollmentResult(result)
    setCurrentStep('complete')
  }

  // 단계별 네비게이션
  const goToStep = (step: EnrollmentStep) => {
    setCurrentStep(step)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 사이드바 요약 정보
  const renderSidebar = () => {
    if (currentStep === 'complete') return null

    return (
      <aside className={styles.sidebar}>
        <Card className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>신청 요약</h3>

          <div className={styles.summaryItem}>
            <span>프로그램</span>
            <span>{selectedProgram?.name || '-'}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>시간대</span>
            <span>{selectedSlot?.name || '-'}</span>
          </div>
          {selectedSlot && (
            <div className={styles.summaryItem}>
              <span>수업 시간</span>
              <span>
                {selectedSlot.dayOfWeek.join(', ')} {selectedSlot.time}
              </span>
            </div>
          )}
          {enrollType === 'waitlist' && (
            <div className={styles.summaryItem}>
              <span>신청 유형</span>
              <span className={styles.waitlistLabel}>대기자</span>
            </div>
          )}
          <div className={styles.summaryItem}>
            <span>회차</span>
            <span>{selectedProgram ? `${selectedProgram.sessions}회` : '-'}</span>
          </div>

          <div className={styles.summaryTotal}>
            <span>총 결제 금액</span>
            <span>{selectedProgram ? `${selectedProgram.price.toLocaleString()}원` : '0원'}</span>
          </div>

          {studentInfo.name && (
            <div className={styles.summarySection}>
              <h4 className={styles.summarySectionTitle}>학생 정보</h4>
              <div className={styles.summaryItem}>
                <span>이름</span>
                <span>{studentInfo.name}</span>
              </div>
              {studentInfo.grade && (
                <div className={styles.summaryItem}>
                  <span>학년</span>
                  <span>{studentInfo.grade}학년</span>
                </div>
              )}
            </div>
          )}
        </Card>
      </aside>
    )
  }

  // 단계별 컨텐츠 렌더링
  const renderStepContent = () => {
    switch (currentStep) {
      case 'select':
        return (
          <ProgramSelect
            selectedProgram={selectedProgram}
            selectedSlot={selectedSlot}
            enrollType={enrollType}
            onProgramSelect={handleProgramSelect}
            onSlotSelect={handleSlotSelect}
            onNext={() => goToStep('info')}
          />
        )

      case 'info':
        return (
          <InfoForm
            studentInfo={studentInfo}
            parentInfo={parentInfo}
            additionalInfo={additionalInfo}
            consents={consents}
            onStudentChange={setStudentInfo}
            onParentChange={setParentInfo}
            onAdditionalChange={setAdditionalInfo}
            onConsentsChange={setConsents}
            onBack={() => goToStep('select')}
            onNext={() => goToStep('payment')}
          />
        )

      case 'payment':
        if (!selectedProgram || !selectedSlot) return null
        return (
          <PaymentSelect
            program={selectedProgram}
            slot={selectedSlot}
            enrollType={enrollType}
            paymentType={paymentType}
            paymentStatus={paymentStatus}
            onPaymentTypeChange={setPaymentType}
            onPaymentStatusChange={setPaymentStatus}
            onBack={() => goToStep('info')}
            onComplete={handleComplete}
          />
        )

      case 'complete':
        if (!enrollmentResult) return null
        return <CompletePage result={enrollmentResult} />

      default:
        return null
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {currentStep !== 'complete' && (
          <PageHeader
            title="수강 신청"
            description="원하는 프로그램을 선택하고 신청서를 작성해주세요"
          />
        )}

        <StepIndicator currentStep={currentStep} />

        <div className={`${styles.content} ${currentStep === 'complete' ? styles.fullWidth : ''}`}>
          <div className={styles.mainContent}>{renderStepContent()}</div>
          {renderSidebar()}
        </div>
      </div>
    </div>
  )
}
