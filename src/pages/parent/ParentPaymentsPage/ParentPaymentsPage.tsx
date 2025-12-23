import { PageHeader, Card, Badge } from '@/components/common'
import styles from './ParentPaymentsPage.module.css'

export function ParentPaymentsPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="결제 내역" description="수강료 결제 내역을 확인하세요" />

      <Card className={styles.tableCard}>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>결제일</span>
            <span>내용</span>
            <span>금액</span>
            <span>상태</span>
          </div>
          <div className={styles.tableRow}>
            <span>2025.01.05</span>
            <span>기초 음악 - 1월 수강료</span>
            <span className={styles.amount}>150,000원</span>
            <Badge variant="success">완료</Badge>
          </div>
          <div className={styles.tableRow}>
            <span>2025.01.05</span>
            <span>보컬 - 1월 수강료</span>
            <span className={styles.amount}>180,000원</span>
            <Badge variant="success">완료</Badge>
          </div>
          <div className={styles.tableRow}>
            <span>2024.12.05</span>
            <span>기초 음악 - 12월 수강료</span>
            <span className={styles.amount}>150,000원</span>
            <Badge variant="success">완료</Badge>
          </div>
          <div className={styles.tableRow}>
            <span>2024.12.05</span>
            <span>보컬 - 12월 수강료</span>
            <span className={styles.amount}>180,000원</span>
            <Badge variant="success">완료</Badge>
          </div>
        </div>
      </Card>
    </div>
  )
}
