import { PageHeader, Card } from '@/components/common'
import { useAuth } from '@/hooks/useAuth'
import styles from './AdminDashboardPage.module.css'

export function AdminDashboardPage() {
  const { currentAdmin } = useAuth()

  return (
    <div className={styles.page}>
      <PageHeader
        title={`안녕하세요, ${currentAdmin?.name || '관리자'}님`}
        description="AI 음악교실 관리 현황을 확인하세요"
      />

      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>총 등록 학생</h3>
          <p className={styles.statValue}>48명</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>운영 프로그램</h3>
          <p className={styles.statValue}>3개</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>이번 달 출석률</h3>
          <p className={styles.statValue}>94%</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>미결제 건</h3>
          <p className={styles.statValue}>5건</p>
        </Card>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>오늘의 수업</h2>
          <Card className={styles.scheduleCard}>
            <p className={styles.placeholder}>오늘 수업 목록 (다음 PR에서 구현)</p>
            <div className={styles.scheduleItem}>
              <span className={styles.scheduleTime}>15:00 - 16:00</span>
              <span className={styles.scheduleProgram}>기초 음악 - 월수 A반</span>
              <span className={styles.scheduleCount}>학생 8명</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.scheduleTime}>16:00 - 17:00</span>
              <span className={styles.scheduleProgram}>보컬 트레이닝 - 월수반</span>
              <span className={styles.scheduleCount}>학생 6명</span>
            </div>
          </Card>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>최근 신청</h2>
          <Card className={styles.enrollmentCard}>
            <p className={styles.placeholder}>최근 수강 신청 목록 (다음 PR에서 구현)</p>
            <div className={styles.enrollmentItem}>
              <span className={styles.enrollmentName}>김민준 (기초 음악)</span>
              <span className={styles.enrollmentStatus}>검토 대기</span>
            </div>
            <div className={styles.enrollmentItem}>
              <span className={styles.enrollmentName}>이서연 (보컬 트레이닝)</span>
              <span className={styles.enrollmentStatus}>검토 대기</span>
            </div>
          </Card>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>알림</h2>
          <Card className={styles.alertCard}>
            <p className={styles.placeholder}>관리자 알림 (다음 PR에서 구현)</p>
            <div className={styles.alertItem}>
              <span className={styles.alertIcon}>⚠️</span>
              <span className={styles.alertText}>미결제 학생 5명 알림</span>
            </div>
            <div className={styles.alertItem}>
              <span className={styles.alertIcon}>📋</span>
              <span className={styles.alertText}>신규 수강 신청 2건</span>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
