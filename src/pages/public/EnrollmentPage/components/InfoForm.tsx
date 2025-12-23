import { Card, Button } from '@/components/common'
import type {
  StudentInfo,
  ParentInfo,
  AdditionalInfo,
  Consents,
} from '@/types'
import { GRADE_OPTIONS, RELATION_OPTIONS } from '@/types'
import styles from '../EnrollmentPage.module.css'

interface InfoFormProps {
  studentInfo: StudentInfo
  parentInfo: ParentInfo
  additionalInfo: AdditionalInfo
  consents: Consents
  onStudentChange: (info: StudentInfo) => void
  onParentChange: (info: ParentInfo) => void
  onAdditionalChange: (info: AdditionalInfo) => void
  onConsentsChange: (consents: Consents) => void
  onBack: () => void
  onNext: () => void
}

export function InfoForm({
  studentInfo,
  parentInfo,
  additionalInfo,
  consents,
  onStudentChange,
  onParentChange,
  onAdditionalChange,
  onConsentsChange,
  onBack,
  onNext,
}: InfoFormProps) {
  // 필수 필드 검증
  const isStudentValid = studentInfo.name && studentInfo.grade && studentInfo.phone
  const isParentValid = parentInfo.name && parentInfo.phone && parentInfo.relation
  const isConsentsValid = consents.privacy && consents.terms
  const canProceed = isStudentValid && isParentValid && isConsentsValid

  // 전화번호 포맷팅
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
  }

  return (
    <div className={styles.infoStep}>
      {/* 학생 정보 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          학생 정보 <span className={styles.required}>*필수</span>
        </h2>
        <Card className={styles.formCard}>
          <div className={styles.formGroup}>
            <label className={styles.label}>학생 이름</label>
            <input
              type="text"
              className={styles.input}
              placeholder="학생 이름을 입력하세요"
              value={studentInfo.name}
              onChange={(e) => onStudentChange({ ...studentInfo, name: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>학년</label>
            <select
              className={styles.select}
              value={studentInfo.grade}
              onChange={(e) => onStudentChange({ ...studentInfo, grade: e.target.value })}
            >
              <option value="">학년을 선택하세요</option>
              {GRADE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>학생 연락처</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="010-0000-0000"
              value={studentInfo.phone}
              onChange={(e) =>
                onStudentChange({ ...studentInfo, phone: formatPhone(e.target.value) })
              }
            />
          </div>
        </Card>
      </section>

      {/* 학부모 정보 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          학부모 정보 <span className={styles.required}>*필수</span>
        </h2>
        <Card className={styles.formCard}>
          <div className={styles.formGroup}>
            <label className={styles.label}>보호자 성함</label>
            <input
              type="text"
              className={styles.input}
              placeholder="보호자 성함을 입력하세요"
              value={parentInfo.name}
              onChange={(e) => onParentChange({ ...parentInfo, name: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>보호자 연락처</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="010-0000-0000"
              value={parentInfo.phone}
              onChange={(e) =>
                onParentChange({ ...parentInfo, phone: formatPhone(e.target.value) })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>학생과의 관계</label>
            <select
              className={styles.select}
              value={parentInfo.relation}
              onChange={(e) => onParentChange({ ...parentInfo, relation: e.target.value })}
            >
              <option value="">관계를 선택하세요</option>
              {RELATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </Card>
      </section>

      {/* 추가 정보 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          추가 정보 <span className={styles.optional}>(선택)</span>
        </h2>
        <Card className={styles.formCard}>
          <div className={styles.formGroup}>
            <label className={styles.label}>음악 경험</label>
            <textarea
              className={styles.textarea}
              placeholder="이전 음악 학습 경험이 있다면 적어주세요"
              rows={3}
              value={additionalInfo.experience}
              onChange={(e) =>
                onAdditionalChange({ ...additionalInfo, experience: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>희망 사항</label>
            <textarea
              className={styles.textarea}
              placeholder="수업에 바라는 점이나 전달사항을 적어주세요"
              rows={3}
              value={additionalInfo.wishes}
              onChange={(e) =>
                onAdditionalChange({ ...additionalInfo, wishes: e.target.value })
              }
            />
          </div>
        </Card>
      </section>

      {/* 동의 항목 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          동의 항목 <span className={styles.required}>*필수</span>
        </h2>
        <Card className={styles.formCard}>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={consents.privacy}
                onChange={(e) =>
                  onConsentsChange({ ...consents, privacy: e.target.checked })
                }
              />
              <span>[필수] 개인정보 수집 및 이용에 동의합니다</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={consents.terms}
                onChange={(e) =>
                  onConsentsChange({ ...consents, terms: e.target.checked })
                }
              />
              <span>[필수] 수강 약관에 동의합니다</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={consents.marketing}
                onChange={(e) =>
                  onConsentsChange({ ...consents, marketing: e.target.checked })
                }
              />
              <span>[선택] 마케팅 정보 수신에 동의합니다</span>
            </label>
          </div>

          <button
            type="button"
            className={styles.checkAll}
            onClick={() => {
              const allChecked = consents.privacy && consents.terms && consents.marketing
              onConsentsChange({
                privacy: !allChecked,
                terms: !allChecked,
                marketing: !allChecked,
              })
            }}
          >
            전체 동의
          </button>
        </Card>
      </section>

      {/* 버튼 */}
      <div className={styles.stepActions}>
        <Button variant="outline" size="lg" onClick={onBack}>
          이전
        </Button>
        <Button variant="primary" size="lg" disabled={!canProceed} onClick={onNext}>
          다음 단계로
        </Button>
      </div>
    </div>
  )
}
