import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Card, Button } from '@/components/common'
import { useAuth } from '@/hooks/useAuth'
import styles from './ParentLoginPage.module.css'

export function ParentLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { loginParent } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (loginParent(email, password)) {
      navigate('/parent')
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Card className={styles.card}>
          <PageHeader title="학부모 로그인" description="자녀의 수강 정보를 확인하세요" />

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                이메일
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <Button type="submit" variant="primary" size="lg">
              로그인
            </Button>
          </form>

          <div className={styles.testAccount}>
            <p className={styles.testTitle}>테스트 계정</p>
            <p className={styles.testInfo}>이메일: parent@test.com</p>
            <p className={styles.testInfo}>비밀번호: 1234</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
