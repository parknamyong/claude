import { PageHeader, Card, Badge } from '@/components/common'
import { MOCK_NOTICES } from '@/data'
import styles from './ParentNoticesPage.module.css'

export function ParentNoticesPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="공지사항" description="AI 음악교실의 중요한 안내사항을 확인하세요" />

      <div className={styles.noticeList}>
        {MOCK_NOTICES.map((notice) => (
          <Card key={notice.id} className={styles.noticeCard}>
            <div className={styles.noticeHeader}>
              <div className={styles.noticeTitle}>
                {notice.isImportant && <Badge variant="error">중요</Badge>}
                <h3>{notice.title}</h3>
              </div>
              <span className={styles.noticeDate}>
                {new Date(notice.createdAt).toLocaleDateString('ko-KR')}
              </span>
            </div>
            <p className={styles.noticeContent}>{notice.content}</p>
          </Card>
        ))}
      </div>

      <p className={styles.placeholder}>읽음/안읽음 상태, 페이지네이션 (다음 PR에서 구현)</p>
    </div>
  )
}
