import { useState, useEffect } from 'react'
import api from '../lib/api'

export function useReservations(params = {}) {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    api.get('/reservations', { params })
      .then((res) => { if (!cancelled) setReservations(res.data) })
      .catch((err) => { if (!cancelled) setError(err) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)])

  return { reservations, loading, error, setReservations }
}
