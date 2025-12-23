import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Card, Badge, Button, ImagePlaceholder } from '@/components/common'
import { useAuth } from '@/hooks/useAuth'
import {
  MOCK_PARENT_ENROLLMENTS,
  MOCK_UPCOMING_CLASSES,
  MOCK_PARENT_ATTENDANCE,
  MOCK_PARENT_PAYMENTS,
  MOCK_PARENT_NOTICES,
  MOCK_INSTRUCTORS,
} from '@/data'
import styles from './ParentDashboardPage.module.css'

export function ParentDashboardPage() {
  const { currentParent } = useAuth()
  const [downloadingReceipt, setDownloadingReceipt] = useState<string | null>(null)

  // 출석률 계산
  const calculateAttendanceRate = () => {
    const totalAttendance = MOCK_PARENT_ATTENDANCE.length
    const presentCount = MOCK_PARENT_ATTENDANCE.filter(
      (a) => a.status === 'present' || a.status === 'late'
    ).length
    return totalAttendance > 0 ? Math.round((presentCount / totalAttendance) * 100) : 0
  }

  // 다음 수업 정보
  const nextClass = MOCK_UPCOMING_CLASSES[0]

  // 날짜 포맷팅
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const weekdays = ['일', '월', '화', '수', '목', '금', '토']
    const weekday = weekdays[date.getDay()]
    return `${month}/${day}(${weekday})`
  }

  // 영수증 다운로드 시뮬레이션
  const handleDownloadReceipt = async (paymentId: string) => {
    setDownloadingReceipt(paymentId)
    // 1.5초 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setDownloadingReceipt(null)
    alert('영수증 다운로드가 완료되었습니다.\n(시뮬레이션: 실제 파일은 생성되지 않습니다)')
  }

  return (
    <div className={styles.page}>
      <PageHeader
        title={`안녕하세요, ${currentParent?.name || '학부모'}님`}
        description="자녀의 수강 현황을 한눈에 확인하세요"
      />

      {/* 통계 카드 */}
      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>수강 중인 프로그램</h3>
          <p className={styles.statValue}>{MOCK_PARENT_ENROLLMENTS.length}개</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>이번 달 출석률</h3>
          <p className={styles.statValue}>{calculateAttendanceRate()}%</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>다음 수업</h3>
          <p className={styles.statValue}>
            {nextClass ? `${formatDate(nextClass.date)} ${nextClass.time.split('-')[0]}` : '-'}
          </p>
        </Card>
      </div>

      {/* 수강 중인 프로그램 카드 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>수강 중인 프로그램</h2>
          <Link to="/parent/courses" className={styles.sectionLink}>
            전체보기
          </Link>
        </div>
        <div className={styles.enrollmentCards}>
          {MOCK_PARENT_ENROLLMENTS.map((enrollment) => {
            const instructor = MOCK_INSTRUCTORS.find((i) => i.id === enrollment.instructorId)
            const remainingSessions = enrollment.totalSessions - enrollment.completedSessions

            return (
              <Card key={enrollment.id} className={styles.enrollmentCard}>
                <div className={styles.enrollmentHeader}>
                  <div>
                    <Badge variant="open">{enrollment.status === 'active' ? '수강중' : '완료'}</Badge>
                    <h3 className={styles.enrollmentProgram}>{enrollment.programName}</h3>
                    <p className={styles.enrollmentStudent}>{enrollment.studentName}</p>
                  </div>
                  <div className={styles.enrollmentProgress}>
                    <div className={styles.progressRing}>
                      <span className={styles.progressValue}>
                        {enrollment.completedSessions}/{enrollment.totalSessions}
                      </span>
                    </div>
                    <span className={styles.progressLabel}>회차</span>
                  </div>
                </div>

                <div className={styles.enrollmentBody}>
                  <div className={styles.enrollmentInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>📅</span>
                      <span>{enrollment.slotTime}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>👨‍🏫</span>
                      <span>{enrollment.instructorName}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>📊</span>
                      <span>남은 회차: {remainingSessions}회</span>
                    </div>
                  </div>

                  {instructor && (
                    <div className={styles.instructorMini}>
                      <ImagePlaceholder width="40px" height="40px" label="" />
                      <div>
                        <p className={styles.instructorName}>{instructor.name}</p>
                        <p className={styles.instructorRole}>{instructor.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <div className={styles.twoColumn}>
        {/* 다음 수업 일정 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>다음 수업 일정</h2>
            <Link to="/parent/schedule" className={styles.sectionLink}>
              전체보기
            </Link>
          </div>
          <Card className={styles.scheduleCard}>
            {MOCK_UPCOMING_CLASSES.slice(0, 4).map((cls) => (
              <div key={cls.id} className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>
                  <span className={styles.dateDay}>{formatDate(cls.date)}</span>
                  <span className={styles.dateTime}>{cls.time}</span>
                </div>
                <div className={styles.scheduleInfo}>
                  <span className={styles.scheduleProgram}>{cls.programName}</span>
                  <span className={styles.scheduleStudent}>{cls.studentName}</span>
                </div>
              </div>
            ))}
          </Card>
        </section>

        {/* 출석 현황 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>출석 현황</h2>
            <Link to="/parent/attendance" className={styles.sectionLink}>
              전체보기
            </Link>
          </div>
          <Card className={styles.attendanceCard}>
            {MOCK_PARENT_ENROLLMENTS.map((enrollment) => {
              const studentAttendance = MOCK_PARENT_ATTENDANCE.filter(
                (a) => a.studentId === enrollment.studentId
              )
              const presentCount = studentAttendance.filter(
                (a) => a.status === 'present'
              ).length
              const lateCount = studentAttendance.filter((a) => a.status === 'late').length
              const absentCount = studentAttendance.filter((a) => a.status === 'absent').length

              return (
                <div key={enrollment.id} className={styles.attendanceItem}>
                  <div className={styles.attendanceHeader}>
                    <span className={styles.attendanceStudent}>{enrollment.studentName}</span>
                    <span className={styles.attendanceProgram}>{enrollment.programName}</span>
                  </div>
                  <div className={styles.attendanceStats}>
                    <span className={styles.statPresent}>출석 {presentCount}</span>
                    <span className={styles.statLate}>지각 {lateCount}</span>
                    <span className={styles.statAbsent}>결석 {absentCount}</span>
                  </div>
                  <div className={styles.attendanceBar}>
                    <div
                      className={styles.barPresent}
                      style={{
                        width: `${(presentCount / studentAttendance.length) * 100}%`,
                      }}
                    />
                    <div
                      className={styles.barLate}
                      style={{
                        width: `${(lateCount / studentAttendance.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </Card>
        </section>
      </div>

      <div className={styles.twoColumn}>
        {/* 결제 내역 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>결제 내역</h2>
            <Link to="/parent/payments" className={styles.sectionLink}>
              전체보기
            </Link>
          </div>
          <Card className={styles.paymentCard}>
            {MOCK_PARENT_PAYMENTS.map((payment) => {
              const enrollment = MOCK_PARENT_ENROLLMENTS.find(
                (e) => e.id === payment.enrollmentId
              )
              const paidDate = payment.paidAt
                ? new Date(payment.paidAt).toLocaleDateString('ko-KR')
                : '-'

              return (
                <div key={payment.id} className={styles.paymentItem}>
                  <div className={styles.paymentInfo}>
                    <div className={styles.paymentHeader}>
                      <span className={styles.paymentProgram}>
                        {enrollment?.programName || '-'}
                      </span>
                      <Badge variant={payment.status === 'completed' ? 'open' : 'closed'}>
                        {payment.status === 'completed' ? '결제완료' : '대기'}
                      </Badge>
                    </div>
                    <p className={styles.paymentStudent}>{enrollment?.studentName}</p>
                    <p className={styles.paymentDate}>{paidDate} · {payment.method}</p>
                  </div>
                  <div className={styles.paymentAmount}>
                    <span className={styles.amount}>{payment.amount.toLocaleString()}원</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadReceipt(payment.id)}
                      disabled={downloadingReceipt === payment.id}
                    >
                      {downloadingReceipt === payment.id ? '다운로드중...' : '영수증'}
                    </Button>
                  </div>
                </div>
              )
            })}
          </Card>
        </section>

        {/* 공지사항 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>공지사항</h2>
            <Link to="/parent/notices" className={styles.sectionLink}>
              전체보기
            </Link>
          </div>
          <Card className={styles.noticeCard}>
            {MOCK_PARENT_NOTICES.slice(0, 4).map((notice) => (
              <div key={notice.id} className={styles.noticeItem}>
                <div className={styles.noticeContent}>
                  <div className={styles.noticeTitleRow}>
                    {notice.isImportant && (
                      <Badge variant="closed">중요</Badge>
                    )}
                    <span className={styles.noticeTitle}>{notice.title}</span>
                  </div>
                  <p className={styles.noticeExcerpt}>{notice.excerpt}</p>
                </div>
                <span className={styles.noticeDate}>{notice.date}</span>
              </div>
            ))}
          </Card>
        </section>
      </div>
    </div>
  )
}
