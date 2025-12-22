import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MobileNav } from '../MobileNav'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { path: '/', label: '홈' },
  { path: '/about', label: '소개' },
  { path: '/programs', label: '프로그램' },
  { path: '/enrollment', label: '수강 신청' },
  { path: '/reviews', label: '후기' },
  { path: '/notices', label: '공지사항' },
  { path: '/gallery', label: '갤러리' },
  { path: '/location', label: '오시는 길' },
]

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          AI 음악교실
        </Link>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/parent/login" className={styles.loginButton}>
            학부모 로그인
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMobileNavOpen(true)}
          aria-label="메뉴 열기"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        items={NAV_ITEMS}
      />
    </header>
  )
}
