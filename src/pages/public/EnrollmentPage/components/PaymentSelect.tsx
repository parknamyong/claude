import { useState } from 'react'
import { Card, Button, Badge } from '@/components/common'
import type { PaymentType, PaymentStatus, Program, ClassSlot, EnrollType } from '@/types'
import styles from '../EnrollmentPage.module.css'

interface PaymentSelectProps {
  program: Program
  slot: ClassSlot
  enrollType: EnrollType
  paymentType: PaymentType
  paymentStatus: PaymentStatus
  onPaymentTypeChange: (type: PaymentType) => void
  onPaymentStatusChange: (status: PaymentStatus) => void
  onBack: () => void
  onComplete: () => void
}

export function PaymentSelect({
  program,
  slot,
  enrollType,
  paymentType,
  paymentStatus,
  onPaymentTypeChange,
  onPaymentStatusChange,
  onBack,
  onComplete,
}: PaymentSelectProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  // 즉시 결제 시뮬레이션
  const handleImmediatePayment = async () => {
    setIsProcessing(true)
    onPaymentStatusChange('processing')

    // 2초 결제 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 2000))

    onPaymentStatusChange('completed')
    setIsProcessing(false)
    onComplete()
  }

  // 상담 후 결제
  const handleConsultation = () => {
    onComplete()
  }

  const isWaitlist = enrollType === 'waitlist'

  return (
    <div className={styles.paymentStep}>
      {/* 결제 정보 요약 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>결제 정보</h2>
        <Card className={styles.paymentSummary}>
          <div className={styles.paymentItem}>
            <span>프로그램</span>
            <span>{program.name}</span>
          </div>
          <div className={styles.paymentItem}>
            <span>시간대</span>
            <span>
              {slot.name} ({slot.dayOfWeek.join(', ')} {slot.time})
            </span>
          </div>
          <div className={styles.paymentItem}>
            <span>수업 회차</span>
            <span>{program.sessions}회</span>
          </div>
          {isWaitlist && (
            <div className={styles.paymentItem}>
              <span>신청 유형</span>
              <Badge variant="closed">대기자 신청</Badge>
            </div>
          )}
          <div className={styles.paymentTotal}>
            <span>결제 금액</span>
            <span className={styles.totalPrice}>
              {program.price.toLocaleString()}원
            </span>
          </div>
        </Card>
      </section>

      {/* 결제 방식 선택 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>결제 방식 선택</h2>

        <div className={styles.paymentOptions}>
          {/* 즉시 결제 */}
          <Card
            className={`${styles.paymentOption} ${paymentType === 'immediate' ? styles.selected : ''}`}
            onClick={() => onPaymentTypeChange('immediate')}
          >
            <div className={styles.optionHeader}>
              <input
                type="radio"
                name="paymentType"
                checked={paymentType === 'immediate'}
                onChange={() => onPaymentTypeChange('immediate')}
              />
              <span className={styles.optionTitle}>즉시 결제</span>
            </div>
            <p className={styles.optionDesc}>
              지금 바로 결제를 완료합니다. 결제 완료 후 수강이 확정됩니다.
            </p>
            {isWaitlist && (
              <p className={styles.optionNote}>
                * 대기자 신청 시 결제 후 자리가 나면 수강이 확정됩니다.
              </p>
            )}
          </Card>

          {/* 상담 후 결제 */}
          <Card
            className={`${styles.paymentOption} ${paymentType === 'consultation' ? styles.selected : ''}`}
            onClick={() => onPaymentTypeChange('consultation')}
          >
            <div className={styles.optionHeader}>
              <input
                type="radio"
                name="paymentType"
                checked={paymentType === 'consultation'}
                onChange={() => onPaymentTypeChange('consultation')}
              />
              <span className={styles.optionTitle}>상담 후 결제</span>
            </div>
            <p className={styles.optionDesc}>
              먼저 상담을 진행한 후 결제 링크를 받아 결제합니다.
            </p>
            <p className={styles.optionNote}>
              * 담당자가 연락드려 상담 후 결제 링크를 발송해드립니다.
            </p>
          </Card>
        </div>
      </section>

      {/* 결제 진행 */}
      {paymentType === 'immediate' && paymentStatus === 'processing' && (
        <div className={styles.processingOverlay}>
          <div className={styles.processingModal}>
            <div className={styles.spinner} />
            <p>결제를 처리하고 있습니다...</p>
            <p className={styles.processingNote}>잠시만 기다려주세요</p>
          </div>
        </div>
      )}

      {/* 버튼 */}
      <div className={styles.stepActions}>
        <Button variant="outline" size="lg" onClick={onBack} disabled={isProcessing}>
          이전
        </Button>
        {paymentType === 'immediate' ? (
          <Button
            variant="primary"
            size="lg"
            onClick={handleImmediatePayment}
            disabled={isProcessing}
          >
            {isProcessing ? '결제 처리 중...' : `${program.price.toLocaleString()}원 결제하기`}
          </Button>
        ) : (
          <Button variant="primary" size="lg" onClick={handleConsultation}>
            상담 신청하기
          </Button>
        )}
      </div>
    </div>
  )
}
