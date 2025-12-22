import { PageHeader, Card, Button, Badge } from '@/components/common'
import styles from './AdminAttendancePage.module.css'

export function AdminAttendancePage() {
  return (
    <div className={styles.page}>
      <PageHeader title="출석 관리" description="수업별 출석 현황을 관리합니다" />

      <div className={styles.toolbar}>
        <div className={styles.dateSelector}>
          <Button variant="outline" size="sm">
            ◀
          </Button>
          <span className={styles.currentDate}>2025년 1월 20일 (월)</span>
          <Button variant="outline" size="sm">
            ▶
          </Button>
        </div>
        <select className={styles.select}>
          <option value="">전체 프로그램</option>
          <option value="basic">기초 음악</option>
          <option value="vocal">보컬 트레이닝</option>
          <option value="instrument">악기 연주</option>
        </select>
      </div>

      <div className={styles.classSection}>
        <Card className={styles.classCard}>
          <div className={styles.classHeader}>
            <h3 className={styles.classTitle}>기초 음악 - 월수 A반</h3>
            <span className={styles.classTime}>15:00 - 16:00</span>
          </div>
          <p className={styles.placeholder}>출석 체크 테이블 (다음 PR에서 구현)</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>학생</th>
                <th>출석</th>
                <th>지각</th>
                <th>결석</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>김민준</td>
                <td>
                  <input type="radio" name="student1" defaultChecked />
                </td>
                <td>
                  <input type="radio" name="student1" />
                </td>
                <td>
                  <input type="radio" name="student1" />
                </td>
                <td>
                  <input type="text" className={styles.noteInput} placeholder="메모" />
                </td>
              </tr>
              <tr>
                <td>이서연</td>
                <td>
                  <input type="radio" name="student2" defaultChecked />
                </td>
                <td>
                  <input type="radio" name="student2" />
                </td>
                <td>
                  <input type="radio" name="student2" />
                </td>
                <td>
                  <input type="text" className={styles.noteInput} placeholder="메모" />
                </td>
              </tr>
              <tr>
                <td>박지호</td>
                <td>
                  <input type="radio" name="student3" />
                </td>
                <td>
                  <input type="radio" name="student3" defaultChecked />
                </td>
                <td>
                  <input type="radio" name="student3" />
                </td>
                <td>
                  <input type="text" className={styles.noteInput} placeholder="메모" defaultValue="10분 지각" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.classSummary}>
            <Badge variant="success">출석 2</Badge>
            <Badge variant="pending">지각 1</Badge>
            <Badge variant="error">결석 0</Badge>
          </div>
          <Button variant="primary" size="sm">
            저장
          </Button>
        </Card>

        <Card className={styles.classCard}>
          <div className={styles.classHeader}>
            <h3 className={styles.classTitle}>보컬 트레이닝 - 월수반</h3>
            <span className={styles.classTime}>16:00 - 17:00</span>
          </div>
          <p className={styles.placeholder}>출석 체크 테이블 (다음 PR에서 구현)</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>학생</th>
                <th>출석</th>
                <th>지각</th>
                <th>결석</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>최유나</td>
                <td>
                  <input type="radio" name="student4" defaultChecked />
                </td>
                <td>
                  <input type="radio" name="student4" />
                </td>
                <td>
                  <input type="radio" name="student4" />
                </td>
                <td>
                  <input type="text" className={styles.noteInput} placeholder="메모" />
                </td>
              </tr>
              <tr>
                <td>정하은</td>
                <td>
                  <input type="radio" name="student5" />
                </td>
                <td>
                  <input type="radio" name="student5" />
                </td>
                <td>
                  <input type="radio" name="student5" defaultChecked />
                </td>
                <td>
                  <input type="text" className={styles.noteInput} placeholder="메모" defaultValue="병결" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.classSummary}>
            <Badge variant="success">출석 1</Badge>
            <Badge variant="pending">지각 0</Badge>
            <Badge variant="error">결석 1</Badge>
          </div>
          <Button variant="primary" size="sm">
            저장
          </Button>
        </Card>
      </div>
    </div>
  )
}
