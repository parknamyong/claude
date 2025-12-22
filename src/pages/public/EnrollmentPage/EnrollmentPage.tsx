import { PageHeader, Card, Button, ImagePlaceholder } from '@/components/common'
import { MOCK_PROGRAMS } from '@/data'
import styles from './EnrollmentPage.module.css'

export function EnrollmentPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader
          title="수강 신청"
          description="원하는 프로그램을 선택하고 신청서를 작성해주세요"
        />

        <div className={styles.content}>
          <div className={styles.mainContent}>
            {/* Step Indicator */}
            <div className={styles.steps}>
              <div className={`${styles.step} ${styles.active}`}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepLabel}>프로그램 선택</span>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <span className={styles.stepLabel}>정보 입력</span>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <span className={styles.stepLabel}>결제</span>
              </div>
            </div>

            {/* Program Selection */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>프로그램 선택</h2>
              <p className={styles.placeholder}>수강 신청 폼 (다음 PR에서 구현)</p>

              <div className={styles.programList}>
                {MOCK_PROGRAMS.map((program) => (
                  <Card key={program.id} className={styles.programCard}>
                    <div className={styles.programInfo}>
                      <ImagePlaceholder width="80px" height="80px" label="" />
                      <div>
                        <h3 className={styles.programName}>{program.name}</h3>
                        <p className={styles.programDesc}>{program.shortDescription}</p>
                        <p className={styles.programPrice}>
                          월 {program.price.toLocaleString()}원
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      선택
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            {/* Form Sections Placeholder */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>시간대 선택</h2>
              <p className={styles.placeholder}>시간대 선택 UI (다음 PR에서 구현)</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>학생 정보</h2>
              <p className={styles.placeholder}>학생 정보 입력 폼 (다음 PR에서 구현)</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>학부모 정보</h2>
              <p className={styles.placeholder}>학부모 정보 입력 폼 (다음 PR에서 구현)</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>동의 및 결제</h2>
              <p className={styles.placeholder}>동의 항목 및 결제 방식 선택 (다음 PR에서 구현)</p>
            </section>
          </div>

          {/* Summary Sidebar */}
          <aside className={styles.sidebar}>
            <Card className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>신청 요약</h3>
              <p className={styles.placeholder}>선택 내용 요약 (다음 PR에서 구현)</p>

              <div className={styles.summaryItem}>
                <span>프로그램</span>
                <span>-</span>
              </div>
              <div className={styles.summaryItem}>
                <span>시간대</span>
                <span>-</span>
              </div>
              <div className={styles.summaryItem}>
                <span>수강료</span>
                <span>-</span>
              </div>

              <div className={styles.summaryTotal}>
                <span>총 결제 금액</span>
                <span>0원</span>
              </div>

              <Button variant="primary" size="lg" disabled>
                다음 단계로
              </Button>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
