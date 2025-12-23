import { Link } from 'react-router-dom'
import { PageHeader, Card, Badge, Button, ImagePlaceholder } from '@/components/common'
import { MOCK_PROGRAMS, MOCK_CLASS_SLOTS } from '@/data'
import styles from './ProgramsPage.module.css'

export function ProgramsPage() {
  const getAvailableSlots = (programId: string) => {
    return MOCK_CLASS_SLOTS.filter((slot) => slot.programId === programId && slot.status === 'open')
      .length
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader
          title="프로그램"
          description="아이의 흥미와 수준에 맞는 프로그램을 선택하세요"
        />

        <div className={styles.programGrid}>
          {MOCK_PROGRAMS.map((program) => {
            const availableSlots = getAvailableSlots(program.id)
            return (
              <Card key={program.id} className={styles.programCard}>
                <ImagePlaceholder height="200px" label={program.name} />
                <div className={styles.programContent}>
                  <div className={styles.programHeader}>
                    <h3 className={styles.programTitle}>{program.name}</h3>
                    <Badge variant={availableSlots > 0 ? 'open' : 'closed'}>
                      {availableSlots > 0 ? '모집중' : '마감'}
                    </Badge>
                  </div>
                  <p className={styles.programDescription}>{program.shortDescription}</p>

                  <div className={styles.programMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>대상</span>
                      <span className={styles.metaValue}>{program.targetGrade}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>수업 시간</span>
                      <span className={styles.metaValue}>{program.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>수강료</span>
                      <span className={styles.metaValue}>
                        {program.price.toLocaleString()}원 / {program.sessions}회
                      </span>
                    </div>
                  </div>

                  <div className={styles.programActions}>
                    <Link to={`/programs/${program.slug}`}>
                      <Button variant="outline">자세히 보기</Button>
                    </Link>
                    <Link to={`/enrollment?program=${program.slug}`}>
                      <Button variant="primary">수강 신청</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
