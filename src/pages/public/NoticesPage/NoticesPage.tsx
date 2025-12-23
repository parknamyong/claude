import { Link } from 'react-router-dom'
import { PageHeader, Badge } from '@/components/common'
import { MOCK_NOTICES } from '@/data'
import styles from './NoticesPage.module.css'

export function NoticesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader title="공지사항" description="AI 음악교실의 새로운 소식을 확인하세요" />

        <div className={styles.noticeList}>
          <div className={styles.noticeHeader}>
            <span className={styles.headerTitle}>제목</span>
            <span className={styles.headerDate}>작성일</span>
          </div>

          {MOCK_NOTICES.map((notice) => (
            <Link key={notice.id} to={`/notices/${notice.id}`} className={styles.noticeItem}>
              <span className={styles.noticeTitle}>
                {notice.isImportant && (
                  <Badge variant="error" className={styles.importantBadge}>
                    중요
                  </Badge>
                )}
                {notice.title}
              </span>
              <span className={styles.noticeDate}>
                {new Date(notice.createdAt).toLocaleDateString('ko-KR')}
              </span>
            </Link>
          ))}
        </div>

        <p className={styles.placeholder}>페이지네이션 (다음 PR에서 구현)</p>
      </div>
    </div>
  )
}
