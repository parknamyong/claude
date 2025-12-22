import { PageHeader, Card } from '@/components/common'
import { MOCK_REVIEWS, MOCK_PROGRAMS } from '@/data'
import styles from './ReviewsPage.module.css'

export function ReviewsPage() {
  const getProgramName = (programId: string) => {
    return MOCK_PROGRAMS.find((p) => p.id === programId)?.name || ''
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader
          title="수강 후기"
          description="AI 음악교실을 경험한 학부모님들의 생생한 후기입니다"
        />

        <div className={styles.reviewGrid}>
          {MOCK_REVIEWS.map((review) => (
            <Card key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewRating}>
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <span className={styles.reviewProgram}>{getProgramName(review.programId)}</span>
              </div>

              <p className={styles.reviewContent}>"{review.content}"</p>

              <div className={styles.reviewFooter}>
                <span className={styles.reviewAuthor}>
                  {review.parentName} · {review.studentGrade}
                </span>
                <span className={styles.reviewDate}>
                  {new Date(review.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <p className={styles.placeholder}>후기 필터 및 페이지네이션 (다음 PR에서 구현)</p>
      </div>
    </div>
  )
}
