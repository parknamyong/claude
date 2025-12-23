# 아키텍처 결정 문서 (Architecture Decision Records)

## 개요

이 문서는 AI 음악교실 프로젝트의 핵심 아키텍처 결정과 그 배경을 설명합니다.
모든 결정은 [BRIEF_SOURCE_OF_TRUTH.md](./BRIEF_SOURCE_OF_TRUTH.md)의 기술 제약을 따릅니다.

---

## ADR-001: Storage 금지 정책

### 결정

`localStorage`, `sessionStorage`, IndexedDB, 쿠키 등 모든 형태의 persistent storage 사용을 금지합니다.

### 배경

이 프로젝트는 **프로토타입**입니다. 목적은:

1. **UI/UX 검증**: 실제 서비스 전 화면 흐름과 사용성 테스트
2. **빠른 반복**: storage 없이 새로고침하면 초기 상태로 돌아가 테스트 용이
3. **보안 단순화**: 민감한 데이터가 클라이언트에 저장되지 않음
4. **실제 서비스와 분리**: 프로토타입 데이터가 실제 서비스에 영향 없음

### 결과

- 페이지 새로고침 시 모든 상태 초기화
- 로그인 상태도 새로고침 시 초기화
- Mock 데이터로 모든 시나리오 시뮬레이션

---

## ADR-002: useState-only 상태 관리

### 결정

상태 관리는 오직 `React.useState`만 사용합니다.
`useReducer`, Redux, Zustand, Recoil 등 외부 상태 관리 라이브러리를 사용하지 않습니다.

### 배경

1. **단순성**: 프로토타입에 복잡한 상태 관리는 과도한 엔지니어링
2. **학습 곡선 최소화**: useState는 React 기본 기능으로 누구나 이해 가능
3. **디버깅 용이**: 상태 흐름이 명확하고 추적 쉬움
4. **의존성 최소화**: 외부 라이브러리 없이 React만으로 구현

### Context 사용에 대한 명확화

`React.createContext`와 `useContext`는 **허용**됩니다.

**이유**: Context는 상태 관리 도구가 아닌 **상태 전달 도구**입니다.

```
┌─────────────────────────────────────────────────────────┐
│  App.tsx (최상위)                                        │
│  ┌─────────────────────────────────────────────────────┐│
│  │  const [state, setState] = useState(...)  ← 상태 저장││
│  └─────────────────────────────────────────────────────┘│
│                          │                               │
│                          ▼                               │
│  ┌─────────────────────────────────────────────────────┐│
│  │  <Context.Provider value={state}>  ← 상태 전달      ││
│  │       │                                             ││
│  │       ▼                                             ││
│  │    <ChildComponent />  ← useContext로 접근          ││
│  │                                                     ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

실제 상태는 `useState`에 저장되고, Context는 prop drilling 없이 전달만 합니다.

---

## ADR-003: 상태 설계 원칙

### 최상위 상태 위치

모든 전역 상태는 `App.tsx`에 위치합니다.

```tsx
// App.tsx
function App() {
  // 인증 상태
  const [isParentLoggedIn, setIsParentLoggedIn] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [currentParent, setCurrentParent] = useState<Parent | null>(null)
  const [currentAdmin, setCurrentAdmin] = useState<Admin | null>(null)

  // 향후 추가될 상태 (예시)
  // const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  // const [classSlots, setClassSlots] = useState<ClassSlot[]>(MOCK_CLASS_SLOTS)
}
```

### 데이터 흐름

```
┌─────────────────────────────────────────────────────────┐
│                      App.tsx                             │
│  ┌───────────────────────────────────────────────────┐  │
│  │              useState (전역 상태)                   │  │
│  │  - 인증 상태                                       │  │
│  │  - 수강 신청 목록                                  │  │
│  │  - 반 정원/상태                                    │  │
│  └───────────────────────────────────────────────────┘  │
│                          │                               │
│           Context.Provider (전달)                        │
│                          │                               │
│     ┌────────────────────┼────────────────────┐         │
│     ▼                    ▼                    ▼         │
│  PublicLayout       ParentLayout         AdminLayout    │
│     │                    │                    │         │
│     ▼                    ▼                    ▼         │
│  HomePage           Dashboard             Dashboard     │
│  EnrollmentPage     CoursesPage          StudentsPage   │
│  ...                ...                   ...           │
└─────────────────────────────────────────────────────────┘
```

### 상태 분류

| 분류 | 위치 | 예시 |
|------|------|------|
| **전역 상태** | App.tsx | 인증, 수강 신청 목록, 반 정원 |
| **페이지 로컬 상태** | 각 페이지 컴포넌트 | 폼 입력값, 모달 열림 상태 |
| **컴포넌트 로컬 상태** | 각 컴포넌트 | 호버 상태, 드롭다운 열림 |

### 상태 변경 패턴

```tsx
// 상태 변경 함수는 App.tsx에서 정의하고 Context로 전달
const authContextValue = useMemo(() => ({
  isParentLoggedIn,
  currentParent,
  loginParent: (email: string, password: string) => {
    // 인증 로직
    setIsParentLoggedIn(true)
    setCurrentParent(foundParent)
  },
  logoutParent: () => {
    setIsParentLoggedIn(false)
    setCurrentParent(null)
  }
}), [isParentLoggedIn, currentParent])
```

---

## ADR-004: Mock 데이터 전략

### 결정

모든 데이터는 TypeScript 파일에 하드코딩된 Mock 데이터를 사용합니다.

### 파일 구조

```
src/data/
├── programs.ts      # 프로그램, 반 정보
├── students.ts      # 학생 목록
├── notices.ts       # 공지사항
├── reviews.ts       # 후기
├── gallery.ts       # 갤러리 이미지
└── mockAccounts.ts  # 테스트 계정
```

### 동적 데이터 시뮬레이션

수강 신청처럼 런타임에 변경되는 데이터는 useState로 관리:

```tsx
// App.tsx
const [enrollments, setEnrollments] = useState<Enrollment[]>([])

// 수강 신청 시
const handleEnrollment = (newEnrollment: Enrollment) => {
  setEnrollments(prev => [...prev, newEnrollment])
}
```

---

## ADR-005: UI 시뮬레이션 원칙

### 결정

결제, 문자 발송, 이메일 발송, 파일 다운로드 등은 모두 UI로만 시뮬레이션합니다.

### 시뮬레이션 방식

| 기능 | 시뮬레이션 방식 |
|------|----------------|
| 결제 | 결제 UI 표시 → "결제 완료" 상태 변경 |
| 문자 발송 | "문자 발송" 버튼 → 토스트 알림 표시 |
| 이메일 발송 | "이메일 발송" 버튼 → 토스트 알림 표시 |
| 영수증 다운로드 | 버튼 클릭 → "다운로드 시작" 토스트 |
| 엑셀 다운로드 | 버튼 클릭 → "다운로드 시작" 토스트 |

### 예시 코드

```tsx
const handlePayment = () => {
  // 실제 결제 API 호출 X
  // UI 상태만 변경
  setPaymentStatus('completed')
  showToast('결제가 완료되었습니다.')
}
```

---

## 요약

| 원칙 | 설명 |
|------|------|
| Storage 금지 | localStorage, sessionStorage 등 사용 금지 |
| useState-only | 상태 저장은 useState만 사용 |
| Context 허용 | 상태 전달용 Context는 허용 |
| 최상위 상태 | 전역 상태는 App.tsx에 위치 |
| Mock 데이터 | 모든 데이터는 TypeScript 파일에 하드코딩 |
| UI 시뮬레이션 | 외부 연동은 UI로만 시뮬레이션 |
