import { useParams, Link } from 'react-router-dom'
import { PageHeader, Card, Badge, Button, ImagePlaceholder } from '@/components/common'
import { MOCK_PROGRAMS, MOCK_CLASS_SLOTS } from '@/data'
import styles from './ProgramDetailPage.module.css'

export function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>()
  const program = MOCK_PROGRAMS.find((p) => p.slug === id)
  const classSlots = MOCK_CLASS_SLOTS.filter((slot) => slot.programId === program?.id)

  if (!program) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <PageHeader title="프로그램을 찾을 수 없습니다" />
          <Link to="/programs">
            <Button variant="outline">프로그램 목록으로</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Badge variant="open">{program.targetGrade}</Badge>
            <h1 className={styles.heroTitle}>{program.name}</h1>
            <p className={styles.heroDescription}>{program.shortDescription}</p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>
                <span className={styles.metaIcon}>⏱</span>
                {program.duration} / {program.sessions}회
              </span>
              <span className={styles.metaItem}>
                <span className={styles.metaIcon}>💰</span>
                {program.price.toLocaleString()}원
              </span>
            </div>
            <Link to={`/enrollment?program=${program.slug}`}>
              <Button variant="primary" size="lg">
                수강 신청하기
              </Button>
            </Link>
          </div>
          <div className={styles.heroImage}>
            <ImagePlaceholder height="300px" label={program.name} />
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            {/* 프로그램 소개 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>프로그램 소개</h2>
              <p className={styles.description}>{program.description}</p>
            </section>

            {/* 제공 내용 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제공 내용</h2>
              <ul className={styles.featuresList}>
                {program.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* 주차별 커리큘럼 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>주차별 커리큘럼</h2>
              <div className={styles.timeline}>
                {program.weeklyPlan.map((week) => (
                  <div key={week.week} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <span className={styles.weekNumber}>{week.week}</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.weekTitle}>{week.title}</h3>
                      <p className={styles.weekDescription}>{week.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 차별점 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>이 프로그램의 차별점</h2>
              <div className={styles.highlightsGrid}>
                {program.highlights.map((highlight, index) => (
                  <Card key={index} className={styles.highlightCard}>
                    <span className={styles.highlightIcon}>{highlight.icon}</span>
                    <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                    <p className={styles.highlightDescription}>{highlight.description}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <Card className={styles.infoCard}>
              <h3 className={styles.infoTitle}>프로그램 정보</h3>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>대상</span>
                  <span className={styles.infoValue}>{program.targetGrade}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>수업 시간</span>
                  <span className={styles.infoValue}>{program.duration}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>총 회차</span>
                  <span className={styles.infoValue}>{program.sessions}회</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>수강료</span>
                  <span className={styles.infoValue}>{program.price.toLocaleString()}원</span>
                </div>
              </div>

              <div className={styles.slots}>
                <h4 className={styles.slotsTitle}>수업 시간대</h4>
                {classSlots.map((slot) => (
                  <div key={slot.id} className={styles.slotItem}>
                    <div className={styles.slotInfo}>
                      <span className={styles.slotName}>{slot.name}</span>
                      <span className={styles.slotTime}>
                        {slot.dayOfWeek.join(', ')} {slot.time}
                      </span>
                    </div>
                    <Badge variant={slot.status === 'open' ? 'open' : 'closed'}>
                      {slot.status === 'open'
                        ? `${slot.capacity - slot.enrolled}자리`
                        : `대기 ${slot.waitlist}명`}
                    </Badge>
                  </div>
                ))}
              </div>

              <Link to={`/enrollment?program=${program.slug}`} className={styles.enrollButton}>
                <Button variant="primary" size="lg">
                  수강 신청하기
                </Button>
              </Link>
            </Card>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className={styles.bottomCta}>
          <Card className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>지금 바로 시작하세요!</h2>
            <p className={styles.ctaDescription}>
              AI와 함께하는 새로운 음악 경험, {program.name} 프로그램에서 만나보세요.
            </p>
            <div className={styles.ctaButtons}>
              <Link to={`/enrollment?program=${program.slug}`}>
                <Button variant="primary" size="lg">
                  수강 신청하기
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg">
                  다른 프로그램 보기
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
