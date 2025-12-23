import { Link } from 'react-router-dom'
import { Button, Card, ImagePlaceholder } from '@/components/common'
import { MOCK_PROGRAMS, MOCK_REVIEWS, MOCK_INSTRUCTORS } from '@/data'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSlogan}>음악으로 배우는 AI</p>
          <h1 className={styles.heroTitle}>
            이제, 아이들의 상상이
            <br />
            세상에 울립니다
          </h1>
          <p className={styles.heroDescription}>
            AI 기술과 함께하는 새로운 음악 교육
            <br />
            초등학생을 위한 맞춤형 프로그램으로 음악의 즐거움을 발견하세요
          </p>
          <div className={styles.heroActions}>
            <Link to="/enrollment">
              <Button variant="primary" size="lg">
                무료 상담 신청
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" size="lg">
                프로그램 보기
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <ImagePlaceholder width="100%" height="400px" label="히어로 이미지 / 영상" />
        </div>
      </section>

      {/* 핵심 차별점 Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>AI 음악교실이 특별한 이유</h2>
            <p className={styles.sectionDescription}>
              아이들의 성장을 위한 최적의 환경을 제공합니다
            </p>
          </div>

          <div className={styles.featureGrid}>
            <Card className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3 className={styles.featureTitle}>AI 맞춤 학습</h3>
              <p className={styles.featureDescription}>
                아이의 수준과 성향을 분석하여 개인화된 피드백을 제공합니다.
                실시간으로 음정, 박자, 표현력을 체크하고 맞춤 가이드를 드립니다.
              </p>
            </Card>

            <Card className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3 className={styles.featureTitle}>소수 정예 4명</h3>
              <p className={styles.featureDescription}>
                한 타임 최대 4명의 소규모 클래스로 운영됩니다.
                밀착 케어를 통해 모든 아이가 주인공이 되는 수업을 만듭니다.
              </p>
            </Card>

            <Card className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h3 className={styles.featureTitle}>체계적 커리큘럼</h3>
              <p className={styles.featureDescription}>
                단계별 성장 로드맵으로 음악적 기초부터 창작까지.
                아이의 성장을 한눈에 확인할 수 있는 리포트를 제공합니다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 프로그램 소개 Section */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>프로그램 소개</h2>
            <p className={styles.sectionDescription}>
              아이의 흥미와 수준에 맞는 프로그램을 선택하세요
            </p>
          </div>

          <div className={styles.programGrid}>
            {MOCK_PROGRAMS.map((program) => (
              <Card key={program.id} className={styles.programCard}>
                <ImagePlaceholder height="180px" label={program.name} />
                <div className={styles.programContent}>
                  <h3 className={styles.programTitle}>{program.name}</h3>
                  <p className={styles.programDescription}>{program.shortDescription}</p>
                  <div className={styles.programMeta}>
                    <span className={styles.programPrice}>
                      {program.price.toLocaleString()}원 / {program.sessions}회
                    </span>
                    <span className={styles.programTarget}>{program.targetGrade}</span>
                  </div>
                  <Link to={`/programs/${program.slug}`}>
                    <Button variant="outline" size="sm">
                      자세히 보기
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section #1 (중간) */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>지금 바로 시작하세요!</h2>
          <p className={styles.ctaDescription}>
            AI 음악교실에서 아이의 음악적 잠재력을 발견해 보세요
          </p>
          <Link to="/enrollment">
            <Button variant="secondary" size="lg">
              무료 상담 신청하기
            </Button>
          </Link>
        </div>
      </section>

      {/* 수업 과정 Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>수업은 이렇게 진행됩니다</h2>
            <p className={styles.sectionDescription}>
              체계적인 4단계 과정으로 아이의 성장을 이끕니다
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3 className={styles.processTitle}>상담</h3>
              <p className={styles.processDescription}>
                아이의 음악 경험과 목표를 파악하고
                <br />
                맞춤 프로그램을 추천해 드립니다
              </p>
            </div>
            <div className={styles.processArrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3 className={styles.processTitle}>수업</h3>
              <p className={styles.processDescription}>
                소수 정예 클래스에서
                <br />
                AI와 함께 재미있게 배웁니다
              </p>
            </div>
            <div className={styles.processArrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3 className={styles.processTitle}>피드백</h3>
              <p className={styles.processDescription}>
                AI 분석 리포트와 강사 피드백을
                <br />
                매 수업 후 제공합니다
              </p>
            </div>
            <div className={styles.processArrow}>→</div>

            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3 className={styles.processTitle}>성장</h3>
              <p className={styles.processDescription}>
                꾸준한 학습으로 음악적 역량이
                <br />
                눈에 띄게 성장합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 수강 후기 Section */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>수강 후기</h2>
            <Link to="/reviews" className={styles.viewAll}>
              전체 보기 →
            </Link>
          </div>

          <div className={styles.reviewGrid}>
            {MOCK_REVIEWS.slice(0, 3).map((review) => (
              <Card key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewRating}>
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
                <p className={styles.reviewContent}>"{review.content}"</p>
                <div className={styles.reviewAuthor}>
                  <span className={styles.reviewName}>{review.parentName}</span>
                  <span className={styles.reviewMeta}>
                    {review.studentGrade} · {review.programName}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 강사 소개 Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>전문 강사진</h2>
            <p className={styles.sectionDescription}>
              풍부한 경험을 가진 전문가들이 아이들을 지도합니다
            </p>
          </div>

          <div className={styles.instructorGrid}>
            {MOCK_INSTRUCTORS.map((instructor) => (
              <Card key={instructor.id} className={styles.instructorCard}>
                <ImagePlaceholder height="200px" label={instructor.name} />
                <div className={styles.instructorContent}>
                  <h3 className={styles.instructorName}>{instructor.name}</h3>
                  <p className={styles.instructorRole}>{instructor.role}</p>
                  <p className={styles.instructorBio}>{instructor.bio}</p>
                  <ul className={styles.instructorExperience}>
                    {instructor.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 언론/수상/특허 Section */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>인정받는 AI 음악교실</h2>
            <p className={styles.sectionDescription}>
              다양한 분야에서 혁신적인 교육 프로그램으로 인정받고 있습니다
            </p>
          </div>

          <div className={styles.awardGrid}>
            <div className={styles.awardItem}>
              <div className={styles.awardIcon}>🏆</div>
              <p className={styles.awardTitle}>2024 에듀테크 혁신상</p>
              <p className={styles.awardDescription}>한국교육학술정보원</p>
            </div>
            <div className={styles.awardItem}>
              <div className={styles.awardIcon}>📜</div>
              <p className={styles.awardTitle}>AI 음악교육 특허 보유</p>
              <p className={styles.awardDescription}>특허 제10-2024-XXXXXX호</p>
            </div>
            <div className={styles.awardItem}>
              <div className={styles.awardIcon}>📰</div>
              <p className={styles.awardTitle}>주요 언론 보도</p>
              <p className={styles.awardDescription}>조선일보, 중앙일보, KBS 외 다수</p>
            </div>
            <div className={styles.awardItem}>
              <div className={styles.awardIcon}>🎓</div>
              <p className={styles.awardTitle}>교육부 인증 프로그램</p>
              <p className={styles.awardDescription}>초등 방과후 학교 정식 도입</p>
            </div>
          </div>

          <div className={styles.mediaLogos}>
            <ImagePlaceholder width="100%" height="80px" label="언론사 로고 (조선일보, 중앙일보, KBS, MBC, SBS)" />
          </div>
        </div>
      </section>

      {/* CTA Section #2 (하단) */}
      <section className={styles.ctaSectionFinal}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitleFinal}>
            아이의 음악적 가능성,
            <br />
            AI 음악교실에서 시작하세요
          </h2>
          <p className={styles.ctaDescriptionFinal}>
            무료 상담을 통해 아이에게 맞는 프로그램을 찾아보세요
          </p>
          <div className={styles.ctaActions}>
            <Link to="/enrollment">
              <Button variant="primary" size="lg">
                무료 상담 신청
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                더 알아보기
              </Button>
            </Link>
          </div>
          <p className={styles.ctaContact}>
            상담 문의: 02-1234-5678 (평일 10:00-18:00)
          </p>
        </div>
      </section>
    </div>
  )
}
