import { PageHeader, Card, Button, ImagePlaceholder } from '@/components/common'
import styles from './AdminGalleryPage.module.css'

export function AdminGalleryPage() {
  return (
    <div className={styles.page}>
      <PageHeader title="갤러리 관리" description="활동 사진을 업로드하고 관리합니다" />

      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <select className={styles.select}>
            <option value="">전체 카테고리</option>
            <option value="class">수업</option>
            <option value="performance">발표회</option>
            <option value="event">이벤트</option>
          </select>
          <select className={styles.select}>
            <option value="">2025년</option>
            <option value="">2024년</option>
          </select>
        </div>
        <Button variant="primary" size="sm">
          사진 업로드
        </Button>
      </div>

      <Card>
        <p className={styles.placeholder}>갤러리 그리드 (다음 PR에서 구현)</p>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder width="100%" height="150px" label="발표회" />
              <div className={styles.imageOverlay}>
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>2024년 12월 발표회</span>
              <span className={styles.imageDate}>2024.12.20</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder width="100%" height="150px" label="수업" />
              <div className={styles.imageOverlay}>
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>기초 음악 수업 모습</span>
              <span className={styles.imageDate}>2024.12.15</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder width="100%" height="150px" label="수업" />
              <div className={styles.imageOverlay}>
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>보컬 트레이닝 연습</span>
              <span className={styles.imageDate}>2024.12.10</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder width="100%" height="150px" label="이벤트" />
              <div className={styles.imageOverlay}>
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>크리스마스 특별 수업</span>
              <span className={styles.imageDate}>2024.12.24</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder width="100%" height="150px" label="수업" />
              <div className={styles.imageOverlay}>
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>악기 연주 수업</span>
              <span className={styles.imageDate}>2024.11.28</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <ImagePlaceholder width="100%" height="150px" label="시설" />
              <div className={styles.imageOverlay}>
                <Button variant="outline" size="sm">
                  수정
                </Button>
                <Button variant="outline" size="sm">
                  삭제
                </Button>
              </div>
            </div>
            <div className={styles.imageInfo}>
              <span className={styles.imageTitle}>음악교실 시설 안내</span>
              <span className={styles.imageDate}>2024.11.15</span>
            </div>
          </div>
        </div>
      </Card>

      <div className={styles.pagination}>
        <Button variant="outline" size="sm">
          이전
        </Button>
        <span className={styles.pageInfo}>1 / 3 페이지</span>
        <Button variant="outline" size="sm">
          다음
        </Button>
      </div>
    </div>
  )
}
