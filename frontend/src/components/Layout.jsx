import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Layout({ children }) {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-brand-600">
            ReservationsPro
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">{user?.name}</span>
                <button onClick={handleLogout} className="btn-secondary">Log out</button>
              </>
            ) : (
              <Link to="/login" className="btn-primary">Staff Login</Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        ReservationsPro &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
