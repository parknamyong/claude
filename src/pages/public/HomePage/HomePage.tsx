import { Link } from 'react-router-dom'
import { Button, Card, ImagePlaceholder } from '@/components/common'
import { MOCK_PROGRAMS, MOCK_REVIEWS, MOCK_NOTICES } from '@/data'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>AI와 함께하는 즐거운 음악 교육</h1>
          <p className={styles.heroDescription}>
            초등학생을 위한 맞춤형 AI 음악 교육 프로그램
            <br />
            기초부터 연주까지, 재미있게 배워요!
          </p>
          <div className={styles.heroActions}>
            <Link to="/enrollment">
              <Button variant="primary" size="lg">
                수강 신청하기
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" size="lg">
                프로그램 보기
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <ImagePlaceholder width="100%" height="400px" label="히어로 이미지" />
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>프로그램 소개</h2>
            <p className={styles.sectionDescription}>
              아이의 흥미와 수준에 맞는 프로그램을 선택하세요
            </p>
          </div>

          <div className={styles.programGrid}>
            {MOCK_PROGRAMS.map((program) => (
              <Card key={program.id} className={styles.programCard}>
                <ImagePlaceholder height="160px" label={program.name} />
                <div className={styles.programContent}>
                  <h3 className={styles.programTitle}>{program.name}</h3>
                  <p className={styles.programDescription}>{program.shortDescription}</p>
                  <p className={styles.programMeta}>대상: {program.targetGrade}</p>
                  <Link to={`/programs/${program.slug}`}>
                    <Button variant="outline" size="sm">
                      자세히 보기
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>지금 바로 시작하세요!</h2>
          <p className={styles.ctaDescription}>
            AI 음악교실에서 아이의 음악적 잠재력을 발견해 보세요
          </p>
          <Link to="/enrollment">
            <Button variant="secondary" size="lg">
              수강 신청하기
            </Button>
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>수강 후기</h2>
            <Link to="/reviews" className={styles.viewAll}>
              전체 보기 →
            </Link>
          </div>

          <div className={styles.reviewGrid}>
            {MOCK_REVIEWS.slice(0, 3).map((review) => (
              <Card key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewRating}>{'★'.repeat(review.rating)}</div>
                <p className={styles.reviewContent}>"{review.content}"</p>
                <p className={styles.reviewAuthor}>
                  {review.parentName} · {review.studentGrade}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>공지사항</h2>
            <Link to="/notices" className={styles.viewAll}>
              전체 보기 →
            </Link>
          </div>

          <div className={styles.noticeList}>
            {MOCK_NOTICES.slice(0, 3).map((notice) => (
              <Link key={notice.id} to={`/notices/${notice.id}`} className={styles.noticeItem}>
                <span className={styles.noticeTitle}>
                  {notice.isImportant && <span className={styles.important}>[중요]</span>}
                  {notice.title}
                </span>
                <span className={styles.noticeDate}>
                  {new Date(notice.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
