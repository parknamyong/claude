import { Link } from 'react-router-dom'
import { PageHeader, Card, Badge, Button } from '@/components/common'
import { useAuth } from '@/hooks/useAuth'
import {
  MOCK_ADMIN_STATS,
  MOCK_TODAY_CLASSES,
  MOCK_ADMIN_ENROLLMENTS,
  MOCK_ADMIN_ALERTS,
  MOCK_ADMIN_PAYMENTS,
} from '@/data'
import styles from './AdminDashboardPage.module.css'

export function AdminDashboardPage() {
  const { currentAdmin } = useAuth()

  // 미결제 건수
  const pendingPaymentsCount = MOCK_ADMIN_PAYMENTS.filter(
    (p) => p.status === 'pending'
  ).length

  // 대기 중 신청 건수
  const pendingEnrollmentsCount = MOCK_ADMIN_ENROLLMENTS.filter(
    (e) => e.status === 'pending' || e.status === 'waitlist'
  ).length

  return (
    <div className={styles.page}>
      <PageHeader
        title={`안녕하세요, ${currentAdmin?.name || '관리자'}님`}
        description="AI 음악교실 관리 현황을 확인하세요"
      />

      {/* 통계 카드 그리드 */}
      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <div className={styles.statIcon}>👨‍🎓</div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>총 등록 학생</h3>
            <p className={styles.statValue}>{MOCK_ADMIN_STATS.totalStudents}명</p>
          </div>
          <Link to="/admin/students" className={styles.statLink}>
            관리 →
          </Link>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statIcon}>🎵</div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>운영 프로그램</h3>
            <p className={styles.statValue}>{MOCK_ADMIN_STATS.activePrograms}개</p>
          </div>
          <Link to="/admin/programs" className={styles.statLink}>
            관리 →
          </Link>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statIcon}>📊</div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>이번 달 출석률</h3>
            <p className={styles.statValue}>{MOCK_ADMIN_STATS.monthlyAttendanceRate}%</p>
          </div>
          <Link to="/admin/attendance" className={styles.statLink}>
            관리 →
          </Link>
        </Card>

        <Card className={`${styles.statCard} ${pendingPaymentsCount > 0 ? styles.warning : ''}`}>
          <div className={styles.statIcon}>💳</div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>미결제 건</h3>
            <p className={styles.statValue}>{pendingPaymentsCount}건</p>
          </div>
          <Link to="/admin/payments" className={styles.statLink}>
            관리 →
          </Link>
        </Card>

        <Card className={`${styles.statCard} ${pendingEnrollmentsCount > 0 ? styles.highlight : ''}`}>
          <div className={styles.statIcon}>📋</div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>대기 중 신청</h3>
            <p className={styles.statValue}>{pendingEnrollmentsCount}건</p>
          </div>
          <Link to="/admin/students" className={styles.statLink}>
            관리 →
          </Link>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statIcon}>💰</div>
          <div className={styles.statContent}>
            <h3 className={styles.statTitle}>이번 달 매출</h3>
            <p className={styles.statValue}>
              {(MOCK_ADMIN_STATS.monthlyRevenue / 10000).toLocaleString()}만원
            </p>
          </div>
          <Link to="/admin/payments" className={styles.statLink}>
            상세 →
          </Link>
        </Card>
      </div>

      {/* 메인 콘텐츠 그리드 */}
      <div className={styles.content}>
        {/* 오늘의 수업 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>오늘의 수업</h2>
            <Link to="/admin/attendance" className={styles.sectionLink}>
              전체보기
            </Link>
          </div>
          <Card className={styles.scheduleCard}>
            {MOCK_TODAY_CLASSES.length > 0 ? (
              MOCK_TODAY_CLASSES.map((cls) => (
                <div key={cls.id} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{cls.time}</span>
                  <div className={styles.scheduleInfo}>
                    <span className={styles.scheduleProgram}>{cls.programName}</span>
                    <span className={styles.scheduleSlot}>{cls.slotName}</span>
                  </div>
                  <span className={styles.scheduleCount}>{cls.studentCount}명</span>
                  <Badge
                    variant={
                      cls.status === 'completed'
                        ? 'closed'
                        : cls.status === 'ongoing'
                          ? 'open'
                          : 'open'
                    }
                  >
                    {cls.status === 'completed'
                      ? '완료'
                      : cls.status === 'ongoing'
                        ? '진행중'
                        : '예정'}
                  </Badge>
                </div>
              ))
            ) : (
              <p className={styles.emptyMessage}>오늘 예정된 수업이 없습니다.</p>
            )}
          </Card>
        </section>

        {/* 최근 신청 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>최근 수강 신청</h2>
            <Link to="/admin/students" className={styles.sectionLink}>
              전체보기
            </Link>
          </div>
          <Card className={styles.enrollmentCard}>
            {MOCK_ADMIN_ENROLLMENTS.slice(0, 3).map((enrollment) => (
              <div key={enrollment.id} className={styles.enrollmentItem}>
                <div className={styles.enrollmentInfo}>
                  <span className={styles.enrollmentName}>{enrollment.studentName}</span>
                  <span className={styles.enrollmentProgram}>{enrollment.programName}</span>
                </div>
                <div className={styles.enrollmentMeta}>
                  <span className={styles.enrollmentDate}>{enrollment.appliedAt}</span>
                  <Badge
                    variant={
                      enrollment.status === 'pending'
                        ? 'closed'
                        : enrollment.status === 'waitlist'
                          ? 'closed'
                          : 'open'
                    }
                  >
                    {enrollment.status === 'pending'
                      ? '검토 대기'
                      : enrollment.status === 'waitlist'
                        ? '대기자'
                        : '승인'}
                  </Badge>
                </div>
              </div>
            ))}
            <div className={styles.cardActions}>
              <Link to="/admin/students">
                <Button variant="outline" size="sm">
                  신청 관리
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* 알림 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>알림</h2>
          </div>
          <Card className={styles.alertCard}>
            {MOCK_ADMIN_ALERTS.map((alert) => (
              <div
                key={alert.id}
                className={`${styles.alertItem} ${styles[`alert${alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}`]}`}
              >
                <span className={styles.alertIcon}>{alert.icon}</span>
                <span className={styles.alertText}>{alert.message}</span>
                {alert.link && (
                  <Link to={alert.link} className={styles.alertLink}>
                    확인
                  </Link>
                )}
              </div>
            ))}
          </Card>
        </section>

        {/* 빠른 메뉴 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>빠른 메뉴</h2>
          </div>
          <div className={styles.quickMenu}>
            <Link to="/admin/students" className={styles.quickMenuItem}>
              <span className={styles.quickMenuIcon}>👨‍🎓</span>
              <span className={styles.quickMenuLabel}>학생 관리</span>
            </Link>
            <Link to="/admin/programs" className={styles.quickMenuItem}>
              <span className={styles.quickMenuIcon}>🎵</span>
              <span className={styles.quickMenuLabel}>프로그램</span>
            </Link>
            <Link to="/admin/attendance" className={styles.quickMenuItem}>
              <span className={styles.quickMenuIcon}>✅</span>
              <span className={styles.quickMenuLabel}>출석 관리</span>
            </Link>
            <Link to="/admin/payments" className={styles.quickMenuItem}>
              <span className={styles.quickMenuIcon}>💳</span>
              <span className={styles.quickMenuLabel}>결제 관리</span>
            </Link>
            <Link to="/admin/notices" className={styles.quickMenuItem}>
              <span className={styles.quickMenuIcon}>📢</span>
              <span className={styles.quickMenuLabel}>공지사항</span>
            </Link>
            <Link to="/admin/gallery" className={styles.quickMenuItem}>
              <span className={styles.quickMenuIcon}>🖼️</span>
              <span className={styles.quickMenuLabel}>갤러리</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
