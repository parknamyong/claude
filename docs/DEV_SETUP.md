# 개발 환경 설정

## 사전 요구사항

| 도구 | 버전 | 확인 명령어 |
|------|------|-------------|
| Node.js | 18.x 이상 | `node -v` |
| npm | 9.x 이상 | `npm -v` |
| Git | 2.x 이상 | `git --version` |

---

## 프로젝트 설정

### 1. 저장소 클론

```bash
git clone <repository-url>
cd claude
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

---

## 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | ESLint 검사 |
| `npm run format` | Prettier 포맷팅 |

---

## 폴더 구조

```
claude/
├── README.md              # 프로젝트 소개
├── TASKS.md               # 우선순위 작업 목록
├── docs/                  # 프로젝트 문서
│   ├── PROJECT_OVERVIEW.md
│   └── DEV_SETUP.md
├── public/                # 정적 파일
├── src/
│   ├── components/        # 재사용 컴포넌트
│   │   ├── common/        # 공통 컴포넌트 (Button, Input 등)
│   │   ├── layout/        # 레이아웃 (Header, Footer)
│   │   └── ...
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── Home/
│   │   ├── Programs/
│   │   ├── Enrollment/
│   │   ├── ParentDashboard/
│   │   └── AdminDashboard/
│   ├── hooks/             # 커스텀 훅
│   ├── types/             # TypeScript 타입 정의
│   ├── constants/         # 상수 및 목업 데이터
│   ├── styles/            # 전역 스타일
│   ├── App.tsx            # 앱 진입점
│   └── main.tsx           # React 렌더링
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

---

## 기술 제약 (반드시 준수)

### 허용

- React 단일 애플리케이션
- React useState
- React Router (클라이언트 사이드 라우팅)
- CSS/SCSS
- TypeScript

### 금지

- 서버/백엔드 구현
- 데이터베이스
- API 구현
- localStorage / sessionStorage
- 실제 결제 연동

---

## 상태 관리 규칙

### useState만 사용

```tsx
// ✅ 올바른 사용
const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);

// ❌ 금지
localStorage.setItem('students', JSON.stringify(students));
```

### 페이지 새로고침 시 초기화

- 모든 상태는 새로고침 시 초기값으로 리셋됨
- 목업 데이터는 `src/constants/`에 정의

---

## 목업 데이터 사용

### 데이터 정의

```typescript
// src/constants/programs.ts
export const MOCK_PROGRAMS: Program[] = [
  {
    id: '1',
    name: '기초 음악',
    description: '...',
    capacity: 10,
    enrolled: 8,
  },
  // ...
];
```

### 컴포넌트에서 사용

```tsx
import { MOCK_PROGRAMS } from '@/constants/programs';

function ProgramList() {
  const [programs, setPrograms] = useState(MOCK_PROGRAMS);
  // ...
}
```

---

## 코드 스타일

### ESLint + Prettier

```bash
# 린트 검사
npm run lint

# 자동 포맷팅
npm run format
```

### 파일 네이밍

| 유형 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `StudentCard.tsx` |
| 훅 | camelCase (use 접두사) | `useAuth.ts` |
| 상수 | camelCase 파일, UPPER_CASE 변수 | `programs.ts` |
| 타입 | PascalCase | `Student.ts` |

---

## 트러블슈팅

### 의존성 설치 실패

```bash
rm -rf node_modules package-lock.json
npm install
```

### 포트 충돌

```bash
# 사용 중인 포트 확인
lsof -i :5173

# 프로세스 종료
kill -9 <PID>
```

### TypeScript 에러

```bash
# 타입 체크
npx tsc --noEmit
```

---

## 관련 문서

- [README](../README.md) - 프로젝트 소개
- [시스템 개요](PROJECT_OVERVIEW.md) - 아키텍처 설명
- [작업 목록](../TASKS.md) - 우선순위 작업
