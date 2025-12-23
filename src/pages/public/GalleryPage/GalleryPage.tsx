import { PageHeader, ImagePlaceholder } from '@/components/common'
import { MOCK_GALLERY } from '@/data'
import styles from './GalleryPage.module.css'

export function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader
          title="갤러리"
          description="AI 음악교실의 다양한 활동 사진을 확인하세요"
        />

        <div className={styles.grid}>
          {MOCK_GALLERY.map((item) => (
            <div key={item.id} className={styles.item}>
              <ImagePlaceholder height="200px" label={item.caption} />
              <div className={styles.caption}>
                <p className={styles.captionText}>{item.caption}</p>
                <span className={styles.date}>
                  {new Date(item.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
