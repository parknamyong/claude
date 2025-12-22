import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '@/hooks/useAuth'
import { MOCK_ACCOUNTS } from '@/data'
import type { Parent, Admin } from '@/types'

// Layouts
import { PublicLayout, ParentLayout, AdminLayout } from '@/components/layout'

// Public Pages
import { HomePage } from '@/pages/public/HomePage'
import { AboutPage } from '@/pages/public/AboutPage'
import { ProgramsPage } from '@/pages/public/ProgramsPage'
import { ProgramDetailPage } from '@/pages/public/ProgramDetailPage'
import { EnrollmentPage } from '@/pages/public/EnrollmentPage'
import { ReviewsPage } from '@/pages/public/ReviewsPage'
import { NoticesPage } from '@/pages/public/NoticesPage'
import { NoticeDetailPage } from '@/pages/public/NoticeDetailPage'
import { GalleryPage } from '@/pages/public/GalleryPage'
import { LocationPage } from '@/pages/public/LocationPage'

// Parent Pages
import { ParentLoginPage } from '@/pages/parent/ParentLoginPage'
import { ParentDashboardPage } from '@/pages/parent/ParentDashboardPage'
import { ParentCoursesPage } from '@/pages/parent/ParentCoursesPage'
import { ParentSchedulePage } from '@/pages/parent/ParentSchedulePage'
import { ParentAttendancePage } from '@/pages/parent/ParentAttendancePage'
import { ParentPaymentsPage } from '@/pages/parent/ParentPaymentsPage'
import { ParentNoticesPage } from '@/pages/parent/ParentNoticesPage'

// Admin Pages
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminStudentsPage } from '@/pages/admin/AdminStudentsPage'
import { AdminProgramsPage } from '@/pages/admin/AdminProgramsPage'
import { AdminAttendancePage } from '@/pages/admin/AdminAttendancePage'
import { AdminPaymentsPage } from '@/pages/admin/AdminPaymentsPage'
import { AdminNoticesPage } from '@/pages/admin/AdminNoticesPage'
import { AdminGalleryPage } from '@/pages/admin/AdminGalleryPage'

export function App() {
  const [isParentLoggedIn, setIsParentLoggedIn] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [currentParent, setCurrentParent] = useState<Parent | null>(null)
  const [currentAdmin, setCurrentAdmin] = useState<Admin | null>(null)

  const authContextValue = useMemo(
    () => ({
      isParentLoggedIn,
      isAdminLoggedIn,
      currentParent,
      currentAdmin,
      loginParent: (email: string, password: string): boolean => {
        const account = MOCK_ACCOUNTS.find(
          (acc) => acc.email === email && acc.password === password && acc.type === 'parent'
        )
        if (account) {
          setIsParentLoggedIn(true)
          setCurrentParent(account.data as Parent)
          return true
        }
        return false
      },
      loginAdmin: (email: string, password: string): boolean => {
        const account = MOCK_ACCOUNTS.find(
          (acc) => acc.email === email && acc.password === password && acc.type === 'admin'
        )
        if (account) {
          setIsAdminLoggedIn(true)
          setCurrentAdmin(account.data as Admin)
          return true
        }
        return false
      },
      logoutParent: () => {
        setIsParentLoggedIn(false)
        setCurrentParent(null)
      },
      logoutAdmin: () => {
        setIsAdminLoggedIn(false)
        setCurrentAdmin(null)
      },
    }),
    [isParentLoggedIn, isAdminLoggedIn, currentParent, currentAdmin]
  )

  return (
    <AuthContext.Provider value={authContextValue}>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          }
        />
        <Route
          path="/programs"
          element={
            <PublicLayout>
              <ProgramsPage />
            </PublicLayout>
          }
        />
        <Route
          path="/programs/:id"
          element={
            <PublicLayout>
              <ProgramDetailPage />
            </PublicLayout>
          }
        />
        <Route
          path="/enrollment"
          element={
            <PublicLayout>
              <EnrollmentPage />
            </PublicLayout>
          }
        />
        <Route
          path="/reviews"
          element={
            <PublicLayout>
              <ReviewsPage />
            </PublicLayout>
          }
        />
        <Route
          path="/notices"
          element={
            <PublicLayout>
              <NoticesPage />
            </PublicLayout>
          }
        />
        <Route
          path="/notices/:id"
          element={
            <PublicLayout>
              <NoticeDetailPage />
            </PublicLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <PublicLayout>
              <GalleryPage />
            </PublicLayout>
          }
        />
        <Route
          path="/location"
          element={
            <PublicLayout>
              <LocationPage />
            </PublicLayout>
          }
        />

        {/* Parent Login */}
        <Route
          path="/parent/login"
          element={
            <PublicLayout>
              <ParentLoginPage />
            </PublicLayout>
          }
        />

        {/* Parent Dashboard Routes */}
        <Route
          path="/parent"
          element={
            <ParentLayout>
              <ParentDashboardPage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent/courses"
          element={
            <ParentLayout>
              <ParentCoursesPage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent/schedule"
          element={
            <ParentLayout>
              <ParentSchedulePage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent/attendance"
          element={
            <ParentLayout>
              <ParentAttendancePage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent/payments"
          element={
            <ParentLayout>
              <ParentPaymentsPage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent/notices"
          element={
            <ParentLayout>
              <ParentNoticesPage />
            </ParentLayout>
          }
        />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={
            <PublicLayout>
              <AdminLoginPage />
            </PublicLayout>
          }
        />

        {/* Admin Dashboard Routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboardPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/students"
          element={
            <AdminLayout>
              <AdminStudentsPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/programs"
          element={
            <AdminLayout>
              <AdminProgramsPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/attendance"
          element={
            <AdminLayout>
              <AdminAttendancePage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/payments"
          element={
            <AdminLayout>
              <AdminPaymentsPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/notices"
          element={
            <AdminLayout>
              <AdminNoticesPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <AdminLayout>
              <AdminGalleryPage />
            </AdminLayout>
          }
        />
      </Routes>
    </AuthContext.Provider>
  )
}
