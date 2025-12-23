import type { MockAccount, Parent, Admin } from '@/types'

export const MOCK_PARENT: Parent = {
  id: 'parent-1',
  email: 'parent@test.com',
  name: '김학부모',
  phone: '010-1234-5678',
  childrenIds: ['student-1', 'student-2'],
}

export const MOCK_ADMIN: Admin = {
  id: 'admin-1',
  email: 'admin@test.com',
  name: '관리자',
}

export const MOCK_ACCOUNTS: MockAccount[] = [
  {
    email: 'parent@test.com',
    password: '1234',
    type: 'parent',
    data: MOCK_PARENT,
  },
  {
    email: 'admin@test.com',
    password: 'admin',
    type: 'admin',
    data: MOCK_ADMIN,
  },
]
