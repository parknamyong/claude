export interface Parent {
  id: string
  email: string
  name: string
  phone: string
  childrenIds: string[]
}

export interface Admin {
  id: string
  email: string
  name: string
}

export interface AuthState {
  isParentLoggedIn: boolean
  isAdminLoggedIn: boolean
  currentParent: Parent | null
  currentAdmin: Admin | null
}

export interface MockAccount {
  email: string
  password: string
  type: 'parent' | 'admin'
  data: Parent | Admin
}
