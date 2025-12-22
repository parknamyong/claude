# AI 음악교실 설계 문서

> **기준 문서**: AI 음악교실 웹사이트 개발 – 프로젝트 브리핑 PDF
> **제약**: 서버/DB/API 없음, localStorage 금지, useState만 사용, 결제는 UI 시뮬레이션

---

## 1. IA (Information Architecture)

### 1.1 메뉴 구조

```
AI 음악교실
├── 고객용 (공개)
│   ├── 홈
│   ├── 소개
│   ├── 프로그램
│   │   ├── 프로그램 목록
│   │   ├── 기초 음악
│   │   ├── 보컬
│   │   └── 연주
│   ├── 수강 신청
│   ├── 후기
│   ├── 공지사항
│   │   ├── 목록
│   │   └── 상세
│   ├── 갤러리
│   └── 오시는 길
│
├── 학부모 대시보드 (로그인 필요)
│   ├── 대시보드 홈
│   ├── 수강 정보
│   ├── 일정
│   ├── 출석 현황
│   ├── 결제 내역
│   └── 공지사항
│
└── 어드민 대시보드 (관리자 로그인 필요)
    ├── 대시보드 홈 (통계)
    ├── 학생 관리
    ├── 프로그램/반 관리
    ├── 출석 관리
    ├── 결제/환불 관리
    ├── 공지사항 관리
    └── 갤러리 관리
```

### 1.2 페이지 목록 및 목적

#### 고객용 페이지

| 페이지 | 목적 | 주요 섹션 |
|--------|------|-----------|
| 홈 | 서비스 첫인상, 주요 콘텐츠 노출 | • 히어로 배너<br>• 프로그램 미리보기 (3종)<br>• 수강 신청 CTA<br>• 후기 하이라이트<br>• 공지사항 최신 3건 |
| 소개 | AI 음악교실의 교육 철학과 시설 소개 | • 교육 철학/방향<br>• 강사 소개<br>• 시설 소개 (placeholder 이미지) |
| 프로그램 목록 | 3개 프로그램 한눈에 비교 | • 프로그램 카드 3개 (기초/보컬/연주)<br>• 각 카드: 대상, 간략 설명, 모집 상태 |
| 프로그램 상세 | 개별 프로그램 상세 정보 | • 프로그램 소개<br>• 커리큘럼<br>• 대상/일정/수강료<br>• 모집 상태 (정원/마감)<br>• 수강 신청 버튼 |
| 수강 신청 | 수강 신청 폼 및 결제 UI | • 프로그램/시간대 선택<br>• 학생 정보 입력<br>• 학부모 정보 입력<br>• 동의 항목<br>• 결제 방식 선택 (즉시/상담) |
| 후기 | 수강 후기 목록 | • 후기 카드 목록<br>• 프로그램별 필터 (선택) |
| 공지사항 목록 | 공지사항 목록 | • 공지 목록 테이블<br>• 페이지네이션 |
| 공지사항 상세 | 개별 공지 내용 | • 제목/날짜<br>• 본문<br>• 목록으로 돌아가기 |
| 갤러리 | 활동 사진/영상 | • 이미지 그리드<br>• 모달 뷰 |
| 오시는 길 | 위치 안내 | • 주소 정보<br>• 지도 (placeholder)<br>• 교통편 안내 |

#### 학부모 대시보드

| 페이지 | 목적 | 주요 섹션 |
|--------|------|-----------|
| 로그인 | 학부모 로그인 UI | • 이메일/비밀번호 입력<br>• 로그인 버튼 |
| 대시보드 홈 | 자녀 정보 요약 | • 자녀 수강 현황 요약<br>• 다음 수업 일정<br>• 최근 공지 |
| 수강 정보 | 수강 프로그램 상세 | • 수강 중인 프로그램 목록<br>• 프로그램 상세 정보 |
| 일정 | 수업 일정 확인 | • 월별 캘린더 또는 리스트<br>• 수업 일정 표시 |
| 출석 현황 | 자녀 출석 기록 | • 출석/결석/지각 현황<br>• 월별 출석률 |
| 결제 내역 | 결제 이력 조회 | • 결제 내역 목록<br>• 결제 상세 |
| 공지사항 | 학부모용 공지 | • 공지 목록<br>• 읽음/안읽음 표시 |

#### 어드민 대시보드

| 페이지 | 목적 | 주요 섹션 |
|--------|------|-----------|
| 로그인 | 관리자 로그인 UI | • 이메일/비밀번호 입력 |
| 대시보드 홈 | 주요 지표 모니터링 | • 총 학생 수<br>• 프로그램별 수강생<br>• 이번 달 매출<br>• 출석률 요약 |
| 학생 관리 | 학생 CRUD | • 학생 목록 테이블<br>• 검색/필터<br>• 학생 추가/수정/삭제 모달 |
| 프로그램/반 관리 | 프로그램 및 반 CRUD | • 프로그램 목록<br>• 반 목록 및 정원<br>• 추가/수정/삭제 |
| 출석 관리 | 출석 체크 및 조회 | • 날짜/반 선택<br>• 출석 체크 UI<br>• 출석 현황 조회 |
| 결제/환불 관리 | 결제 및 환불 처리 | • 결제 내역 목록<br>• 결제 상태 변경<br>• 환불 처리 |
| 공지사항 관리 | 공지 CRUD | • 공지 목록<br>• 공지 작성/수정/삭제 |
| 갤러리 관리 | 갤러리 관리 | • 이미지 목록<br>• 추가/삭제 UI |

---

## 2. 라우팅 & 권한

### 2.1 라우트 테이블

| Path | Page | 접근 권한 | 네비게이션 노출 |
|------|------|-----------|-----------------|
| `/` | 홈 | 공개 | Header 메뉴 |
| `/about` | 소개 | 공개 | Header 메뉴 |
| `/programs` | 프로그램 목록 | 공개 | Header 메뉴 |
| `/programs/:id` | 프로그램 상세 | 공개 | - |
| `/enrollment` | 수강 신청 | 공개 | Header 메뉴 |
| `/enrollment/payment` | 결제 UI | 공개 | - |
| `/enrollment/complete` | 신청 완료 | 공개 | - |
| `/reviews` | 후기 | 공개 | Header 메뉴 |
| `/notices` | 공지사항 목록 | 공개 | Header 메뉴 |
| `/notices/:id` | 공지사항 상세 | 공개 | - |
| `/gallery` | 갤러리 | 공개 | Header 메뉴 |
| `/location` | 오시는 길 | 공개 | Header 메뉴 |
| `/parent/login` | 학부모 로그인 | 공개 | Header (로그인 버튼) |
| `/parent` | 학부모 대시보드 홈 | 학부모 | 사이드바 |
| `/parent/courses` | 수강 정보 | 학부모 | 사이드바 |
| `/parent/schedule` | 일정 | 학부모 | 사이드바 |
| `/parent/attendance` | 출석 현황 | 학부모 | 사이드바 |
| `/parent/payments` | 결제 내역 | 학부모 | 사이드바 |
| `/parent/notices` | 공지사항 | 학부모 | 사이드바 |
| `/admin/login` | 어드민 로그인 | 공개 | - (직접 URL 접근) |
| `/admin` | 어드민 대시보드 홈 | 어드민 | 사이드바 |
| `/admin/students` | 학생 관리 | 어드민 | 사이드바 |
| `/admin/programs` | 프로그램/반 관리 | 어드민 | 사이드바 |
| `/admin/attendance` | 출석 관리 | 어드민 | 사이드바 |
| `/admin/payments` | 결제/환불 관리 | 어드민 | 사이드바 |
| `/admin/notices` | 공지사항 관리 | 어드민 | 사이드바 |
| `/admin/gallery` | 갤러리 관리 | 어드민 | 사이드바 |

### 2.2 권한 진입 규칙 (프로토타입)

#### 학부모 대시보드

```
로그인 상태: useState로 관리 (isParentLoggedIn)
진입 조건: 목업 계정으로 로그인 시 isParentLoggedIn = true
미로그인 시: /parent/* 접근 → /parent/login으로 리다이렉트
로그아웃: isParentLoggedIn = false → /로 이동
```

**목업 계정**:
| 이메일 | 비밀번호 | 비고 |
|--------|----------|------|
| parent@test.com | 1234 | 테스트용 학부모 계정 |

#### 어드민 대시보드

```
로그인 상태: useState로 관리 (isAdminLoggedIn)
진입 조건: 목업 계정으로 로그인 시 isAdminLoggedIn = true
미로그인 시: /admin/* 접근 → /admin/login으로 리다이렉트
로그아웃: isAdminLoggedIn = false → /로 이동
```

**목업 계정**:
| 이메일 | 비밀번호 | 비고 |
|--------|----------|------|
| admin@test.com | admin | 테스트용 관리자 계정 |

---

## 3. 상태/데이터 모델 (useState-only 설계)

### 3.1 핵심 데이터 타입

#### Program (프로그램)

```typescript
interface Program {
  id: string;
  name: string;                    // "기초 음악", "보컬", "연주"
  slug: string;                    // "basic", "vocal", "instrument"
  shortDescription: string;        // 한 줄 소개
  description: string;             // 상세 설명
  curriculum: string[];            // 커리큘럼 항목
  targetGrade: string;             // 대상 학년 (예: "초등 1-3학년")
  duration: string;                // 수업 시간 (예: "50분")
  price: number;                   // 수강료
  image: string;                   // placeholder 이미지 경로
}
```

#### ClassSlot (시간대/반)

```typescript
interface ClassSlot {
  id: string;
  programId: string;               // 연결된 프로그램
  name: string;                    // 반 이름 (예: "월수 A반")
  dayOfWeek: string[];             // 요일 ["월", "수"]
  time: string;                    // 시간 (예: "15:00-15:50")
  capacity: number;                // 정원
  enrolled: number;                // 현재 등록 인원
  waitlist: number;                // 대기자 수
  status: 'open' | 'closed';       // 모집중/마감
}
```

#### EnrollmentForm (수강 신청서)

```typescript
interface EnrollmentForm {
  // 프로그램 선택
  programId: string;
  classSlotId: string;

  // 학생 정보 (필수)
  studentName: string;
  studentGrade: string;            // 학년
  studentBirthDate: string;        // 생년월일

  // 학부모 정보 (필수)
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  relationship: string;            // 관계 (부/모/기타)

  // 추가 정보 (선택)
  previousExperience?: string;     // 음악 경험
  healthNote?: string;             // 건강 관련 참고사항

  // 동의 항목 (필수)
  agreeTerms: boolean;             // 이용약관 동의
  agreePrivacy: boolean;           // 개인정보 수집 동의
  agreeRefundPolicy: boolean;      // 환불 정책 동의

  // 결제 방식
  paymentMethod: 'immediate' | 'consultation';
}
```

> **[PDF 확인 필요]**
> - 신청서 필수/선택 필드의 정확한 목록
> - 동의 항목의 정확한 내용
> - 학년 선택 옵션 (초등 1~6학년?)

#### Enrollment (수강 신청 결과)

```typescript
interface Enrollment {
  id: string;
  form: EnrollmentForm;
  status: 'pending' | 'paid' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'refunded';
  createdAt: string;
  isWaitlist: boolean;             // 대기자 여부
}
```

#### Student (학생 - 어드민용)

```typescript
interface Student {
  id: string;
  name: string;
  grade: string;
  birthDate: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  enrollments: string[];           // 수강 신청 ID 목록
  createdAt: string;
}
```

#### Attendance (출석)

```typescript
interface Attendance {
  id: string;
  studentId: string;
  classSlotId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}
```

#### Payment (결제)

```typescript
interface Payment {
  id: string;
  enrollmentId: string;
  amount: number;
  status: 'pending' | 'completed' | 'refunded';
  method: string;                  // "카드", "계좌이체" 등 (UI용)
  paidAt?: string;
  refundedAt?: string;
}
```

#### Notice (공지사항)

```typescript
interface Notice {
  id: string;
  title: string;
  content: string;
  isImportant: boolean;
  createdAt: string;
  updatedAt: string;
}
```

#### GalleryItem (갤러리)

```typescript
interface GalleryItem {
  id: string;
  imageUrl: string;                // placeholder 이미지
  caption: string;
  createdAt: string;
}
```

#### Review (후기)

```typescript
interface Review {
  id: string;
  programId: string;
  parentName: string;              // 표시용 (익명 처리 가능)
  studentGrade: string;
  content: string;
  rating: number;                  // 1-5
  createdAt: string;
}
```

### 3.2 수강 신청 플로우 상태 변화

#### 즉시 결제 플로우

```
[프로그램 선택]
     │
     ▼
[정원 확인]
     │
     ├── 정원 여유 있음 ──────────────────┐
     │                                    │
     ├── 정원 마감 ───► [대기자 신청] ◄───┘
     │                       │
     ▼                       ▼
[신청 폼 입력]         [대기자 폼 입력]
     │                       │
     ▼                       ▼
[결제 방식: "즉시결제" 선택]  [대기자 등록 완료]
     │                       │
     ▼                       ▼
[결제 UI 표시]         enrollment.isWaitlist = true
     │                 enrollment.status = 'pending'
     ▼
[결제 버튼 클릭]
     │
     ▼
[결제 완료 시뮬레이션]
     │
     ▼
enrollment.status = 'paid'
enrollment.paymentStatus = 'completed'
     │
     ▼
[완료 화면 표시]
- "신청이 완료되었습니다" 메시지
- "관리자 알림" 시뮬레이션 (화면에 텍스트로 표시)
- "안내 문자 발송 예정" 안내 (실제 발송 없음)
```

#### 상담 후 결제 플로우

```
[프로그램 선택]
     │
     ▼
[정원 확인]
     │
     ▼
[신청 폼 입력]
     │
     ▼
[결제 방식: "상담 후 결제" 선택]
     │
     ▼
enrollment.status = 'pending'
enrollment.paymentMethod = 'consultation'
     │
     ▼
[상담 신청 완료 화면]
- "상담 신청이 완료되었습니다"
- "담당자가 연락드릴 예정입니다"
- "관리자 알림" 시뮬레이션
```

### 3.3 전역 상태 구조

```typescript
interface AppState {
  // 인증 상태
  auth: {
    isParentLoggedIn: boolean;
    isAdminLoggedIn: boolean;
    currentParent: Parent | null;
  };

  // 데이터 (초기값: 목업 데이터)
  programs: Program[];
  classSlots: ClassSlot[];
  enrollments: Enrollment[];
  students: Student[];
  attendances: Attendance[];
  payments: Payment[];
  notices: Notice[];
  gallery: GalleryItem[];
  reviews: Review[];
}
```

> **주의**: 페이지 새로고침 시 모든 상태가 초기값(목업 데이터)으로 리셋됨

---

## 4. 컴포넌트 설계

### 4.1 공통 컴포넌트 목록

| 컴포넌트 | 용도 | Props |
|----------|------|-------|
| `Header` | 상단 네비게이션 | - |
| `Footer` | 하단 정보 | - |
| `MobileNav` | 모바일 햄버거 메뉴 | isOpen, onClose |
| `Sidebar` | 대시보드 사이드바 | items, currentPath |
| `Button` | 버튼 | variant, size, disabled, onClick |
| `Input` | 입력 필드 | label, error, required, ... |
| `Select` | 드롭다운 | options, value, onChange |
| `Checkbox` | 체크박스 | label, checked, onChange |
| `Modal` | 모달 | isOpen, onClose, title, children |
| `Card` | 카드 컨테이너 | children, className |
| `Badge` | 상태 뱃지 | variant (open/closed/pending/...) |
| `Table` | 테이블 | columns, data, onRowClick |
| `Pagination` | 페이지네이션 | currentPage, totalPages, onChange |
| `Tabs` | 탭 | tabs, activeTab, onChange |
| `Alert` | 알림 메시지 | type (success/error/info), message |
| `Loading` | 로딩 스피너 | - |
| `EmptyState` | 빈 상태 표시 | message, icon |
| `PageHeader` | 페이지 제목 영역 | title, description, actions |
| `StatCard` | 통계 카드 | title, value, icon, trend |
| `FormField` | 폼 필드 래퍼 | label, error, required, children |
| `ImagePlaceholder` | 이미지 플레이스홀더 | width, height, alt |

### 4.2 도메인 컴포넌트 목록

| 컴포넌트 | 용도 |
|----------|------|
| `ProgramCard` | 프로그램 카드 (목록용) |
| `ProgramDetail` | 프로그램 상세 정보 |
| `ClassSlotSelector` | 시간대/반 선택 UI |
| `EnrollmentStatusBadge` | 모집중/마감/대기 상태 뱃지 |
| `EnrollmentForm` | 수강 신청 폼 |
| `PaymentForm` | 결제 UI (시뮬레이션) |
| `ReviewCard` | 후기 카드 |
| `NoticeList` | 공지사항 목록 |
| `NoticeDetail` | 공지사항 상세 |
| `GalleryGrid` | 갤러리 그리드 |
| `GalleryModal` | 갤러리 이미지 모달 |
| `AttendanceTable` | 출석 테이블 |
| `AttendanceCheckbox` | 출석 체크 UI |
| `PaymentHistoryTable` | 결제 내역 테이블 |
| `StudentTable` | 학생 목록 테이블 |
| `StudentForm` | 학생 추가/수정 폼 |

### 4.3 페이지별 컴포넌트 트리

#### 홈 페이지 (`/`)

```
HomePage
├── Header
├── HeroSection
│   ├── ImagePlaceholder
│   └── Button (CTA)
├── ProgramPreviewSection
│   └── ProgramCard (x3)
├── CTASection
│   └── Button
├── ReviewHighlightSection
│   └── ReviewCard (x3)
├── NoticePreviewSection
│   └── NoticeList (최신 3건)
└── Footer
```

#### 프로그램 목록 (`/programs`)

```
ProgramsPage
├── Header
├── PageHeader
├── ProgramGrid
│   └── ProgramCard (x3)
│       ├── ImagePlaceholder
│       ├── Badge (모집상태)
│       └── Button (상세보기)
└── Footer
```

#### 프로그램 상세 (`/programs/:id`)

```
ProgramDetailPage
├── Header
├── ProgramDetail
│   ├── ImagePlaceholder
│   ├── ProgramInfo
│   │   ├── 대상/일정/수강료
│   │   └── Badge (모집상태)
│   ├── CurriculumList
│   └── ClassSlotSelector
│       ├── ClassSlotCard (x반 개수)
│       │   ├── 요일/시간
│       │   ├── 정원 현황
│       │   └── EnrollmentStatusBadge
│       └── Button (수강 신청)
└── Footer
```

#### 수강 신청 (`/enrollment`)

```
EnrollmentPage
├── Header
├── EnrollmentStepper
│   ├── Step 1: 프로그램/시간대 확인
│   ├── Step 2: 정보 입력
│   └── Step 3: 동의 및 결제
├── EnrollmentForm
│   ├── ProgramSummary
│   ├── StudentInfoSection
│   │   ├── FormField (이름)
│   │   ├── FormField (학년)
│   │   └── FormField (생년월일)
│   ├── ParentInfoSection
│   │   ├── FormField (이름)
│   │   ├── FormField (연락처)
│   │   └── FormField (이메일)
│   ├── AgreementSection
│   │   ├── Checkbox (이용약관)
│   │   ├── Checkbox (개인정보)
│   │   └── Checkbox (환불정책)
│   ├── PaymentMethodSelector
│   │   ├── Radio (즉시결제)
│   │   └── Radio (상담후결제)
│   └── Button (다음/신청하기)
└── Footer
```

#### 학부모 대시보드 홈 (`/parent`)

```
ParentDashboardPage
├── Sidebar
├── PageHeader
├── DashboardGrid
│   ├── StatCard (수강 중 프로그램)
│   ├── NextClassCard
│   │   └── 다음 수업 정보
│   ├── AttendanceSummaryCard
│   │   └── 출석률 요약
│   └── RecentNoticesCard
│       └── NoticeList
└── Footer (optional)
```

#### 어드민 대시보드 홈 (`/admin`)

```
AdminDashboardPage
├── Sidebar
├── PageHeader
├── StatsGrid
│   ├── StatCard (총 학생 수)
│   ├── StatCard (프로그램별 수강생)
│   ├── StatCard (이번 달 매출)
│   └── StatCard (출석률)
├── RecentEnrollmentsTable
│   └── Table
└── QuickActionsCard
    └── Button (x3)
```

#### 어드민 학생 관리 (`/admin/students`)

```
AdminStudentsPage
├── Sidebar
├── PageHeader
│   └── Button (학생 추가)
├── SearchFilter
│   ├── Input (검색)
│   └── Select (필터)
├── StudentTable
│   └── Table
│       └── TableRow
│           ├── 학생 정보
│           └── ActionButtons (수정/삭제)
├── Pagination
└── Modal (학생 추가/수정)
    └── StudentForm
```

---

## 5. 폴더 구조 (src 기준)

```
src/
├── components/
│   ├── common/              # 공통 UI 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── Input/
│   │   ├── Select/
│   │   ├── Checkbox/
│   │   ├── Modal/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Table/
│   │   ├── Pagination/
│   │   ├── Tabs/
│   │   ├── Alert/
│   │   ├── Loading/
│   │   ├── EmptyState/
│   │   ├── PageHeader/
│   │   ├── StatCard/
│   │   ├── FormField/
│   │   └── ImagePlaceholder/
│   │
│   ├── layout/              # 레이아웃 컴포넌트
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── MobileNav/
│   │   ├── Sidebar/
│   │   ├── PublicLayout/    # 고객용 레이아웃
│   │   ├── ParentLayout/    # 학부모 대시보드 레이아웃
│   │   └── AdminLayout/     # 어드민 대시보드 레이아웃
│   │
│   └── domain/              # 도메인 특화 컴포넌트
│       ├── program/
│       │   ├── ProgramCard/
│       │   ├── ProgramDetail/
│       │   └── ClassSlotSelector/
│       ├── enrollment/
│       │   ├── EnrollmentForm/
│       │   ├── EnrollmentStepper/
│       │   ├── PaymentForm/
│       │   └── EnrollmentStatusBadge/
│       ├── review/
│       │   └── ReviewCard/
│       ├── notice/
│       │   ├── NoticeList/
│       │   └── NoticeDetail/
│       ├── gallery/
│       │   ├── GalleryGrid/
│       │   └── GalleryModal/
│       ├── attendance/
│       │   ├── AttendanceTable/
│       │   └── AttendanceCheckbox/
│       ├── payment/
│       │   └── PaymentHistoryTable/
│       └── student/
│           ├── StudentTable/
│           └── StudentForm/
│
├── pages/
│   ├── public/              # 고객용 페이지
│   │   ├── HomePage/
│   │   ├── AboutPage/
│   │   ├── ProgramsPage/
│   │   ├── ProgramDetailPage/
│   │   ├── EnrollmentPage/
│   │   ├── EnrollmentPaymentPage/
│   │   ├── EnrollmentCompletePage/
│   │   ├── ReviewsPage/
│   │   ├── NoticesPage/
│   │   ├── NoticeDetailPage/
│   │   ├── GalleryPage/
│   │   └── LocationPage/
│   │
│   ├── parent/              # 학부모 대시보드
│   │   ├── ParentLoginPage/
│   │   ├── ParentDashboardPage/
│   │   ├── ParentCoursesPage/
│   │   ├── ParentSchedulePage/
│   │   ├── ParentAttendancePage/
│   │   ├── ParentPaymentsPage/
│   │   └── ParentNoticesPage/
│   │
│   └── admin/               # 어드민 대시보드
│       ├── AdminLoginPage/
│       ├── AdminDashboardPage/
│       ├── AdminStudentsPage/
│       ├── AdminProgramsPage/
│       ├── AdminAttendancePage/
│       ├── AdminPaymentsPage/
│       ├── AdminNoticesPage/
│       └── AdminGalleryPage/
│
├── data/                    # 목업 데이터
│   ├── programs.ts
│   ├── classSlots.ts
│   ├── students.ts
│   ├── enrollments.ts
│   ├── attendances.ts
│   ├── payments.ts
│   ├── notices.ts
│   ├── gallery.ts
│   ├── reviews.ts
│   └── mockAccounts.ts      # 테스트 계정
│
├── hooks/                   # 커스텀 훅
│   ├── useAuth.ts           # 인증 상태 관리
│   ├── useEnrollment.ts     # 수강 신청 상태
│   └── usePagination.ts     # 페이지네이션
│
├── types/                   # TypeScript 타입
│   ├── program.ts
│   ├── enrollment.ts
│   ├── student.ts
│   ├── attendance.ts
│   ├── payment.ts
│   ├── notice.ts
│   ├── gallery.ts
│   └── review.ts
│
├── styles/                  # 전역 스타일
│   ├── globals.css
│   ├── variables.css        # CSS 변수 (색상, 폰트 등)
│   └── reset.css
│
├── utils/                   # 유틸리티 함수
│   ├── formatDate.ts
│   ├── formatCurrency.ts
│   └── validators.ts
│
├── App.tsx                  # 앱 진입점 (라우팅, 전역 상태)
├── main.tsx                 # React 렌더링
└── routes.tsx               # 라우트 정의
```

---

## 6. PR 분할 계획

### PR 순서 및 목록

| PR # | 제목 | 범위 | 의존성 |
|------|------|------|--------|
| 1 | 프로젝트 초기화 | Vite + React + TypeScript 설정, 폴더 구조 | - |
| 2 | 공통 컴포넌트 (기본) | Button, Input, Card, Badge, Modal | PR #1 |
| 3 | 레이아웃 컴포넌트 | Header, Footer, MobileNav, Sidebar | PR #2 |
| 4 | 목업 데이터 및 타입 | types/, data/ 전체 | PR #1 |
| 5 | 고객용 페이지 (정적) | 홈, 소개, 오시는 길 | PR #3, #4 |
| 6 | 프로그램 페이지 | 프로그램 목록, 상세, 시간대 선택 | PR #5 |
| 7 | 수강 신청 플로우 | 신청 폼, 결제 UI, 완료 화면 | PR #6 |
| 8 | 후기/공지/갤러리 페이지 | 후기, 공지사항, 갤러리 | PR #3, #4 |
| 9 | 학부모 대시보드 | 로그인, 대시보드, 수강/일정/출석/결제/공지 | PR #3, #4 |
| 10 | 어드민 대시보드 | 로그인, 통계, 학생/프로그램/출석/결제/공지/갤러리 관리 | PR #3, #4 |

### 각 PR 상세

#### PR #1: 프로젝트 초기화

**범위**:
- Vite + React + TypeScript 프로젝트 생성
- 폴더 구조 생성 (빈 폴더)
- ESLint + Prettier 설정
- React Router 설정
- CSS 변수 및 전역 스타일

**검증 방법**:
- [ ] `npm install` 정상 실행
- [ ] `npm run dev` 로 개발 서버 실행
- [ ] `npm run lint` 에러 없음
- [ ] 빈 페이지에서 "Hello World" 표시

---

#### PR #2: 공통 컴포넌트 (기본)

**범위**:
- Button (variant: primary/secondary/outline, size: sm/md/lg)
- Input (label, error, required)
- Select
- Checkbox
- Card
- Badge (variant: open/closed/pending/success/error)
- Modal
- FormField
- Loading
- EmptyState
- Alert

**검증 방법**:
- [ ] 각 컴포넌트 독립 렌더링 확인
- [ ] 반응형 동작 확인 (모바일/데스크탑)
- [ ] 모든 variant/size 조합 확인

---

#### PR #3: 레이아웃 컴포넌트

**범위**:
- Header (로고, 메뉴, 로그인 버튼)
- Footer (연락처, 링크)
- MobileNav (햄버거 메뉴)
- Sidebar (대시보드용)
- PublicLayout
- ParentLayout
- AdminLayout

**검증 방법**:
- [ ] Header 메뉴 클릭 시 페이지 이동
- [ ] 모바일에서 햄버거 메뉴 동작
- [ ] 대시보드 Sidebar 동작
- [ ] 반응형 레이아웃 확인

---

#### PR #4: 목업 데이터 및 타입

**범위**:
- types/ 전체 타입 정의
- data/ 목업 데이터
  - 프로그램 3종
  - 시간대/반 (프로그램당 2-3개)
  - 학생 10명
  - 수강 신청 5건
  - 출석 기록
  - 결제 기록
  - 공지사항 5건
  - 갤러리 이미지 6개
  - 후기 5개
  - 테스트 계정

**검증 방법**:
- [ ] 모든 타입 에러 없음 (`tsc --noEmit`)
- [ ] 목업 데이터 import 가능
- [ ] 데이터 구조가 설계 문서와 일치

---

#### PR #5: 고객용 페이지 (정적)

**범위**:
- HomePage (히어로, 프로그램 미리보기, CTA, 후기, 공지)
- AboutPage (교육 철학, 강사, 시설)
- LocationPage (주소, 지도 placeholder, 교통편)

**검증 방법**:
- [ ] 각 페이지 정상 렌더링
- [ ] 반응형 레이아웃 확인
- [ ] 홈 → 각 섹션 링크 동작
- [ ] placeholder 이미지 표시

---

#### PR #6: 프로그램 페이지

**범위**:
- ProgramsPage (프로그램 목록)
- ProgramDetailPage (프로그램 상세)
- ProgramCard
- ProgramDetail
- ClassSlotSelector
- EnrollmentStatusBadge

**검증 방법**:
- [ ] 프로그램 3개 카드 표시
- [ ] 카드 클릭 → 상세 페이지 이동
- [ ] 상세 페이지에서 시간대 선택 가능
- [ ] 모집중/마감 상태 표시
- [ ] "수강 신청" 버튼 → 신청 페이지 이동

---

#### PR #7: 수강 신청 플로우

**범위**:
- EnrollmentPage
- EnrollmentPaymentPage
- EnrollmentCompletePage
- EnrollmentForm
- EnrollmentStepper
- PaymentForm (UI 시뮬레이션)

**검증 방법**:
- [ ] 프로그램/시간대 선택 상태 유지
- [ ] 폼 유효성 검사 동작
- [ ] 필수 동의 항목 체크 필요
- [ ] "즉시결제" 선택 → 결제 UI → 완료 화면
- [ ] "상담후결제" 선택 → 상담 신청 완료 화면
- [ ] 정원 마감 시 대기자 신청 UI

---

#### PR #8: 후기/공지/갤러리 페이지

**범위**:
- ReviewsPage
- ReviewCard
- NoticesPage
- NoticeDetailPage
- NoticeList
- GalleryPage
- GalleryGrid
- GalleryModal
- Pagination

**검증 방법**:
- [ ] 후기 목록 표시
- [ ] 공지사항 목록 → 상세 이동
- [ ] 페이지네이션 동작
- [ ] 갤러리 이미지 클릭 → 모달 표시
- [ ] 모달 닫기 동작

---

#### PR #9: 학부모 대시보드

**범위**:
- ParentLoginPage
- ParentDashboardPage
- ParentCoursesPage
- ParentSchedulePage
- ParentAttendancePage
- ParentPaymentsPage
- ParentNoticesPage
- useAuth 훅

**검증 방법**:
- [ ] 목업 계정으로 로그인 가능
- [ ] 미로그인 시 리다이렉트
- [ ] 대시보드 홈 통계 표시
- [ ] 수강 정보 조회
- [ ] 일정 표시
- [ ] 출석 현황 조회
- [ ] 결제 내역 조회
- [ ] 공지사항 조회
- [ ] 로그아웃 동작

---

#### PR #10: 어드민 대시보드

**범위**:
- AdminLoginPage
- AdminDashboardPage (통계)
- AdminStudentsPage (CRUD)
- AdminProgramsPage (CRUD)
- AdminAttendancePage (출석 체크)
- AdminPaymentsPage (결제/환불)
- AdminNoticesPage (CRUD)
- AdminGalleryPage (관리)
- StudentForm
- StudentTable

**검증 방법**:
- [ ] 목업 계정으로 로그인 가능
- [ ] 대시보드 통계 표시
- [ ] 학생 목록 조회/추가/수정/삭제
- [ ] 프로그램/반 관리
- [ ] 출석 체크 동작
- [ ] 결제 상태 변경
- [ ] 환불 처리 UI
- [ ] 공지사항 CRUD
- [ ] 갤러리 관리 UI
- [ ] 로그아웃 동작

---

## 미확인 사항 (PDF 확인 필요)

다음 항목은 PDF에서 확인이 필요합니다:

1. **프로그램 상세 정보**
   - 기초/보컬/연주 각 프로그램의 정확한 명칭
   - 대상 학년 (초등 1-6학년 전체? 프로그램별 다름?)
   - 커리큘럼 상세 내용
   - 수강료

2. **시간대/반 구성**
   - 프로그램별 운영 요일/시간
   - 반 정원
   - 반 명칭 규칙

3. **수강 신청 폼 필드**
   - 필수/선택 필드 정확한 목록
   - 동의 항목 상세 내용
   - 학부모 관계 옵션 (부/모/조부모/기타?)

4. **브랜드 디자인**
   - 브랜드 컬러 (Primary, Secondary)
   - 로고
   - 폰트

5. **기타**
   - 후기 표시 형식 (별점? 텍스트만?)
   - 갤러리 카테고리 여부
   - 공지사항 분류 여부

---

## 관련 문서

- [README](../README.md) - 프로젝트 소개
- [시스템 개요](PROJECT_OVERVIEW.md) - 아키텍처 설명
- [개발 환경 설정](DEV_SETUP.md) - 로컬 개발 가이드
- [작업 목록](../TASKS.md) - 우선순위 작업
