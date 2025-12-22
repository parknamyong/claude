import { PageHeader, Card, Button, Badge } from '@/components/common'
import styles from './AdminNoticesPage.module.css'

export function AdminNoticesPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="공지사항 관리" description="공지사항을 작성하고 관리합니다" />

      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <select className={styles.select}>
            <option value="">전체 유형</option>
            <option value="general">일반</option>
            <option value="important">중요</option>
            <option value="event">이벤트</option>
          </select>
          <select className={styles.select}>
            <option value="">전체 대상</option>
            <option value="all">전체</option>
            <option value="parent">학부모</option>
          </select>
        </div>
        <Button variant="primary" size="sm">
          공지 작성
        </Button>
      </div>

      <Card>
        <p className={styles.placeholder}>공지사항 테이블 (다음 PR에서 구현)</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>제목</th>
              <th>유형</th>
              <th>대상</th>
              <th>작성일</th>
              <th>조회수</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.titleCell}>
                <span className={styles.noticeTitle}>[중요] 2025년 1학기 수강 신청 안내</span>
              </td>
              <td>
                <Badge variant="error">중요</Badge>
              </td>
              <td>전체</td>
              <td>2025.01.15</td>
              <td>128</td>
              <td>
                <div className={styles.actions}>
                  <Button variant="outline" size="sm">
                    수정
                  </Button>
                  <Button variant="outline" size="sm">
                    삭제
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.titleCell}>
                <span className={styles.noticeTitle}>설날 연휴 휴강 안내</span>
              </td>
              <td>
                <Badge variant="info">일반</Badge>
              </td>
              <td>전체</td>
              <td>2025.01.10</td>
              <td>89</td>
              <td>
                <div className={styles.actions}>
                  <Button variant="outline" size="sm">
                    수정
                  </Button>
                  <Button variant="outline" size="sm">
                    삭제
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.titleCell}>
                <span className={styles.noticeTitle}>12월 발표회 안내</span>
              </td>
              <td>
                <Badge variant="success">이벤트</Badge>
              </td>
              <td>학부모</td>
              <td>2024.12.01</td>
              <td>215</td>
              <td>
                <div className={styles.actions}>
                  <Button variant="outline" size="sm">
                    수정
                  </Button>
                  <Button variant="outline" size="sm">
                    삭제
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.titleCell}>
                <span className={styles.noticeTitle}>신규 프로그램 '악기 연주' 오픈</span>
              </td>
              <td>
                <Badge variant="info">일반</Badge>
              </td>
              <td>전체</td>
              <td>2024.11.20</td>
              <td>156</td>
              <td>
                <div className={styles.actions}>
                  <Button variant="outline" size="sm">
                    수정
                  </Button>
                  <Button variant="outline" size="sm">
                    삭제
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      <div className={styles.pagination}>
        <Button variant="outline" size="sm">
          이전
        </Button>
        <span className={styles.pageInfo}>1 / 2 페이지</span>
        <Button variant="outline" size="sm">
          다음
        </Button>
      </div>
    </div>
  )
}
