import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className = '' }: PageHeaderProps) {
  const classNames = [styles.header, className].filter(Boolean).join(' ')

  return (
    <header className={classNames}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
