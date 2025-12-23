import { Link, useLocation } from 'react-router-dom'
import styles from './MobileNav.module.css'

interface NavItem {
  path: string
  label: string
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const location = useLocation()

  if (!isOpen) return null

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <nav className={styles.nav}>
        <div className={styles.header}>
          <span className={styles.title}>메뉴</span>
          <button className={styles.closeButton} onClick={onClose} aria-label="메뉴 닫기">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className={styles.items}>
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.item} ${location.pathname === item.path ? styles.active : ''}`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link to="/parent/login" className={styles.loginButton} onClick={onClose}>
            학부모 로그인
          </Link>
        </div>
      </nav>
    </>
  )
}
