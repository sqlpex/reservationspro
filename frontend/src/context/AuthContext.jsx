import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getToken, setToken, removeToken, decodeToken } from '../lib/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()
    if (token) {
      const decoded = decodeToken(token)
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setUser(decoded)
      } else {
        removeToken()
      }
    }
    setLoading(false)
  }, [])

  const login = useCallback((token) => {
    setToken(token)
    setUser(decodeToken(token))
  }, [])

  const logout = useCallback(() => {
    removeToken()
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isAuthenticated: Boolean(user),
      isOwner: user?.role === 'OWNER',
      isStaff: user?.role === 'STAFF' || user?.role === 'OWNER',
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext must be used inside AuthProvider')
  return ctx
}
