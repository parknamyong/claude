import { PageHeader, Card } from '@/components/common'
import styles from './ParentSchedulePage.module.css'

export function ParentSchedulePage() {
  return (
    <div className={styles.page}>
      <PageHeader title="일정" description="자녀의 수업 일정을 확인하세요" />

      <Card className={styles.calendarCard}>
        <h3 className={styles.monthTitle}>2025년 1월</h3>
        <p className={styles.placeholder}>캘린더 뷰 (다음 PR에서 구현)</p>

        <div className={styles.calendarPlaceholder}>
          <div className={styles.weekHeader}>
            <span>일</span>
            <span>월</span>
            <span>화</span>
            <span>수</span>
            <span>목</span>
            <span>금</span>
            <span>토</span>
          </div>
          <div className={styles.calendarGrid}>
            {/* Placeholder for calendar days */}
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className={styles.dayCell}>
                {i >= 3 && i <= 33 ? i - 2 : ''}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <section className={styles.upcomingSection}>
        <h3 className={styles.sectionTitle}>다가오는 수업</h3>
        <div className={styles.scheduleList}>
          <Card className={styles.scheduleItem}>
            <div className={styles.scheduleDate}>
              <span className={styles.day}>20</span>
              <span className={styles.weekday}>월</span>
            </div>
            <div className={styles.scheduleInfo}>
              <span className={styles.time}>15:00 - 15:50</span>
              <span className={styles.program}>기초 음악 - 김음악</span>
            </div>
          </Card>
          <Card className={styles.scheduleItem}>
            <div className={styles.scheduleDate}>
              <span className={styles.day}>22</span>
              <span className={styles.weekday}>수</span>
            </div>
            <div className={styles.scheduleInfo}>
              <span className={styles.time}>15:00 - 15:50</span>
              <span className={styles.program}>기초 음악 - 김음악</span>
            </div>
          </Card>
          <Card className={styles.scheduleItem}>
            <div className={styles.scheduleDate}>
              <span className={styles.day}>25</span>
              <span className={styles.weekday}>토</span>
            </div>
            <div className={styles.scheduleInfo}>
              <span className={styles.time}>10:00 - 10:50</span>
              <span className={styles.program}>보컬 - 김노래</span>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
