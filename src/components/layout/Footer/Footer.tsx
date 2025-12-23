import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>AI 음악교실</h3>
            <p className={styles.description}>
              AI 기술로 더 재미있고 효과적인 음악 교육을 제공합니다.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>프로그램</h4>
              <Link to="/programs/basic" className={styles.link}>
                기초 음악
              </Link>
              <Link to="/programs/vocal" className={styles.link}>
                보컬
              </Link>
              <Link to="/programs/instrument" className={styles.link}>
                연주
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>바로가기</h4>
              <Link to="/enrollment" className={styles.link}>
                수강 신청
              </Link>
              <Link to="/notices" className={styles.link}>
                공지사항
              </Link>
              <Link to="/location" className={styles.link}>
                오시는 길
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>연락처</h4>
              <p className={styles.contact}>전화: 02-1234-5678</p>
              <p className={styles.contact}>이메일: info@ai-music.kr</p>
              <p className={styles.contact}>운영시간: 평일 10:00-19:00</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2025 AI 음악교실. All rights reserved.</p>
          <p className={styles.note}>
            이 사이트는 프로토타입입니다. 실제 서비스가 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
