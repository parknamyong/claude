# Claude

Claude 프로젝트 - AI 기반 서비스 플랫폼

## 프로젝트 소개

사용자와 관리자를 위한 AI 서비스 플랫폼입니다. 사용자 인증, 결제 시스템, 관리자 대시보드를 포함합니다.

## 로컬 실행 방법

> **주의**: 프로젝트 초기 단계로 기술 스택이 확정되지 않았습니다.
> 아래는 예상 실행 방법이며, 실제 구현 시 업데이트됩니다.

```bash
# 저장소 클론
git clone <repository-url>
cd claude

# 의존성 설치 (패키지 매니저 확정 후 업데이트)
# npm install / yarn install / pnpm install

# 환경 변수 설정
cp .env.example .env

# 개발 서버 실행
# npm run dev / yarn dev / pnpm dev
```

## 폴더 구조

```
claude/
├── README.md           # 프로젝트 소개
├── TASKS.md            # 우선순위 작업 목록
├── docs/               # 프로젝트 문서
│   ├── PROJECT_OVERVIEW.md  # 시스템 개요
│   └── DEV_SETUP.md         # 개발 환경 설정
├── src/                # 소스 코드 (예정)
├── tests/              # 테스트 코드 (예정)
└── .env.example        # 환경 변수 템플릿 (예정)
```

## 개발 규칙

### 커밋 컨벤션

```
<type>(<scope>): <subject>

예시:
feat(auth): 로그인 기능 구현
fix(payment): 결제 오류 수정
docs(readme): 설치 가이드 추가
refactor(user): 사용자 서비스 리팩토링
test(api): API 테스트 추가
```

**Type 종류**:
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드, 설정 변경

### 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 프로덕션 배포 브랜치 |
| `develop` | 개발 통합 브랜치 |
| `feature/*` | 기능 개발 |
| `fix/*` | 버그 수정 |
| `hotfix/*` | 긴급 수정 |

### PR 규칙

1. **PR 제목**: 커밋 컨벤션과 동일한 형식 사용
2. **리뷰어**: 최소 1명의 리뷰 승인 필요
3. **테스트**: 모든 테스트 통과 필수
4. **설명**: 변경 사항과 테스트 방법 명시

```markdown
## 변경 사항
- 구현 내용 설명

## 테스트 방법
- 테스트 절차 설명

## 체크리스트
- [ ] 테스트 추가/수정
- [ ] 문서 업데이트
- [ ] 코드 리뷰 요청
```

## 문서

- [시스템 개요](docs/PROJECT_OVERVIEW.md)
- [개발 환경 설정](docs/DEV_SETUP.md)
- [작업 목록](TASKS.md)
