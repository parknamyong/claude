import { Link } from 'react-router-dom'
import { Card, Button, Badge } from '@/components/common'
import type { EnrollmentResult } from '@/types'
import styles from '../EnrollmentPage.module.css'

interface CompletePageProps {
  result: EnrollmentResult
}

export function CompletePage({ result }: CompletePageProps) {
  const isWaitlist = result.status === 'waitlist'
  const isPendingPayment = result.status === 'pending_payment'

  return (
    <div className={styles.completeStep}>
      {/* 완료 헤더 */}
      <div className={styles.completeHeader}>
        <div className={styles.completeIcon}>
          {isWaitlist ? '⏳' : isPendingPayment ? '📞' : '✅'}
        </div>
        <h1 className={styles.completeTitle}>
          {isWaitlist
            ? '대기자 등록 완료!'
            : isPendingPayment
              ? '상담 신청 완료!'
              : '수강 신청 완료!'}
        </h1>
        <p className={styles.completeSubtitle}>
          {isWaitlist
            ? '대기 순번이 되면 연락드리겠습니다.'
            : isPendingPayment
              ? '담당자가 곧 연락드리겠습니다.'
              : '수강 신청이 정상적으로 완료되었습니다.'}
        </p>
      </div>

      {/* 신청 정보 */}
      <Card className={styles.resultCard}>
        <div className={styles.resultHeader}>
          <span className={styles.resultLabel}>신청번호</span>
          <span className={styles.resultId}>{result.enrollmentId}</span>
        </div>

        <div className={styles.resultDivider} />

        <div className={styles.resultBody}>
          <div className={styles.resultItem}>
            <span>프로그램</span>
            <span>{result.programName}</span>
          </div>
          <div className={styles.resultItem}>
            <span>시간대</span>
            <span>{result.slotName}</span>
          </div>
          <div className={styles.resultItem}>
            <span>수업 시간</span>
            <span>{result.slotTime}</span>
          </div>
          <div className={styles.resultItem}>
            <span>학생명</span>
            <span>{result.studentName}</span>
          </div>
          <div className={styles.resultItem}>
            <span>연락처</span>
            <span>{result.parentPhone}</span>
          </div>
          <div className={styles.resultItem}>
            <span>결제 금액</span>
            <span className={styles.resultPrice}>
              {result.totalPrice.toLocaleString()}원
            </span>
          </div>
          <div className={styles.resultItem}>
            <span>결제 방식</span>
            <span>
              {result.paymentType === 'immediate' ? '즉시 결제' : '상담 후 결제'}
            </span>
          </div>
          <div className={styles.resultItem}>
            <span>결제 상태</span>
            <Badge
              variant={
                result.paymentStatus === 'completed'
                  ? 'open'
                  : result.paymentStatus === 'pending'
                    ? 'closed'
                    : 'closed'
              }
            >
              {result.paymentStatus === 'completed'
                ? '결제 완료'
                : result.paymentStatus === 'pending'
                  ? '결제 대기'
                  : '처리중'}
            </Badge>
          </div>
          {isWaitlist && result.waitlistPosition && (
            <div className={styles.resultItem}>
              <span>대기 순번</span>
              <Badge variant="closed">{result.waitlistPosition}번</Badge>
            </div>
          )}
        </div>
      </Card>

      {/* 알림 시뮬레이션 */}
      <Card className={styles.notificationCard}>
        <div className={styles.notificationHeader}>
          <span className={styles.notificationIcon}>📱</span>
          <span className={styles.notificationTitle}>알림 발송 완료</span>
        </div>
        <div className={styles.notificationBody}>
          <p>
            <strong>{result.parentPhone}</strong>로 신청 확인 문자가 발송되었습니다.
          </p>
          <p className={styles.notificationNote}>
            (시뮬레이션: 실제 문자는 발송되지 않습니다)
          </p>
        </div>
      </Card>

      {/* 다음 단계 안내 */}
      <Card className={styles.nextStepsCard}>
        <h3 className={styles.nextStepsTitle}>다음 안내</h3>
        <ul className={styles.nextStepsList}>
          {isPendingPayment ? (
            <>
              <li>담당자가 입력하신 연락처로 곧 연락드립니다.</li>
              <li>상담 후 결제 링크를 발송해드립니다.</li>
              <li>결제 완료 후 수강이 최종 확정됩니다.</li>
            </>
          ) : isWaitlist ? (
            <>
              <li>현재 대기 순번 {result.waitlistPosition}번입니다.</li>
              <li>자리가 나면 순번대로 연락드립니다.</li>
              <li>연락 후 24시간 내 결제하시면 수강이 확정됩니다.</li>
            </>
          ) : (
            <>
              <li>수업 시작일 전에 오리엔테이션 안내를 발송해드립니다.</li>
              <li>준비물 및 유의사항은 문자로 안내됩니다.</li>
              <li>궁금한 점은 고객센터로 문의해주세요.</li>
            </>
          )}
        </ul>
      </Card>

      {/* 버튼 */}
      <div className={styles.completeActions}>
        <Link to="/">
          <Button variant="outline" size="lg">
            홈으로
          </Button>
        </Link>
        <Link to="/programs">
          <Button variant="primary" size="lg">
            다른 프로그램 보기
          </Button>
        </Link>
      </div>
    </div>
  )
}
