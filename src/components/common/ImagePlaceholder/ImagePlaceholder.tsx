import styles from './ImagePlaceholder.module.css'

interface ImagePlaceholderProps {
  width?: string
  height?: string
  label?: string
  className?: string
}

export function ImagePlaceholder({
  width = '100%',
  height = '200px',
  label = '이미지',
  className = '',
}: ImagePlaceholderProps) {
  const classNames = [styles.placeholder, className].filter(Boolean).join(' ')

  return (
    <div className={classNames} style={{ width, height }}>
      <div className={styles.content}>
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  )
}
