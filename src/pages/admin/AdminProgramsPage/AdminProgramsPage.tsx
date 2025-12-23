import { PageHeader, Card, Button, Badge } from '@/components/common'
import styles from './AdminProgramsPage.module.css'

export function AdminProgramsPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="프로그램 관리" description="음악 프로그램과 반 편성을 관리합니다" />

      <div className={styles.toolbar}>
        <Button variant="primary" size="sm">
          프로그램 추가
        </Button>
        <Button variant="outline" size="sm">
          반 추가
        </Button>
      </div>

      <div className={styles.programList}>
        <Card className={styles.programCard}>
          <div className={styles.programHeader}>
            <h3 className={styles.programTitle}>기초 음악</h3>
            <Badge variant="open">모집 중</Badge>
          </div>
          <p className={styles.programDescription}>
            음악의 기본 요소를 배우는 입문 과정
          </p>
          <div className={styles.programMeta}>
            <span>대상: 초등 1-3학년</span>
            <span>정원: 8명/반</span>
            <span>수강료: 150,000원/월</span>
          </div>
          <p className={styles.placeholder}>반 목록 (다음 PR에서 구현)</p>
          <div className={styles.classList}>
            <div className={styles.classItem}>
              <span className={styles.className}>월수 A반</span>
              <span className={styles.classTime}>15:00 - 16:00</span>
              <span className={styles.classCount}>6/8명</span>
              <Button variant="outline" size="sm">
                관리
              </Button>
            </div>
            <div className={styles.classItem}>
              <span className={styles.className}>화목 B반</span>
              <span className={styles.classTime}>15:00 - 16:00</span>
              <span className={styles.classCount}>8/8명</span>
              <Button variant="outline" size="sm">
                관리
              </Button>
            </div>
          </div>
        </Card>

        <Card className={styles.programCard}>
          <div className={styles.programHeader}>
            <h3 className={styles.programTitle}>보컬 트레이닝</h3>
            <Badge variant="open">모집 중</Badge>
          </div>
          <p className={styles.programDescription}>
            올바른 발성과 노래 실력을 키우는 과정
          </p>
          <div className={styles.programMeta}>
            <span>대상: 초등 3-6학년</span>
            <span>정원: 6명/반</span>
            <span>수강료: 180,000원/월</span>
          </div>
          <p className={styles.placeholder}>반 목록 (다음 PR에서 구현)</p>
          <div className={styles.classList}>
            <div className={styles.classItem}>
              <span className={styles.className}>월수반</span>
              <span className={styles.classTime}>16:00 - 17:00</span>
              <span className={styles.classCount}>4/6명</span>
              <Button variant="outline" size="sm">
                관리
              </Button>
            </div>
          </div>
        </Card>

        <Card className={styles.programCard}>
          <div className={styles.programHeader}>
            <h3 className={styles.programTitle}>악기 연주</h3>
            <Badge variant="closed">마감</Badge>
          </div>
          <p className={styles.programDescription}>
            피아노, 기타 등 악기를 배우는 과정
          </p>
          <div className={styles.programMeta}>
            <span>대상: 초등 2-6학년</span>
            <span>정원: 4명/반</span>
            <span>수강료: 200,000원/월</span>
          </div>
          <p className={styles.placeholder}>반 목록 (다음 PR에서 구현)</p>
          <div className={styles.classList}>
            <div className={styles.classItem}>
              <span className={styles.className}>토요 피아노반</span>
              <span className={styles.classTime}>10:00 - 11:00</span>
              <span className={styles.classCount}>4/4명</span>
              <Button variant="outline" size="sm">
                관리
              </Button>
            </div>
            <div className={styles.classItem}>
              <span className={styles.className}>토요 기타반</span>
              <span className={styles.classTime}>11:00 - 12:00</span>
              <span className={styles.classCount}>4/4명</span>
              <Button variant="outline" size="sm">
                관리
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
