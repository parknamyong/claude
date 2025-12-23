import { createContext, useContext } from 'react'
import type { Parent, Admin } from '@/types'

interface AuthContextType {
  isParentLoggedIn: boolean
  isAdminLoggedIn: boolean
  currentParent: Parent | null
  currentAdmin: Admin | null
  loginParent: (email: string, password: string) => boolean
  loginAdmin: (email: string, password: string) => boolean
  logoutParent: () => void
  logoutAdmin: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
