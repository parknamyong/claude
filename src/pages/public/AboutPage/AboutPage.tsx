import { PageHeader, Card, ImagePlaceholder } from '@/components/common'
import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader
          title="AI 음악교실 소개"
          description="AI 기술로 더 재미있고 효과적인 음악 교육을 제공합니다"
        />

        {/* 교육 철학 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>교육 철학</h2>
          <div className={styles.philosophyGrid}>
            <Card className={styles.philosophyCard}>
              <h3>개인 맞춤형 교육</h3>
              <p>AI 기술을 활용하여 각 학생의 수준과 성향에 맞는 맞춤형 커리큘럼을 제공합니다.</p>
            </Card>
            <Card className={styles.philosophyCard}>
              <h3>즐거운 학습 경험</h3>
              <p>게임화된 학습 시스템으로 아이들이 음악을 즐기며 자연스럽게 실력을 키웁니다.</p>
            </Card>
            <Card className={styles.philosophyCard}>
              <h3>체계적인 피드백</h3>
              <p>AI 분석을 통한 실시간 피드백으로 효과적인 연습이 가능합니다.</p>
            </Card>
          </div>
        </section>

        {/* 강사 소개 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>강사 소개</h2>
          <p className={styles.placeholder}>강사 정보 (다음 PR에서 구현)</p>
          <div className={styles.instructorGrid}>
            <Card className={styles.instructorCard}>
              <ImagePlaceholder height="200px" label="강사 사진" />
              <div className={styles.instructorInfo}>
                <h3>김음악 선생님</h3>
                <p>기초 음악 담당</p>
              </div>
            </Card>
            <Card className={styles.instructorCard}>
              <ImagePlaceholder height="200px" label="강사 사진" />
              <div className={styles.instructorInfo}>
                <h3>이보컬 선생님</h3>
                <p>보컬 담당</p>
              </div>
            </Card>
            <Card className={styles.instructorCard}>
              <ImagePlaceholder height="200px" label="강사 사진" />
              <div className={styles.instructorInfo}>
                <h3>박연주 선생님</h3>
                <p>연주 담당</p>
              </div>
            </Card>
          </div>
        </section>

        {/* 시설 소개 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>시설 소개</h2>
          <p className={styles.placeholder}>시설 정보 (다음 PR에서 구현)</p>
          <div className={styles.facilityGrid}>
            <ImagePlaceholder height="250px" label="교실 사진 1" />
            <ImagePlaceholder height="250px" label="교실 사진 2" />
            <ImagePlaceholder height="250px" label="연습실 사진" />
            <ImagePlaceholder height="250px" label="공연장 사진" />
          </div>
        </section>
      </div>
    </div>
  )
}
