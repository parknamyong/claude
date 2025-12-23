import type { ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  variant?: 'open' | 'closed' | 'pending' | 'success' | 'error' | 'info'
  children: ReactNode
  className?: string
}

export function Badge({ variant = 'info', children, className = '' }: BadgeProps) {
  const classNames = [styles.badge, styles[variant], className].filter(Boolean).join(' ')

  return <span className={classNames}>{children}</span>
}
