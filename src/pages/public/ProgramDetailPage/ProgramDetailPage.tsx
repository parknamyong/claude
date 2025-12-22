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
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <ImagePlaceholder height="300px" label={program.name} className={styles.image} />

            <PageHeader title={program.name} description={program.shortDescription} />

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>프로그램 소개</h2>
              <p className={styles.description}>{program.description}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>커리큘럼</h2>
              <ul className={styles.curriculum}>
                {program.curriculum.map((item, index) => (
                  <li key={index} className={styles.curriculumItem}>
                    <span className={styles.curriculumNumber}>{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

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
                  <span className={styles.infoLabel}>수강료</span>
                  <span className={styles.infoValue}>월 {program.price.toLocaleString()}원</span>
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
      </div>
    </div>
  )
}
