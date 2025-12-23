import { PageHeader, Card, Badge } from '@/components/common'
import styles from './ParentCoursesPage.module.css'

export function ParentCoursesPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="수강 정보" description="자녀가 수강 중인 프로그램을 확인하세요" />

      <div className={styles.courseList}>
        <Card className={styles.courseCard}>
          <div className={styles.courseHeader}>
            <h3 className={styles.courseName}>기초 음악</h3>
            <Badge variant="success">수강 중</Badge>
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>학생</span>
              <span>김음악</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>반</span>
              <span>월수 A반</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>수업 시간</span>
              <span>월, 수 15:00-15:50</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>담당 선생님</span>
              <span>김음악 선생님</span>
            </div>
          </div>
          <p className={styles.placeholder}>상세 정보 (다음 PR에서 구현)</p>
        </Card>

        <Card className={styles.courseCard}>
          <div className={styles.courseHeader}>
            <h3 className={styles.courseName}>보컬</h3>
            <Badge variant="success">수강 중</Badge>
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>학생</span>
              <span>김노래</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>반</span>
              <span>토요 B반</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>수업 시간</span>
              <span>토 10:00-10:50</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>담당 선생님</span>
              <span>이보컬 선생님</span>
            </div>
          </div>
          <p className={styles.placeholder}>상세 정보 (다음 PR에서 구현)</p>
        </Card>
      </div>
    </div>
  )
}
