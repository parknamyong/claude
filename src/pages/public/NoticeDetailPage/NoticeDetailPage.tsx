import { useParams, Link } from 'react-router-dom'
import { PageHeader, Button, Badge } from '@/components/common'
import { MOCK_NOTICES } from '@/data'
import styles from './NoticeDetailPage.module.css'

export function NoticeDetailPage() {
  const { id } = useParams<{ id: string }>()
  const notice = MOCK_NOTICES.find((n) => n.id === id)

  if (!notice) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <PageHeader title="공지사항을 찾을 수 없습니다" />
          <Link to="/notices">
            <Button variant="outline">목록으로</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            {notice.isImportant && <Badge variant="error">중요</Badge>}
            <h1 className={styles.title}>{notice.title}</h1>
            <div className={styles.meta}>
              <span>작성일: {new Date(notice.createdAt).toLocaleDateString('ko-KR')}</span>
              {notice.updatedAt !== notice.createdAt && (
                <span>수정일: {new Date(notice.updatedAt).toLocaleDateString('ko-KR')}</span>
              )}
            </div>
          </header>

          <div className={styles.content}>
            <p>{notice.content}</p>
            <p className={styles.placeholder}>상세 내용 (다음 PR에서 확장)</p>
          </div>

          <footer className={styles.footer}>
            <Link to="/notices">
              <Button variant="outline">목록으로</Button>
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}
