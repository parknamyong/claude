import type { EnrollmentStep } from '@/types'
import styles from '../EnrollmentPage.module.css'

interface StepIndicatorProps {
  currentStep: EnrollmentStep
}

const STEPS: { key: EnrollmentStep; label: string; number: number }[] = [
  { key: 'select', label: '프로그램 선택', number: 1 },
  { key: 'info', label: '정보 입력', number: 2 },
  { key: 'payment', label: '결제', number: 3 },
  { key: 'complete', label: '완료', number: 4 },
]

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = STEPS.findIndex((s) => s.key === currentStep)

  return (
    <div className={styles.steps}>
      {STEPS.map((step, index) => {
        const isActive = index <= currentIndex
        const isCurrent = step.key === currentStep

        return (
          <div
            key={step.key}
            className={`${styles.step} ${isActive ? styles.active : ''} ${isCurrent ? styles.current : ''}`}
          >
            <span className={styles.stepNumber}>
              {index < currentIndex ? '✓' : step.number}
            </span>
            <span className={styles.stepLabel}>{step.label}</span>
          </div>
        )
      })}
    </div>
  )
}
