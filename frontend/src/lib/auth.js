const TOKEN_KEY = 'rspro_token'

export const getToken    = () => localStorage.getItem(TOKEN_KEY)
export const setToken    = (t) => localStorage.setItem(TOKEN_KEY, t)
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)

export function decodeToken(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch {
    return null
  }
}
