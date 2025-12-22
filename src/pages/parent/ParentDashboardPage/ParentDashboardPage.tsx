import { PageHeader, Card } from '@/components/common'
import { useAuth } from '@/hooks/useAuth'
import styles from './ParentDashboardPage.module.css'

export function ParentDashboardPage() {
  const { currentParent } = useAuth()

  return (
    <div className={styles.page}>
      <PageHeader
        title={`안녕하세요, ${currentParent?.name || '학부모'}님`}
        description="자녀의 수강 현황을 한눈에 확인하세요"
      />

      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>수강 중인 프로그램</h3>
          <p className={styles.statValue}>2개</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>이번 달 출석률</h3>
          <p className={styles.statValue}>92%</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>다음 수업</h3>
          <p className={styles.statValue}>내일 15:00</p>
        </Card>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>다음 수업 일정</h2>
          <Card className={styles.scheduleCard}>
            <p className={styles.placeholder}>수업 일정 정보 (다음 PR에서 구현)</p>
            <div className={styles.scheduleItem}>
              <span className={styles.scheduleDate}>1/20 (월) 15:00</span>
              <span className={styles.scheduleProgram}>기초 음악 - 월수 A반</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.scheduleDate}>1/22 (수) 15:00</span>
              <span className={styles.scheduleProgram}>기초 음악 - 월수 A반</span>
            </div>
          </Card>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>최근 공지사항</h2>
          <Card className={styles.noticeCard}>
            <p className={styles.placeholder}>공지사항 목록 (다음 PR에서 구현)</p>
            <div className={styles.noticeItem}>
              <span className={styles.noticeTitle}>[중요] 2025년 1학기 수강 신청 안내</span>
              <span className={styles.noticeDate}>2025.01.15</span>
            </div>
            <div className={styles.noticeItem}>
              <span className={styles.noticeTitle}>설날 연휴 휴강 안내</span>
              <span className={styles.noticeDate}>2025.01.10</span>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
