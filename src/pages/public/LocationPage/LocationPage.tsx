import { PageHeader, Card, ImagePlaceholder } from '@/components/common'
import styles from './LocationPage.module.css'

export function LocationPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader
          title="오시는 길"
          description="AI 음악교실 위치와 교통편을 안내해 드립니다"
        />

        <div className={styles.content}>
          <div className={styles.mapSection}>
            <ImagePlaceholder height="400px" label="지도 (Placeholder)" />
          </div>

          <div className={styles.infoSection}>
            <Card className={styles.infoCard}>
              <h3 className={styles.infoTitle}>주소</h3>
              <p className={styles.infoText}>서울특별시 강남구 테헤란로 123</p>
              <p className={styles.infoText}>AI 음악교실 빌딩 3층</p>
            </Card>

            <Card className={styles.infoCard}>
              <h3 className={styles.infoTitle}>연락처</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>전화</span>
                <span>02-1234-5678</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>이메일</span>
                <span>info@ai-music.kr</span>
              </div>
            </Card>

            <Card className={styles.infoCard}>
              <h3 className={styles.infoTitle}>운영 시간</h3>
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleLabel}>평일</span>
                <span>10:00 - 19:00</span>
              </div>
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleLabel}>토요일</span>
                <span>09:00 - 17:00</span>
              </div>
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleLabel}>일요일/공휴일</span>
                <span>휴무</span>
              </div>
            </Card>

            <Card className={styles.infoCard}>
              <h3 className={styles.infoTitle}>교통편</h3>
              <div className={styles.transportItem}>
                <span className={styles.transportType}>지하철</span>
                <p>2호선 강남역 3번 출구에서 도보 5분</p>
              </div>
              <div className={styles.transportItem}>
                <span className={styles.transportType}>버스</span>
                <p>강남역 정류장 하차 (146, 341, 360)</p>
              </div>
              <div className={styles.transportItem}>
                <span className={styles.transportType}>주차</span>
                <p>건물 내 주차장 이용 가능 (2시간 무료)</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
