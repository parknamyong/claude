import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { useAuth } from '@/hooks/useAuth'
import styles from './ParentLayout.module.css'

interface ParentLayoutProps {
  children: ReactNode
}

const PARENT_NAV_ITEMS = [
  { path: '/parent', label: '대시보드' },
  { path: '/parent/courses', label: '수강 정보' },
  { path: '/parent/schedule', label: '일정' },
  { path: '/parent/attendance', label: '출석 현황' },
  { path: '/parent/payments', label: '결제 내역' },
  { path: '/parent/notices', label: '공지사항' },
]

export function ParentLayout({ children }: ParentLayoutProps) {
  const { isParentLoggedIn, logoutParent } = useAuth()

  if (!isParentLoggedIn) {
    return <Navigate to="/parent/login" replace />
  }

  return (
    <div className={styles.layout}>
      <Sidebar items={PARENT_NAV_ITEMS} title="학부모 대시보드" onLogout={logoutParent} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
