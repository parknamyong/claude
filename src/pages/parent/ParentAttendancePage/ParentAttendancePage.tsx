import { PageHeader, Card, Badge } from '@/components/common'
import styles from './ParentAttendancePage.module.css'

export function ParentAttendancePage() {
  return (
    <div className={styles.page}>
      <PageHeader title="출석 현황" description="자녀의 출석 기록을 확인하세요" />

      <div className={styles.summaryGrid}>
        <Card className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>이번 달 출석률</h3>
          <p className={styles.summaryValue}>92%</p>
        </Card>
        <Card className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>출석</h3>
          <p className={styles.summaryValue}>11회</p>
        </Card>
        <Card className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>결석</h3>
          <p className={styles.summaryValue}>1회</p>
        </Card>
        <Card className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>지각</h3>
          <p className={styles.summaryValue}>0회</p>
        </Card>
      </div>

      <Card className={styles.tableCard}>
        <h3 className={styles.tableTitle}>출석 기록</h3>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>날짜</span>
            <span>프로그램</span>
            <span>학생</span>
            <span>상태</span>
          </div>
          <div className={styles.tableRow}>
            <span>2025.01.15</span>
            <span>기초 음악</span>
            <span>김음악</span>
            <Badge variant="success">출석</Badge>
          </div>
          <div className={styles.tableRow}>
            <span>2025.01.13</span>
            <span>기초 음악</span>
            <span>김음악</span>
            <Badge variant="success">출석</Badge>
          </div>
          <div className={styles.tableRow}>
            <span>2025.01.11</span>
            <span>보컬</span>
            <span>김노래</span>
            <Badge variant="error">결석</Badge>
          </div>
          <div className={styles.tableRow}>
            <span>2025.01.08</span>
            <span>기초 음악</span>
            <span>김음악</span>
            <Badge variant="success">출석</Badge>
          </div>
        </div>
      </Card>
    </div>
  )
}
