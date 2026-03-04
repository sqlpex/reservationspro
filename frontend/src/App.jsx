import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import HomePage           from './pages/HomePage'
import BookPage           from './pages/BookPage'
import BookConfirmPage    from './pages/BookConfirmPage'
import BookSuccessPage    from './pages/BookSuccessPage'
import ReservationPage    from './pages/ReservationPage'
import LoginPage          from './pages/LoginPage'

import DashboardPage         from './pages/admin/DashboardPage'
import ReservationsListPage  from './pages/admin/ReservationsListPage'
import ReservationNewPage    from './pages/admin/ReservationNewPage'
import ReservationDetailPage from './pages/admin/ReservationDetailPage'
import AnalyticsPage         from './pages/admin/AnalyticsPage'
import SettingsPage          from './pages/admin/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/"                  element={<HomePage />} />
      <Route path="/book"              element={<BookPage />} />
      <Route path="/book/confirm"      element={<BookConfirmPage />} />
      <Route path="/book/success"      element={<BookSuccessPage />} />
      <Route path="/reservations/:ref" element={<ReservationPage />} />
      <Route path="/login"             element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/admin"                        element={<DashboardPage />} />
        <Route path="/admin/reservations"           element={<ReservationsListPage />} />
        <Route path="/admin/reservations/new"       element={<ReservationNewPage />} />
        <Route path="/admin/reservations/:id"       element={<ReservationDetailPage />} />
        <Route path="/admin/analytics"              element={<AnalyticsPage />} />
        <Route path="/admin/settings"               element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
