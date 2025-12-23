import { PageHeader, Card, Button, Badge } from '@/components/common'
import styles from './AdminStudentsPage.module.css'

export function AdminStudentsPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="학생 관리" description="등록된 학생 목록을 관리합니다" />

      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="학생 이름 검색..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          <select className={styles.select}>
            <option value="">전체 프로그램</option>
            <option value="basic">기초 음악</option>
            <option value="vocal">보컬 트레이닝</option>
            <option value="instrument">악기 연주</option>
          </select>
          <select className={styles.select}>
            <option value="">전체 상태</option>
            <option value="active">수강 중</option>
            <option value="pending">대기 중</option>
            <option value="completed">수료</option>
          </select>
        </div>
        <Button variant="primary" size="sm">
          학생 추가
        </Button>
      </div>

      <Card>
        <p className={styles.placeholder}>학생 테이블 (다음 PR에서 구현)</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>이름</th>
              <th>학년</th>
              <th>프로그램</th>
              <th>반</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>김민준</td>
              <td>초등 3학년</td>
              <td>기초 음악</td>
              <td>월수 A반</td>
              <td>
                <Badge variant="success">수강 중</Badge>
              </td>
              <td>
                <Button variant="outline" size="sm">
                  상세
                </Button>
              </td>
            </tr>
            <tr>
              <td>이서연</td>
              <td>초등 4학년</td>
              <td>보컬 트레이닝</td>
              <td>월수반</td>
              <td>
                <Badge variant="success">수강 중</Badge>
              </td>
              <td>
                <Button variant="outline" size="sm">
                  상세
                </Button>
              </td>
            </tr>
            <tr>
              <td>박지호</td>
              <td>초등 2학년</td>
              <td>기초 음악</td>
              <td>화목 B반</td>
              <td>
                <Badge variant="pending">대기 중</Badge>
              </td>
              <td>
                <Button variant="outline" size="sm">
                  상세
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
        <span className={styles.pageInfo}>1 / 5 페이지</span>
        <Button variant="outline" size="sm">
          다음
        </Button>
      </div>
    </div>
  )
}
