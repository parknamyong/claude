# 개발 환경 설정

## 사전 요구사항

> **주의**: 프로젝트 초기 단계로 기술 스택이 확정되지 않았습니다.
> 아래는 일반적인 개발 환경 요구사항이며, 실제 구현 시 업데이트됩니다.

### 필수 도구 (예상)

| 도구 | 버전 | 확인 명령어 |
|------|------|-------------|
| Node.js | 18.x 이상 (미정) | `node -v` |
| npm/yarn/pnpm | 최신 (미정) | `npm -v` / `yarn -v` / `pnpm -v` |
| Git | 2.x 이상 | `git --version` |
| Docker | 20.x 이상 (선택) | `docker --version` |

---

## 환경 설정

### 1. 저장소 클론

```bash
git clone <repository-url>
cd claude
```

### 2. 의존성 설치

> **확인 필요**: 패키지 매니저 및 설정 파일이 추가되면 아래를 업데이트합니다.

```bash
# 프로젝트 루트에 아래 파일이 있는지 확인:
# - package.json → npm/yarn/pnpm 사용
# - requirements.txt → Python pip 사용
# - go.mod → Go modules 사용

# 파일에 따라 실행:
npm install          # package.json 있을 때
pip install -r requirements.txt  # requirements.txt 있을 때
go mod download      # go.mod 있을 때
```

### 3. 환경 변수 설정

```bash
# 환경 변수 템플릿 복사 (.env.example이 있을 경우)
cp .env.example .env

# .env 파일 편집
# 아래 변수들이 필요할 수 있음 (예상):
# DATABASE_URL=...
# JWT_SECRET=...
# API_KEY=...
```

> **확인 방법**: `.env.example` 파일이 없다면 팀에 문의하거나 README 확인

---

## 실행 방법

### 개발 서버 실행

> **확인 필요**: `package.json`의 `scripts` 섹션을 확인하세요.

```bash
# 일반적인 명령어 (프로젝트에 따라 다름)
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

**스크립트 확인 방법**:
```bash
# package.json이 있다면
cat package.json | grep -A 20 '"scripts"'
```

### 프로덕션 빌드

```bash
# 일반적인 명령어 (프로젝트에 따라 다름)
npm run build
npm start
```

---

## 테스트

### 테스트 실행

> **확인 필요**: 테스트 프레임워크가 설정되면 업데이트됩니다.

```bash
# 일반적인 명령어 (프로젝트에 따라 다름)
npm test
# 또는
npm run test:unit      # 단위 테스트
npm run test:e2e       # E2E 테스트
npm run test:coverage  # 커버리지 리포트
```

**테스트 스크립트 확인 방법**:
```bash
cat package.json | grep -E '"test'
```

---

## 린트 & 포맷팅

### 코드 스타일 검사

```bash
# ESLint (JavaScript/TypeScript)
npm run lint

# Prettier 포맷팅
npm run format
```

### 설정 파일 확인

프로젝트 루트에 아래 파일이 있는지 확인:
- `.eslintrc.js` 또는 `.eslintrc.json` - ESLint 설정
- `.prettierrc` - Prettier 설정
- `tsconfig.json` - TypeScript 설정

---

## 데이터베이스

### 로컬 DB 설정

> **확인 필요**: 데이터베이스 종류가 확정되면 업데이트됩니다.

**Docker 사용 시 (예시)**:
```bash
# PostgreSQL
docker run -d \
  --name claude-db \
  -e POSTGRES_USER=dev \
  -e POSTGRES_PASSWORD=dev \
  -e POSTGRES_DB=claude \
  -p 5432:5432 \
  postgres:15

# MySQL
docker run -d \
  --name claude-db \
  -e MYSQL_ROOT_PASSWORD=dev \
  -e MYSQL_DATABASE=claude \
  -p 3306:3306 \
  mysql:8
```

### 마이그레이션

```bash
# 일반적인 명령어 (ORM에 따라 다름)
npm run migrate        # 마이그레이션 실행
npm run migrate:reset  # DB 초기화
npm run seed           # 시드 데이터 추가
```

---

## 트러블슈팅

### 자주 발생하는 문제

#### 1. 의존성 설치 실패

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

#### 2. 포트 충돌

```bash
# 사용 중인 포트 확인
lsof -i :3000

# 프로세스 종료
kill -9 <PID>
```

#### 3. 환경 변수 누락

```bash
# 필요한 환경 변수 확인
# .env.example 파일 참조 또는 팀에 문의
```

---

## 유용한 명령어

```bash
# Git 브랜치 정리
git fetch --prune

# 캐시 초기화
npm cache clean --force

# TypeScript 타입 체크
npx tsc --noEmit

# 의존성 업데이트 확인
npm outdated
```

---

## 관련 문서

- [README](../README.md) - 프로젝트 소개
- [시스템 개요](PROJECT_OVERVIEW.md) - 아키텍처 설명
- [작업 목록](../TASKS.md) - 우선순위 작업
