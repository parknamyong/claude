import { Link, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.css'

interface SidebarItem {
  path: string
  label: string
  icon?: string
}

interface SidebarProps {
  items: SidebarItem[]
  title: string
  onLogout: () => void
}

export function Sidebar({ items, title, onLogout }: SidebarProps) {
  const location = useLocation()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link to="/" className={styles.backLink}>
          ← AI 음악교실
        </Link>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <nav className={styles.nav}>
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutButton} onClick={onLogout}>
          로그아웃
        </button>
      </div>
    </aside>
  )
}
