import { Card, Badge, Button, ImagePlaceholder } from '@/components/common'
import { MOCK_PROGRAMS, MOCK_CLASS_SLOTS } from '@/data'
import type { Program, ClassSlot, EnrollType } from '@/types'
import styles from '../EnrollmentPage.module.css'

interface ProgramSelectProps {
  selectedProgram: Program | null
  selectedSlot: ClassSlot | null
  enrollType: EnrollType
  onProgramSelect: (program: Program) => void
  onSlotSelect: (slot: ClassSlot, enrollType: EnrollType) => void
  onNext: () => void
}

export function ProgramSelect({
  selectedProgram,
  selectedSlot,
  enrollType,
  onProgramSelect,
  onSlotSelect,
  onNext,
}: ProgramSelectProps) {
  const availableSlots = selectedProgram
    ? MOCK_CLASS_SLOTS.filter((slot) => slot.programId === selectedProgram.id)
    : []

  const handleSlotSelect = (slot: ClassSlot) => {
    const type: EnrollType =
      slot.status === 'closed' || slot.enrolled >= slot.capacity ? 'waitlist' : 'regular'
    onSlotSelect(slot, type)
  }

  const canProceed = selectedProgram && selectedSlot

  return (
    <div className={styles.selectStep}>
      {/* 프로그램 선택 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>프로그램 선택</h2>
        <div className={styles.programList}>
          {MOCK_PROGRAMS.map((program) => {
            const isSelected = selectedProgram?.id === program.id
            return (
              <Card
                key={program.id}
                className={`${styles.programCard} ${isSelected ? styles.selected : ''}`}
                onClick={() => onProgramSelect(program)}
              >
                <div className={styles.programInfo}>
                  <ImagePlaceholder width="80px" height="80px" label="" />
                  <div>
                    <h3 className={styles.programName}>{program.name}</h3>
                    <p className={styles.programDesc}>{program.shortDescription}</p>
                    <p className={styles.programMeta}>
                      {program.duration} · {program.sessions}회 · {program.targetGrade}
                    </p>
                    <p className={styles.programPrice}>
                      {program.price.toLocaleString()}원
                    </p>
                  </div>
                </div>
                <Button
                  variant={isSelected ? 'primary' : 'outline'}
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onProgramSelect(program)
                  }}
                >
                  {isSelected ? '선택됨' : '선택'}
                </Button>
              </Card>
            )
          })}
        </div>
      </section>

      {/* 시간대 선택 */}
      {selectedProgram && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>시간대 선택</h2>
          <div className={styles.slotList}>
            {availableSlots.map((slot) => {
              const isSelected = selectedSlot?.id === slot.id
              const isFull = slot.status === 'closed' || slot.enrolled >= slot.capacity
              const remainingSeats = slot.capacity - slot.enrolled

              return (
                <Card
                  key={slot.id}
                  className={`${styles.slotCard} ${isSelected ? styles.selected : ''} ${isFull ? styles.full : ''}`}
                  onClick={() => handleSlotSelect(slot)}
                >
                  <div className={styles.slotInfo}>
                    <div className={styles.slotHeader}>
                      <span className={styles.slotName}>{slot.name}</span>
                      <Badge variant={isFull ? 'closed' : 'open'}>
                        {isFull ? '마감' : '모집중'}
                      </Badge>
                    </div>
                    <p className={styles.slotTime}>
                      {slot.dayOfWeek.join(', ')} {slot.time}
                    </p>
                    <p className={styles.slotCapacity}>
                      {isFull ? (
                        <>대기자 {slot.waitlist}명</>
                      ) : (
                        <>잔여 {remainingSeats}석 / {slot.capacity}석</>
                      )}
                    </p>
                  </div>
                  <div className={styles.slotAction}>
                    {isSelected && (
                      <span className={styles.selectedMark}>✓</span>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>

          {selectedSlot && enrollType === 'waitlist' && (
            <div className={styles.waitlistNotice}>
              <Badge variant="closed">대기자 신청</Badge>
              <p>선택하신 시간대는 정원이 마감되었습니다. 대기자로 등록되며, 자리가 나면 연락드립니다.</p>
            </div>
          )}
        </section>
      )}

      {/* 다음 단계 버튼 */}
      <div className={styles.stepActions}>
        <Button
          variant="primary"
          size="lg"
          disabled={!canProceed}
          onClick={onNext}
        >
          다음 단계로
        </Button>
      </div>
    </div>
  )
}
