import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { useAuth } from '@/hooks/useAuth'
import styles from './AdminLayout.module.css'

interface AdminLayoutProps {
  children: ReactNode
}

const ADMIN_NAV_ITEMS = [
  { path: '/admin', label: '대시보드' },
  { path: '/admin/students', label: '학생 관리' },
  { path: '/admin/programs', label: '프로그램/반 관리' },
  { path: '/admin/attendance', label: '출석 관리' },
  { path: '/admin/payments', label: '결제/환불 관리' },
  { path: '/admin/notices', label: '공지사항 관리' },
  { path: '/admin/gallery', label: '갤러리 관리' },
]

export function AdminLayout({ children }: AdminLayoutProps) {
  const { isAdminLoggedIn, logoutAdmin } = useAuth()

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <div className={styles.layout}>
      <Sidebar items={ADMIN_NAV_ITEMS} title="관리자 대시보드" onLogout={logoutAdmin} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
