import type { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './PublicLayout.module.css'

interface PublicLayoutProps {
  children: ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
