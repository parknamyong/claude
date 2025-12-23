import { PageHeader, Card, Button, Badge } from '@/components/common'
import styles from './AdminPaymentsPage.module.css'

export function AdminPaymentsPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="결제 관리" description="수강료 결제 현황을 관리합니다" />

      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>이번 달 수입</h3>
          <p className={styles.statValue}>7,200,000원</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>결제 완료</h3>
          <p className={styles.statValue}>43건</p>
        </Card>
        <Card className={styles.statCard}>
          <h3 className={styles.statTitle}>미결제</h3>
          <p className={styles.statValueWarning}>5건</p>
        </Card>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <select className={styles.select}>
            <option value="">2025년 1월</option>
            <option value="">2024년 12월</option>
            <option value="">2024년 11월</option>
          </select>
          <select className={styles.select}>
            <option value="">전체 상태</option>
            <option value="paid">결제 완료</option>
            <option value="pending">결제 대기</option>
            <option value="overdue">연체</option>
          </select>
        </div>
        <Button variant="outline" size="sm">
          엑셀 다운로드
        </Button>
      </div>

      <Card>
        <p className={styles.placeholder}>결제 테이블 (다음 PR에서 구현)</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>학생</th>
              <th>프로그램</th>
              <th>금액</th>
              <th>결제일</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>김민준</td>
              <td>기초 음악</td>
              <td>150,000원</td>
              <td>2025.01.05</td>
              <td>
                <Badge variant="success">결제 완료</Badge>
              </td>
              <td>
                <Button variant="outline" size="sm">
                  영수증
                </Button>
              </td>
            </tr>
            <tr>
              <td>이서연</td>
              <td>보컬 트레이닝</td>
              <td>180,000원</td>
              <td>2025.01.03</td>
              <td>
                <Badge variant="success">결제 완료</Badge>
              </td>
              <td>
                <Button variant="outline" size="sm">
                  영수증
                </Button>
              </td>
            </tr>
            <tr>
              <td>박지호</td>
              <td>기초 음악</td>
              <td>150,000원</td>
              <td>-</td>
              <td>
                <Badge variant="pending">결제 대기</Badge>
              </td>
              <td>
                <Button variant="primary" size="sm">
                  알림 발송
                </Button>
              </td>
            </tr>
            <tr>
              <td>최유나</td>
              <td>악기 연주</td>
              <td>200,000원</td>
              <td>-</td>
              <td>
                <Badge variant="error">연체</Badge>
              </td>
              <td>
                <Button variant="primary" size="sm">
                  알림 발송
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      <div className={styles.pagination}>
        <Button variant="outline" size="sm">
          이전
        </Button>
        <span className={styles.pageInfo}>1 / 3 페이지</span>
        <Button variant="outline" size="sm">
          다음
        </Button>
      </div>
    </div>
  )
}
